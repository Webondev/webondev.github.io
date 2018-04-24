    $(function() {
        $(".carousel-no-style").jCarouselLite({
            btnNext: ".next-no-style",
            btnPrev: ".prev-no-style",
            //  auto: 800,
            speed: 1000,
            visible:4,
        });
        
        $(".carousel-no-style li a").hover(function(){
            $(this).find("div").css({"opacity":1});
        }, function(){
            $(this).find("div").css({"opacity":0.1});
        })
        
        addFileInput();
        
        $(".backmodal").click(function(e){
            closeBmodal();
        })
        stickAnimation();
        sitem2Animation();
        setContacts();
    });

function setContacts(){
    $(".show_email a").attr("href", "mailto:mybi"+"znetmai"+"l@gmai"+"l.com")
    $(".show_email span").text("mybiz"+"netmail"+"@gma"+"il.com");
    
    $(".show_tel a").attr("href", "tel:"+"+38-099-"+"19-"+"77"+"7-42")
    $(".show_tel span").text("+38-099-"+"19-"+"77"+"7-42");
    
    $(".show_skype a").attr("href", "skype:x"+"netma"+"ster")
    $(".show_skype span").text("xne"+"tmast"+"er");
}

fs2 = 0
function sitem2Animation(){
    $(".sitem2").css({"border": "1px solid rgba(255, 255, 255, 0)"});
    
    $(".sitem2").hover(function(){
        fs2 = $(this).find(".btn").css("font-size");
        fs2 = parseInt(fs2)
        $(this).css({"border": "1px solid rgba(255, 255, 255, 1)"})
        $(this).find(".btn").animate({"font-size":fs2+2+"px"},200);
    }, function(){
        $(this).css({"border": "1px solid rgba(255, 255, 255, 0)"})
        $(this).find(".btn").animate({"font-size":fs2+"px"},100);
    })
}

/*h = 0; //анимация дрожащая получается
w = 0;
function sitem2Animation(){
    $(".sitem2").hover(function(){
        h = $(this).height();
        w = $(this).width();
        //console.log(h)
        $(this).animate({"margin":"-3px", "height":(h+6)+"px", "width":(w+6)+"px"}, 300)
    }, function(){
        $(this).animate({"margin":"0px","height":(h)+"px", "width":w+"px"}, 300)
    })
}*/

s1 = 0;
function stickAnimation(){
    $(".stick").hover(function(){
        s1 = $(this).css("font-size");
        s1 = parseInt(s1);
        $(this).animate({"font-size":(s1+2)+"px"},200)
    }, function(){
        $(this).animate({"font-size":(s1)+"px"},100)
    })
}

function openBmodal(title){
    alert("Sorry, I am busy.");
    return;
    var t =  $(window).scrollTop();
    console.log(t)
    $(".bmodal").css({"top":(t+100)+"px"})
    $(".backmodal, .bmodal").show();
    $(".bmtitle").text(title);
    return false;
}
function closeBmodal(){
    if(confirm("Вы уверены что хотите закрыть форму обратной связи?")){
    $(".backmodal, .bmodal").hide();
    
    }
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

