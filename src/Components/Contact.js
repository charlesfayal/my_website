import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      onSubmitForm:this.props.onSubmitForm,
      contactEmail:"",
      contactMessage:"",
      contactSubject:"",
      contactName:""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log("submit form email: " + this.state.contactEmail + " name: " + this.state.contactName + " messsage: " + this.state.contactMessage);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="widget widget_contact">
             <h4>Email</h4>
             <p className="address">
               <span>{email}</span>
             </p>
           </div>
            <div className="widget widget_contact">
					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
  
      </div>
   </section>
    );
  }
}

export default Contact;
