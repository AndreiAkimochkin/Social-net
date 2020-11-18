"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Post_module_css_1 = require("./Post.module.css");
var Post = function (props) {
    return (<div className={Post_module_css_1.default.item}>
            <img src='https://xakep.ru/wp-content/uploads/2013/12/085647.jpg'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>);
};
exports.default = Post;
