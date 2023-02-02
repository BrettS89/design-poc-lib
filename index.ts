import React from 'react';
import axios from 'axios';
import styles from './src/styles/theme';
const url = 'http://localhost:3030';

export const useDesignSystem = (designSystemId) => {
  const [status, setStatus] = React.useState({
    isLoading: true,
    isError: false,
    error: null,
  });

  const fetchTheme = async () => {
    try {
      const theme = await axios.get(`${url}/design/system/${designSystemId}`);
      setStatus({ isLoading: false, isError: false, error: null });
    } catch(e) {
      setStatus({ isLoading: false, isError: true, error: e.message });
    }
  };

  React.useEffect(() => {
    fetchTheme();
  }, []);

  return status;
};
