import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import './SearchBar.css';

export interface SearchBarProps {
  /** Placeholder text */
  placeholder?: string;
  /** Initial search value */
  defaultValue?: string;
  /** Callback when search is performed */
  onSearch?: (value: string) => void;
  /** Callback when input changes */
  onChange?: (value: string) => void;
  /** Show search button */
  showButton?: boolean;
  /** Full width search bar */
  fullWidth?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search products...',
  defaultValue = '',
  onSearch,
  onChange,
  showButton = true,
  fullWidth = false,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleSearch = () => {
    onSearch?.(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const searchIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );

  return (
    <div className={`ecommerce-search-bar ${fullWidth ? 'ecommerce-search-bar--full-width' : ''}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        leftIcon={searchIcon}
        fullWidth={fullWidth}
        size="medium"
      />
      {showButton && (
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      )}
    </div>
  );
};

