import { Product } from "./Product";

export type CategoryProducts = {
  [id: string]: Product[];
};
