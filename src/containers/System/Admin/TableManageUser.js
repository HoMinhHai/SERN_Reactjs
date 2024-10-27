import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from '../../../store/actions'
// import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userServive'
// import { emitter } from '../../utils/emitter'



import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}

class TableManageUser extends Component {

    constructor(props) {

        super(props)
        this.state = {
            userRedux: []
        }
    }
    componentDidMount() {
        this.props.fetchUserRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listusers !== this.props.listusers) {
            this.setState({
                userRedux: this.props.listusers
            })
        }
    }
    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id)
    }
    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user)
    }
    render() {
        let arrUsers = this.state.userRedux
        return (
            <Fragment>
                <table id="table-manage-user">
                    <tr className='tr'>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Actions</th>

                    </tr>
                    {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button id='btn-edit' onClick={() => this.handleEditUser(item)} >
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button id='btn-delete' onClick={() => this.handleDeleteUser(item)}
                                        ><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}

                </table>
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
            </Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
        listusers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
