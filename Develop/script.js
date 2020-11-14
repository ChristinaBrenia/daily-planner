$(document).ready(function () {

    //Today date and appending it to html

    var today = moment().format('MMMM Do YYYY');
    $('#currentDay').append(today);

    var now = parseInt(moment().format('HH'));
    console.log(now)



    var $text9am = $('#9am');
    var $text10am = $('#10am');
    var $text11am = $('#11am');
    var $text12pm = $('#12pm');
    var $text1pm = $('#1pm');
    var $text2pm = $('#2pm');
    var $text3pm = $('#3pm');
    var $text4pm = $('#4pm');
    var $text5pm = $('#5pm');

    // Changes colors based on the future - present - or past hour

    $("textarea").each(function () {
        //Looks for string adds class
        var name = parseInt($(this).attr('name'));
        console.log(name)

        if (name < now) {
            $(this).addClass('past');
        }
        console.log(name)
        if (name > now) {
            $(this).addClass('future')
        }


        if (name === now) {
            $(this).addClass('present')
        }


    })




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


    //Creates the ability to save text when browser is refreshed
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