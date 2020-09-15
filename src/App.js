import React from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import RatePage from './components/RatePage/RatePage';
import GraphPage from './components/GraphPage/GraphPage';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Route path="/rate" render={() => <RatePage />} />
            <Route path="/graph" render={() => <GraphPage />} />
        </div>
    );
}

export default App;
