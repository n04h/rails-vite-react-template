import { useUserQuery } from '../api/getUser';

export function GreetToUser() {
  const userQuery = useUserQuery();

  if (userQuery.isLoading) return <p>読み込み中...</p>;
  if (userQuery.isError) return <p>エラーが発生しました</p>;

  return <p>Hey, {userQuery.data.name}!</p>;
}
