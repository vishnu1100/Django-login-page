
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })


function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}

var $image = $('#trailer_img');
var $svg = $('#trailar_svg'); // Fix the typo in the ID
var $video = $('#trailer_video');

$(function(){
    $image.on('mouseenter', function(){
        $image.hide();
        $svg.hide();
        $video.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video.on('mouseleave', function(){
        $image.show();
        $svg.show();
        $video.hide();
    });
});

var $image2 = $('#trailer_img2');
var $svg2 = $('#trailer_svg2'); // Fix the typo in the ID
var $video2 = $('#trailer_video2');

$(function(){
    $image2.on('mouseenter', function(){
        $image2.hide();
        $svg2.hide();
        $video2.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video2.on('mouseleave', function(){
        $image2.show();
        $svg2.show();
        $video2.hide();
    });
});

var $image1 = $('#trailer_img1');
var $video1 = $('#trailer_video1');

$(function(){
    $image1.on('mouseenter', function(){
        $image1.hide();
        $video1.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video1.on('mouseleave', function(){
        $image1.show();
        $video1.hide();
    });
});

var $image3 = $('.trailer_img3');
var $video3 = $('#trailer_video3');

$(function(){
    $image3.on('mouseenter', function(){
        $image3.hide();
        $video3.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video3.on('mouseleave', function(){
        $image3.show();
        $video3.hide();
    });
});

var $image4 = $('.trailer_img4');
var $video4 = $('#trailer_video4');

$(function(){
    $image4.on('mouseenter', function(){
        $image4.hide();
        $video4.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video4.on('mouseleave', function(){
        $image4.show();
        $video4.hide();
    });
});

var $image5 = $('.trailer_img5');
var $video5 = $('#trailer_video5');

$(function(){
    $image5.on('mouseenter', function(){
        $image5.hide();
        $video5.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video5.on('mouseleave', function(){
        $image5.show();
        $video5.hide();
    });
});

var $image6 = $('.trailer_img6');
var $video6 = $('#trailer_video6');

$(function(){
    $image6.on('mouseenter', function(){
        $image6.hide();
        $video6.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video6.on('mouseleave', function(){
        $image6.show();
        $video6.hide();
    });
});

var $image7 = $('.trailer_img7');
var $video7 = $('#trailer_video7');

$(function(){
    $image7.on('mouseenter', function(){
        $image7.hide();
        $video7.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video7.on('mouseleave', function(){
        $image7.show();
        $video7.hide();
    });
});

var $image8 = $('.trailer_img8');
var $video8 = $('#trailer_video8');

$(function(){
    $image8.on('mouseenter', function(){
        $image8.hide();
        $video8.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video8.on('mouseleave', function(){
        $image8.show();
        $video8.hide();
    });
});

var $image9 = $('.trailer_img9');
var $video9 = $('#trailer_video9');

$(function(){
    $image9.on('mouseenter', function(){
        $image9.hide();
        $video9.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video9.on('mouseleave', function(){
        $image9.show();
        $video9.hide();
    });
});
var $image10 = $('.trailer_img10');
var $video10 = $('#trailer_video10');

$(function(){
    $image10.on('mouseenter', function(){
        $image10.hide();
        $video10.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $video10.on('mouseleave', function(){
        $image10.show();
        $video10.hide();
    });
});




var $imagec1 = $('#Continue_img1');
var $videoc1 = $('#Continue_video1');

$(function(){
    $imagec1.on('mouseenter', function(){
        $imagec1.hide();
        $videoc1.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoc1.on('mouseleave', function(){
        $imagec1.show();
        $videoc1.hide();
    });
});

var $imagec2 = $('#Continue_img2');
var $videoc2 = $('#Continue_video2');

$(function(){
    $imagec2.on('mouseenter', function(){
        $imagec2.hide();
        $videoc2.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoc2.on('mouseleave', function(){
        $imagec2.show();
        $videoc2.hide();
    });
});


var $imagec3 = $('.Continue_img3');
var $videoc3 = $('#Continue_video3');

$(function(){
    $imagec3.on('mouseenter', function(){
        $imagec3.hide();
        $videoc3.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoc3.on('mouseleave', function(){
        $imagec3.show();
        $videoc3.hide();
    });
});

var $imagec4 = $('.Continue_img4');
var $videoc4 = $('#Continue_video4');

$(function(){
    $imagec4.on('mouseenter', function(){
        $imagec4.hide();
        $videoc4.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoc4.on('mouseleave', function(){
        $imagec4.show();
        $videoc4.hide();
    });
});

var $imagec5 = $('.Continue_img5');
var $videoc5 = $('#Continue_video5');

$(function(){
    $imagec5.on('mouseenter', function(){
        $imagec5.hide();
        $videoc5.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoc5.on('mouseleave', function(){
        $imagec5.show();
        $videoc5.hide();
    });
});

var $imagec6 = $('.Continue_img6');
var $videoc6 = $('#Continue_video6');

$(function(){
    $imagec6.on('mouseenter', function(){
        $imagec6.hide();
        $videoc6.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoc6.on('mouseleave', function(){
        $imagec6.show();
        $videoc6.hide();
    });
});

var $imagect2 = $('#trending_img2');
var $videoct2 = $('#trending_video2');

$(function(){
    $imagect2.on('mouseenter', function(){
        $imagect2.hide();
        $videoct2.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoct2.on('mouseleave', function(){
        $imagect2.show();
        $videoct2.hide();
    });
});

var $imagect3 = $('#trending_img3');
var $videoct3 = $('#trending_video3');

$(function(){
    $imagect3.on('mouseenter', function(){
        $imagect3.hide();
        $videoct3.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoct3.on('mouseleave', function(){
        $imagect3.show();
        $videoct3.hide();
    });
});


var $imagect4 = $('#trending_img4');
var $videoct4 = $('#trending_video4');

$(function(){
    $imagect4.on('mouseenter', function(){
        $imagect4.hide();
        $videoct4.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoct4.on('mouseleave', function(){
        $imagect4.show();
        $videoct4.hide();
    });
});

var $imagect5 = $('#trending_img5');
var $videoct5 = $('#trending_video5');

$(function(){
    $imagect5.on('mouseenter', function(){
        $imagect5.hide();
        $videoct5.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoct5.on('mouseleave', function(){
        $imagect5.show();
        $videoct5.hide();
    });
});

var $imagect6 = $('#trending_img6');
var $videoct6 = $('#trending_video6');

$(function(){
    $imagect6.on('mouseenter', function(){
        $imagect6.hide();
        $videoct6.show();
    });

    // If you want to revert the changes on mouse leave, you can add the following code
    $videoct6.on('mouseleave', function(){
        $imagect6.show();
        $videoct6.hide();
    });
});
