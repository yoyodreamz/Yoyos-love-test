$( document ).ready(function() {
    
var p1name = $('.p1input').val();
var p2name = $('.p2input').val();


var percent = 0;
var results = 0;

var past = [];
var PN = 0;
var current = [];
var CN = 0;

var myCharacters = ["tamiyo", "kyle", "nick", "vanessa", "jamie", "casey", "taki"];

// Start other people's character's arrays / variables


// 𝙎𝙩𝙖𝙧𝙩 𝙁𝙪𝙣𝙘𝙩𝙞𝙤𝙣𝙨


// Other characters if functions 





// 𝐑𝐞𝐚𝐜𝐭𝐢𝐨𝐧 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧
function reaction() {
    if (results === 100) {

        console.log('PERFECTO! OTP!');

        $('.inDepth').text('This relationship is the BOMB, the embodiment of a healthy relationship! These two fit so well together that even their weaknesses compliment each other. A power duo with a bond built on love, sacrifice and commitment. Everyone, well almost everyone, is rooting for these two to be successful!');

    } else if ((results < 100) && (results >= 90)) {
        console.log('I SHIP IT!');

        $('.inDepth').text('This relationship is the BOMB, the embodiment of a healthy relationship! These two fit so well together that even their weaknesses compliment each other. A power duo with a bond built on love, sacrifice and commitment. ');

    } else if ((results < 90) && (results >= 80)) {
        console.log('CUte AF');

    } else if ((results < 80) && (results >= 70)) {
        console.log('awwwww');

    } else if ((results < 70) && (results >= 60)) {
        console.log('Ehhhh but 👍');

    } else if ((results < 60) && (results >= 50)) {
        console.log('Wow, T H I N  F U C K I N G  I C E! But it IS possible');

    } else if ((results < 50) && (results >= 40)) {
        console.log('Not really a great match');

    } else if ((results < 40) && (results >= 30)) {
        console.log('Yikes');

    } else if ((results < 30) && (results >= 20)) {
        console.log("Uhm, I don't think this is suck a goood idea");

    } else if ((results < 20) && (results >= 10)) {
        console.log('You gon have to try REAL hard to make it work!');

    } else {
        console.log('OH NOOOO! STOP!🙅🙅🙅');

    }
}

// Giveresults function
function giveResults(number) {
    $('.results').text('Compatibility rate is ' + number + '%!');
    $('.startIn-depth').show();
    $('h3').text(p1name + ' and ' + p2name + ' eh?');
    $('html, body').animate({
        scrollTop: 450
    }, 690);
    $('.startIn-depth').animate({
        opacity: "1"
    });
    $('.okay-button').hide();
    $('.retry-button').show();
    reaction();

}




function bgColor(name, color) {

    if ((p1name === name) && (myCharacters.some(function(eachName) {
            return eachName === p1name;
        }))) {
        {
            $('.person1').css('background-color', color);

        }
    } else if ((myCharacters.some(function(eachName) {
            return eachName === p2name;
        })) && (p2name === name)) {
        $('.person2').css('background-color', color);
    }

}


// Function Icon If
function iconIf(name, link) {

    if ((p1name === name) && (myCharacters.some(function(eachName) {
            return eachName === p1name;
        }))) {



        $('.person1').attr("src", link);

    } else if ((myCharacters.some(function(eachName) {
            return eachName === p2name;
        })) && (p2name === name)) {
        console.log('H');
        $('.person2').attr("src", link);
    }
}

// Start Other
$('.startIn-depth').hide();
$('.retry-button').hide();
$('.notes').hide();


// Start Click handlers

// 𝐎𝐤𝐚𝐲 𝐛𝐮𝐭𝐭𝐨𝐧
$('.okay-button').click(function() {


    p1name = $('.p1input').val();
    p2name = $('.p2input').val();
    p1name = p1name.toLowerCase();
    p2name = p2name.toLowerCase();


    iconIf('kyle', 'https://i.imgur.com/xQswxdN.png');
    iconIf('tamiyo', 'https://i.imgur.com/tmrVxXn.png');
    iconIf('vanessa', 'https://i.imgur.com/eb7GNrJ.png');
    iconIf('nick', 'https://i.imgur.com/Y7QnNYY.png');
    iconIf('casey', 'https://i.imgur.com/9UCXC6W.png');
    iconIf('jamie', 'https://i.imgur.com/yFcUFbH.png');
    iconIf('taki', 'https://i.imgur.com/ogyFa3W.png');

    // if statement for background colors LMAO

    bgColor('kyle', '#539aef');
    bgColor('tamiyo', '#8b59e0');
    bgColor('vanessa', '#d31594');
    bgColor('nick', 'yellow');
    bgColor('jamie', '#ffb744');
    bgColor('casey', 'cyan');
    bgColor('taki', 'green');




        // 𝒔𝒕𝒂𝒕𝒆𝒎𝒆𝒏𝒕 𝒇𝒐𝒓 𝒓𝒆𝒔𝒖𝒍𝒕𝒔
        // 𝟏𝟎𝟎
        if ((p1name === 'tamiyo') && (p2name === 'jamie') || (p1name === 'jamie') && (p2name === 'tamiyo') || (p1name === 'vanessa') && (p2name === 'kyle') || (p1name === 'kyle') && (p2name === 'vanessa')) {
            results = 100;
            giveResults(results);
            // 𝟗𝟎
        } else if ((p1name === 'tamiyo') && (p2name === 'jamie')) {

        // 𝟖𝟎
    } else if ((p1name === 'kyle') && (p2name === 'tamiyo') || (p1name === 'tamiyo') && (p2name === 'kyle')) {
        results = 86;
        giveResults(results);


    } else if ((p1name === 'casey') && (p2name === 'vanessa') || (p1name === 'vanessa') && (p2name === 'casey')) {
        results = 83;
        giveResults(results);

        // 𝟕𝟎
    } else if ((p1name === 'nick') && (p2name === 'tamiyo') || (p1name === 'tamiyo') && (p2name === 'nick')) {

        results = 78;
        giveResults(results);

    } else if ((p1name === 'vanessa') && (p2name === 'nick') || (p1name === 'nick') && (p2name === 'vanessa')) {
        results = 73;
        giveResults(results);


    } else if ((p1name === 'casey') && (p2name === 'tamiyo') || (p1name === 'tamiyo') && (p2name === 'casey')) {
        results = 70;
        giveResults(results);

        // 𝟲𝟬
    } else if ((p1name === 'taki') && (p2name === 'kyle') || (p1name === 'kyle') && (p2name === 'taki')) {
        results = 69;
        giveResults(results);

    } else if ((p1name === 'taki') && (p2name === 'jamie') || (p1name === 'jamie') && (p2name === 'taki')) {
        results = 65;
        giveResults(results);

        // 𝟓𝟎  
    } else if ((p1name === 'tamiyo') && (p2name === 'vanessa') || (p1name === 'vanessa') && (p2name === 'tamiyo')) {
        results = 50;
        giveResults(results);
        $('.notes').show();
        $('.notes').text('Without their history, they would get along pretty well');
        // 𝟯𝟬
    } else if ((p1name === 'nick') && (p2name === 'kyle') || (p1name === 'kyle') && (p2name === 'nick')) {
        results = 32;
        giveResults(results);

        // 𝟐𝟎

    } else if ((p1name === 'taki') && (p2name === 'nick') || (p1name === 'nick') && (p2name === 'taki')) {
        results = 28;
        giveResults(results);
        $('.notes').show();
        $('.notes').text('Strictly friend relationship');

    } else if ((p1name === 'jamie') && (p2name === 'vanessa') || (p1name === 'vanessa') && (p2name === 'jamie')) {
        results = 20.5;
        giveResults(results);

        // 𝙐𝙉𝘿𝙀𝙍
    } else if ((p1name === 'casey') && (p2name === 'kyle') || (p1name === 'kyle') && (p2name === 'casey')) {
        results = 1;
        giveResults(results);

    } else if (((p1name === 'taki') && (p2name === 'tamiyo') || (p1name === 'tamiyo') && (p2name === 'taki')) || ((p1name === 'taki') && (p2name === 'vanessa') || (p1name === 'vanessa') && (p2name === 'taki')) || ((p1name === 'casey') && (p2name === 'taki') || (p1name === 'taki') && (p2name === 'casey')) || ((p1name === 'casey') && (p2name === 'nick') || (p1name === 'nick') && (p2name === 'casey')) || ((p1name === 'jamie') && (p2name === 'kyle') || (p1name === 'kyle') && (p2name === 'jamie')) || ((p1name === 'jamie') && (p2name === 'nick') || (p1name === 'nick') && (p2name === 'jamie')) || ((p1name === 'jamie') && (p2name === 'casey') || (p1name === 'casey') && (p2name === 'jamie'))) {
        results = 0;
        giveResults(results);
    } else {
        results = Math.floor(Math.random() * 100);
        giveResults(results);


    }
    
    current = [p1name, p2name];
    CN = results;

    
    if (current === past){
     results = PN;   
     giveResults(results);
    }

});

// Retry button 
$('.retry-button').click(function() {
    $('.okay-button').show();
    $('.retry-button').hide();

    $('.person1').attr("src", 'https://i.imgur.com/wKWi6JN.png');
    $('.person2').attr("src", 'https://i.imgur.com/wKWi6JN.png');

    $('.notes').hide();

    $('html, body').animate({
        scrollTop: 0
    }, 700);
    $('.startIn-depth').animate({
        opacity: "0"
    });
    setTimeout(
        function() {
            $('.startIn-depth').hide();
        }, 700);

    $('.inDepth').html("<br> SSKDKSDKDSKKSDKSKDKSD <br> SSKDKSDKDSKKSDKSKDKSD <br>  SSKDKSDKDSKKSDKSKDKSD <br> SSKDKSDKDSKKSDKSKDKSD <br> SSKDKSDKDSKKSDKSKDKSD");
    
    past = current;
    PN = CN;


});






// Title bar animation

var rev = "fwd";

function titlebar(val) {
    var msg = "🌊 Tamiyoyo 💦";
    var res = "F ";
    var speed = 90;
    var pos = val;
    msg = "🌊 Tamiyoyo 💦";
    var le = msg.length;
    if (rev === "fwd") {
        if (pos < le) {
            pos = pos + 1;
            scroll = msg.substr(0, pos);
            document.title = scroll;
            var timer = window.setTimeout("titlebar(" + pos + ")", speed);
        } else {
            rev = "bwd";
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
    } else {
        if (pos > 0) {
            pos = pos - 1;
            var ale = le - pos;
            var scrol = msg.substr(ale, le);
            document.title = scrol;
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        } else {
            rev = "fwd";
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
    }
}

titlebar(0);
    
});
