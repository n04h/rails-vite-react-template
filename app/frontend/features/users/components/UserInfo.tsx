import { useUserQuery } from '../api/getUser';

export function UserInfo() {
  const userQuery = useUserQuery();

  if (userQuery.isLoading) return <p>読み込み中...</p>;
  if (userQuery.isError) return <p>エラーが発生しました</p>;

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
          <td>{userQuery.data.id}</td>
          <td>{userQuery.data.name}</td>
          <td>{userQuery.data.birthday}</td>
        </tr>
      </tbody>
    </table>
  );
}
