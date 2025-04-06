
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
      // Clear existing participants
      const currentParticipants = form.getValues("participants");
      
      // Remove all participants
      while (currentParticipants.length > 0) {
        remove(0);
      }
      
      // Add the correct number of participants
      for (let i = 0; i < competition.competitors; i++) {
        append({ fullName: "", phone: "", telegram: "" });
      }
    }
  };

  function onSubmit(data: FormValues) {
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

    // Process form submission
    toast({
      title: "Registration Submitted",
      description: "Thank you for registering! We will contact you soon."
    });
    
    console.log("Form submitted:", data);
  }

  // Get the selected competition type details
  const selectedCompetition = competitionTypes.find(t => t.id === selectedCompetitionType);

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
                    placeholder={selectedCountry === "Kazakhstan" ? "+7 (7XX) XXX-XX-XX" : "+X (XXX) XXX-XX-XX"} 
                    {...field} 
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
                      {type.label} - {type.mentors} mentor, {type.competitors} competitor{type.competitors > 1 ? 's' : ''}
                      {type.minCompetitors ? ` (min ${type.minCompetitors})` : ''}
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
                            placeholder={selectedCountry === "Kazakhstan" ? "+7 (7XX) XXX-XX-XX" : "+X (XXX) XXX-XX-XX"} 
                            {...field} 
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
                    onClick={() => remove(index)}
                    className="w-full mt-2"
                  >
                    Remove Participant
                  </Button>
                )}
              </div>
            ))}
            
            {/* Add participant button (only for Drone Soccer) */}
            {selectedCompetition.id === "drone-soccer" && fields.length < 6 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => append({ fullName: "", phone: "", telegram: "" })}
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
