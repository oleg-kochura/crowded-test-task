import type { PropsWithChildren } from 'react';

export const ColumnGrid = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-[4fr_4fr_4fr] gap-x-12 gap-y-4">{children}</div>
);
