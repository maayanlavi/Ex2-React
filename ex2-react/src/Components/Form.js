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

    labelStyle = {
        width: '400px',
        height:'60px',
        marginTop:'14px',
        borderRadius: '5px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        border: '2px solid #ED4D47'

    }
     
    render() {
        return (
            <div className="form">
            <label>
                <input style={this.labelStyle} type="text" name="date" value={this.props.date} onChange={this.handleDate}/>
            </label> 
            <br/>       
            <label>
                <input style={this.labelStyle} type="text" name="name" value={this.props.name} onChange={this.handleName}/>
            </label>  
            <br/>      
            <label>
                <input style={this.labelStyle} type="text" name="city" value={this.props.city} onChange={this.handleCity}/>
            </label>
            <br/>
            <button style={{backgroundColor:'rgba(238, 77, 71, 1)', color:'white', width:'158px', height:'60px', border: '1px solid #ED4D47', borderRadius:'5px', marginTop:'16px', marginLeft:'30%', fontWeight: '700', fontSize:'16px'}}onClick={this.onSubmitForm}>{this.props.button}</button>
        </div>
        )
    }
}

export default Form;