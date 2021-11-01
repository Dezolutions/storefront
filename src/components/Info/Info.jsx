import React from 'react'
import { useSelector } from 'react-redux'
import {DescriptionList, Heading, TextStyle} from '@shopify/polaris'
import styles from './info.module.css'

const Info = () => {

  const customer = useSelector(state => state.customer)
  
  return (
    <>
      <DescriptionList
        spacing="tight"
        items={[{
          term: 'Name',
          description: customer.firstName
        },
        {
          term: 'Last name',
          description: customer.lastName
        },
        {
          term: 'Email',
          description: customer.email
        },
        {
          term: 'Phone',
          description: customer.phone || <TextStyle variation="subdued">no phone</TextStyle>
        },]}
      />  
      <Heading>Address:</Heading>
      {customer.addresses?.edges
        ? <div className={styles.addressList}>
            <DescriptionList
              spacing="tight"
              items={[
                {
                  term: 'City',
                  description: customer.addresses.edges[0].node?.city
                },
                {
                  term: 'Country',
                  description: customer.addresses.edges[0].node.country
                },
                {
                  term: 'Street',
                  description: customer.addresses.edges[0].node.address1
                }
              ]}
            />
          </div>
        : <TextStyle variation="subdued">no Address</TextStyle>
      }   
    </> 
  )
}

export default Info
