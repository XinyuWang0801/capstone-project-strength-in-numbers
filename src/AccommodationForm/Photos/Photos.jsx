import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';
// import { Photo } from '.';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storage } from '../../firebase';
import * as Actions from '../../store/actions';


class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

    handleChange = (e) => {
      // console.log("props are: " + this.props);
      const { addImage } = this.props;
      if (e.target.files[0]) {
        const Image = e.target.files[0];
        this.setState({
          image: Image,
        });


        // const uploadTask = storage.ref(`images/${Image.name}`).put(Image);
        const { image } = this.state;
        addImage(image);


        // const img = this.state.image;
        // console.log(img);
      }
    }

  handleClick = () => {
    // console.log(this.props);
    const { Image } = this.state;
    const { updateUrl, getNextSection } = this.props;

    const uploadTask = storage.ref(`images/${Image.image.name}`).put(Image.image);
    uploadTask.on('state_changed',
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ progress });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage.ref('images').child(Image.image.name).getDownloadURL().then(() => {
          this.setState({ url: 'https://www.belightsoft.com/products/imagetricks/img/core-image-filters@2x.jpg' });
          const { ImageUrlAdded } = this.state;
          updateUrl(ImageUrlAdded);
          getNextSection('PHOTOS');
        });
      });
    // const { ImageUrlAdded } = this.state;
    // console.log(getNextSection);
    // console.log(updateAccommodationModel);
    // updateAccommodationModel();

    // updateUrl(ImageUrlAdded);
    // getNextSection('PHOTOS');
  };


  render() {
    const { image, url, progress } = this.state;
    return (
      <div className="PhotoSection">
        <h3>Do you have any photos you want to include?</h3>
        <Button>
          <p className="Button__Text">Add Photo</p>
          <input type="file" onChange={this.handleChange} />
          <Button>Upload </Button>
        </Button>
        <Button onClick={this.handleClick}>
          <p className="Button__Text">SKIP</p>
          <i className="material-icons">navigate_next</i>
        </Button>
        <progress value={progress} max="100" />
        <img src={url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addImage: Actions.addImage,
  updateUrl: Actions.updateUrl,
  // updateAccommodationModel: Actions.updateAccommodationModel,
}, dispatch);

export default connect(null, mapDispatchToProps)(Photos);

Photos.defaultProps = {
  getNextSection: null,
};

Photos.propTypes = {
  getNextSection: PropTypes.func,
};


