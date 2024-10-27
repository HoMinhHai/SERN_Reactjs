import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss'
import vtv1 from '../../../assets/images/LogoCompany/vtv1.png'
import dantri from '../../../assets/images/LogoCompany/dantri.png'
import vnexpress from '../../../assets/images/LogoCompany/vnexpress.png'
import vtcnews from '../../../assets/images/LogoCompany/vtcnews.png'


class About extends Component {

    render() {

        return (
            <div className='section-about'>
                <p>Truyền thông nói về BookingCare</p>
                <div className='content-about'>
                    <iframe width="588" height="330" src="https://www.youtube.com/embed/FyDQljKtWnI" title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div className='logo-list'>
                        <div className='row-brand'>
                            <div className='item-img'><img src={vtv1}></img></div>
                            <div className='item-img'><img src={dantri}></img></div>
                        </div>
                        <div className='row-brand'>
                            <div className='item-img'><img src={vtcnews}></img></div>
                            <div className='item-img'><img src={vnexpress}></img></div>
                        </div>
                    </div>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(About);
