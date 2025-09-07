import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post<never,
    { email: string; password: string }>('/api/auth', () => {
    return new HttpResponse(null, { status: 404 });
  }),
];
