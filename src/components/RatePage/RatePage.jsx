import React, { useState, useEffect } from 'react';
import s from './RatePage.module.css';
import { useSelector, useDispatch } from 'react-redux';

const RatePage = () => {
    const state = useSelector(state => state.quotations);
    return (
        <div className={`${s.content} container`}>
            <div className={s.table}>
                <div className={`${s.cell} ${s.leftCell} ${state.increment ? s.increment : s.decrement}`}>
                    <p className={s.title}>current</p>
                    <p className={s.value}>
                        <span>1 &#8383;</span> <br />
                        <span>{state.newVal} $</span>
                    </p>
                </div>
                <div className={`${s.cell} ${s.rightCell}`}>
                    <p className={s.title}>past</p>
                    <p className={s.value}>
                        <span>1 &#8383;</span> <br />
                        <span>{state.postVal} $</span>
                    </p>
                </div>
            </div>
            {console.log(state.valuesArr)}
        </div>
    );
}

export default RatePage;