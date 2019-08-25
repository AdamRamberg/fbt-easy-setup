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
        <h1 className="h1-main-home">
          <fbt desc="Toggle heading">FBT Easy Setup Demo</fbt>
        </h1>
        <a
          className="link-npm"
          href="https://www.npmjs.com/package/fbt-easy-setup"
        >
          https://www.npmjs.com/package/fbt-easy-setup
        </a>
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
