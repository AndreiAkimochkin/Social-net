"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var MyPosts_module_css_1 = require("./MyPosts.module.css");
var Post_1 = require("./Post/Post");
var MyPosts = function () {
    return (<div className={MyPosts_module_css_1.default.posts}>
            <div className={MyPosts_module_css_1.default.item}>
                <div>
                    MyPost
                </div>
                <textarea></textarea>
                <div>
                    <button>Send message</button>
                </div>
                <Post_1.default message='Hi. how are u' likesCount={5}/>
                <Post_1.default message='Its my first post' likesCount={10}/>
            </div>
        </div>);
};
exports.default = MyPosts;
