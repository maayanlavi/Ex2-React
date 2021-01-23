import React, { Component } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

class Delivery extends Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false
        }

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit() {
        this.setState({
            editing: true
        })
        this.props.onUpdate(this.props.index)
    }

    delete() {
        this.props.onDelete(this.props.index)
    }

    deliveryStyle = {
        marginLeft:'24px',
        marginTop:'22px'
    }

    button1Style = {
        marginRight:'8px',
        color:'white',
        border: '1px solid #ED4D47',
        borderRadius:'20px',
        backgroundColor:'#ED4D47',
        width:'36px',
        height:'36px',
        position:'absolute',
        right:'40px'

    }

    button2Style = {
        marginRight:'8px',
        color:'white',
        border: '1px solid #ED4D47',
        borderRadius:'20px',
        backgroundColor:'#ED4D47',
        width:'36px',
        height:'36px',
        position:'absolute',
        right:'1px'

    }

    render() {
        return (
            <div className="delivery" style={this.deliveryStyle}> 
                <span>{this.props.children}</span>
                <button style={this.button1Style} onClick={this.edit}><MdEdit/></button>
                <button style={this.button2Style} onClick={this.delete}><MdDelete/></button>
            </div>
        )
    }
}

export default Delivery;