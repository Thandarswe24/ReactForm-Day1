
import React, { Component } from 'react'
import LifeCycleA from './src/components/LifeCycleA';
import ComponentUnmount from './src/ComponentwillUnmount/ComponentUnmount';
import Form from './src/form/Form';







export default class App extends Component {
  render() {
    return (
      <div>
        <Form/>
        {/* <ComponentUnmount/> */}
        {/* <LifeCycleA/> */}
    
      </div>
    )
  }
}

