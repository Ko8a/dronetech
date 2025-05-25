
import React, { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from '../hooks/useTranslation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

interface RegistrationRecord {
  id: string;
  team_name: string;
  institution: string;
  country: string;
  city: string;
  competition_type: string;
  mentor_name: string;
  mentor_phone: string;
  mentor_email: string;
  participants: any[];
  created_at: string;
}

const Registrations = () => {
  const { t } = useTranslation();
  const [registrations, setRegistrations] = useState<RegistrationRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('registration_records')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching registrations:', error);
      } else {
        // Type assertion to handle the Json type from Supabase
        const typedData = data?.map(record => ({
          ...record,
          participants: Array.isArray(record.participants) ? record.participants : []
        })) || [];
        setRegistrations(typedData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRegistrationsByType = (competitionType: string) => {
    return registrations.filter(reg => reg.competition_type === competitionType);
  };

  const renderParticipantsTable = (registrations: RegistrationRecord[]) => {
    const allParticipants: { participantName: string; teamName: string; mentorName: string }[] = [];
    
    registrations.forEach(registration => {
      registration.participants.forEach((participant: any) => {
        allParticipants.push({
          participantName: participant.fullName || '',
          teamName: registration.team_name,
          mentorName: registration.mentor_name
        });
      });
    });

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('participantName')}</TableHead>
            <TableHead>{t('teamName')}</TableHead>
            <TableHead>{t('mentorName')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allParticipants.map((participant, index) => (
            <TableRow key={index}>
              <TableCell>{participant.participantName}</TableCell>
              <TableCell>{participant.teamName}</TableCell>
              <TableCell>{participant.mentorName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>{t('loading')}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const droneRace5inch = getRegistrationsByType('drone-race-5inch');
  const droneRaceMicro = getRegistrationsByType('drone-race-micro');
  const droneSimulator = getRegistrationsByType('drone-simulator');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section with black background stripe */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="container mx-auto px-6 py-12 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('listOfParticipants')}</h1>
        </div>
      </section>
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Drone Race 5inch Column */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
                {t('droneRace5inch')}
              </h2>
              <div className="text-center mb-4">
                <span className="text-lg font-medium">
                  {droneRace5inch.reduce((total, reg) => total + reg.participants.length, 0)} {t('participantsRegistered')}
                </span>
              </div>
              <Card>
                <CardContent className="p-6">
                  {droneRace5inch.length > 0 ? (
                    renderParticipantsTable(droneRace5inch)
                  ) : (
                    <p className="text-center text-gray-500">{t('noRegistrations')}</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Drone Race Micro Column */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
                {t('droneRaceMicro')}
              </h2>
              <div className="text-center mb-4">
                <span className="text-lg font-medium">
                  {droneRaceMicro.reduce((total, reg) => total + reg.participants.length, 0)} {t('participantsRegistered')}
                </span>
              </div>
              <Card>
                <CardContent className="p-6">
                  {droneRaceMicro.length > 0 ? (
                    renderParticipantsTable(droneRaceMicro)
                  ) : (
                    <p className="text-center text-gray-500">{t('noRegistrations')}</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Drone Simulator Column */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
                {t('droneSimulator')}
              </h2>
              <div className="text-center mb-4">
                <span className="text-lg font-medium">
                  {droneSimulator.reduce((total, reg) => total + reg.participants.length, 0)} {t('participantsRegistered')}
                </span>
              </div>
              <Card>
                <CardContent className="p-6">
                  {droneSimulator.length > 0 ? (
                    renderParticipantsTable(droneSimulator)
                  ) : (
                    <p className="text-center text-gray-500">{t('noRegistrations')}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Registrations;
