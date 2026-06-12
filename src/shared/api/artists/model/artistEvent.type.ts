export type EventVenue = {
  name: string;
  latitude: string;
  longitude: string;
  city: string;
  region: string;
  country: string;
};

export type EventOffer = {
  type: string;
  url: string;
  status: string;
};

export type ArtistEvent = {
  id: string;
  artist_id: string;
  url: string;
  on_sale_datetime: string;
  datetime: string;
  description: string;
  venue: EventVenue;
  offers: EventOffer[];
  lineup: string[];
};
