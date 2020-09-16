import React, { useEffect } from 'react';
import './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import RatePage from './components/RatePage/RatePage';
import GraphPage from './components/GraphPage/GraphPage';
import { getActualValue } from './redux/reducers/ratesReducer';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActualValue());
    }, []);
    return (
        <div className="App">
            <Header />
            <Route path="/rate" render={() => <RatePage />} />
            <Route path="/graph" render={() => <GraphPage />} />
        </div>
    );
}

export default App;
