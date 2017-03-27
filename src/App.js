import React, { Component } from 'react';
import Header from './components/Header';
import P from './components/P';

class App extends Component {
    render() {
        return (
            <div>
                <Header title="Promoting the importance of User Experience (UX) Design in the creation of tools, applications, and services at the University of Washington" />
                <P>
                    Testing 123
                </P>
            </div>
        );
    }
}

export default App;
