import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux'
import CakeShop from './components/CakeShop';
import CakeContainer from './components/CakeContainer';
import IceCreamCorner from './components/IceCreamCorner';
import IceCreamShop from './components/IceCreamShop';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeShop/>
        <CakeContainer/>
        <IceCreamCorner/>
        <IceCreamShop/>
      </div>
    </Provider>
  );
}

export default App;
