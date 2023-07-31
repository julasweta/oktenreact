import React, { Component } from 'react'
import AutoSingle from './AutoSingle';

export class Auto extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       auto:[]
    }
  }

  getAuto = () => {
    fetch('http://owu.linkpc.net/carsAPI/v1/cars')
      .then((response) => response.json()) 
      .then((data) => this.setState({ auto: data })) 
      .catch((error) => console.log('Error:', error));
  };

  componentDidMount() {
    this.getAuto();
  }


  render() {
   const auto = this.state.auto;
    return (
      <div className='items'>{auto.length > 0 && auto.map(item=><AutoSingle item={item} key={item.id}/>)}</div>
    )
  }
}

export default Auto