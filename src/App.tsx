import React, { useState } from 'react';
import './App.css';
import FollowIcon from "./components/followIcon";
import FollowType from "./components/followType";

const App: React.FC = () => {
    const [follow, setFollow] = useState(false)
    const toggleFollow = () => {setFollow(!follow)}

    return (
        <main className="App">
            <section className="App-header">
                <div
                    className="followComponents"
                    onClick={toggleFollow}
                >
                    <FollowIcon clicked={follow}/>
                    <FollowType clicked={follow} />
                </div>
            </section>
        </main>
    );
}

export default App;
