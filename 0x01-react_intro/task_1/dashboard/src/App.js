import './App.css';
import HolbertonLogo from './HolbertonLogo.jpg'
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className='Root'>
      <div className='App-header'>
        <img src={HolbertonLogo} alt="logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>{getFullYear()} - {getFooterCopy(false)}</p>
      </div>
    </div>
  );
}

export default App;
