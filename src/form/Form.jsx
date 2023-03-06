import React, { Component } from 'react'
import './form.css'
import {countries, payments, languages }from '../utilFile/data'


export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state  = {
      fullName:  'TDS',
      phone: '09959998110',
      email: 'TDS@gmail.com',
      feedBack: 'A brief description here',
      country:"Myanmar",
      payment:"Visa",
      language:["JavaScript"]
    }
  }

  handelChange = (event)  => {
    console.log(typeof event.target);
    const {name, value} = event.target;
    console.log('value', value);
    console.log(typeof name);
    this.setState({
        [name]: value, 
       
})


}

handelCheckBox = (event) => {
    const {value, checked}= event.target;
    const {language}= this.state;

    if (checked) {
        this.setState({
            language: [...language, value],
        }
        )
    } else {
        this.setState({
            language: language.filter((e) => e !== value)
        })
        
    }
}

handelSubmit = (event) => {
    event.preventDefault();
    alert("Successfully!✨");
    console.log("Checkout State", this.state);
}
  

  render() {
    const {
      fullName,
      phone,
      email,
      feedBack,
      country,
      payment,
      language,
      
    } = this.state;

    return (
      <div  className='bgStyle' >
        <form action="" onSubmit={this.handelSubmit}>
        <div className="formStyle">
          <h2 className='header'>CircleX</h2>

          <div>
            <label htmlFor="" className='label'>Name</label>
            <br/>
            <input 
            type="text" 
            value={fullName}
            name="fullName"  onChange={this.handelChange} />
            
          </div>

          <div>
            <label className='label' htmlFor="">Phone</label>
            <br/>
            <input 
            type="number" 
            value={phone}
            name="phone"  onChange={this.handelChange} />
           
          </div>

          <div>
            <label className='label' htmlFor="">Email Address</label>
            <br/>
            <input 
            type="text" 
            value={email}
            name="email"        onChange={this.handelChange} />
     
          </div>

          <div>
            <label  className='label' htmlFor="">Write your feedback</label>
            <br/>
            <textarea type="text" 
            value={feedBack}
            name="feedBack" 
            onChange={this.handelChange} 
             rows="5">
            </textarea>
          </div>
          <div>
                            <label htmlFor="" className='label'>Language</label><br />
                            <select  
                                     name="country"
                                     value={country}
                                     onChange={this.handelChange}  >

                                {countries.map((e) => (
                                        <option key={e.id}>{e.value}</option>
                                    ))
                                }
                            </select>
          </div>


        <div className='label'>
                            <label htmlFor="">Payment Method</label><br />
                            <div  className='wrapper'>
                                {
                                    payments.map(
                                        (e) => (
                                        <div  key={e.id}  className='wrapperInner'  >
                                        <input 
                                        type="radio" 
                                        name="payment"
                                        value={e.name}
                                        defaultChecked={payment && e.name === payment} //true(or)false checked
                                        onChange={this.handelChange}
                                        />
                                         <label className='label'>{e.name}</label>
                                        </div>
                                        )
                                    )
                                }
                            </div>
          </div>

            <div className='label'>
                            <label htmlFor="">Which Programming Language do you want to Learn?</label><br />
                            <div    className='wrapper'>
                                {
                                    languages.map(
                                        (e) => (
                                        <div  key={e.id}  className='wrapperInner'  >
                                        <input type="checkbox" 
                                        name={e.name}
                                        value={e.name}
                                        defaultChecked={language && language.includes(e.name)}//T or F
                                        onChange={this.handelCheckBox}/> 
                                        <label htmlFor="" className='label'>{e.name}</label>
                                        </div>
                                        )
                                    )
                                }
                            </div>
              </div>

          <div>
            <button className='button' type='submit'>Send Message</button>
          </div>
          </div>
        </form>

      </div>
    )
  }
}

