import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) =>{
    root.render(
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    );
} 


rerenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
        rerenderTree(state);
});



