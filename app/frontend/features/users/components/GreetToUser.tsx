import { useUserQuery } from '../api/getUser';

export function GreetToUser() {
  const { data, isLoading, isError } = useUserQuery();

  if (isLoading) return <p>読み込み中...</p>;
  if (isError) return <p>エラーが発生しました</p>;

  return <p>Hey, {data.name}!</p>;
}
