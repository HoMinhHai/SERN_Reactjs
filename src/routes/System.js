import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/Admin/UserRedux';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';
import Header from '../containers/Header/Header.js';
import ManageDoctor from '../containers/System/Admin/ManageDoctor.js';
class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <Fragment>
                {isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/user-redux" component={UserRedux} />
                            <Route path="/system/manage-doctor" component={ManageDoctor} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
