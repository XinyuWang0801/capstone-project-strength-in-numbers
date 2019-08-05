import React from 'react';
import { BubbleIcon, Navbar, Panel, ProgressBar } from '../@components';
import { Communities } from '../icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import './AccommodationForm.scss';

class AccommodationForm extends React.Component {
  componentDidMount() {
    const { id, history, navigateToLogin } = this.props;

    if (!id) {
      navigateToLogin(history);
    }
  }

  componentWillUnmount() {
    const { clearAccommodationForm } = this.props;
    clearAccommodationForm();
  }

  getNextSection = (name) => {
    const { sectionCompleted, disableProgressBar } = this.props;

    if (disableProgressBar) { return; }
    sectionCompleted(name);
  }

  calculateProgress = () => {
    const { formOrder, progress } = this.props;

    const completed = progress / formOrder.length * 100;

    return completed;
  }

  navigateToSection = (e) => {
    const { navigateToSection, disableProgressBar } = this.props;

    if (disableProgressBar) { return; }
    navigateToSection(e.value);
  }

  render() {
    const { CMS, formOrder, progress, disableProgressBar } = this.props;

    return (
      <div className="AccommodationForm">
        <Navbar />
        {formOrder.map((item, index) => (
          <Panel isMounted={progress === index} getNextSection={this.getNextSection}>{item.component}</Panel>
        ))}
        {disableProgressBar
          && (
            <div className="AccommodationForm__Completed">
              <h3>{CMS.completedHeader}</h3>
              <Communities />
            </div>
          )}
        <div className="AccommodationForm__Footer">
          <ProgressBar now={this.calculateProgress()}>
            <div className="ProgressBar__Navigation">
              {formOrder.map((item, index) => (
                <BubbleIcon value={item.name} onClick={this.navigateToSection} toggled={index === progress}>
                  {React.cloneElement(item.icon, { width: '35px', height: '35px' })}
                </BubbleIcon>
              ))}
            </div>
          </ProgressBar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.accommodationForm,
    progress: state.accommodationFormState.progress,
    formOrder: state.accommodationFormState.formOrder,
    disableProgressBar: state.accommodationFormState.disableProgressBar,
    id: state.accountState.id,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  sectionCompleted: Actions.sectionCompleted,
  navigateToSection: Actions.navigateToSection,
  navigateToLogin: Actions.navigateToLogin,
  clearAccommodationForm: Actions.clearAccommodationForm,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationForm);
