import type { PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

import { handleError } from 'lib/errors';
import { ErrorState } from 'shared/ui/ErrorState';

type Props = PropsWithChildren<{
  title?: string;
  description?: string;
  resetKeys?: unknown[];
}>;

const renderFallback =
  (title?: string, description?: string) =>
  ({ resetErrorBoundary }: FallbackProps) => (
    <ErrorState title={title} description={description} onRetry={resetErrorBoundary} />
  );

export const FeatureErrorBoundary = ({ children, title, description, resetKeys }: Props) => (
  <ErrorBoundary
    fallbackRender={renderFallback(title, description)}
    resetKeys={resetKeys}
    onError={(error, info) =>
      handleError(error, { boundary: 'feature', componentStack: info.componentStack })
    }
  >
    {children}
  </ErrorBoundary>
);
