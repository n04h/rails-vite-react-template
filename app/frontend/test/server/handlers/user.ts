import { rest } from 'msw';
import { User } from '@/features/users';

export const userHandlers = [
  rest.get(`/api/user`, (_req, res, ctx) => {
    const user: User = {
      id: 1,
      name: 'Alice',
      birthday: '2000-01-23',
    };
    return res(ctx.json(user));
  }),
];
