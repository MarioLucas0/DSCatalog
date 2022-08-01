import ProductCard from '../../components/ProductCard/index'
import Pagination from 'components/Pagination'
import { useEffect, useState } from 'react'
import { SpringPage } from 'types/vendor/spring'
import { Product } from 'types/product'
import { AxiosParams } from 'types/vendor/axios'
import { BASE_URL } from 'util/request'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './style.css'

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>()

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12
      }
    }
    axios(params).then(response => {
      setPage(response.data)
    })
  }, [])

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catalogo de Produtos</h1>
      </div>

      <div className="row">
        {page?.content.map(product => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
            <Link to="/products/productId">
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  )
}

export default Catalog
