import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>

      <main className="app__main">
        <p>This demo React app will be internationalized by various i18n
          libaries.
        </p>
      </main>
    </div>
  );
}

export default App;
