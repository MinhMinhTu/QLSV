import React, { Component } from 'react';
import './styles/App.css';
import Menu from 'Menu';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    render() {
        console.log(Menu)
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        {this.showContentMenus(routes)}
                    </div>
                </div>
            </Router>
        );
    }
    showContentMenus=(routes)=>{
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return  (<Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />)
                
            });
        }
        return <Switch>{result}</Switch>;
    }

}
export default App;

