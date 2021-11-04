import React from 'react'
import {useDispatch} from 'react-redux'
import { onSubmitForm } from '../../store/action'
import {Button, Card, TextField, Heading} from '@shopify/polaris'
import styles from './customerForm.module.css'
const CustomerForm = () => {
  
  const dispatch = useDispatch()
  
  //states
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  //handlers
  const onChangeEmail = React.useCallback((newValue) => setEmail(newValue), []);
  const onChangePassword = React.useCallback((newValue) => setPassword(newValue), []);
  
  //submit functions
  const onSubmit = () => {
    dispatch(onSubmitForm(email,password))
    setEmail('')
    setPassword('')
  }


  return (
      <Card sectioned>
        <Heading>Customer form</Heading>
        <TextField label="Enter email" type="text" value={email} onChange={onChangeEmail} />
        <TextField label="Enter password" type="password" value={password} onChange={onChangePassword} />
        <div className={styles.button}><Button onClick={onSubmit} primary>Submit</Button></div>
      </Card>
    
  )
}

export default CustomerForm
