import { Preloader, Sidebar } from "./components";
import { useAuth } from "./context/AuthProvider";
import AppRoutes from "./router/AppRoutes";

const AppLayout = () => {
  const auth = useAuth();

  if (!auth.user) {
    return (
      <>
        <AppRoutes />
        <Preloader />
      </>
    );
  }
  return (
    <div className="flex flex-row">
      <Sidebar />
      <AppRoutes />
      <Preloader />
    </div>
  );
};

export default AppLayout;
