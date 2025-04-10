import { z } from "zod";

// TODO: 폼 스키마 샘플
export const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});
