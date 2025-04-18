import { Form } from "~/components/cart/form";

export default async function ThankYouPage() {

  const fetchProducts = async () => {
    try {
        const response = await fetch(process.env.PUBLIC_NEXT_SERVER_BASE_URL + '/products')

        return await response.json() ?? [];
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return []
    }
};
  const products = await fetchProducts()
    return (
      <div className="bg-zinc-950 h-screen">
        <Form products={products}/>
      </div>
    );
  }
  