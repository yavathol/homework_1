import React, {Component} from 'react';
import Header from './modules/Header.js';
import Footer from './modules/Footer.js';
import Sidebar from './modules/Sidebar.js';
import Main from './modules/Main.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main role="main" className="container">
                    <div className="row">
                        <Main/>
                        <Sidebar/>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
