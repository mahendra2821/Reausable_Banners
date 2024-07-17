// Write your code here.
import './index.css'

const BannerCaedItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn" type="button">
          show more
        </button>
      </div>
    </li>
  )
}
export default BannerCaedItem
