import React, { Component } from 'react'

export class AutoSingle extends Component {
constructor(props) {
  super(props)

}


  render() {
    console.log(this.props.item);
    return (
      <div className='item'>
        <h4>Brand: {this.props.item.brand}</h4>
        <span>price:  {this.props.item.price}</span>
        <span>year:  {this.props.item.year}</span>

      </div>
    )
  }
}

export default AutoSingle
