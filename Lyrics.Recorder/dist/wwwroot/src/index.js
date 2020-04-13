"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const Hello_1 = require("./components/Hello");
exports.Hello = Hello_1.Hello;
const Lyrics_1 = require("./components/Lyrics");
exports.Lyrics = Lyrics_1.Lyrics;
function BindDynamicComponent(component, html) {
    return ReactDOM.render(React.createElement("div", null, component), html);
}
exports.BindDynamicComponent = BindDynamicComponent;
//# sourceMappingURL=index.js.map