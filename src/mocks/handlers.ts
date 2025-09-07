import { http, HttpResponse } from 'msw';

import type { IQueryBaseResponseResult } from 'shared/types';

export const handlers = [
  http.post<
    never,
    { email: string; password: string },
    IQueryBaseResponseResult<{
      first_name: string;
      last_name: string;
      email: string;
    }>
  >('/api/auth', () => {
    return HttpResponse.json({
      data: {
        email: 'beratest@test.ru',
        first_name: 'Berador',
        last_name: 'Stambekov',
      },
      status: 200,
    });
  }),
];
