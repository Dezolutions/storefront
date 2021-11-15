import CustomerForm from './components/CustomerForm/CustomerForm';
import CustomerInfo from './components/CustomerInfo/CustomerInfo';
import './App.css'
import { Layout } from '@shopify/polaris';
import CollectionList from './components/CollectionList/CollectionList';
import CollectionInfo from './components/CollectionInfo/CollectionInfo';
import ProductList from './components/ProductList/ProductList';
import ProductInfo from './components/ProductInfo/ProductInfo';
import StoreData from './components/StoreData/StoreData';

function App() {
  return (
    <div className="app">
      <Layout sectioned><StoreData/></Layout>
      <Layout sectioned={true}>
        <Layout.Section><CustomerForm/></Layout.Section>
        <Layout.Section><CustomerInfo/></Layout.Section>
      </Layout>
      <Layout sectioned={true}>
        <Layout.Section><CollectionList/></Layout.Section>
        <Layout.Section><CollectionInfo/></Layout.Section>
      </Layout>
      <Layout sectioned={true}>
        <Layout.Section ><ProductList/></Layout.Section>
        <Layout.Section ><ProductInfo/></Layout.Section>
      </Layout>
    </div>
  );
}

export default App;
