"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Button_1 = require("@material-ui/core/Button");
const TextField_1 = require("@material-ui/core/TextField");
const Dialog_1 = require("@material-ui/core/Dialog");
const DialogActions_1 = require("@material-ui/core/DialogActions");
const DialogContent_1 = require("@material-ui/core/DialogContent");
const DialogContentText_1 = require("@material-ui/core/DialogContentText");
const DialogTitle_1 = require("@material-ui/core/DialogTitle");
const react_1 = require("react");
function LyricsDialog(props) {
    const { save, LyricsDetail } = Object.assign({}, props);
    const [open, setOpen] = React.useState(false);
    const [Lyrics, setLyrics] = React.useState({ title: "", artists: [], tags: [], lyrics: "", notes: "" });
    react_1.useEffect(() => {
        // Update the document title using the browser API
        setLyrics(Object.assign({}, LyricsDetail));
    }, [LyricsDetail.id]);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const saveAndClose = () => {
        setLyrics({ id: null, title: "", artists: [], tags: [], lyrics: "", notes: "" });
        save(Object.assign({}, Lyrics));
        handleClose();
    };
    const getLyrics = (id) => {
        $.getJSON(`Home/GetById?id=${id}`, function (Lyrics) {
            setLyrics(Lyrics);
        });
    };
    return (React.createElement("div", null,
        React.createElement(Button_1.default, { variant: "outlined", color: "primary", onClick: handleClickOpen }, (LyricsDetail.id == null || LyricsDetail.id == "") ? "Add" : LyricsDetail.id),
        React.createElement(Dialog_1.default, { open: open, onClose: handleClose, "aria-labelledby": "form-dialog-title" },
            React.createElement(DialogTitle_1.default, { id: "form-dialog-title" }, "Subscribe"),
            React.createElement(DialogContent_1.default, null,
                React.createElement(DialogContentText_1.default, null, "Please enter Lyrics details."),
                (Lyrics.id != null || Lyrics.id != "") ?
                    Lyrics.id : "",
                React.createElement(TextField_1.default, { autoFocus: true, margin: "dense", id: "firsttitleName", label: "Title", type: "text", defaultValue: Lyrics.title, onBlur: (e) => {
                        const con = Object.assign({}, Lyrics);
                        con.title = e.target.value;
                        setLyrics(con);
                    }, fullWidth: true }),
                React.createElement(TextField_1.default, { margin: "dense", id: "lyrics", label: "Lyrics", defaultValue: Lyrics.lyrics, type: "text", onBlur: (e) => {
                        const con = Object.assign({}, Lyrics);
                        con.lyrics = e.target.value;
                        setLyrics(con);
                    }, fullWidth: true }),
                React.createElement(TextField_1.default, { margin: "dense", id: "notes", label: "Notes", defaultValue: Lyrics.notes, type: "text", onBlur: (e) => {
                        const con = Object.assign({}, Lyrics);
                        con.notes = e.target.value;
                        setLyrics(con);
                    }, fullWidth: true })),
            React.createElement(DialogActions_1.default, null,
                React.createElement(Button_1.default, { onClick: handleClose, color: "primary" }, "Cancel"),
                React.createElement(Button_1.default, { onClick: saveAndClose, color: "primary" }, "Save")))));
}
exports.LyricsDialog = LyricsDialog;
//# sourceMappingURL=FormPopup.js.map