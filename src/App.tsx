import React, {useEffect, useState} from 'react';
import './App.css';


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
            <div className="time">{seconds}</div>
            <div className="row">
                <button
                    className={`button universalButton universalButton-${active ? 'active' : 'inactive'}`}
                    onClick={toggle}>
                    {active ? 'Pause' : 'Start'}
                </button>
                <button className="button"
                        onClick={reset}>
                    Reset
                </button>
            </div>
            </div>
        </div>
    );
}


export default App;
