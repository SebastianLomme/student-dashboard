import React from 'react'
import { useDispatch } from 'react-redux';
import { resetData, showInGraf } from '../redux/action'

function ShowInGraf() {
    const dispatch = useDispatch();
    const handleClick = (payload) => {
        dispatch(showInGraf(payload));
    };
    const handleClickReset = () => {
        dispatch(resetData());
    };
    return (
        <>
            <button className="btn btn-secondary m-2" onClick={() => handleClick("leuk")}>
                Show Leuk
            </button>
            <button className="btn btn-secondary m-2" onClick={() => handleClick("m")}>
                Show Moeilijk
            </button>
            <button className="btn btn-secondary m-2" onClick={() => handleClick("m-l")}>
                Show Moeilijk & leuk
            </button>
            <button className="btn btn-secondary m-2" onClick={() => handleClickReset()}>
                reset alles!
            </button>
        </>
    );
};

export default ShowInGraf;
