import React from 'react';
import classNames from 'classnames';
import './Panel.scss';

export class Panel extends React.Component {
  constructor(props) {
    super(props);

    const { isMounted } = this.props;

    this.state = {
      shouldRender: isMounted,
    };
  }

  componentDidUpdate(prevProps) {
    const { isMounted } = this.props;

    if (prevProps.isMounted && !isMounted) {
      this.setState({ shouldRender: false });
    } else if (!prevProps.isMounted && isMounted) {
      this.setState({ shouldRender: true });
    }
  }

  render() {
    const { shouldRender } = this.state;
    const { children } = this.props;

    return (
      <div className={classNames('Panel', shouldRender ? 'Panel__Show' : 'Panel__ShouldHide')}>
        {React.cloneElement(children, { ...this.props })}
      </div>
    );
  }
}
