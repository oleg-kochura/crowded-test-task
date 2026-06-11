import { SearchX } from 'lucide-react';

import { EmptyStateHint } from '../EmptyStateHint';

type Props = {
  title?: string;
  description?: string;
};

export const NotFoundEmptyState = ({
  title = 'Nothing found',
  description = 'Try a different search query.',
}: Props) => (
  <EmptyStateHint icon={<SearchX size={28} />} title={title} description={description} />
);
