//js grid
$(function () {
    var data = JSON.parse(localStorage.getItem("user_data"));
    var countries = [
        { Name: "INDIA" },
        { Name: "JAPAN" },
        { Name: "CHINA" },
        { Name: "USA" },
        { Name: "NEPAL" },
        { Name: "AUSTRALIA" },
        { Name: "UK" },
        { Name: "PAKISTAN" }
    ];
    var gender = [{ Name: "Male" }, { Name: "Female" }];
    var language = [{ name: "English" }, { name: "Non-English" }]


    $("#jsGrid").jsGrid({
        width: "100%",
        height: "70%",
        editing: true,
        sorting: true,
        data: data,
        deleteConfirm: "Do you want to delete ?",
        cancelEditButtonClass: "cancel",
        fields: [
            {
                name: "userId", title: "UserId", type: "number", width: 50, validate: {
                    message: "userId should be in between 5 and 12 digits only",
                    validator: function (value, item) {
                        value = value.toString();
                        return value.length >= 5 && value.length <= 12;
                    }
                }
            },
            {
                name: "name", title: "Name", type: "text", width: 40, validate: {
                    validator: "pattern",
                    message: `Name should be alphabets`,
                    param: '^[a-zA-Z]+$'
                }
            },
            { name: "country", title: "Country", type: "select", width: 50, items: countries, valueField: "Name", textField: "Name", validate: "required" },
            {
                name: "zipcode", title: "ZipCode", type: "number", width: 40, validate: {
                    message: "Zipcode should be in between 6 and 8 digits only",
                    validator: function (value, item) {
                        value = value.toString();
                        return value.length >= 6 && value.length <= 8;
                    }
                }
            },
            {
                name: "email", title: "Email", type: "text", width: 100, validate: {
                    validator: "pattern",
                    message: "enter valid email id",
                    param: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                }
            },
            { name: "gender", title: "Gender", type: "select", width: 50, items: gender, valueField: "Name", textField: "Name", validate: "required" },
            { name: "language", title: "Language", type: "select", width: 50, items: language, valueField: "name", textField: "name", validate: "required" },
            { name: "address", title: "Address", type: "text", width: 100 },
            { name: "about", title: "About", type: "text", width: 100 },
            { type: "control" }
        ],
        onItemDeleted: function (args) {
            console.log("Deleted ", args.item.userId);
            let updatedData = data.filter(e => e.userId !== args.item.userId)
            console.log("deleted item", updatedData)
            localStorage.setItem("user_data", JSON.stringify(updatedData));
        },
        onItemUpdated: function (args) {
            console.log("updated", args)
            data[args.itemIndex] = args.item;
            localStorage.setItem("user_data", JSON.stringify(data))
        },
    })
})