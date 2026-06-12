import type { ReactNode } from 'react';
import { EmptyState } from '@heroui/react';

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const EmptyStateHint = ({ icon, title, description }: Props) => {
  return (
    <EmptyState className="py-10">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-default-soft text-muted">
          {icon}
        </span>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-foreground">{title}</p>
          <p className="text-sm text-muted max-w-xs">{description}</p>
        </div>
      </div>
    </EmptyState>
  );
};
