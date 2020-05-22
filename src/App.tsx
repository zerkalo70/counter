import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Components/Common/Button/button";


function App() {

    const [seconds, setSeconds] = useState(0);
    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active);
    }

    function reset() {
        setSeconds(0);
        setActive(false);
    }

    useEffect(() => {
        let departure: any = null;
        if (active) {
            departure = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
            if (seconds === 5) {
                setActive(false);
            }
        } else if (!active && seconds !== 0) {
            clearInterval(departure);
        }
        return () => clearInterval(departure);
    }, [active, seconds]);

    return (
        <div className="app">
            <div className="title">Counter</div>
            <div className="counter">
                <div className={seconds === 5 ? "time-stop" : "time"}>{seconds}</div>
                <div className="blockButton">
                    <Button className={`button universalButton universalButton-${active ? 'active' : 'inactive'}`}
                            callback={toggle}
                            text={active ? 'Pause' : 'Start'}/>
                    <Button className="button"
                            callback={reset}
                            text="Reset"/>
                </div>
            </div>
        </div>
    );
}


export default App;
