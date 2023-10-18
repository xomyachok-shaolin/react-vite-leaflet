import React, { FC, useEffect } from 'react';
import { Navigate, RouteProps } from 'react-router';
import { useRecoilState } from 'recoil';
import { userState } from '@/stores/user';
import { useGetCurrentUser } from '@/api';

const PrivateRoute: FC<RouteProps> = ({children}) => {

  const [user, setUser] = useRecoilState(userState);

  console.log('user: ', user);
  const logged = user.username? true: false;
  console.log('username: ', user.username, logged);

  const { data: currentUser, error } = useGetCurrentUser();

  useEffect(() => {
    console.log("currentUser: ", currentUser);
    setUser({ ...user, username: currentUser?.username || "", logged: true });
  }, [currentUser]);

  if (error) {
    setUser({ ...user, logged: false });
    return <Navigate to="/login" />
      
  }
  
  return logged ? (
    <div>{children}</div>
  ) : <Navigate to="/login" />
};

export default PrivateRoute;
