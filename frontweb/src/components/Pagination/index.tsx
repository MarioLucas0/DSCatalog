import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'
import './style.css'
const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="arrow-inactive">
        <ArrowIcon />
      </div>
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">4</div>
      <div className="pagination-item">5</div>
      <div className="pagination-item">6</div>
      <div className="pagination-item">7</div>
      <div className="pagination-item">8</div>
      <div className="pagination-item">9</div>

      <div className="arrow-next arrow-active">
        <ArrowIcon />
      </div>
    </div>
  )
}
export default Pagination
