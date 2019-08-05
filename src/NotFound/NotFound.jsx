import React from 'react';
import { Navbar } from '../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Action from '../store/actions';
import './NotFound.scss';

class NotFound extends React.Component {
    render() {
        return (
            <div className="NotFound">
                <h1 className="NotFound__Text">
                    404
                </h1>
            </div>
        )
    }
    
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createUser: Action.createUser,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotFound);
