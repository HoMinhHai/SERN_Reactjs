import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import './HomePage.scss'




class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <a target="_blank" href='https://bookingcare.vn/'>&copy; 2024 Nền tảng đặt lịch khám bệnh hàng đầu </a>
            </div >


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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
