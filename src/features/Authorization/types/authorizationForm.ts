import { z } from 'zod';

import type { authorizationFormSchema } from '../schemas/authorizationFormSchema';

export type TAuthorizationForm = z.infer<typeof authorizationFormSchema>;
