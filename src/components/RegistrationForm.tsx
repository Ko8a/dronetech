import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Country list for dropdown
const countries = [
  "Kazakhstan",
  "Russia",
  "Kyrgyzstan",
  "Uzbekistan",
  "Tajikistan",
  "China",
  "Other"
];

// City list for each country
const citiesByCountry: Record<string, string[]> = {
  Kazakhstan: ["Astana", "Almaty", "Shymkent", "Aktobe", "Karaganda", "Other"],
  Russia: ["Moscow", "Saint Petersburg", "Novosibirsk", "Ekaterinburg", "Other"],
  Kyrgyzstan: ["Bishkek", "Osh", "Jalal-Abad", "Other"],
  Uzbekistan: ["Tashkent", "Samarkand", "Namangan", "Other"],
  Tajikistan: ["Dushanbe", "Khujand", "Kulob", "Other"],
  China: ["Beijing", "Shanghai", "Guangzhou", "Other"],
  Other: ["Other"]
};

// Competition types
const competitionTypes = [
  { 
    id: "drone-race-5inch", 
    label: "Drone Race 5inch", 
    mentors: 1, 
    competitors: 1 
  },
  { 
    id: "drone-race-micro", 
    label: "Drone Race Micro", 
    mentors: 1, 
    competitors: 1 
  },
  { 
    id: "drone-soccer", 
    label: "Drone Soccer", 
    mentors: 1, 
    competitors: 6, 
    minCompetitors: 5
  }
];

// Phone formatting helper function
const formatPhoneNumber = (value: string, country: string): string => {
  if (!value) return value;
  
  // Remove all non-digit characters
  const phoneNumber = value.replace(/[^\d]/g, '');
  
  // Format based on country
  if (country === "Kazakhstan") {
    // Format as +7-(XXX)-XXX-XX-XX
    if (phoneNumber.length <= 1) return phoneNumber;
    if (phoneNumber.length <= 4) return `+7-(${phoneNumber.slice(1)})`;
    if (phoneNumber.length <= 7) return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4)}`;
    if (phoneNumber.length <= 9) return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  } else if (country === "Russia") {
    // Format as +7-(XXX)-XXX-XX-XX
    if (phoneNumber.length <= 1) return phoneNumber;
    if (phoneNumber.length <= 4) return `+7-(${phoneNumber.slice(1)})`;
    if (phoneNumber.length <= 7) return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4)}`;
    if (phoneNumber.length <= 9) return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+7-(${phoneNumber.slice(1, 4)})-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  }
  
  // Default international format
  if (phoneNumber.length <= 3) return `+${phoneNumber}`;
  if (phoneNumber.length <= 6) return `+${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
  if (phoneNumber.length <= 9) return `+${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  return `+${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}-${phoneNumber.slice(9)}`;
};

// Define form schema
const formSchema = z.object({
  country: z.string().min(1, "Please select a country"),
  city: z.string().min(1, "Please select a city"),
  institution: z.string().min(2, "Institution name is required"),
  teamName: z.string().min(2, "Team name is required"),
  mentorFullName: z.string().min(2, "Mentor name is required"),
  mentorPhone: z.string()
    .min(10, "Phone number is too short")
    .regex(/^\+?[0-9\s()-]+$/, "Invalid phone number format"),
  mentorEmail: z.string().email("Invalid email format"),
  competitionType: z.string().min(1, "Please select a competition type"),
  participants: z.array(
    z.object({
      fullName: z.string().min(2, "Full name is required"),
      phone: z.string()
        .min(10, "Phone number is too short")
        .regex(/^\+?[0-9\s()-]+$/, "Invalid phone number format"),
      telegram: z.string().min(2, "Telegram handle is required")
    })
  )
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCompetitionType, setSelectedCompetitionType] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      city: "",
      institution: "",
      teamName: "",
      mentorFullName: "",
      mentorPhone: "",
      mentorEmail: "",
      competitionType: "",
      participants: [{ fullName: "", phone: "", telegram: "" }]
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "participants",
    control: form.control
  });

  // Handle country change
  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    form.setValue("country", value);
    form.setValue("city", "");
  };

  // Handle competition type change
  const handleCompetitionTypeChange = (value: string) => {
    setSelectedCompetitionType(value);
    form.setValue("competitionType", value);
    
    // Find the selected competition type
    const competition = competitionTypes.find(type => type.id === value);
    
    if (competition) {
      // Get the required number of competitors
      const requiredCompetitors = competition.competitors;
      const currentParticipants = [...fields];
      
      // If we need to add participants
      if (currentParticipants.length < requiredCompetitors) {
        // Add necessary number of empty participants
        const participantsToAdd = requiredCompetitors - currentParticipants.length;
        const newParticipants = Array(participantsToAdd).fill({ fullName: "", phone: "", telegram: "" });
        
        // Use form.setValue to update all participants at once instead of using append multiple times
        const updatedParticipants = [...currentParticipants, ...newParticipants];
        form.setValue("participants", updatedParticipants);
      } 
      // If we need to remove participants
      else if (currentParticipants.length > requiredCompetitors) {
        // For Drone Soccer, keep at least 5 but no more than 6
        const targetCount = value === "drone-soccer" ? 
          Math.min(Math.max(currentParticipants.length, 5), 6) : 
          requiredCompetitors;
        
        // Use setValue to update all participants at once
        const updatedParticipants = currentParticipants.slice(0, targetCount);
        form.setValue("participants", updatedParticipants);
      }
    }
  };

  // Format phone number as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value, selectedCountry);
    onChange(formattedValue);
  };

  async function onSubmit(data: FormValues) {
    // Check minimum required competitors for drone soccer
    if (data.competitionType === "drone-soccer") {
      const validParticipants = data.participants.filter(p => 
        p.fullName.trim() !== "" && p.phone.trim() !== "" && p.telegram.trim() !== ""
      );
      
      if (validParticipants.length < 5) {
        toast({
          title: "Validation Error",
          description: "Drone Soccer requires at least 5 competitors.",
          variant: "destructive"
        });
        return;
      }
    }

    try {
      // Here we would typically send the data to Google Sheets
      // For now, let's just log it and show a success message
      console.log("Form submitted:", data);
      
      toast({
        title: "Registration Submitted",
        description: "Thank you for registering! Your data has been recorded.",
      });
      
      // Log message about Google Sheets integration
      console.log("Note: Data would be sent to Google Sheets in a production environment");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your registration. Please try again.",
        variant: "destructive"
      });
    }
  }

  // Get the selected competition type details
  const selectedCompetition = competitionTypes.find(t => t.id === selectedCompetitionType);

  // This update ensures the fields array is synchronized with the form state
  React.useEffect(() => {
    if (selectedCompetitionType) {
      const competition = competitionTypes.find(type => type.id === selectedCompetitionType);
      if (competition) {
        // Force re-render of fields by refreshing the form
        form.setValue('participants', form.getValues('participants'));
      }
    }
  }, [selectedCompetitionType, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Country Selection */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select 
                  onValueChange={(value) => handleCountryChange(value)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City Selection */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <Select 
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={!selectedCountry}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {selectedCountry && 
                      citiesByCountry[selectedCountry]?.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Institution */}
          <FormField
            control={form.control}
            name="institution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institution</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your institution" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Team Name */}
          <FormField
            control={form.control}
            name="teamName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your team name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <h3 className="text-xl font-semibold border-b pb-2">Mentor Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mentor Full Name */}
          <FormField
            control={form.control}
            name="mentorFullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mentor Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter mentor's full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mentor Phone */}
          <FormField
            control={form.control}
            name="mentorPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mentor Phone</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={selectedCountry === "Kazakhstan" ? "+7-(7XX)-XXX-XX-XX" : "+X-(XXX)-XXX-XX-XX"} 
                    onChange={(e) => handlePhoneChange(e, field.onChange)}
                    value={field.value}
                    onBlur={field.onBlur}
                    name={field.name}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Mentor Email */}
        <FormField
          control={form.control}
          name="mentorEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mentor Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter mentor's email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Competition Type */}
        <FormField
          control={form.control}
          name="competitionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Competition Type</FormLabel>
              <Select 
                onValueChange={(value) => handleCompetitionTypeChange(value)}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select competition type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {competitionTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedCompetition && (
          <>
            <h3 className="text-xl font-semibold border-b pb-2">Participants Information</h3>
            
            {/* Here we're using the fields from useFieldArray which will reflect the current state */}
            {fields.map((field, index) => (
              <div key={field.id} className="space-y-6 p-4 border rounded-md">
                <h4 className="font-medium">Participant {index + 1}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Participant Full Name */}
                  <FormField
                    control={form.control}
                    name={`participants.${index}.fullName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter participant's full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Participant Phone */}
                  <FormField
                    control={form.control}
                    name={`participants.${index}.phone`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={selectedCountry === "Kazakhstan" ? "+7-(7XX)-XXX-XX-XX" : "+X-(XXX)-XXX-XX-XX"} 
                            onChange={(e) => handlePhoneChange(e, field.onChange)}
                            value={field.value}
                            onBlur={field.onBlur}
                            name={field.name}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Participant Telegram */}
                <FormField
                  control={form.control}
                  name={`participants.${index}.telegram`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telegram</FormLabel>
                      <FormControl>
                        <Input placeholder="@username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Remove participant button (only for Drone Soccer with more than minimum required) */}
                {selectedCompetition.id === "drone-soccer" && fields.length > 5 && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      // Safety check to prevent removing below minimum
                      if (fields.length > 5) {
                        remove(index);
                      }
                    }}
                    className="w-full mt-2"
                  >
                    Remove Participant
                  </Button>
                )}
              </div>
            ))}
            
            {/* Add participant button (only for Drone Soccer and less than max) */}
            {selectedCompetition.id === "drone-soccer" && fields.length < 6 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  // Safety check to prevent adding too many
                  if (fields.length < 6) {
                    append({ fullName: "", phone: "", telegram: "" });
                  }
                }}
              >
                Add Participant
              </Button>
            )}
          </>
        )}
        
        <Button type="submit" className="w-full">Submit Registration</Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
