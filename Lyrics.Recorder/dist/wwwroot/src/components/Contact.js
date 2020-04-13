"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const $ = require("jquery");
const react_1 = require("react");
require("./style.css");
const FormPopup_1 = require("./FormPopup");
function RetriveLyrics() {
    const [Lyricss, setLyricss] = react_1.useState([]);
    react_1.useEffect(() => {
        // Update the document title using the browser API
        getAllLyricss();
    }, []);
    const getAllLyricss = () => {
        $.getJSON("Home/GetLyricss", function (Lyricss) {
            setLyricss(Lyricss);
        });
    };
    const save = (props) => {
        $.post("Home/Save", Object.assign({}, props))
            .done(function (data) {
            if (props.id == null || props.id == "") {
                setLyricss(oldArray => [...Lyricss, data]);
            }
            else {
                const index = Lyricss.findIndex((f) => f.id === data.id);
                setLyricss([...Lyricss.slice(0, index), data, ...Lyricss.slice(index + 1)]);
            }
            //getAllLyricss();
        });
    };
    const Lyrics = {
        firstName: "", home: "", lastName: "", mobile: ""
    };
    return (React.createElement("div", null,
        React.createElement(FormPopup_1.LyricsDialog, { save: save, LyricsDetail: Lyrics }),
        React.createElement("div", { className: "grid-container" },
            React.createElement("div", null,
                React.createElement("h5", null, "Lyrics Id")),
            React.createElement("div", null,
                React.createElement("h5", null, "First Name")),
            React.createElement("div", null,
                React.createElement("h5", null, "Last Name")),
            React.createElement("div", null,
                React.createElement("h5", null, "Mobile")),
            React.createElement("div", null,
                React.createElement("h5", null, "Home"))),
        Lyricss.map((Lyrics) => React.createElement("div", { className: "grid-container" },
            React.createElement("div", null,
                React.createElement(FormPopup_1.LyricsDialog, { save: save, LyricsDetail: Lyrics })),
            React.createElement("div", null, Lyrics.firstName),
            React.createElement("div", null, Lyrics.lastName),
            React.createElement("div", null, Lyrics.mobile),
            React.createElement("div", null, Lyrics.home)))));
}
function Lyrics() {
    return (React.createElement("div", null,
        React.createElement(RetriveLyrics, null)));
}
exports.Lyrics = Lyrics;
//# sourceMappingURL=Contact.js.map