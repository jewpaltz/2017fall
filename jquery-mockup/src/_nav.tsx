import * as React from "react";

const CurrentSection = "rules";

function isActive(str: string){
    return str == CurrentSection ? "active" : "";
}
export const Nav = (props: { route: string, onNavigate:any }) =>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Memes Inc.</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link onNavigate={props.onNavigate} route={props.route} path="home" text="Home" />
            <Link onNavigate={props.onNavigate} route={props.route} path="signup" text="Signup" />
            <Link onNavigate={props.onNavigate} route={props.route} path="rules" text="Rules" />
            <Link onNavigate={props.onNavigate} route={props.route} path="play" text="Play" />
        </div>
    </div>
</nav>

const Link = (props: { route: string, onNavigate:any, path: string, text: string }) =>
    <a  className={"nav-item nav-link " + (props.route == props.path ? "active" : "")}  
        href="#" 
        onClick={(e) => props.onNavigate(props.path, e)} >
            {props.text}
    </a>
