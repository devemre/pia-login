import { createContext, useContext, useState } from "react";
import { Preloader } from "../components";

const PreloaderContext = createContext<{
  showPreloader: boolean;
  setShowPreloader: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  showPreloader: false,
  setShowPreloader: () => {},
});

export const usePreloader = () => useContext(PreloaderContext);

const PreloaderProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [showPreloader, setShowPreloader] = useState(false);

  return (
    <PreloaderContext.Provider value={{ showPreloader, setShowPreloader }}>
      {showPreloader ? <Preloader /> : null}
      {children}
    </PreloaderContext.Provider>
  );
};

export default PreloaderProvider;
