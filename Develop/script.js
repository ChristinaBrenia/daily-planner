$(document).ready(function () {

    //Today date and appending it to html

    let today = moment().format('MMMM Do YYYY');
    $('#currentDay').append(today);

    let $text9am = $('#9am');
    let $text10am = $('#10am');
    let $text11am = $('#11am');
    let $text12pm = $('#12pm');
    let $text1pm = $('#1pm');
    let $text2pm = $('#2pm');
    let $text3pm = $('#3pm');
    let $text4pm = $('#4pm');
    let $text5pm = $('#5pm');


    //Saving text to local storage
    $('button').on('click', function () {

        localStorage.setItem('9am', ($text9am.val()))
        localStorage.setItem('10am', ($text10am.val()))
        localStorage.setItem('11am', ($text11am.val()))
        localStorage.setItem('12pm', ($text12pm.val()))
        localStorage.setItem('1pm', ($text1pm.val()))
        localStorage.setItem('2pm', ($text2pm.val()))
        localStorage.setItem('3pm', ($text3pm.val()))
        localStorage.setItem('4pm', ($text4pm.val()))
        localStorage.setItem('5pm', ($text5pm.val()))
    })

    $('#9am').append(localStorage.getItem('9am'));
    $('#10am').append(localStorage.getItem('10am'));
    $('#11am').append(localStorage.getItem('11am'));
    $('#12pm').append(localStorage.getItem('12pm'));
    $('#1pm').append(localStorage.getItem('1pm'));
    $('#2pm').append(localStorage.getItem('2pm'));
    $('#3pm').append(localStorage.getItem('3pm'));
    $('#4pm').append(localStorage.getItem('4pm'));
    $('#5pm').append(localStorage.getItem('5pm'));


})