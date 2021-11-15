import { Card, Heading, OptionList } from '@shopify/polaris'
import React from 'react'
import { useDispatch } from 'react-redux'
import { GET_PRODUCTS } from '../../graphql/queries'
import { fetchData } from '../../functions/requests'
import { setProductHandle } from '../../store/action'

const ProductList = () => {

  const dispatch = useDispatch()
  const [products, setProducts] = React.useState([])
  const [selected, setSelected] = React.useState([]);

  React.useEffect(() => {
    fetchData(GET_PRODUCTS)
      .then(({data:{products: {edges}}}) => setProducts(edges))
  },[])

  React.useEffect(() => dispatch(setProductHandle(selected[0])), [selected])
  
  return (
    <Card sectioned>
      <Heading>Product list</Heading>
      <OptionList
        onChange={setSelected}
        selected={selected}
        options={products.map(product => {
          return { value: product.node.handle, label: product.node.title }
        })}
     /> 
    </Card>
  )
}

export default ProductList
