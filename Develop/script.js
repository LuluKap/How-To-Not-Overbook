setInterval (() => {
    var time = moment().format("MMM Do YYYY,h:mm:ss a");
    $("#time").text(time);
    },1000)

// time block colors
//stackoverflow ftw

let currentHour = moment().hour();

$('.time-block').each( function(){
    let block = parseInt($(this).attr('id'));
    if(block > currentHour){
        $(this).addClass('future');
    }else if(block < currentHour){
        $(this).addClass('past');
        $(this).removeClass('future');
    }else { (val === currentHour)
        $(this).addClass('present');
        $(this).removeClass('future');
        $(this).removeClass('past');
    }
});

// save button
function saveText(); {
    localStorage.setItem(

