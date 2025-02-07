import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { handleLogin } from '../../services/userServive'
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',

        }
    }

    handleChangeInput = (event) => {
        this.setState({
            username: event.target.value,
            // password: event.target.value
        })
    }
    handleChangeInput2 = (event) => {
        this.setState({
            //username: event.target.value,
            password: event.target.value
        })
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {

            let data = await handleLogin(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)

            }
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }

        }

    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleLogin();
        }
    }
    render() {

        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>

                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input required onChange={(event) => this.handleChangeInput(event)} value={this.state.username} type='text' className='form-control' placeholder='Enter your UserName' onKeyDown={this.handleKeyDown} ></input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input className='form-control' onChange={(event) => this.handleChangeInput2(event)} value={this.state.password}
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your Password' onKeyDown={this.handleKeyDown} ></input>
                                <span
                                    onClick={() => this.handleShowHidePassword()}>
                                    <i class={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i></span>
                            </div>
                            <div className='col-12' style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                        </div>
                        <div className='col-12 '><button onClick={() => this.handleLogin()} className='btn-login'>Login </button></div>

                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your Password</span>
                        </div>
                        <div className='col-12 mt-3'>
                            <span className='text-order-login'>Or login with: </span>

                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook facebook "></i>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),

        //userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
