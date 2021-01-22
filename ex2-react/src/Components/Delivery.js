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

    render() {
        return (
            <div className="delivery">
                <span>{this.props.children}</span>
                <button onClick={this.edit}><MdEdit/></button>
                <button onClick={this.delete}><MdDelete/></button>
            </div>
        )
    }
}

export default Delivery;