import Product from "../../Product";

function waitforme(millisec: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, millisec);
  });
}

// TODO
export async function GetProductById(id: string): Promise<Product> {
  await waitforme(2000);

  return {
    id: id,
    name: "Test product name",
    description: "Test product description",
    isFavorite: false,
    price: 123,
  };
}
