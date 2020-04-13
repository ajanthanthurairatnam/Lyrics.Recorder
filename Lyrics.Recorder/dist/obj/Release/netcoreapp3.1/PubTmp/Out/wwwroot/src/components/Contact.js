"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const $ = require("jquery");
const react_1 = require("react");
require("./style.css");
const FormPopup_1 = require("./FormPopup");
function RetriveContact() {
    const [Contacts, setContacts] = react_1.useState([]);
    react_1.useEffect(() => {
        // Update the document title using the browser API
        getAllContacts();
    }, []);
    const getAllContacts = () => {
        $.getJSON("Home/GetContacts", function (contacts) {
            setContacts(contacts);
        });
    };
    const save = (props) => {
        $.post("Home/Save", Object.assign({}, props))
            .done(function (data) {
            if (props.id == null || props.id == "") {
                setContacts(oldArray => [...Contacts, data]);
            }
            else {
                const index = Contacts.findIndex((f) => f.id === data.id);
                setContacts([...Contacts.slice(0, index), data, ...Contacts.slice(index + 1)]);
            }
            //getAllContacts();
        });
    };
    const contact = {
        firstName: "", home: "", lastName: "", mobile: ""
    };
    return (React.createElement("div", null,
        React.createElement(FormPopup_1.ContactDialog, { save: save, contactDetail: contact }),
        React.createElement("div", { className: "grid-container" },
            React.createElement("div", null,
                React.createElement("h5", null, "Contact Id")),
            React.createElement("div", null,
                React.createElement("h5", null, "First Name")),
            React.createElement("div", null,
                React.createElement("h5", null, "Last Name")),
            React.createElement("div", null,
                React.createElement("h5", null, "Mobile")),
            React.createElement("div", null,
                React.createElement("h5", null, "Home"))),
        Contacts.map((contact) => React.createElement("div", { className: "grid-container" },
            React.createElement("div", null,
                React.createElement(FormPopup_1.ContactDialog, { save: save, contactDetail: contact })),
            React.createElement("div", null, contact.firstName),
            React.createElement("div", null, contact.lastName),
            React.createElement("div", null, contact.mobile),
            React.createElement("div", null, contact.home)))));
}
function Contact() {
    return (React.createElement("div", null,
        React.createElement(RetriveContact, null)));
}
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map