import React from 'react';
import { Button } from '../Button';
import { Price } from '../Price';
import './Cart.css';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartProps {
  /** Cart items */
  items: CartItem[];
  /** Callback when item quantity changes */
  onQuantityChange?: (id: string, quantity: number) => void;
  /** Callback when item is removed */
  onRemoveItem?: (id: string) => void;
  /** Callback when checkout is clicked */
  onCheckout?: () => void;
  /** Is checkout loading? */
  checkoutLoading?: boolean;
  /** Show empty state */
  showEmptyState?: boolean;
}

export const Cart: React.FC<CartProps> = ({
  items,
  onQuantityChange,
  onRemoveItem,
  onCheckout,
  checkoutLoading = false,
  showEmptyState = true,
}) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + tax + shipping;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0 && showEmptyState) {
    return (
      <div className="ecommerce-cart ecommerce-cart--empty">
        <div className="ecommerce-cart__empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
        <h3 className="ecommerce-cart__empty-title">Your cart is empty</h3>
        <p className="ecommerce-cart__empty-text">Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className="ecommerce-cart">
      <div className="ecommerce-cart__header">
        <h2 className="ecommerce-cart__title">Shopping Cart</h2>
        <span className="ecommerce-cart__item-count">{itemCount} items</span>
      </div>

      <div className="ecommerce-cart__items">
        {items.map((item) => (
          <div key={item.id} className="ecommerce-cart-item">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="ecommerce-cart-item__image"
              />
            )}
            <div className="ecommerce-cart-item__content">
              <h3 className="ecommerce-cart-item__name">{item.name}</h3>
              <Price value={item.price} size="small" />
            </div>
            <div className="ecommerce-cart-item__actions">
              <div className="ecommerce-cart-item__quantity">
                <button
                  className="ecommerce-cart-item__quantity-btn"
                  onClick={() => onQuantityChange?.(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="ecommerce-cart-item__quantity-value">
                  {item.quantity}
                </span>
                <button
                  className="ecommerce-cart-item__quantity-btn"
                  onClick={() => onQuantityChange?.(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                className="ecommerce-cart-item__remove"
                onClick={() => onRemoveItem?.(item.id)}
                aria-label="Remove item"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="ecommerce-cart-item__total">
              <Price value={item.price * item.quantity} size="medium" />
            </div>
          </div>
        ))}
      </div>

      <div className="ecommerce-cart__summary">
        <div className="ecommerce-cart__summary-row">
          <span>Subtotal</span>
          <Price value={subtotal} size="small" />
        </div>
        <div className="ecommerce-cart__summary-row">
          <span>Tax</span>
          <Price value={tax} size="small" />
        </div>
        <div className="ecommerce-cart__summary-row">
          <span>Shipping</span>
          <Price value={shipping} size="small" />
        </div>
        <div className="ecommerce-cart__summary-row ecommerce-cart__summary-row--total">
          <span>Total</span>
          <Price value={total} size="large" />
        </div>
        <Button
          variant="primary"
          size="large"
          fullWidth
          onClick={onCheckout}
          loading={checkoutLoading}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

