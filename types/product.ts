export type Product = {
  product_key: string;
  biznum: string;
  title: string;
  short_title: string;
  product_year: string;
  duration: string;
  images: ProductImage[];
  url: string;
  press_fr_title: string;
  press_fr_short_summary: string;
  press_fr_long_summary: string;
};

export type ProductImage = {
  format: string;
  name: string;
  usage: string;
  path: string;
};
