
import { z } from "zod";

// Define form schema
export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;
