$(document).ready(function(){
    var name = localStorage.username;
    name = localStorage["username"];
    if (!name) {
        name=prompt("Please Give your name");
        localStorage.username=name;
    }
    else{
        var $welcome=('<label id="welcomeMsg"></label>');
        $("#forground").append($welcome);
        $("#welcomeMsg").text("Welcome Back "+name).css({marginTop:'20px', display:'block', fontSize:'20px',fontWeight:'bold'});
    }
    $("#play").on("click",function(){
            /*new Animation();
            $("#forground").remove();
            var $playground=$("<div id='playground'/>");
            $("body").append($playground)
            var $score=("<p id='s'><label>SCORE:</label><label id='score'></label></p>");
             $("body").append($score);*/
	    Play();
        });
});
function Play() {
    $("#forground").remove();
    var $playground=$("<div id='playground'/>");
    var $score=("<p id='s'><label>SCORE:</label><label id='score'></label></p>");
    $("body").append($playground,$score);
    var $audio=$("<audio style='display:none;'><source src='gun_shot.mp3' style='display:none;'></source></audio>");
    var $clouds=$("<div id='clouds'/>");
    $("#playground").append($audio,$clouds);
    var $loopcloud=$("<marquee behaviour='alternate' scrollamount='3' loop='100'><img src='cld1.png' class='cld'><img src='cld1.png' class='cld'><img src='cld3.png' class='cld'><img src='cld1.png' class='cld'></marquee>");
    $("#clouds").append($loopcloud);
    new Animation();
}
