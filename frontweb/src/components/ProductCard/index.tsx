import './styles.css'

import ProductPrice from '../ProductPrice'
import { Product } from 'types/product'

type Props = {
  products: Product
}

const ProductCard = ({ products }: Props) => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={products.imgUrl} alt={products.name} />
      </div>
      <div className="card-bottom-container">
        <h6>{products.name}</h6>
        <ProductPrice price={products.price} />
      </div>
    </div>
  )
}

export default ProductCard
