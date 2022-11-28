import { useQuery } from '@tanstack/react-query';
import type { User } from '../types';
import { axios } from '@/lib/axios';

const getUser = (): Promise<User> => axios.get<User>('/api/user').then((req) => req.data);

export function useUserQuery() {
  return useQuery({ queryKey: ['user'], queryFn: getUser });
}
