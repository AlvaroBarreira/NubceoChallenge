
import DataContext from '../src/Contexts/ProviderData'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(

  <DataContext>
    <App />
  </DataContext>,
  document.getElementById('root')
);
