import React from 'react';
import './IconWithText.css';

export interface IconWithTextProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export const IconWithText: React.FC<IconWithTextProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="ecommerce-icon-with-text">
      <div className="ecommerce-icon-with-text__icon">{icon}</div>
      <div className="ecommerce-icon-with-text__content">
        <div className="ecommerce-icon-with-text__title">{title}</div>
        {description && (
          <div className="ecommerce-icon-with-text__description">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};


