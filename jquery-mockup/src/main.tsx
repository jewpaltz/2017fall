import 'bootstrap'
import './main.scss';

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./_header";
import { Home } from "./home";

class Container extends React.Component<null, {route:  string}> {
    constructor() {
      super(null);
      this.state = { route: "home"};
    }

    navigate = (route: string, e: MouseEvent) => {
        this.setState( { route } );
        e.preventDefault();
    } 
  
    render() {
        let component = (this.state.route == "home" ? <Home /> : <div> {this.state.route}</div>);
      return (
        <div>
            <Header onNavigate={this.navigate} route={this.state.route} />
            {component}
        </div>
      );
    }
  }

ReactDOM.render(
    <Container />,
    document.getElementById('header-placeholder')
  );