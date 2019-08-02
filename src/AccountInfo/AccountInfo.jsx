import React from 'react';
import { Bed02, Calendar, Toilet } from '../icons';
import { Divider, Empty, Icon, List } from 'antd';
import { Navbar } from '../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import * as Services from '../store/services';

import './AccountInfo.scss';

const BedIcon = props => <Icon component={Bed02} {...props} />;
const CalendarIcon = props => <Icon component={Calendar} {...props} />;
const ToiletIcon = props => <Icon component={Toilet} {...props} />;

export class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { getBookedAccommodations, id, history, navigateToLogin } = this.props;

    if (!id) {
      navigateToLogin(history);
      return;
    }

    getBookedAccommodations();
  }

  getNumberOfBeds = (rooms) => {
    return rooms ? rooms.reduce((acc, room) => acc + room.reduce((_acc, bed) => _acc + bed.numberOfBeds, 0), 0) : '';
  }

  renderBathroomsAndBeds = (bathrooms, rooms, dates) => {
    return (
      <div className="AccountInfo__BedBathrooms">
        <span className="AccountInfo__FeatureIcons"><BedIcon style={{ fontSize: '2em', color: '#007bff' }} />{this.getNumberOfBeds(rooms)} beds</span>
        <span className="AccountInfo__FeatureIcons"><ToiletIcon style={{ fontSize: '2em', color: '#007bff' }} />{bathrooms} bathrooms</span>
        <span className="AccountInfo__FeatureIcons"><CalendarIcon style={{ fontSize: '2em', color: '#007bff' }} />{`${dates[0]} - ${dates[1]}`}</span>
      </div>
    );
  }

  renderListItems = (item) => {
    return (
      <List.Item
        key={item.name}
        extra={
          item.photos ? <img width={272} alt="logo" src={item.photos[0]} /> : <Empty />
        }
        actions={[
          <div>{`${item.location.street}, ${item.location.city}, ${item.location.country}`}</div>,
        ]}
      >
        <List.Item.Meta
          title={<a href={item.href}>{item.name}</a>}
          description={this.renderBathroomsAndBeds(item.bathrooms, item.roomArrangement, item.bookedDates)}
        />
        {Services.trimDescription(item.description)}
      </List.Item>
    );
  }

  render() {
    const { bookings, CMS } = this.props;

    return (
      <div className="AccountInfo">
        <Navbar />
        <div className="AccountInfo__BookedAccommodations">
          <Divider orientation="left"><h4>{CMS.accountInfoHeader}</h4></Divider>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{ pageSize: 3 }}
            dataSource={bookings}
            renderItem={this.renderListItems}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.accountInfo,
    bookings: state.accountState.bookings,
    id: state.accountState.id,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getBookedAccommodations: Actions.getBookedAccommodations,
  navigateToLogin: Actions.navigateToLogin,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
