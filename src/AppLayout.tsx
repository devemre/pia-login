import { Preloader } from "./components";
import AppRoutes from "./router/AppRoutes";

const AppLayout = () => {
  return (
    <>
      <AppRoutes />
      <Preloader />
    </>
  );
};

export default AppLayout;
