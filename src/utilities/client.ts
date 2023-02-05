import React from 'react';
import axios from 'axios';

const useDesignSystem = (designSystemId: string) => {
  const [status, setStatus] = React.useState({ isLoading: true, isError: false, });

  const fetchDesignSystem = async () => {
    try {
      const designSystem = await axios.get(`http://localhost:3030/design/system/${designSystemId}`);
      
    } catch {
      setStatus({ isLoading: false, isError: true });
    }
  };

  React.useEffect(() => {
    fetchDesignSystem();
  });

  return status;
};

export default useDesignSystem;
