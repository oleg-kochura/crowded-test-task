import type { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

import { handleError } from 'lib/errors';

export const SWRProvider = ({ children }: PropsWithChildren) => {
  return (
    <SWRConfig
      value={{ onError: (error, key) => handleError(error, { source: 'swr', key }) }}
    >
      {children}
    </SWRConfig>
  );
};
