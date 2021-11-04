import { Card, DescriptionList, Heading } from '@shopify/polaris'
import React from 'react'
import { useSelector } from 'react-redux'
import { fetchData } from '../../functions/requests'
import { GET_COLLECTION } from '../../graphql/queries'

const ProductList = () => {

  const collectionId = useSelector(state => state.collectionId)
  const [info, setInfo] = React.useState({})

  React.useEffect(() => {
    collectionId && fetchData(GET_COLLECTION,{id: collectionId})
    .then(({data:{node}}) => setInfo(node))
  },[collectionId])

  return (
    <Card sectioned>
      <Heading>Collection - {info.title}</Heading>
      <DescriptionList
        spacing="tight"
        items={[{
          term: 'Name',
          description: info.title
        },
        {
          term: 'Description',
          description: info.description
        },
        {
          term: 'Handle',
          description: info.handle
        }]}
      />
    </Card>
  )
}

export default ProductList
