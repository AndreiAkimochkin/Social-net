"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var MyPosts_1 = require("./MyPosts/MyPosts");
var ProfileInfo_1 = require("./MyPosts/ProfileInfo/ProfileInfo");
var Profile = function () {
    return (<div>
            <div><ProfileInfo_1.default /></div>
            <MyPosts_1.default />
        </div>);
};
exports.default = Profile;
