import type { PropsWithChildren } from 'react';

export const ColumnHeader = ({ children }: PropsWithChildren) => (
  <div className="self-center flex justify-center">{children}</div>
);
