const url = "http://localhost:3001/products";

export default async function getProduct() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP Error Status: " + response.status);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
