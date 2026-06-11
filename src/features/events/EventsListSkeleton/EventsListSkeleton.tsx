import { Skeleton, Card } from '@heroui/react';

const EventCardSkeleton = () => (
  <Card className="w-full">
    <Card.Content className="px-4 py-3 flex flex-col gap-2">
      <Skeleton className="h-4 w-1/3 rounded-md" />
      <Skeleton className="h-3 w-2/3 rounded-md" />
      <Skeleton className="h-3 w-1/2 rounded-md" />
    </Card.Content>
  </Card>
);

export const EventsListSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <EventCardSkeleton key={i} />
      ))}
    </div>
  );
};
