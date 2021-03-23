import React from "react"
import { Shipping } from "./Models"
import Product from "./Product"

type Props = {
  shipping: Shipping
}

const Shippings = ({ shipping }: Props) => {
  const paintShippingInfo = (shipping: Shipping) => {
    return (
      <>
        <p>{`[배송정보]`}</p>
        <p>{`송장번호: ${shipping.trackingNumber}`}</p>
        <p>{`배송료: ${shipping.shippingFee}원`}</p>
        <p>{`주소: [${shipping.post}] ${shipping.address}`}</p>
        <p>{`메시지: ${shipping.message}`}</p>
        <p>{`----------------------------`}</p>
      </>
    )
  }

  return (
    <>
      {paintShippingInfo(shipping)}
      {shipping.products.map((product) => (
        <Product {...{ product }} />
      ))}
    </>
  )
}

export default Shippings
