import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
    const loading = useSelector(state => state.reducer.isLoading);
    
    return (
        <div className="container-fluid bg-secondary text-light">
            <div className="py-5 container">{loading ? <h1>...Loading</h1> : <h1>Winc Dashboard</h1>}</div>
        </div>
    );
};

export default Header;