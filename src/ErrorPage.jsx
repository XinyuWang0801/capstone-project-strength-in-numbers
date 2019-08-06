import React from 'react';
import { Button, Result } from 'antd';

export const ErrorPage = () => {
  const handleClick = () => {
    window.location.href = '#';
  };

  return (
    <div className="ErrorPage">
      <Result
        subTitle="Sorry something went wrong, not to worry this has been brought to our attention!"
        extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
      />
    </div>
  );
};
