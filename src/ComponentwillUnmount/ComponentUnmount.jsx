import React, { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'

export default class ComponentUnmount extends Component {

    constructor(props) {
        super(props);
        this.state={
            show: false
        }
    }
  render() {
    return (
      <div>
        <h1>ComponentUnmount</h1>
       {this.state.show? <ChildrenComponent/>:null}
       <button onClick={()=> {this.setState({show: !this.state.show})}}>Click</button>
      </div>
    )
  }
}