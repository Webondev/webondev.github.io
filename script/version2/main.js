 $(function() {
 $(".bmform form").append( '<input type="hidden" name="NOT_BOT" value="1">' );
 	
        $(".backmodal").click(function(e){
            closeBmodal();
        })
  
        setContacts();
		
		setTimeout(function(){
			openJivoForm();
		}, 15*1000)
		
		$(".blink_div_round").animate({"opacity": "0.3"}, 1000);
		$(".blink_div_round").animate({"opacity": "1"}, 1000);
		setInterval(function(){
			$(".blink_div_round").animate({"opacity": "0.3"}, 1000);
			$(".blink_div_round").animate({"opacity": "1"}, 1000);
			}, 3000);
			
		setLinksProg_age();

		
    });

	function setLinksProg_age(){
		var link2 = "https://forum.antichat.ru/showthread.php?p=3330167 ";
		$("#minds_p").text(link2);
		$("#minds_p").attr("href", link2);
		
		arr_l = new Object();
		arr_l[1] = "http://obvalc"+"en.co"+"m.ua/";
		arr_l[2] = "http://s"+"iroplab."+"com/";
		arr_l[3] = "h"+"ttp://et"+"p.biz."+"ua/";
		arr_l[4] = "http://av"+"ito.az/";
		arr_l[5] = "http://www.e-"+"dvor.ru/ ";
		arr_l[6] = "http://w"+"ww.kancta"+"nta.ru/";
		arr_l[7] = "http://"+"home-fla"+"me.ru/ ";
		arr_l[8] = "http://www.pa"+"mpini.ru/";
		arr_l[9] = "http://c"+"astiro"+"nrealest"+"ate.com";
		arr_l[10] = "http://webo"+"ndev.b"+"iz/";
		
		$.each(arr_l, function(key, val){
			$("#source_" + key).text(val);
		})
	}
	
function openJivoForm(){
	$("#jivo-label-wrapper").click();
}
	
function setContacts(){  
    $(".show_email a").attr("href", "mailto:rodg"+"ertmai"+"l@gmai"+"l.com")
    $(".show_email span").text("rodg"+"ertmail"+"@gma"+"il.com");
    
    $(".show_tel a").attr("href", "tel:"+"+38-073-"+"18-"+"50"+"6-46")
    $(".show_tel span").text("+38-073-"+"18-"+"50"+"6-46");
    
    $(".show_skype a").attr("href", "skype:x"+"netma"+"ster")
    $(".show_skype span").text("xne"+"tmast"+"er");
}

function openBmodal(title){
  //  alert("Sorry, I am busy. Извините, я занят");
  //  return;
    var t =  $(window).scrollTop();
    console.log(t)
    $(".bmodal").css({"top":(t+100)+"px"})
    $(".backmodal, .bmodal").show();
    $(".bmtitle").text(title);
    return false;
}
function closeBmodal(){
   // if(confirm("Вы уверены что хотите закрыть форму обратной связи?")){
   // if(confirm("Вы уверены что хотите закрыть форму обратной связи?")){
    $(".backmodal, .bmodal").hide();
    
  //  }
    return false;
    
}

function addFileInput(){
    var c = $(".default_file").html();
    $(".files_list").append(' <div class="input">' + c + '</div>');
    
    return false;
}
function  delthisFile(e){
    $(e).parent().remove();
    return false;
}

