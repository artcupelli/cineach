import { Provider } from 'react-redux';
import { MainScreen } from './screens';
import store from './store';

function App() {


  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
