import React, { Component } from 'react'

export default class ChildrenComponent extends Component {
   componentWillUnmount()
   {
    console.log("ComponentwillUnmount")
   }
    
  render() {
    return (
      <div>
        <h2>Children Component</h2>
      </div>
    )
  }
}
