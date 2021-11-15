import React from 'react'
import { useSelector } from 'react-redux'
import {DescriptionList, Heading, TextStyle, Card, InlineError} from '@shopify/polaris'
import styles from './customerinfo.module.css'

const CustomerInfo = () => {

  const customer = useSelector(state => state.customer)
  return (
    <Card sectioned>
      {customer[0]?.code 
        ? <InlineError message={customer[0].code} fieldID="CustomerIdentityError"/>
        : <>
            <Heading>Customer info</Heading>
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
            {customer.addresses?.edges?.length
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
      } 
    </Card> 
  )
}

export default CustomerInfo
