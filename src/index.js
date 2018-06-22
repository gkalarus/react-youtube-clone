import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB0G2yin03UP_gZKBDUQGDykSTNns79NPQ';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));