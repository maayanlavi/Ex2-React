import React, { Component } from 'react';
import Delivery from './Delivery';
import Form from './Form';
import deliveriesData from '../Data/deliveries.json';


class Deliveries extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            date:'date',
            name:'name',
            city:'city',
            button:'Save',
            id: -1,
            deliveries: [ ]
        }
        this.eachDelivery = this.eachDelivery.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.add = this.add.bind(this);
        this.addJson = this.addJson.bind(this);
        this.nextId = this.nextId.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleCity = this.handleCity.bind(this);        
    }

    componentDidMount() {
        deliveriesData.map(item => this.addJson({id: item.id, Date: item.date, Name: item.name, City: item.city}));
    }

    addJson({id = null, Date = 'default date', Name = 'ploni', City = 'default city'}) {
        this.setState(prevState => ({
            
            deliveries: [
                ...prevState.deliveries, {
                    id: this.nextId(prevState.deliveries),
                    date: Date, 
                    name: Name,
                    city: City
                }
            ]
        }))

    }

    eachDelivery(item, i) {
        return <Delivery key={i} index={item.id} onDelete={this.delete} onUpdate={this.update}>{i+1} {item.date} {item.name} {item.city} </Delivery>
    }

    handleDate(e) {
        this.setState({date: e.target.value});
    }

    handleName(e) {
        this.setState({name: e.target.value});
    }

    handleCity(e) {
        this.setState({city: e.target.value});
    }
     
    add() {

        if (this.state.button === 'Save') {
            this.setState(prevState => ({
                
                deliveries: [
                    ...prevState.deliveries, {
                        id: this.nextId(prevState.deliveries),
                        date: this.state.date !== 'date' ?  this.state.date : 'As soon as possible',   
                        name: this.state.name !== 'name' ? this.state.name : 'anonymous',
                        city: this.state.city !== 'city' ? this.state.city : 'Unknown city'
                    }
                ]
            }))
    }
    else {
        this.setState(prevState => ({
            deliveries: prevState.deliveries.map(
                delivery => delivery.id !== this.state.id ? delivery : {...delivery,
                date:this.state.date,
                name:this.state.name,
                city:this.state.city

            }
            )
        }))
    }

    
    this.setState(() => ({
        date:'date',
        name:'name',
        city:'city',
        button:'Save',
    })) 
}

    nextId(deliveries =[]) {
        let max = deliveries.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
        return ++max;
    }

    delete(id) {
        this.setState(prevState => ({
            deliveries: prevState.deliveries.filter(name => name.id !== id),
            
        }))
    }
    update(id) {
        this.setState(() => ({
            name: this.state.deliveries.filter(name2 => name2.id === id)[0].name,
            date: this.state.deliveries.filter(name2 => name2.id === id)[0].date,
            city: this.state.deliveries.filter(name2 => name2.id === id)[0].city,
            id:id,
            button:'Update',
        }))
    }

    deliveriesStyle = {
        backgroundColor: "white",
        position: "absolute",
        width: "550px",
        borderRadius: "13px",
        // position: "absolute";
        // width: "550px",
        // height: "594px",
        left: "183px",
        top: "116px",
        height: "594px",
    }

    formStyle = {
        position:"absolute",
        top:'116px',
        right:'10%',
        width:'400px',

    }

    render() {
        return(
            <>
            <div className="deliveries" style={this.deliveriesStyle}>
                {this.state.deliveries.map(this.eachDelivery)}
            </div>
            <div className="form" style={this.formStyle}>
                <Form date={this.state.date} name={this.state.name} city={this.state.city} button={this.state.button} onSubmitForm= {this.add} handleDate={this.handleDate} handleCity={this.handleCity} handleName={this.handleName} />
            </div>
            </>
        )
    }
}

export default Deliveries;