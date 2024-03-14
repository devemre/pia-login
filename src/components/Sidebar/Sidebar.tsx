import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCategories, getProductsByCategory } from "../../services/product";
import store from "../../store/store";
import {
  setActiveCategory,
  setCategories,
  setProducts,
} from "../../store/slices/productSlice";

const Sidebar = () => {
  const products = useSelector((state: any) => state.product.products);
  const categories = useSelector((state: any) => state.product.categories);
  const activeCategory = useSelector(
    (state: any) => state.product.activeCategory
  );

  const getAllCategories = async () => {
    const allCategories = await getCategories();

    store.dispatch(setCategories(allCategories));
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleSelectCategory = async (id: string) => {
    store.dispatch(setActiveCategory(id));

    if (products[id]) {
      return;
    }

    const selectedProducts = await getProductsByCategory(id);

    store.dispatch(
      setProducts({
        ...products,
        [id]: selectedProducts.products,
      })
    );
  };

  return (
    <div className="bg-slate-800 text-white">
      <p className="text-xl p-2 underline">Menu</p>
      {categories.map((category: string) => (
        <div
          key={category}
          className="px-2 py-1 hover:bg-slate-500 transition-colors duration-250"
          style={
            category === activeCategory
              ? {
                  backgroundColor: "rgb(226, 232, 240)",
                  color: "rgb(30, 41, 59)",
                }
              : {}
          }
          onClick={() => handleSelectCategory(category)}
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
