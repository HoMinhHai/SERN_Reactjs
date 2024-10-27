import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './MedicalFacility.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VietDucFacility from '../../../assets/images/specialty1.jpg'
import ChoRayFacility from '../../../assets/images/specialty2.jpg'
import DoctorCheckFacility from '../../../assets/images/specialty3.jpg'
class MedicalFacility extends Component {
    render() {
        return (
            <div className='section-facility'>
                <div className='section-header'>
                    <h4>Cơ sở y tế nổi bật</h4>
                    <button>Xem thêm</button>
                </div>
                <div className='section-content'>
                    <Slider {...this.props.settings}>
                        <div className='img-custom'>
                            <img src={VietDucFacility} />
                            <div>Bệnh viện Hữu nghị Việt Đức </div>
                        </div>
                        <div className='img-custom'>
                            <img src={ChoRayFacility} />
                            <div>Bệnh viện chợ rẫy</div>
                        </div>
                        <div className='img-custom'>
                            <img src={DoctorCheckFacility} />
                            <div>Doctor Check - Tầm soát bệnh để sống thọ hơn</div>
                        </div>
                        <div className='img-custom'>
                            <img src={ChoRayFacility} />
                            <div>Cơ xương khớp 2</div>
                        </div>
                        <div className='img-custom'>
                            <img src={DoctorCheckFacility} />
                            <div>Cơ xương khớp 3</div>
                        </div>
                    </Slider>
                </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
