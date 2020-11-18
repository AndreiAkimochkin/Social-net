"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Navbar_module_css_1 = require("./Navbar.module.css");
var react_router_dom_1 = require("react-router-dom");
var Navbar = function () {
    return <nav className={Navbar_module_css_1.default.nav}>
        <div className={Navbar_module_css_1.default.item}>
            <react_router_dom_1.NavLink to='/ProfileInfo'>ProfileInfo</react_router_dom_1.NavLink>
        </div>
        <div className={Navbar_module_css_1.default.item}>
            <react_router_dom_1.NavLink to='/Dialogs'>Messages</react_router_dom_1.NavLink>
        </div>
        <div className={Navbar_module_css_1.default.item}>
            <a href='/news'>News</a>
        </div>
        <div className={Navbar_module_css_1.default.item}>
            <a href='/music'>Music</a>
        </div>
        <div className={Navbar_module_css_1.default.item}>
            <a href='/settings'>Settings</a>
        </div>
    </nav>;
};
exports.default = Navbar;
