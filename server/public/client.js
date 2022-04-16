$(document).ready(onReady);

function onReady(){
    console.log('wired up JQ!');
    $('#clearButton').on('click', clear);
}

function clear(){
    $('input').val('');
}