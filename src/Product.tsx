import React from "react"
import { OrderProduct } from "./Models"

type Props = {
  product: OrderProduct
}

const Product = ({ product }: Props) => {
  const paintProductInfo = (product: OrderProduct) => {
    return (
      <>
        <p>{`상품명: ${product.name}`}</p>
        <p>{`가격: ${product.price}원`}</p>
        <p>{`주문정보: ${product.stock.color}/${product.stock.size} ${product.stock.quantity}개`}</p>
        <p>{`----------------------------`}</p>
      </>
    )
  }
  return <>{paintProductInfo(product)}</>
}

export default Product
