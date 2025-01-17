import React, { useState, useEffect } from 'react';
import './your.less';
import ToDo from './todo';

const TestSfc = ({ msg = 'hello, sfc', imageSrc }) => {
    const [list] = useState([1, 2, 3]);
    const [html] = useState('<div>1111<span>222</span>333<p>ssssss</p></div>');
    const [error, setError] = useState(false);
    const [time, setTime] = useState(Date.now());

    const text = `${time}: ${html}`;

    const clickMethod = () => {
        console.log('click method');
    };

    const testMethod = () => {
        console.log('call test');
    };

    useEffect(() => {
        const prevTime = time;
        testMethod();
        const msg = 'this is a test msg';
        setTime(Date.now());
        console.log('mounted', msg, time);
    }, []);

    const errorCaptured = () => {
        setError(true);
        setTime(Date.now());
        console.log('errorCaptured', time);
    };

    return (
        <div className="wrap">
            <div>time: {time}</div>
            {error && <p>some error happened</p>}
            {!error && <p className="name">your msg: {msg}</p>}
            {msg && <p className="shown">test v-show</p>}
            <p onClick={clickMethod}>test v-on</p>
            <img src={imageSrc} alt="" />
            <ul className="test-list">
                {list.map((value, index) => (
                    <li key={index} className="list-item">
                        <div>{value}</div>
                        <span>{msg}</span>
                    </li>
                ))}
            </ul>
            <span>{text}</span>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ToDo msg={msg} list={list} />
            {msg}
        </div>
    );
};

export default TestSfc;