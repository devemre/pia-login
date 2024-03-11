import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import { AuthProvider } from "./store/AuthProvider";
import PreloaderProvider from "./store/PreloaderProvider";

const App = () => {
  return (
    <PreloaderProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppLayout />
        </AuthProvider>
      </BrowserRouter>
    </PreloaderProvider>
  );
};

export default App;
