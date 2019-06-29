import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '../../../@components';
import './RoomListing.scss';

export class RoomListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteConfirmation: false,
    };
  }

  onDeleteClicked = () => {
    this.setState({
      showDeleteConfirmation: true,
    });
  };

  cancelDeletePrompt = () => {
    this.setState({
      showDeleteConfirmation: false,
    });
  }

  handleDeleteRoomListing = () => {
    const { deleteRoomListing, roomNumber } = this.props;
    deleteRoomListing(roomNumber);
  }

  render() {
    const { showDeleteConfirmation } = this.state;
    const { bedListings, roomNumber } = this.props;

    return (
      <div className="RoomListing">
        <div className="RoomListing__HeaderSection">
          <h5>Room {roomNumber + 1}</h5>
          {!showDeleteConfirmation && (
            <button
              type="button"
              className="material-icons RoomListing__DeleteBtn"
              value={0}
              onClick={this.onDeleteClicked}
            >
                delete
            </button>
          )}
        </div>
        {!showDeleteConfirmation && (
          <div className="RoomListing__Beds">
            {bedListings.map(item => React.cloneElement(item, { deletable: false }))}
          </div>
        )}
        {showDeleteConfirmation && (
          <div className="RoomListing__DeletePanel">
            Are you sure you want to delete this?
            <div className="RoomListing__DeletePanel__Buttons">
              <Button onClick={this.handleDeleteRoomListing}>Delete</Button>
              <Button onClick={this.cancelDeletePrompt}>Cancel</Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

RoomListing.defaultProps = {
  roomNumber: 0,
};

RoomListing.propTypes = {
  bedListings: PropTypes.node.isRequired,
  roomNumber: PropTypes.number,
  deleteRoomListing: PropTypes.func.isRequired,
};
