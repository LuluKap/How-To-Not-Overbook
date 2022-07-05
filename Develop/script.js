setInterval (() => {
    var time = moment().format("MMM Do YYYY,h:mm:ss a");
    $("#time").text(time);
    },1000)

// time block colors
//stackoverflow ftw

$("#9oc").val(localStorage.a)
$("#10oc").val(localStorage.b)
$("#11oc").val(localStorage.c)
$("#12oc").val(localStorage.d)
$("#13oc").val(localStorage.e)
$("#14oc").val(localStorage.f)
$("#15oc").val(localStorage.g)
$("#16oc").val(localStorage.h)
$("#17oc").val(localStorage.i)

$(".btn9").on("click", saveText);
$(".btn10").on("click", saveText);
$(".btn11").on("click", saveText);
$(".btn12").on("click", saveText);
$(".btn13").on("click", saveText);
$(".btn14").on("click", saveText);
$(".btn15").on("click", saveText);
$(".btn16").on("click", saveText);
$(".btn17").on("click", saveText);

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

function saveText(){
localStorage.a = $("#9oc").val();
localStorage.b = $("#10oc").val();
localStorage.c = $("#11oc").val();
localStorage.d = $("#12oc").val();
localStorage.e = $("#13oc").val();
localStorage.f = $("#14oc").val();
localStorage.g = $("#15oc").val();
localStorage.h = $("#16oc").val();
localStorage.i = $("#17oc").val();
}
