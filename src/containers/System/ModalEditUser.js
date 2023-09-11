import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'
class ModalEditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

    }

    componentDidMount() {
        let user = this.props.currentUser;

        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,

                email: user.email,
                password: 'hard',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }

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
    handleSaveUser = () => {
        let isValid = this.validateData()

        if (isValid === true) {
            //call api
            this.props.editUser(this.state)

        }
    }
    validateData = () => {
        let isValue = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
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
                <ModalHeader toggle={() => this.toggle()}>Edit user</ModalHeader>
                <ModalBody className='input-add'>
                    <div className='group'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input disabled type='email' value={this.state.email} onChange={(event) => { this.handleOnChangeInput(event, "email") }}></input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input disabled type='password' value={this.state.password} onChange={(event) => { this.handleOnChangeInput(event, "password") }}></input>
                        </div>
                    </div>


                    <div className='group'>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input type='text' value={this.state.firstName} onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}></input>
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type='text' value={this.state.lastName} onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}></input>
                        </div>
                    </div>
                    <div className='group'>
                        <div className='input-container full'>
                            <label>Address</label>
                            <input type='text' value={this.state.address} onChange={(event) => { this.handleOnChangeInput(event, "address") }}></input>
                        </div>
                    </div>




                </ModalBody>
                <ModalFooter>
                    <Button className='btn-2' color="primary" onClick={() => this.handleSaveUser()}>
                        Save Changes
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);

