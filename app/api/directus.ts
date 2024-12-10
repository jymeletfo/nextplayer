import { Product } from "@/types/product";
import { createDirectus, rest, staticToken, readItems } from "@directus/sdk";

const token = "elKmoZO3ggQW1m9RG7iK0Z_2c78wdlU4";
const apiUrl = "https://mogador.directus.app";

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
