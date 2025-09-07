import { http, HttpResponse } from 'msw';

import type { IQueryBaseResponseResult } from 'shared/types';

const mock_users = [
  {
    email: 'bera@test.ru',
    password: '123456',
    first_name: 'Berador',
    last_name: 'Stambekov',
  },
  {
    email: 'john@test.ru',
    password: '123456',
    first_name: 'John',
    last_name: 'Smith',
  },
  {
    email: 'alice@test.ru',
    password: '123456',
    first_name: 'Alice',
    last_name: 'Johnson',
  },
  {
    email: 'michael@test.ru',
    password: '123456',
    first_name: 'Michael',
    last_name: 'Brown',
  },
  {
    email: 'emma@test.ru',
    password: '123456',
    first_name: 'Emma',
    last_name: 'Davis',
  },
  {
    email: 'david@test.ru',
    password: '123456',
    first_name: 'David',
    last_name: 'Wilson',
  },
];

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => void setTimeout(resolve, ms));
}

export const handlers = [
  http.post<
    never,
    { email: string; password: string },
    IQueryBaseResponseResult<{
      first_name: string;
      last_name: string;
      email: string;
    } | null>
  >('/api/auth', async ({ request }) => {
    const { password, email } = await request.clone().json();

    const emailFilteredUsers = mock_users.filter(
      (user) => user.email === email,
    );

    const user = emailFilteredUsers.find((user) => user.password === password);

    await sleep(2000);

    if (emailFilteredUsers.length === 0) {
      return HttpResponse.json(
        {
          data: null,
          status: 404,
          message: 'Не удалось авторизоваться. Введен неверный email',
        },
        { status: 404 },
      );
    }

    if (!user) {
      return HttpResponse.json(
        {
          data: null,
          status: 404,
          message: 'Не удалось авторизоваться. Введен неверный пароль',
        },
        { status: 404 },
      );
    }

    return HttpResponse.json({
      data: user,
      status: 200,
    });
  }),
];
