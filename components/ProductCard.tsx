import React from 'react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return <div className='product-card'>{product.name}</div>;
};

export default ProductCard;
