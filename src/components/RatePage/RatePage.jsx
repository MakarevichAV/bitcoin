import React from 'react';
import s from './RatePage.module.css';

const RatePage = () => {
    const status = true; // придет в пропсах или из стора
    return (
        <div className={`${s.content} container`}>
            <div className={s.table}>
                <div className={`${s.cell} ${s.leftCell} ${status ? s.increment : s.decrement}`}>
                    <p className={s.title}>current</p>
                    <p className={s.value}>
                        <span>1 &#8383;</span> <br/> 
                        <span>11326,12 $</span>
                    </p>
                </div>
                <div className={`${s.cell} ${s.rightCell}`}>
                    <p className={s.title}>past</p>
                    <p className={s.value}>
                        <span>1 &#8383;</span> <br/> 
                        <span>11322,08 $</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RatePage;