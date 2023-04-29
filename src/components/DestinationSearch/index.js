// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchItem: ''}

  onChangeText = event => {
    this.setState({searchItem: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchItem} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchItem.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="input-box"
              onChange={this.onChangeText}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destinations-list">
            {searchResults.map(eachItem => (
              <DestinationItem destinations={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
