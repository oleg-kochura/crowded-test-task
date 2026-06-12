import { SearchField } from '@heroui/react';

import { debounce } from 'lib/utils';
import { useArtistEventsStore } from 'shared/store/artistEvents';

export const SearchBar = () => {
  const search = useArtistEventsStore((s) => s.search);

  const handleSearchDebounced = debounce((val: string) => search(val.trim()), 500);

  return (
    <SearchField onChange={handleSearchDebounced} aria-label="Search for an artist" fullWidth>
      <SearchField.Group className="h-12">
        <SearchField.SearchIcon />
        <SearchField.Input placeholder="Search for an artist..." className="text-base" />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
};
