import React, { Component } from 'react'

export default class LifeCycleA extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Thandar  Swe'
        }
        console.log('LifecycleA constructor')
      }

      static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDeriveStateFromProps")
        return true;
      }

      shouldComponentUpdate(){
        console.log("ShouldComponentUpdate")
        return true;
      }

      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshot")
        return null;
      }
      componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Did Update")
      }

      componentDidMount(){
        console.log("LifCycleA ComponentDidMount")
        this.nameInterval=  setTimeout(() => { this.setState({name:"Swe"})
            
        }, 2000);
      }

  render() {
    console.log("LifeCycleA Render")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=> this.setState({name: 'swe'})} >Click</button>
      </div>
    )
  }
}


