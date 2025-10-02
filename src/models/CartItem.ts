import { Product } from "~/models/Product";

export type CartItem = {
  product: Partial<Product>;
  count: number;
};
