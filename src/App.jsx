import Cards from 'components/Cards';
import { Provider } from 'react-redux';

import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Cards />
    </Provider>
  );
}

export default App;
