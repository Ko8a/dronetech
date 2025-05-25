
import React, { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from '../hooks/useTranslation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

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

  const renderRegistrationCard = (registration: RegistrationRecord) => (
    <Card key={registration.id} className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg">{registration.team_name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p><strong>{t('institution')}:</strong> {registration.institution}</p>
        <p><strong>{t('country')}:</strong> {registration.country}</p>
        <p><strong>{t('city')}:</strong> {registration.city}</p>
        <p><strong>{t('mentorFullName')}:</strong> {registration.mentor_name}</p>
        <p><strong>{t('participants')}:</strong> {registration.participants?.length || 0}</p>
        <div className="text-sm text-gray-600">
          {t('registeredOn')}: {new Date(registration.created_at).toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  );

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
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">{t('registrationsList')}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Drone Race 5inch Column */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
                {t('droneRace5inch')}
              </h2>
              <div className="text-center mb-4">
                <span className="text-lg font-medium">
                  {droneRace5inch.length} {t('teamsRegistered')}
                </span>
              </div>
              {droneRace5inch.length > 0 ? (
                droneRace5inch.map(renderRegistrationCard)
              ) : (
                <Card>
                  <CardContent className="text-center py-8">
                    <p className="text-gray-500">{t('noRegistrations')}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Drone Race Micro Column */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
                {t('droneRaceMicro')}
              </h2>
              <div className="text-center mb-4">
                <span className="text-lg font-medium">
                  {droneRaceMicro.length} {t('teamsRegistered')}
                </span>
              </div>
              {droneRaceMicro.length > 0 ? (
                droneRaceMicro.map(renderRegistrationCard)
              ) : (
                <Card>
                  <CardContent className="text-center py-8">
                    <p className="text-gray-500">{t('noRegistrations')}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Drone Simulator Column */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
                {t('droneSimulator')}
              </h2>
              <div className="text-center mb-4">
                <span className="text-lg font-medium">
                  {droneSimulator.length} {t('teamsRegistered')}
                </span>
              </div>
              {droneSimulator.length > 0 ? (
                droneSimulator.map(renderRegistrationCard)
              ) : (
                <Card>
                  <CardContent className="text-center py-8">
                    <p className="text-gray-500">{t('noRegistrations')}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Registrations;
