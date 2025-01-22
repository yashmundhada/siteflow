import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          {' '}
          hello{' '}
        </a>
        <Button
          variant="contained"
          style={{
            color: 'green',
            backgroundColor: 'yellow',
            width: '500px',
          }}
          onClick={() => {
            console.log('hello');
          }}>
          Hello world
        </Button>
      </header>
    </div>
  );
}

export default App;
