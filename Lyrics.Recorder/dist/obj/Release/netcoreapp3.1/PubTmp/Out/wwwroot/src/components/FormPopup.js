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
function ContactDialog(props) {
    const { save, contactDetail } = Object.assign({}, props);
    const [open, setOpen] = React.useState(false);
    const [contact, setContact] = React.useState({ firstName: "", home: "", lastName: "", mobile: "" });
    react_1.useEffect(() => {
        // Update the document title using the browser API
        setContact(Object.assign({}, contactDetail));
    }, [contactDetail.id]);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const saveAndClose = () => {
        setContact({ id: null, firstName: "", home: "", lastName: "", mobile: "" });
        save(Object.assign({}, contact));
        handleClose();
    };
    const getContact = (id) => {
        $.getJSON(`Home/GetById?id=${id}`, function (contact) {
            setContact(contact);
        });
    };
    return (React.createElement("div", null,
        React.createElement(Button_1.default, { variant: "outlined", color: "primary", onClick: handleClickOpen }, (contactDetail.id == null || contactDetail.id == "") ? "Add" : contactDetail.id),
        React.createElement(Dialog_1.default, { open: open, onClose: handleClose, "aria-labelledby": "form-dialog-title" },
            React.createElement(DialogTitle_1.default, { id: "form-dialog-title" }, "Subscribe"),
            React.createElement(DialogContent_1.default, null,
                React.createElement(DialogContentText_1.default, null, "Please enter contact details."),
                (contact.id != null || contact.id != "") ?
                    contact.id : "",
                React.createElement(TextField_1.default, { autoFocus: true, margin: "dense", id: "firstName", label: "First Name", type: "text", defaultValue: contact.firstName, onBlur: (e) => {
                        const con = Object.assign({}, contact);
                        con.firstName = e.target.value;
                        setContact(con);
                    }, fullWidth: true }),
                React.createElement(TextField_1.default, { margin: "dense", id: "lastName", label: "Last Address", defaultValue: contact.lastName, type: "text", onBlur: (e) => {
                        const con = Object.assign({}, contact);
                        con.lastName = e.target.value;
                        setContact(con);
                    }, fullWidth: true }),
                React.createElement(TextField_1.default, { margin: "dense", id: "mobile", label: "Mobile", defaultValue: contact.mobile, type: "text", onBlur: (e) => {
                        const con = Object.assign({}, contact);
                        con.mobile = e.target.value;
                        setContact(con);
                    }, fullWidth: true }),
                React.createElement(TextField_1.default, { margin: "dense", id: "home", label: "Home", defaultValue: contact.home, type: "text", onBlur: (e) => {
                        const con = Object.assign({}, contact);
                        con.home = e.target.value;
                        setContact(con);
                    }, fullWidth: true })),
            React.createElement(DialogActions_1.default, null,
                React.createElement(Button_1.default, { onClick: handleClose, color: "primary" }, "Cancel"),
                React.createElement(Button_1.default, { onClick: saveAndClose, color: "primary" }, "Save")))));
}
exports.ContactDialog = ContactDialog;
//# sourceMappingURL=FormPopup.js.map