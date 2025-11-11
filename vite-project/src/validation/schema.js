import { z } from "zod"

const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]$/
const phoneRegex = /^(\+92|0)?[0-9]{10}$/

export const registrationSchema = z.object({
  country: z.string().min(1, "Country required"),
  classPreference: z.enum(["Online", "Onsite"], {
    errorMap: () => ({ message: "Select class preference" })
  }),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Select gender" })
  }),
  city: z.string().min(1, "City required"),
  course: z.string().min(1, "Course required"),

  fullName: z.string().min(3, "Full name (min 3 chars)").max(100),
  fatherName: z.string().min(3, "Father name (min 3 chars)").max(100),

  email: z.string().email("Valid email required"),
  phone: z.string().regex(phoneRegex, "Valid phone (e.g., 03XXXXXXXXX)"),
  cnic: z.string().regex(cnicRegex, "Format XXXXX-XXXXXXX-X"),
  fatherCnic: z
    .string()
    .optional()
    .refine((v) => !v || cnicRegex.test(v), {
      message: "Format XXXXX-XXXXXXX-X"
    }),

  dob: z.string().refine(
    (v) => {
      const d = new Date(v)
      return v && !Number.isNaN(d.valueOf()) && d < new Date()
    },
    "Valid past date required"
  ),

  proficiency: z.enum(["Beginner", "Intermediate", "Advanced"], {
    errorMap: () => ({ message: "Select proficiency" })
  }),
  hasLaptop: z.enum(["Yes", "No"], {
    errorMap: () => ({ message: "Select laptop availability" })
  }),

  // ✨ Qualification ko string se enum ya min validation
  qualification: z.string().min(1, "Qualification required"),

  address: z.string().min(5, "Address required").max(200),

  picture: z
    .any()
    .refine((fileList) => fileList && fileList.length === 1, "Picture is required")
    .refine((fileList) => {
      const file = fileList?.[0]
      return file && file.size < 1024 * 1024
    }, "File must be less than 1MB")
    .refine((fileList) => {
      const file = fileList?.[0]
      return file && ["image/jpeg", "image/jpg", "image/png"].includes(file.type)
    }, "Allowed types: jpg, jpeg, png"),

  declarations: z.object({
    d1: z.boolean().refine(Boolean, "Required"),
    d2: z.boolean().refine(Boolean, "Required"),
    d3: z.boolean().refine(Boolean, "Required"),
    d4: z.boolean().refine(Boolean, "Required"),
    d5: z.boolean().refine(Boolean, "Required"),
  }),

  captcha: z.literal(true, {
    errorMap: () => ({ message: "Please verify reCAPTCHA" })
  }),
})