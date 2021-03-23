import React from "react"
import { useState, useEffect } from "react"
import { Order } from "./Models"
import Shippings from "./Shippings"

type Props = {
  assetOrder: object
  hideProgress: () => void
}

const Orders = ({ assetOrder, hideProgress }: Props) => {
  const [order, setOrder] = useState<Order>()

  const paintOrderInfo = (order: Order) => {
    return (
      <>
        <p>{`주문번: ${order.id}`}</p>
        <p>{`주문일: ${order.orderAt}`}</p>
        <p>{`총 결제금액: ${order.amount}원`}</p>
        <p>{`----------------------------`}</p>
        {order.shipping.map((shipping) => (
          <Shippings {...{ shipping }} />
        ))}
      </>
    )
  }

  useEffect(() => {
    const parseOrder = (json: any) => {
      setTimeout(() => {
        const order: Order = {
          id: json.id,
          orderAt: new Date(json.orderAt),
          amount: json.amount,
          shipping: json.shipping,
        }
        setOrder(order)
        hideProgress()
      }, 500)
    }
    parseOrder(assetOrder)
  })

  return <>{order ? paintOrderInfo(order) : <></>}</>
}

export default Orders
