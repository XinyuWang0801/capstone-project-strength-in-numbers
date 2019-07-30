import PropTypes from 'prop-types';
import React from 'react';
import { Book } from '../../icons';
import { Button, Icon, Input } from 'antd';
import { Heading } from '../../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

import './Description.scss';

const { TextArea } = Input;

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.descriptionRef = React.createRef();
  }

  handleClick = () => {
    const { addDescription, getNextSection } = this.props;
    const description = this.descriptionRef.current.textAreaRef.value;

    addDescription(description);
    getNextSection('DESCRIPTION');
  };

  render() {
    const { CMS } = this.props;

    return (
      <div className="DescriptionSection">
        <Heading
          title={CMS.descriptionHeader}
          icon={<Book />}
        />
        <TextArea
          autosize={{ minRows: 6, maxRows: 6 }}
          placeholder="Description"
          size="large"
          className="DescriptionSection__TextArea"
          ref={this.descriptionRef}
        />
        <Button onClick={this.handleClick} type="primary" className="antd__Button--centered" size="large">
          CONTINUE
          <Icon type="right" />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.descriptionSection,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addDescription: Actions.addDescription,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Description);

Description.defaultProps = {
  getNextSection: null,
};

Description.propTypes = {
  getNextSection: PropTypes.func,
};
