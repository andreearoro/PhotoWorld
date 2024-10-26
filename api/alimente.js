const URL = "https://670fe5c2a85f4164ef2c625c.mockapi.io/PhotoWorld"
export async function getAllProducts() {
    const response = await fetch(URL);
    const products = await response.json();

    return products;
}