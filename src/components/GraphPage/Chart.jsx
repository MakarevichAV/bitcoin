import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    { name: '15c', pv: 452 },
    { name: '30c', pv: 450 },
    { name: '45c', pv: 460 },
    { name: '1м', pv: 455 },
    { name: '1м 15c', pv: 430 },
    { name: '1м 30c', pv: 438 },
    { name: '1м 45c', pv: 480 },
    { name: '2м', pv: 430 },
    { name: '2м 15c', pv: 438 },
    { name: '2м 30c', pv: 452 },
    { name: '2м 45c', pv: 450 },
    { name: '3м', pv: 460 },
    { name: '3м 15c', pv: 430 },
    { name: '3м 30c', pv: 438 },
    { name: '3м 45c', pv: 480 },
    { name: '4м', pv: 430 },
    { name: '4м 15c', pv: 438 },
    { name: '4м 30c', pv: 452 },
    { name: '4м 45c', pv: 450 },
    { name: '5м', pv: 460 },
    { name: '5м 15c', pv: 430 },
    { name: '5м 30c', pv: 438 },
    { name: '5м 45c', pv: 480 },
    { name: '6м', pv: 430 },
    { name: '6м 15c', pv: 438 },
    { name: '6м 30c', pv: 452 },
    { name: '6м 45c', pv: 450 },
    { name: '7м', pv: 460 },
    { name: '7м 15c', pv: 430 },
    { name: '7м 30c', pv: 438 },
    { name: '7м 45c', pv: 480 },
    { name: '8м', pv: 430 },
    { name: '8м 15c', pv: 438 },
    { name: '8м 30c', pv: 452 },
    { name: '8м 45c', pv: 450 },
    { name: '9м', pv: 460 },
    { name: '9м 15c', pv: 438 },
    { name: '9м 30c', pv: 452 },
    { name: '9м 45c', pv: 450 },
    { name: '10м', pv: 460 },
];

export default class Chart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (
            <BarChart
                width={1000}
                height={450}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill="#8884d8" />
            </BarChart>
        );
    }
}
