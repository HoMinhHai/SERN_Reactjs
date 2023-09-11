import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter'
class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            FirstName: '',
            LastName: '',
            Address: ''
        }
        this.listenToEmitter()
    }

    componentDidMount() {

    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                FirstName: '',
                LastName: '',
                Address: ''
            })
        })
    }
    toggle = () => {
        this.props.toggleFromParent()
    }
    handleOnChangeInput = (event, id) => {


        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }
    handleAddNewUser = () => {
        let isValid = this.validateData()

        if (isValid === true) {
            this.props.createNewUser(this.state)

        }
    }
    validateData = () => {
        let isValue = true
        let arrInput = ['email', 'password', 'FirstName', 'LastName', 'Address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValue = false;
                alert('Missing parameter ' + arrInput[i]);
                break;
            }
        }
        return isValue

    }
    render() {
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                size="lg"
                className='modal-add-new'>
                <ModalHeader toggle={() => this.toggle()}>Add a new user</ModalHeader>
                <ModalBody className='input-add'>
                    <div className='group'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='email' value={this.state.email} onChange={(event) => { this.handleOnChangeInput(event, "email") }}></input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' value={this.state.password} onChange={(event) => { this.handleOnChangeInput(event, "password") }}></input>
                        </div>
                    </div>


                    <div className='group'>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input type='text' value={this.state.FirstName} onChange={(event) => { this.handleOnChangeInput(event, "FirstName") }}></input>
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type='text' value={this.state.LastName} onChange={(event) => { this.handleOnChangeInput(event, "LastName") }}></input>
                        </div>
                    </div>
                    <div className='group'>
                        <div className='input-container full'>
                            <label>Address</label>
                            <input type='text' value={this.state.Address} onChange={(event) => { this.handleOnChangeInput(event, "Address") }}></input>
                        </div>
                    </div>




                </ModalBody>
                <ModalFooter>
                    <Button className='btn-2' color="primary" onClick={() => this.handleAddNewUser()}>
                        Add new
                    </Button>{' '}
                    <Button className='btn-2' color="secondary" onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

