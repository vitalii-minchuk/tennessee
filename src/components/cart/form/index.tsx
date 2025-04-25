"use client";

import { ChangeEventHandler, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

interface Props {
  products: unknown;
}

export const Form = ({ products }: Props) => {
  const [text, setText] = useState("");
  console.log(products);

  const fetchSettlements = async (search: string) => {
    if (!search) return;

    const res = await fetch(
      "/api/nova-post?search=" + encodeURIComponent(search)
    );
    return await res.json();
  };

  const createPayment = async () => {
    try {
      const response = await fetch("/api/payments", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: {
            email: "user@example.com",
          },
          totalPrice: 1200,
          orderItems: [
            {
              productId: "68022759cb49a7a06637a3db",
              sizeId: "67f9163fc7c93cbd18402fd1",
              quantity: 1,
            },
          ],
        }),
      });

      return await response.json();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return [];
    }
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handlePayment = () => {
    // createPayment().then((res) => {
      console.log('+++');
    // });
  };

  const handleClick = () => {
    fetchSettlements(text).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Input value={text} onChange={handleChange} />
      <Button onClick={handleClick}>send</Button>
      <Button onClick={handlePayment}>create</Button>
    </div>
  );
};
