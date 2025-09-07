import { z } from 'zod';

import {
  INVALID_EMAIL_MESSAGE,
  MINIMAL_LENGTH_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
} from 'shared/const';

export const authorizationFormSchema = z.object({
  email: z.email(INVALID_EMAIL_MESSAGE),
  password: z
    .string()
    .min(1, REQUIRED_FIELD_MESSAGE)
    .min(6, MINIMAL_LENGTH_MESSAGE(6)),
});
