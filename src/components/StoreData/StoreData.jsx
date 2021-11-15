import { DisplayText, TextStyle } from '@shopify/polaris'
import React from 'react'
import { fetchData } from '../../functions/requests'
import { GET_SHOP_DATA } from '../../graphql/queries'
import styles from './store.module.css'

const StoreData = () => {

  const [store, setStore] = React.useState({})

  React.useEffect(() => {
    fetchData(GET_SHOP_DATA)
      .then(({data: {shop}}) => setStore(shop))
  },[])

  return (
    <div className={styles.shopBlock}>
      <DisplayText size="extraLarge">{store.name}</DisplayText>
      <div className={styles.shopDescription}><TextStyle variation="subdued">{store.description}</TextStyle></div>
    </div>
  )
}

export default StoreData
