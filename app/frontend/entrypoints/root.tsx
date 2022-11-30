import ReactDOM from 'react-dom/client';
import { UserInfo, GreetToUser } from '@/features/users';
import { AppProvider } from '@/providers';

const element = document.getElementById('root');

if (!element) throw Error('Not found element id = "root"');

ReactDOM.createRoot(element).render(
  <AppProvider>
    <GreetToUser />
    <UserInfo />
  </AppProvider>
);
