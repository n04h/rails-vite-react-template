import { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { AppProvider } from '@/providers';

export * from '@testing-library/react';
export const render = (ui: ReactElement) => rtlRender(ui, {
  wrapper: AppProvider,
});
