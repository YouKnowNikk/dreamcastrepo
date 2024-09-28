import { Provider } from 'react-redux';
import './App.css';
import store from './Store';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';

function App() {
  return (
    <>
    <Provider store={store}>
    <UserTable />
    <AddUserForm/>
    </Provider>
    </>
  );
}

export default App;
