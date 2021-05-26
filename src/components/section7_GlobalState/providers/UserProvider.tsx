import React, { useState, createContext } from 'react';
import UserInfo from '../UserInfo';

export const UserContext = createContext<UserContextType>(
  {} as {
    sampleContextName: string;
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  }
);
export type UserContextType = {
  sampleContextName: string;
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>; //これが違ってる?
};
type Props = {
  children: {};
};

export const UserProvider = (props: Props) => {
  const { children } = props;
  const sampleContextName = 'ニャン次郎';

  const defaultUserInfo: UserInfo = {
    pathname: 'default-path',
    state: {
      isAdmin: false,
    },
  };

  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);

  return (
    <UserContext.Provider value={{ sampleContextName, userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
