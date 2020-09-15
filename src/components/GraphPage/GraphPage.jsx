import React from 'react';
import Chart from './Chart';
import s from './GraphPage.module.css';

const GraphPage = () => {
    return (
        <div className={`${s.content} container`}>
            <div className={s.wrapper}>
                <Chart />
            </div>
        </div>
    );
}

export default GraphPage;