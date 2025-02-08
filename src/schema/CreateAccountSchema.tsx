import { z } from "zod";

const min_password_length = Number(
  import.meta.env.VITE_MINIMUM_PASSWORD_LENGTH
);
const contact_number_length = Number(
  import.meta.env.VITE_CONTACT_NUMBER_LENGTH
);

export const UserCreate_First_Part_Schema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  middle_name: z.string().optional(),
  last_name: z.string().min(1, { message: "Last name is required" }),
  suffix: z
    .string()
    .refine((suffix) => {
      return ["", "Jr.", "Sr.", "II", "III", "IV", "V"].includes(suffix);
    })
    .or(z.literal(""))
    .optional(),
  gender: z.enum(["male", "female", "prefer not to say"], {
    message: "Invalid gender.",
  }),
  address: z.string().min(1, { message: "Address is required" }),
  contact_number: z
    .string()
    .length(contact_number_length, {
      message: "Contact number must be 11 digits",
    })
    .refine((p) => /^\d+$/.test(p), {
      message: "Contact number must only contain digits",
    }),
  birthdate: z
    .string({ message: "Birthdate is required." })
    .min(1, { message: "Birthdate is required." }),
});

export const UserCreate_Second_Part_Schema = z
  .object({
    email: z.string().email({ message: "Invalid email." }),
    password: z.string().min(min_password_length, {
      message: `Password must be at least ${min_password_length} characters.`,
    }),
    confirm_password: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirm_password) {
      ctx.addIssue({
        path: ["confirm_password"],
        message: "Passwords do not match.",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type UserCreate_First_Part = z.infer<
  typeof UserCreate_First_Part_Schema
>;
export type UserCreate_Second_Part = z.infer<
  typeof UserCreate_Second_Part_Schema
>;
