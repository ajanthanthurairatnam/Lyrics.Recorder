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
        title: "", artists: [], tags: [], lyrics: "", notes: ""
    };
    return (React.createElement("div", null,
        React.createElement(FormPopup_1.LyricsDialog, { save: save, LyricsDetail: Lyrics }),
        React.createElement("div", { className: "grid-container" },
            React.createElement("div", null,
                React.createElement("h5", null, "Lyrics Id")),
            React.createElement("div", null,
                React.createElement("h5", null, "Title")),
            React.createElement("div", null,
                React.createElement("h5", null, "Lyrics")),
            React.createElement("div", null,
                React.createElement("h5", null, "Notes"))),
        Lyricss.map((Lyrics) => React.createElement("div", { className: "grid-container" },
            React.createElement("div", null,
                React.createElement(FormPopup_1.LyricsDialog, { save: save, LyricsDetail: Lyrics })),
            React.createElement("div", null, Lyrics.title),
            React.createElement("div", null, Lyrics.lyrics),
            React.createElement("div", null, Lyrics.notes)))));
}
function Lyrics() {
    return (React.createElement("div", null,
        React.createElement(RetriveLyrics, null)));
}
exports.Lyrics = Lyrics;
//# sourceMappingURL=Lyrics.js.map