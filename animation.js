$("#playground").click(function(){
    var audio=document.getElementByTagName("audio");
    audio.load();
    audio.play();
});
var Animation=function() {
    this.totalTime();
};
Animation.prototype.moveRight=function(){
    
    for (i=1; i<7;i++) {
	var Speed = Math.floor(Math.random()*4000)+4000;
	var start = Math.floor(Math.random()*50)+20;
	var finish = Math.floor(Math.random()*100)+20;
	$("#playground").append("<div class='duck_left"+ i +" duck' ></div>");
	$('.duck_left'+[i]).one("click",function(){
	   $('body').append('<embed src="gun_shot.mp3" autostart="true" hidden="true">');
	    var score=$("#score").text();
            score=+score+1;
            $("#score").text(score);
	    $(this).stop().delay(200).css({backgroundPositionY:'-90px'}).animate({backgroundPositionY: '-188px'},1).animate({top:'400px', opacity:0},1000);
	    })
	$('.duck_left'+[i]).css({top:start+'px', backgroundPositionY:'0px'}).animate({left:'+=1050', top:finish+'px'}, Speed);
    };
    var that=this
    setTimeout(function(){
	for (i=1;i<7; i++) {
	    $('.duck_left'+[i]).remove();
	}
	that.moveLeft();
    },Speed);
    
    
}
Animation.prototype.moveLeft=function(){
    for (i=1; i<7;i++) {
	var Speed = Math.floor(Math.random()*4000)+4000;
	var start = Math.floor(Math.random()*20)+20;
	var finish = Math.floor(Math.random()*50)+20;
	$("#playground").append("<div class='duck_right"+ i +" duck'></div>");
	$('.duck_right'+[i]).one("click",function(){
	  $('body').append('<embed src="gun_shot.mp3" autostart="true" hidden="true">');
	    var score=$("#score").text();
            score=+score+1;
            $("#score").text(score);
	    $(this).stop().delay(200).css({backgroundPositionY:'-90px'}).animate({backgroundPositionY: '-188px'},1).animate({top:'400px', opacity:0},1000);
	    })
	$('.duck_right'+[i]).css({top:start+'px', backgroundPositionY:'0px'}).animate({left:'-=1000', top:finish+'px'}, Speed);
    };
    var that=this
    setTimeout(function(){
	for (i=1;i<7; i++) {
	    $('.duck_right'+[i]).remove();
	}
	that.moveRight();
    },Speed); 
    
}
Animation.prototype.totalTime=function(){
    this.moveRight();
	setTimeout(function(){
	 var finalscore=$("#score").text();
	 $("duck").finish();
	 $("#duck").remove()
	 $("#s").remove();
	 $("#playground").remove();
	 //checking local storage for score
	 var score=localStorage.Totalscore;
	 if (!score) {
	    score=finalscore;
	    localStorage.Totalscore=score;
	 }
	 var oldScore=parseInt(score);
	 var newScore=parseInt(finalscore);
	 if (newScore>oldScore) {
	    newScore.toString();
	    localStorage.Totalscore=newScore;
	    alert("Great you have new High score");
	 }
	 var $newdiv=$("<div id='finalscore'><label id='final'></label></div>");
	 var $rediv=$("<div id='play' onclick='Play()'/>");
	 var $forground=$("<div id='forground'>");
	 $("body").append($forground);
	 $("#forground").append($newdiv, $rediv);
	 $("#final").text("Your Total Score is "+ finalscore);
	 $("#play").text("Replay");
	 $("#play").css("width","+=32");
	},50000);
}


