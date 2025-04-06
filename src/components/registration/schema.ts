
import { z } from "zod";
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { getPhoneMaxLength } from './utils';

// Define form schema
export const formSchema = (selectedCountry: string) => z.object({
  country: z.string().min(1, "Please select a country"),
  city: z.string().min(1, "Please select a city"),
  institution: z.string().min(2, "Institution name is required"),
  teamName: z.string().min(2, "Team name is required"),
  mentorFullName: z.string().min(2, "Mentor name is required"),
  mentorPhone: z.string()
    .refine(value => value && isPossiblePhoneNumber(value), {
      message: "Please enter a valid phone number",
    })
    .refine(value => !value || value.length <= getPhoneMaxLength(selectedCountry), {
      message: `Phone number is too long for ${selectedCountry}`,
    }),
  mentorEmail: z.string().email("Invalid email format"),
  competitionType: z.string().min(1, "Please select a competition type"),
  participants: z.array(
    z.object({
      fullName: z.string().min(2, "Full name is required"),
      phone: z.string()
        .refine(value => value && isPossiblePhoneNumber(value), {
          message: "Please enter a valid phone number",
        })
        .refine(value => !value || value.length <= getPhoneMaxLength(selectedCountry), {
          message: `Phone number is too long for ${selectedCountry}`,
        }),
      telegram: z.string().min(2, "Telegram handle is required")
    })
  ).refine(participants => {
    // For drone soccer, we need at least 5 valid participants
    const validParticipants = participants.filter(p => 
      p.fullName.trim() !== "" && 
      p.phone.trim() !== "" && 
      p.telegram.trim() !== ""
    );
    
    return validParticipants.length >= 5 || participants.length !== 6;
  }, {
    message: "Drone Soccer requires at least 5 participants"
  })
});

export type FormValues = z.infer<ReturnType<typeof formSchema>>;
