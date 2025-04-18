'use client'

import { ChangeEventHandler, useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

interface Props {
products: unknown
}

export const Form = ({products}: Props) => {
    const [text, setText] = useState('')
    console.log(products)

    const fetchSettlements = async (search: string) => {
        if (!search) return

        const res = await fetch('/api/nova-post?search=' + encodeURIComponent(search))
        return await res.json()
    }
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        fetchSettlements(text).then((res) => {
            console.log(res)
        })
    }

  return (
    <div>
        <Input value={text} onChange={handleChange} />
        <Button onClick={handleClick}>send</Button>
    </div>
  )
}
