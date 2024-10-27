import React, { Component } from 'react';
import { connect } from 'react-redux';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Specialty.scss'
import specialtyImg from '../../../assets/specialty/coxuongkhop.jpg'
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}
class Specialty extends Component {

    render() {

        return (
            <div className='section-specialty'>
                <div className='section-header'>
                    <h4>Chuyên khoa phổ biến</h4>
                    <button>Xem thêm</button>
                </div>
                <div className='section-content'>
                    <Slider {...this.props.settings}>
                        <div className='img-custom'>
                            <img src={specialtyImg} />
                            <div>Cơ xương khớp 1</div>
                        </div>
                        <div className='img-custom'>
                            <img src={specialtyImg} />
                            <div>Cơ xương khớp 2</div>
                        </div>
                        <div className='img-custom'>
                            <img src={specialtyImg} />
                            <div>Cơ xương khớp 3</div>
                        </div>
                        <div className='img-custom'>
                            <img src={specialtyImg} />
                            <div>Cơ xương khớp 4</div>
                        </div>
                        <div className='img-custom'>
                            <img src={specialtyImg} />
                            <div>Cơ xương khớp 5</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
