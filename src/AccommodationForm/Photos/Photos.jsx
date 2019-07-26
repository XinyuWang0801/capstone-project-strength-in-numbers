import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon, Upload, message } from 'antd';
import { ErrorMessage, Heading } from '../../@components';
import { PictureAdd } from '../../icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import * as Services from '../../store/services';

import './Photos.scss';

const { Dragger } = Upload;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      isUploading: false,
      photoUploadingInProgress: false,
    };
  }

  handleUploadSuccess = (info) => {
    const { fileList } = this.state;
    const { status } = info.file;

    if (status === 'uploading') {
      this.setState({ isUploading: true });
    } else if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
      const nFileList = [...fileList,
        {
          uid: info.file.uid,
          url: `${info.file.response.url}`,
        },
      ];
      this.setState({
        fileList: nFileList,
        isUploading: false,
        photoUploadingInProgress: false,
      });
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  removeUploadedPhoto = (info) => {
    const { fileList } = this.state;
    const nFileList = fileList.filter(item => item.uid !== info.uid);

    Services.removePhoto(info.uid);
    this.setState({ fileList: nFileList });
    message.success(`${info.name} file removed successfully`);
  }

  handleClick = () => {
    const { fileList, isUploading } = this.state;
    const { completePhotoSection, getNextSection } = this.props;

    this.setState({
      photoUploadingInProgress: isUploading,
    });
    if (isUploading) { return; }
    completePhotoSection(fileList);
    getNextSection('PHOTOS');
  };

  render() {
    const { photoUploadingInProgress } = this.state;
    const { CMS } = this.props;

    return (
      <div className="PhotosSection">
        <Heading
          title={CMS.photoHeader}
          icon={<PictureAdd />}
        />
        <div className="PhotosSection__Upload">
          <Dragger
            customRequest={Services.uploadPhoto}
            onChange={this.handleUploadSuccess}
            onRemove={this.removeUploadedPhoto}
            listType="picture"
            className="upload-list-inline"
          >
            <p className="ant-upload-drag-icon">
              <Icon type="cloud" theme="twoTone" />
            </p>
            <p className="ant-upload-text">{CMS.photoUploadText}</p>
          </Dragger>
          {photoUploadingInProgress && <ErrorMessage>{CMS.photoUploadingInProgress}</ErrorMessage>}
        </div>
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
    CMS: state.CMS.photosSection,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  completePhotoSection: Actions.completePhotoSection,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

Photos.defaultProps = {
  getNextSection: null,
};

Photos.propTypes = {
  getNextSection: PropTypes.func,
};
