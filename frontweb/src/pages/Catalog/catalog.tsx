import ProductCard from '../../components/ProductCard/index'
import Pagination from 'components/Pagination'
import { useEffect, useState } from 'react'
import { SpringPage } from 'types/vendor/spring'
import { Product } from 'types/product'
import { AxiosParams } from 'types/vendor/axios'
import { BASE_URL } from 'util/request'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CardLoader from './CardLoader/index'
import './style.css'

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12
      }
    }
    setIsLoading(true)
    axios(params)
      .then(response => {
        setPage(response.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  console.log(page)

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catalogo de Produtos</h1>
      </div>

      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map(products => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={products.id}>
              <Link to="/products/1">
                <ProductCard products={products} />
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  )
}

export default Catalog
