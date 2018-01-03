import React, {Component} from 'react';
import Head from './modules/Head.js';
import Header from './modules/Header.js';
import Footer from './modules/Footer.js';
import Sidebar from './modules/Sidebar.js';
import Main from './modules/Main.js'

class App extends Component {
    render() {
        return (
            <html lang="en">
            <div className="App">
                <Head/>
                <body>
                <Header/>
                <main role="main" className="container">
                    <div className="row">
                        <Main/>
                        <Sidebar/>
                    </div>
                </main>

                <Footer/>
                </body>
            </div>
            </html>
        );
    }
}

export default App;
