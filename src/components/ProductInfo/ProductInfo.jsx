import { Card, DescriptionList, Heading } from '@shopify/polaris'
import React from 'react'
import { useSelector } from 'react-redux'
import { fetchData } from '../../functions/requests'
import { GET_PRODUCT_BY_HANDLE } from '../../graphql/queries'

const ProductInfo = () => {

  const productHandle = useSelector(state => state.productHandle)
  const [product, setProduct] = React.useState({})
  
  React.useEffect(() => {
    productHandle && fetchData(GET_PRODUCT_BY_HANDLE, {handle: productHandle})
    .then(({data: {productByHandle}}) => setProduct(productByHandle))
  },[productHandle])

  return (
    <Card sectioned>
      <Heading>Product Info</Heading>
      <DescriptionList
        spacing="tight"
        items={[{
          term: 'Name',
          description: product.title
        },
        {
          term: 'Description',
          description: product.description
        },
        {
          term: 'Handle',
          description: product.handle
        }]}
      />
    </Card>
  )
}

export default ProductInfo
