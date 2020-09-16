import React from 'react';
import Chart from './Chart';
import s from './GraphPage.module.css';
import { useSelector } from 'react-redux';

const GraphPage = () => {

    const valueForGraph = useSelector(state => state.quotations.valuesArr);
    let time = 0;
    const graphData = valueForGraph.map((item) => {
        time = time + 15;
        return {
            name: Math.floor(time / 60) + ':' + time % 60,
            pv: item
        }
    });

    const width =  graphData.length > 4 ? graphData.length * 30 : 150;
    
    return (
        <div className={`${s.content} container`}>
            <div className={s.wrapper}>
                <Chart data={graphData} width={width} />
            </div>
        </div>
    );
}

export default GraphPage;