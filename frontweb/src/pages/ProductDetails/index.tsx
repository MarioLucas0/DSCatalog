import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'
import ProductPrice from 'components/ProductPrice'
import './style.css'

const ProductDetails = () => {
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
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt=""
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do Produto</h1>
              <ProductPrice price={2345.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descriçao do produto</h2>
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
