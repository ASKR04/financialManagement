import React, { createContext, useState, useContext } from 'react';

const NotificationContext = createContext({
  message: '',
  setMessage: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState('');

  const updateMessage = (newMessage) => setMessage(newMessage);

  return (
    <NotificationContext.Provider value={{ message, updateMessage }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);
