import { Card, Heading, OptionList } from '@shopify/polaris'
import React from 'react'
import { fetchData } from '../../functions/requests'
import { GET_COLLECTIONS } from '../../graphql/queries'
import { setCollectionId } from '../../store/action'
import { useDispatch } from 'react-redux'

const CollectionList = () => {

  const dispatch = useDispatch()
  const [collections, setCollections] = React.useState([])
  const [selected, setSelected] = React.useState([]);

  React.useEffect(() => {
    fetchData(GET_COLLECTIONS)
      .then(({data:{collections: {edges}}}) => setCollections(edges))
  },[])

  React.useEffect(() => dispatch(setCollectionId(selected[0])), [selected])

  return (
    <Card sectioned>
      <Heading>Collection list</Heading>
     <OptionList
        onChange={setSelected}
        selected={selected}
        options={collections.map(collection => {
          return { value: collection.node.id, label: collection.node.title }
        })}
     /> 
    </Card>
  )
}

export default CollectionList
