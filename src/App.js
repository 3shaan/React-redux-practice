import { Provider } from 'react-redux';
import './App.css';
import Action from './components/Action';
import HooksAction from './components/HooksAction';
import store from './redux/Cake/Store';
import IceCream from './components/IceCream'
import NewIceCream from './components/NewIceCream';
import ItemsContainer from './components/ItemsContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksAction></HooksAction>
        <Action></Action>
        <IceCream></IceCream>
        <NewIceCream />
        <ItemsContainer />
        <ItemsContainer cake/> */}
        <UserContainer></UserContainer>
      </div>
    </Provider>
  );
}

export default App;
