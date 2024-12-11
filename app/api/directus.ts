import { Product } from "@/types/product";
import { createDirectus, rest, staticToken, readItems } from "@directus/sdk";

const token = process.env.API_TOKEN! as string;
const apiUrl = process.env.API_URL! as string;

type DBSchema = {
  tfo_products: Product[];
};

const client = createDirectus<DBSchema>(apiUrl)
  .with(staticToken(token))
  .with(rest());

export async function getProducts() {
  const data = await client.request(
    readItems("tfo_products", {
      limit: 10,
    })
  );

  return data;
}
