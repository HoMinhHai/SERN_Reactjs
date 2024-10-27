import React, { Component } from 'react';
import ModalEditUser from './ModalEditUser';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userServive'
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter'
class UserManage extends Component {

    constructor(props) {

        super(props)
        this.state = {
            arrUsers: [],
            isOpenModal: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUser()

    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true,
            isOpenEditUser: false
        })

    }
    toggleUserModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }
    toggleUserEditModal = () => {
        this.setState({
            isOpenEditUser: !this.state.isOpenEditUser
        })
    }
    createNewUser = async (data) => {
        try {
            let res = await createNewUserService(data)

            if (res && res.errCode === 1) {
                alert(res.message)
            }
            else {
                await this.getAllUser()
                this.setState({
                    isOpenModal: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA',)
            }

        }
        catch (e) {

        }
    }
    getAllUser = async () => {
        let response = await getAllUsers('ALL')

        if (response && response.errCode === 0) {

            this.setState({
                arrUsers: response.users,
                isOpenModalUser: false
            })
        }
    }
    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserService(user.id)
            if (res && res.errCode === 0) {
                await this.getAllUser()
            }
            else {
                alert(res.errCode)
            }
        }
        catch (e) {

        }
    }
    handleEditUser = (user) => {
        this.setState({
            isOpenEditUser: true,
            userEdit: user
        })
    }
    doEditUser = async (user) => {
        try {
            let res = await editUserService(user)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenEditUser: false,

                })
                this.getAllUser()
            }
            else {
                alert(res.errCode)
            }
        }
        catch (e) {

        }


    }
    render() {

        let arrUsers = this.state.arrUsers

        return (

            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser} />
                {this.state.isOpenEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser} />}

                {/* // 
                 {/* createNewUser={this.createNewUser} */}
                <div className='title'>
                    <div className='text-center'>Manage User</div>
                    <div className='mx-1 text-left'>
                        <button className='btn btn-primary px-3' onClick={() => this.handleAddNewUser()}>
                            <i className="fas fa-plus-circle"></i>Add new User
                        </button>
                    </div>
                    <div className='users-table mt-3 mx-1'>
                        <table>
                            <tr className='tr'>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Actions</th>

                            </tr>

                            {arrUsers && arrUsers.map((item, index) => {

                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>
                                            <button id='btn-edit' onClick={() => this.handleEditUser(item)}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button id='btn-delete'
                                                onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )

                            })}



                        </table>
                    </div>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
