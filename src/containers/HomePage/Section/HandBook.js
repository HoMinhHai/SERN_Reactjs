import React, { Component } from 'react';
import { connect } from 'react-redux';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HandBook.scss'
import HandBook1 from '../../../assets/images/HandBook/HandBook1.png'
import HandBook2 from '../../../assets/images/HandBook/HandBook2.png'
import HandBook3 from '../../../assets/images/HandBook/HandBook3.png'
import HandBook4 from '../../../assets/images/HandBook/HandBook4.png'
import HandBook5 from '../../../assets/images/HandBook/HandBook5.png'
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
class HandBook extends Component {

    render() {

        return (
            <div className='section-handbook'>
                <div className='section-header'>
                    <h4>Cẩm nang</h4>
                    <button>Xem thêm</button>
                </div>
                <div className='section-content'>
                    <Slider {...this.props.settings}>
                        <div className='img-custom'>
                            <img src={HandBook1} />
                            <div>5 nha khoa niềng răng tốt nhất</div>
                        </div>
                        <div className='img-custom'>
                            <img src={HandBook2} />
                            <div>7 bác sĩ cơ xương khớp giỏi tại Hà Nội</div>
                        </div>
                        <div className='img-custom'>
                            <img src={HandBook3} />
                            <div>Tổng hợp phòng khám siêu âm thai gần đây</div>
                        </div>
                        <div className='img-custom'>
                            <img src={HandBook4} />
                            <div>Trồng răng Implant giá bao nhiêu</div>
                        </div>
                        <div className='img-custom'>
                            <img src={HandBook5} />
                            <div>9 địa chỉ trồng răng tại TP.HCM</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
