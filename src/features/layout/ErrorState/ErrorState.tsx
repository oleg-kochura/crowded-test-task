import { Button } from '@heroui/react';
import { AlertTriangle } from 'lucide-react';

import { EmptyStateHint } from 'features/layout/EmptyStateHint';

type Props = {
  title?: string;
  description?: string;
  onRetry?: () => void;
};

export const ErrorState = ({
  title = 'Something went wrong',
  description = 'An unexpected error occurred while rendering this section.',
  onRetry,
}: Props) => (
  <div className="flex flex-col items-center gap-4">
    <EmptyStateHint icon={<AlertTriangle size={28} />} title={title} description={description} />
    {onRetry && (
      <Button size="sm" variant="ghost" onPress={onRetry}>
        Try again
      </Button>
    )}
  </div>
);
