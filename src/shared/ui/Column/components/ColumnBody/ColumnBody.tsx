import type { PropsWithChildren } from 'react';

export const ColumnBody = ({ children }: PropsWithChildren) => (
  <section className="flex flex-col gap-4">{children}</section>
);
