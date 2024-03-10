import { useAuth } from "../../store/AuthProvider";

const DashboardPage = () => {
  const auth = useAuth();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      DashboardPage
      <button
        className="border-2 border-blue-900 hover:border-blue-500 active:border-blue-300 focus:border-blue-700 transition-colors duration-200 rounded-md px-2 bg-white text-black"
        onClick={() => {
          auth.logout();
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default DashboardPage;
