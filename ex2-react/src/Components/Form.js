import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {           
        }

        this.handleDate = this.handleDate.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm() {
        this.props.onSubmitForm(this.state)
    }

    handleDate(e) {
        this.props.handleDate(e);
    }

    handleName(e) {
        this.props.handleName(e);
    }

    handleCity(e) {
        this.props.handleCity(e);
    }
     
    render() {
        return (
            <div className="form">
            <label>
                <input type="text" name="date" value={this.props.date} onChange={this.handleDate}/>
            </label> 
            <br/>       
            <label>
                <input type="text" name="name" value={this.props.name} onChange={this.handleName}/>
            </label>  
            <br/>      
            <label>
                <input type="text" name="city" value={this.props.city} onChange={this.handleCity}/>
            </label>
            <br/>
            <button onClick={this.onSubmitForm}>{this.props.button}</button>
        </div>
        )
    }
}

export default Form;