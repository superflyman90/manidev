import React from 'react';
import User from './components/User';

const App = () => {
    return (
        <div className='App'>
            <div className="grid__container">
                <div className="sidebar">
                    <User />
                </div>
                <div className="main">main</div> 
            </div>
        </div>
    );
};

export default App;