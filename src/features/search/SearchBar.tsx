import { SearchField } from '@heroui/react';
import { debounce } from 'lib/utils';

interface Props {
  onSearch: (artistName: string) => void;
  isLoading?: boolean;
}

export const SearchBar: React.FC<Props> = ({ onSearch, isLoading }) => {
  const handleSearchDebounced = debounce((val: string) => onSearch(val.trim()), 500);

  return (
    <SearchField
      onChange={handleSearchDebounced}
      isDisabled={isLoading}
      aria-label="Search for an artist"
      fullWidth
    >
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder="Search for an artist..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
};
