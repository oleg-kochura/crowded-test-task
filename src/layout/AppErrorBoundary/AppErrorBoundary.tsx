import type { PropsWithChildren } from 'react';
import { Button } from '@heroui/react';
import { AlertTriangle } from 'lucide-react';
import { ErrorBoundary } from 'react-error-boundary';

import { handleError } from 'lib/errors';

const FatalFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-5 px-6 text-center">
    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-default-soft text-muted">
      <AlertTriangle size={32} />
    </span>
    <div className="flex flex-col gap-1">
      <p className="text-lg font-semibold text-foreground">Something went wrong</p>
      <p className="text-sm text-muted max-w-md">
        The application ran into an unexpected error. Please reload the page to continue.
      </p>
    </div>
    <Button variant="primary" onPress={() => window.location.reload()}>
      Reload page
    </Button>
  </div>
);

export const AppErrorBoundary = ({ children }: PropsWithChildren) => (
  <ErrorBoundary
    FallbackComponent={FatalFallback}
    onError={(error, info) =>
      handleError(error, { boundary: 'app', componentStack: info.componentStack })
    }
  >
    {children}
  </ErrorBoundary>
);
