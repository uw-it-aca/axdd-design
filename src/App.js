import React, { Component } from 'react';
import Header from './components/Header';
import P from './components/P';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <P>
                    Testing 123
                </P>
            </div>
        );
    }
}

export default App;
