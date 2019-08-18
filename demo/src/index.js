import React from 'react';
import ReactDOM from 'react-dom';
import fbt from 'fbt';
import { LocaleProvider } from 'fbt-easy-setup';
import ToggleLocale from './toggleLocale';

const App = () => (
  <LocaleProvider>
    <div>
      <h1>
        <fbt desc="demo heading">FBT Demo</fbt>
      </h1>
      <p>
        <fbt desc="demo body">A sentence describing stuff...</fbt>
      </p>
      <span>
        <fbt desc="demo toggle label">Toggle locale:</fbt>
      </span>
      <ToggleLocale />
    </div>
  </LocaleProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
