// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinations} = props
  const {name, imgUrl} = destinations
  return (
    <li className="list-style">
      <img src={imgUrl} alt={name} className="list-card-image" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
