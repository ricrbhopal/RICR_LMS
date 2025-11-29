import React, { createContext, useContext, useState } from 'react';

const ReferEarnContext = createContext();

export const useReferEarn = () => {
  const context = useContext(ReferEarnContext);
  if (!context) {
    throw new Error('useReferEarn must be used within ReferEarnProvider');
  }
  return context;
};

export const ReferEarnProvider = ({ children }) => {
  const [showReferEarn, setShowReferEarn] = useState(false);

  const openReferEarn = () => setShowReferEarn(true);
  const closeReferEarn = () => setShowReferEarn(false);

  return (
    <ReferEarnContext.Provider
      value={{
        showReferEarn,
        openReferEarn,
        closeReferEarn,
      }}
    >
      {children}
    </ReferEarnContext.Provider>
  );
};
