import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(2).max(80),

  // Visitor ka email
  email: z.string().trim().email(),

  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),

  subject: z.string().trim().min(2).max(150),

  inquiryType: z.enum([
    "Job Opportunity",
    "Freelance Project",
    "Website Development",
    "Collaboration",
    "Internship",
    "General Inquiry",
    "Other",
  ]),

  message: z.string().trim().min(10).max(5000),

  // Honeypot — spam protection
  website: z.string().optional(),
});

export type Inquiry = z.infer<typeof inquirySchema>;