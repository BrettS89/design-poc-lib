import React, { useContext } from 'react';
import axios from 'axios';

interface DesignSystem {
  status: {
    isLoading: boolean;
    isError: boolean;
    error: null | string;
  };
  styles: Record<string, any>[];
}

const DesignSystemContext = React.createContext<DesignSystem>({ styles: [], status: { isLoading: true, isError: false, error: null } });
const DesignSystemUpdateContext = React.createContext((() => []) as any);

export const useDesignSystem = (designSystemId: string) => {
  const fn = useContext(DesignSystemUpdateContext);
  const ctx = useContext(DesignSystemContext);

  React.useEffect(() => {
    fn(designSystemId);
  }, []);
  
  return ctx.status
};

export const useStyles = (componentName: string) => {
  const { styles } = useContext(DesignSystemContext);

  const component = styles.find(el => el.componentName === componentName) || {};

  return component;
};

export const DesignSystemProvider = ({ children }) => {
  const [styles, setStyles] = React.useState([]);
  const [status, setStatus] = React.useState({ isLoading: true, isError: false, error: null });

  const setDesignSystem = async (designSystemId: string) => {
    try {
      setStatus({ ...status, isLoading: true });
      const designSystem = await axios.get(`https://bls.ngrok.io/design-poc-api/design/system/${designSystemId}`);
      // @ts-ignore
      const { data } = await axios.get(`https://bls.ngrok.io/design-poc-api/design/style?designSystemId=${designSystem.data._id}&$limit=1000`);
      setStyles(data.data);
      setStatus({ ...status, isLoading: false });
    } catch(e) {
      setStatus({ ...status, isLoading: false, isError: true, error: e.message });
    }
  };

  return (
    <DesignSystemContext.Provider value={{ styles, status }}>
      <DesignSystemUpdateContext.Provider value={setDesignSystem}>
        {children}
      </DesignSystemUpdateContext.Provider>
    </DesignSystemContext.Provider>
  );
};
