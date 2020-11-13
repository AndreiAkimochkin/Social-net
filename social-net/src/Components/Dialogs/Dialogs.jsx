"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Dialogs_module_css_1 = require("./Dialogs.module.css");
var react_router_dom_1 = require("react-router-dom");
var DialogsData = [
    { id: 1, name: "Andrei" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Ceva" },
    { id: 4, name: "Dima" },
    { id: 5, name: "Eva" },
    { id: 6, name: "Fedor" },
];
var DialogsItem = function (props) {
    var path = '/dialogs' + props.id;
    return (<div className={Dialogs_module_css_1.default.dialog}>
            <react_router_dom_1.NavLink to={path}>{props.name}</react_router_dom_1.NavLink>
        </div>);
};
var Message = function (props) {
    return (<div className={Dialogs_module_css_1.default.message}>
           {props.message}
        </div>);
};
var Dialogs = function () {
    return (<div className={Dialogs_module_css_1.default.dialogs}>
            <div className={Dialogs_module_css_1.default.dialogsItem}>
                <DialogsItem name='Andrei' id={1}/>
                <DialogsItem name='Bob' id={2}/>
                <DialogsItem name='Ceva' id={3}/>
                <DialogsItem name='Dima' id={4}/>
                <DialogsItem name='Eva' id={5}/>
                <DialogsItem name='Fedor' id={6}/>
            </div>
            <div className={Dialogs_module_css_1.default.messages}>
                <Message message='How are u'/>
                <Message message='Whatss up'/>
                <Message message='Coool'/>
             
            </div>
        </div>);
};
exports.default = Dialogs;
