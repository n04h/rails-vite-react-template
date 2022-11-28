import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Counter from '../src/Counter';

const element = document.getElementById('root');

if (!element) throw Error('Not found element id = "root"');

ReactDOM.createRoot(element).render(
  <StrictMode>
    <Counter />
  </StrictMode>
);
