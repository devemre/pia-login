import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthProvider";
import { useEffect, useState } from "react";
import { Product } from "../../type/Product";
import { Card } from "../../components";

const DashboardPage = () => {
  const auth = useAuth();

  const products = useSelector((state: any) => state.product.products);
  const activeCategory = useSelector(
    (state: any) => state.product.activeCategory
  );

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products[activeCategory]) {
      setSelectedProducts(
        products[activeCategory] ? products[activeCategory] : []
      );
    }
  }, [activeCategory, products]);

  return (
    <div className="flex flex-col items-center min-h-screen flex-1 animated-gradient">
      <p className="text-3xl text-white">{activeCategory}</p>
      <div className="grid grid-cols-3 gap-2 p-4">
        {selectedProducts.map((product: any) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      {/*<button
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
      </button>*/}
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
