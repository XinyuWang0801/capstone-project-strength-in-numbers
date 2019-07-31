import React from 'react';
import { Bed02, Calendar, Toilet } from '../icons';
import { Icon, List } from 'antd';
import { Navbar } from '../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Services from '../store/services';

import './AccountInfo.scss';

const BedIcon = props => <Icon component={Bed02} {...props} />;
const CalendarIcon = props => <Icon component={Calendar} {...props} />;
const ToiletIcon = props => <Icon component={Toilet} {...props} />;

const listData = [];
for (let i = 0; i < 4; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `Cottage at Alexandria ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    bathrooms: 2,
    beds: 2,
    dates: {
      start: '15/05/2019',
      end: '20/05/2019',
    },
    description:
      'Just under two hours from Sydney, this exclusive country guesthouse has everything you need to escape the city and enjoy the beautiful Southern Highlands!\n\nStylish interiors, equipped with two bedrooms, a modern bathroom, laundry, kitchen, living & dining!\n\nThe property is also on Instagram if you\'d like to see more images sunnybank_kangaloon.\n\nSunday nights are available upon request.\n\n*** STRICTLY NO BRIDAL OR WEDDING PARTIES ***\n\nOther things to note\nPlease note that internet access is intermittent due to occasional storms.',
  });
}

export class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderBathroomsAndBeds = (bathrooms, beds, dates) => {
    return (
      <div className="AccountInfo__BedBathrooms">
        <span className="AccountInfo__FeatureIcons"><BedIcon style={{ fontSize: '2em', color: '#007bff' }} />{beds} beds</span>
        <span className="AccountInfo__FeatureIcons"><ToiletIcon style={{ fontSize: '2em', color: '#007bff' }} />{bathrooms} bathrooms</span>
        <span className="AccountInfo__FeatureIcons"><CalendarIcon style={{ fontSize: '2em', color: '#007bff' }} />{dates.start}</span>
      </div>
    );
  }

  renderListItems = (item) => {
    return (
      <List.Item
        key={item.title}
        extra={
          <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
        }
      >
        <List.Item.Meta
          title={<a href={item.href}>{item.title}</a>}
          description={this.renderBathroomsAndBeds(item.bathrooms, item.beds, item.dates)}
        />
        {Services.trimDescription(item.description)}
      </List.Item>
    );
  }

  render() {
    const { CMS } = this.props;

    return (
      <div className="AccountInfo">
        <Navbar />
        <div className="AccountInfo__BookedAccommodations">
          <h4>{CMS.accountInfoHeader}</h4>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{ pageSize: 3 }}
            dataSource={listData}
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
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
