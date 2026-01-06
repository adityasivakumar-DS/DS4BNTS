# E-Commerce Component Library

A modern React TypeScript component library designed for e-commerce websites, built with Vite and Storybook.

## 🚀 Features

- **Modern Stack**: React 19 + TypeScript + Vite
- **Component Library**: Comprehensive set of e-commerce components
- **Storybook Integration**: Interactive component showcase and documentation
- **Type-Safe**: Full TypeScript support
- **Accessible**: Built with accessibility in mind
- **Responsive**: Mobile-first design approach

## 📦 Components

### Core Components
- **Button** - Versatile button component with multiple variants
- **Input** - Form input with validation and icons
- **Badge** - Status indicators and labels
- **Rating** - Star rating display and interaction
- **Price** - Price display with discount support

### E-Commerce Components
- **ProductCard** - Product display card with image, rating, and actions
- **Cart** - Shopping cart with item management
- **SearchBar** - Product search functionality
- **Header** - Site header with navigation and cart
- **Footer** - Site footer with links and social media

## 🛠️ Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

### Storybook

Start Storybook to view and interact with all components:

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`

### Build

Build the project:

```bash
npm run build
```

Build Storybook:

```bash
npm run build-storybook
```

## 📁 Project Structure

```
src/
├── components/          # Component library
│   ├── Button/
│   ├── Badge/
│   ├── Rating/
│   ├── Price/
│   ├── Input/
│   ├── SearchBar/
│   ├── ProductCard/
│   ├── Cart/
│   ├── Header/
│   └── Footer/
└── index.css            # Global styles
```

## 🎨 Usage

### Import Components

```typescript
import { Button, ProductCard, Cart } from './components';
```

### Example: ProductCard

```tsx
<ProductCard
  image="https://example.com/product.jpg"
  title="Wireless Headphones"
  description="Premium quality wireless headphones"
  price={99.99}
  originalPrice={149.99}
  rating={4.5}
  reviewCount={128}
  badge="Sale"
  inStock={true}
  onAddToCart={() => console.log('Added to cart')}
/>
```

### Example: Button

```tsx
<Button variant="primary" size="large" onClick={handleClick}>
  Add to Cart
</Button>
```

## 🧪 Testing

Run Storybook tests:

```bash
npx vitest --project=storybook
```

## 📚 Documentation

Full component documentation is available in Storybook. Each component includes:
- Props documentation
- Interactive examples
- Accessibility information
- Usage guidelines

## 🎯 Component Features

### Button
- Multiple variants: primary, secondary, outline, ghost, danger
- Size options: small, medium, large
- Loading state
- Full width option
- Disabled state

### ProductCard
- Product image display
- Rating and reviews
- Price with discount support
- Favorite/wishlist functionality
- Stock status
- Badge support (Sale, New, etc.)

### Cart
- Item management (add, remove, update quantity)
- Price calculations (subtotal, tax, shipping)
- Empty state
- Checkout functionality

## 🔧 Technologies

- **React** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 7.2.4
- **Storybook** 10.1.11
- **Vitest** (for testing)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
