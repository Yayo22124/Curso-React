import './index.css';

import FirstApp from './FirstApp';
import HelloWorldApp from './HelloWorldApp';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Render of component an App
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <FirstApp title="titulo desde prop" subTitle={5}/>
    </React.StrictMode>
)