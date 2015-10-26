// ==UserScript==
// @name         HRK tlk.io Autoref Helper
// @namespace    HRK
// @version      0.1
// @description  insert your ref link at yourref, go to https://tlk.io/hrk, enable script, let it run!
// @author       Tackyou
// @match        *tlk.io/hrk*
// @grant        none
// ==/UserScript==

var yourref = 'http://www.hrkgame.com/profile/referral/dropkey?ref=96dcc6a2ee97f37';
var data = new prepare();
$(function(){
    setTimeout(function(){letsgo(data)}, 2000);
});

$(window).unload(function() {
    data.helper.close();
});

function prepare() {
    this.helper = window.open('http://start.zro.co/','','width=15,height=15,resizable=no,status=no,toolbar=no,scrollbars=no,menubar=no,location=no');
    this.helper.blur();
    this.helper.resizeTo(0,0);
    this.helper.moveTo(window.screen.availWidth+500,0);
    window.focus();
    
    this.alreadyOpened = new Array();
    
    var data = this;
}

function letsgo(data){
    console.log('[HRK tlk.io] Start');
    $('#message_body').val(yourref);
    $('form#new_message').submit();
    console.log('[HRK tlk.io] Link posted');
    var time = 2000;
    $('#chat dl dd a').each(function(){
        var url = $(this).attr('href');
        if($.inArray(url, data.alreadyOpened) == -1 && url.indexOf('http://www.hrkgame.com/profile/referral/dropkey?ref=') > -1){
            setTimeout( function(){
                console.log('[HRK tlk.io] Opening ... ' + url);
                data.alreadyOpened.push(url);
                data.helper.location.href = url;
            }, time);
            time += 2000;
        }
    });
    
    setTimeout(function(){letsgo(data)}, time+10000);
}

// ignore this
//var reflink = $('.col-md-8.dkrefferal p input').val();
//console.log('Your ref link:'+reflink);
//$('button.btn.active.btn-danger.btn-lg.uppercase.rfrbtn').trigger('click');
