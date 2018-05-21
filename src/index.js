import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//include semantic-ui css
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
