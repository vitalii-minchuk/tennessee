"use client";

import { ChangeEventHandler, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const TgTestForm = () => {
  const [text, setText] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value); 
  };

  const handleClick = async () => {
    const result = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
    console.log(result)
  }

  return (
    <div>
      <Input value={text} onChange={handleChange} />
      <Button onClick={handleClick}>ok</Button>
    </div>
  );
};
