import { render, screen, waitFor } from '@/test/test-utils';
import { GreetToUser } from '../GreetToUser';

describe('GreetToUser', () => {
  test('ユーザー名を含めた文章で挨拶がされる', async () => {
    render(<GreetToUser />);
    await waitFor(() => {
      expect(screen.getByText('Hey, Bob!')).toBeInTheDocument();
    });
  });
});
