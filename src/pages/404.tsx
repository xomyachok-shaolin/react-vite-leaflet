import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="К сожалению, страница, которую вы посетили, не существует."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Домой
        </Button>
      }
    ></Result>
  );
};

export default NotFoundPage;