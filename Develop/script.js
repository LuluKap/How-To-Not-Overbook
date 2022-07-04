setInterval (() => {
    var time = moment().format("MMM Do YYYY,h:mm:ss a");
    $("#currentDay").text(time);
    },1000)

