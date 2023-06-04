import UserRouter from './UserRouter';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
