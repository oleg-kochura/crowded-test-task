import type { PropsWithChildren } from 'react';

import { AppHeader } from '../AppHeader';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="max-w-screen-2xl mx-auto px-6 pt-8 pb-6">{children}</main>
    </div>
  );
};
