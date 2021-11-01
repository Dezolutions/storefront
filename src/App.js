import CustomerForm from './components/CustomerForm/CustomerForm';
import Info from './components/Info/Info';
import './app.css'
import { Layout } from '@shopify/polaris';

function App() {
  return (
    <div className="app">
      <Layout>
        <Layout.Section oneHalf><CustomerForm/></Layout.Section>
        <Layout.Section oneHalf><Info/></Layout.Section>
      </Layout>
    </div>
  );
}

export default App;
