import { SWRConfig } from 'swr';

export const SWRProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <SWRConfig>{children}</SWRConfig>;
};
