import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'
import axios from 'axios'
import ProductPrice from 'components/ProductPrice'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from 'types/product'
import { BASE_URL } from 'util/request'
import './style.css'

const ProductDetails = () => {
  const { productId } = useParams()

  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    axios.get(`${BASE_URL}/products/${productId}`).then(response => {
      setProduct(response.data)
    })
  }, [productId])

  return (
    <section className="product-container-details">
      <div className="base-card product-datails-card">
        <div className="goback-container">
          <ArrowIcon />
          <h2>VOLTAR</h2>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img src={product?.imgUrl} alt={product?.name} />
            </div>
            <div className="name-price-container">
              <h1>{product?.name}</h1>
              {product && <ProductPrice price={product?.price} />}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>{product?.description}</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                nostrum cupiditate aliquid temporibus, modi quod obcaecati
                harum, dolores velit ipsam error odio recusandae perspiciatis
                laboriosam, delectus totam similique. Earum, dolores!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
