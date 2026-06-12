import { Card, Chip } from '@heroui/react';

import type { EventOffer } from 'shared/api/artists';

type OfferVariant = 'primary' | 'secondary' | 'soft';

const getOfferVariant = (status: EventOffer['status']): OfferVariant => {
  if (status === 'available') return 'primary';
  if (status === 'unavailable') return 'secondary';

  return 'soft';
};

type Props = {
  offers: EventOffer[];
};

export const SpecialOffers = ({ offers }: Props) => {
  if (offers.length === 0) return null;

  return (
    <Card>
      <Card.Header>
        <p className="text-xs text-muted uppercase tracking-wide">Special offers</p>
      </Card.Header>
      <Card.Content className="flex flex-col gap-3">
        {offers.map((offer, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Chip variant={getOfferVariant(offer.status)} size="sm">
                {offer.status}
              </Chip>
              <span className="text-sm">{offer.type}</span>
            </div>
            <a
              href={offer.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent hover:underline"
            >
              Get tickets ↗
            </a>
          </div>
        ))}
      </Card.Content>
    </Card>
  );
};
