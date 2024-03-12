import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import { AuthProvider } from "./store/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
