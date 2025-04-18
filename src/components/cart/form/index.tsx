'use client'

interface Props {
products: unknown
}

export const Form = ({products}: Props) => {
    console.log(products)
  return (
    <div>Form</div>
  )
}
