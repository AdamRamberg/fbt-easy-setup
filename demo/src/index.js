import React from 'react';
import ReactDOM from 'react-dom';
import fbt from 'fbt';
import { LocaleProvider } from 'fbt-easy-setup';
import SelectLocale from './components/selectLocale';
import FlagEmoji from './components/flagEmoji';
import './app.css';

const App = () => (
  <LocaleProvider>
    <div className="main-container">
      <div className="toggle-container">
        <h1>
          <fbt desc="Toggle heading">FBT Easy Setup Demo</fbt>
        </h1>
        <FlagEmoji />
        <p>
          <fbt desc="Greeting">Howdy!</fbt>
        </p>
        <SelectLocale />
      </div>
    </div>
  </LocaleProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
