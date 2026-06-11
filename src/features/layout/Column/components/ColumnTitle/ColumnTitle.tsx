import type { PropsWithChildren } from 'react';

export const ColumnTitle = ({ children }: PropsWithChildren) => (
  <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">{children}</h2>
);
