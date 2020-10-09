import React, {Component} from 'react';

import './item-add-form.css';

class ItemAddForm extends Component {

    state = {
        label: ''
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    };


    render(){
        const text = 'Smack my bitch up';

        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                       className="form-control"
                       placeholder="What to do"/>
                <button className="btn btn-outline-secondary">Add</button>
            </form>
        )
    }
}

export default ItemAddForm;
