import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './OutstandingDoctor.scss'
import * as actions from '../../../store/actions'
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router'

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
class OutstandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }
    handleViewDetailDoctor = (doctor) => {
        this.props.history.push(`/detail-doctor/${doctor.id}`)
    }
    render() {
        let allDoctors = this.state.arrDoctors
        let { language } = this.props
        return (
            <div className='section-doctor' >
                <div className='section-header'>
                    <h4><FormattedMessage id="homepage.outstanding-doctor" /></h4>
                    <button>
                        <FormattedMessage id="homepage.more-info" />
                    </button>
                </div>
                <div className='section-content'>
                    <Slider {...this.props.settings}>

                        {allDoctors && allDoctors.length > 0 &&
                            allDoctors.map((item, index) => {
                                let imageBase64 = ''
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName} `
                                let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`
                                return (
                                    <div className='img-custom' key="index" onClick={() => this.handleViewDetailDoctor(item)}>
                                        <img src={imageBase64} />
                                        <div>
                                            {language === LANGUAGES.VI ? nameVi : nameEn}

                                        </div>
                                        <div>Cơ xương khớp</div>
                                    </div>

                                )
                            })}

                    </Slider>
                </div >
            </div >


        );
    }

}

const mapStateToProps = state => {
    return {
        topDoctorsRedux: state.admin.topDoctors,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor));
