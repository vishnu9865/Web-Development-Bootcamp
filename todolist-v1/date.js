exports.getDate = function() {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-IN", options);
}

exports.getDay = function() {
    return new Date().toLocaleDateString(
        "en-IN", 
        { weekday: "long"}
    );
}