import { Skeleton, Card } from '@heroui/react';

export const ArtistCardSkeleton = () => {
  return (
    <div className="grid grid-cols-[13rem_1fr] gap-4">
      <Card>
        <Card.Content className="p-0 aspect-square">
          <Skeleton className="w-full h-full rounded-xl" />
        </Card.Content>
      </Card>

      <Card>
        <Card.Content className="flex flex-col justify-center gap-3 h-full py-6 px-6">
          <Skeleton className="h-7 w-3/4 rounded-md" />
          <Skeleton className="h-5 w-1/2 rounded-md" />
          <Skeleton className="h-4 w-2/3 rounded-md" />
        </Card.Content>
      </Card>
    </div>
  );
};
