import React from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    let {id} = useParams ();
    const detailProduct = products.find((item) => item.id == id)
  return (
    <div>
      ighfao
    </div>
  )
}

export default Detail
