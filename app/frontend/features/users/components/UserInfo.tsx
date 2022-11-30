import { useUserQuery } from '../api/getUser';

export function UserInfo() {
  const { data, isLoading, isError } = useUserQuery();

  if (isLoading) return <p>読み込み中...</p>;
  if (isError) return <p>エラーが発生しました</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>誕生日</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.birthday}</td>
        </tr>
      </tbody>
    </table>
  );
}
