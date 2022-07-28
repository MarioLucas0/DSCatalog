import './styles.css'

import ProductPrice from '../ProductPrice'
import { Product } from 'types/product'
import { Link } from 'react-router-dom'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <Link to="/products-details">
          <img src={product.imgUrl} alt={product.name} />
        </Link>
      </div>
      <div className="card-bottom-container">
        <h6>{product.name}</h6>
        <ProductPrice price={product.price} />
      </div>
    </div>
  )
}

export default ProductCard
