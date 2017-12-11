import * as React from "react";
import { Nav } from "./_nav";

export const Header = (props: { route: string, onNavigate:any }) =>
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    <img src="logo.jpg" style={{width: "100%" }} />
                </div>
                <h2 className="col-md-11">What do you Meme?</h2>
            </div>
            
            <Nav route={props.route} onNavigate={props.onNavigate} />
        </div>
    </header>
