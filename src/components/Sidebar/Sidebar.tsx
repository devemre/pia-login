import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCategories, getProducts } from "../../services/product";
import store from "../../store/store";
import { setCategories, setProducts } from "../../store/slices/productSlice";
import { Product } from "../../type/Product";

const Sidebar = () => {
  const products = useSelector((state: any) => state.product.products);
  const categories = useSelector((state: any) => state.product.categories);

  const getProductsAndCategories = async () => {
    const products = await getProducts();
    const categories = await getCategories();

    store.dispatch(setProducts(products));
    store.dispatch(setCategories(categories));
  };

  useEffect(() => {
    getProductsAndCategories();
  }, []);
  console.log(" Test products: ", products);
  console.log(" Test categories: ", categories);

  return (
    <div className="bg-slate-800 text-white">
      <p className="text-xl p-2 underline">Menu</p>
      {categories.map((category: string) => (
        <div
          key={category}
          className="px-2 py-1 hover:bg-slate-500 transition-colors duration-250"
        >
          {category
            .replace("-", " ")
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
