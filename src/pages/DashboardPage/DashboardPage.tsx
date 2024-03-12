import axiosInstance from "../../config/axiosConfig";
import { useAuth } from "../../context/AuthProvider";

const DashboardPage = () => {
  const auth = useAuth();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      DashboardPage
      <button
        className="border-2 border-blue-900 hover:border-blue-500 active:border-blue-300 focus:border-blue-700 transition-colors duration-200 rounded-md px-2 bg-white text-black"
        onClick={() => {
          var config = {
            method: "get",
            url: "https://dummyjson.com/products/?delay=5000",
            headers: {},
          };
          var config1 = {
            method: "get",
            url: "https://dummyjson.com/products/category/smartphones/?delay=2000",
            headers: {},
          };
          var config2 = {
            method: "get",
            url: "https://dummyjson.com/products/1/?delay=3000",
            headers: {},
          };
          axiosInstance(config).then(function (response) {
            console.log(JSON.stringify(response.data));
          });
          axiosInstance(config1).then(function (response) {
            console.log(JSON.stringify(response.data));
          });
          axiosInstance(config2).then(function (response) {
            console.log(JSON.stringify(response.data));
          });
        }}
      >
        Get All
      </button>
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
