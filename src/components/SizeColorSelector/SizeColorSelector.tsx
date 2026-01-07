import React from 'react';
import './SizeColorSelector.css';
import { Dropdown } from '../Dropdown';

export interface SizeOption {
  label: string;
  value: string;
}

export interface ColorOption {
  label: string;
  value: string;
}

export interface SizeColorSelectorProps {
  sizes: SizeOption[];
  colors: ColorOption[];
  selectedSize?: string;
  selectedColor?: string;
  onChangeSize?: (value: string) => void;
  onChangeColor?: (value: string) => void;
  /** Show size chart helper link above size selector */
  showSizeChartLink?: boolean;
  onClickSizeChart?: () => void;
}

export const SizeColorSelector: React.FC<SizeColorSelectorProps> = ({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onChangeSize,
  onChangeColor,
  showSizeChartLink = true,
  onClickSizeChart,
}) => {
  return (
    <div className="ecommerce-size-color">
      <div className="ecommerce-size-color__row">
        <div className="ecommerce-size-color__field">
          <div className="ecommerce-size-color__label-row">
            <span className="ecommerce-size-color__label">Size</span>
            {showSizeChartLink && (
              <button
                type="button"
                className="ecommerce-size-color__size-chart"
                onClick={onClickSizeChart}
              >
                Size chart
              </button>
            )}
          </div>
          <Dropdown
            options={sizes}
            value={selectedSize}
            onChange={onChangeSize}
            placeholder="Select size"
          />
        </div>
        <div className="ecommerce-size-color__field">
          <span className="ecommerce-size-color__label">Color</span>
          <Dropdown
            options={colors}
            value={selectedColor}
            onChange={onChangeColor}
            placeholder="Select color"
          />
        </div>
      </div>
    </div>
  );
};


