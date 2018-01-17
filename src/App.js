import React, {Component} from 'react';
import Header from './modules/Header.js';
import Footer from './modules/Footer.js';
import Sidebar from './modules/Sidebar.js';
import Main from './modules/Main.js'

const archivesItems = [
    'March 2014',
    'February 2014',
    'January 2014',
    'December 2013',
    'November 2013',
    'October 2013',
    'September 2013',
    'August 2013',
    'July 2013',
    'June 2013',
    'May 2013',
    'April 2013'
];

const elsewhereItems = [
    'GitHub',
    'Twitter',
    'Facebook'
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main role="main" className="container">
                    <div className="row">
                        <Main/>
                        <Sidebar archives={archivesItems} elsewhere={elsewhereItems}/>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
