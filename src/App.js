
import './App.css';
import Header from './conmponent/header';
import CategoryWise from './conmponent/categorywise-news';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';

import store from './store';
import Footer from './conmponent/footer';

function App() {
  return (
    <div className="App">

    <Provider store={store} >


    <Header />


    <CategoryWise />


    <Footer />

    </Provider>

   
    
    </div>
  );
}

export default App;
