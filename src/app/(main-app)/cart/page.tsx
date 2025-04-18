import { Form } from "~/components/cart/form";

export default async function ThankYouPage() {
  const products = await fetch(process.env.SERVER_BASE_URA + '/products')

    return (
      <div className="bg-zinc-950 h-screen">
        <Form products={products}/>
      </div>
    );
  }
  