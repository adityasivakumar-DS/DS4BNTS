import React from 'react';
import './Dropdown.css';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  /** Label shown above or as placeholder */
  label?: string;
  /** Selected value */
  value?: string;
  /** Options to render */
  options: DropdownOption[];
  /** Placeholder when no value is selected */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  placeholder = 'Select an option',
  disabled = false,
  onChange,
}) => {
  return (
    <div className="ecommerce-dropdown">
      {label && <label className="ecommerce-dropdown__label">{label}</label>}
      <div className="ecommerce-dropdown__control">
        <select
          className="ecommerce-dropdown__select"
          value={value ?? ''}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="ecommerce-dropdown__icon" aria-hidden="true">
          ▾
        </span>
      </div>
    </div>
  );
};


