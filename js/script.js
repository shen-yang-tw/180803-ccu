// fix 100 vh in Android Chrome
var vhFix = new VHChromeFix([{
  selector: '.fullViewH',
  vh: 100
}]);

$(document).ready(function() {

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty").remove();

  //Dropdown button addClass.btn_secondary
  $(".uk-nav-dropdown li").parent().parent().siblings().removeClass("btn_secondary");
  $(".uk-nav-dropdown li.uk-active").parent().parent().siblings().addClass("btn_secondary");

  //calendar - https://github.com/kthornbloom/Monthly/wiki/Events
  var A1 = {
    "monthly": [{
        "id": 1,
        "name": "大得象功個土會代之題速越眼",
        "startdate": "2019-4-18",
        "enddate": "2019-4-19",
        "color": "#3093CC",
        "url": "#"
      },
      {
        "id": 2,
        "name": "本日閉館",
        "startdate": "2019-4-29",
        "color": "#ee7502",
        "url": "#"
      }
    ]
  };
  $('#calendar').monthly({
    mode: 'event',
    // dataType: 'xml',
    // xmlUrl: 'events.xml',
    dataType: 'json',
    // jsonUrl: 'events.json',
    events: A1
  });

});

$(window).on("resize load", function() {

  //keep aspect ratio of image's height to width
  $(".ratio3_4 li img, .thisRatio3_4").each(function() {
    $(this).css({
      height: $(this).width() * 4 / 3
      //portrait
    });
  });
  $(".ratio9_16 li img, .thisRatio9_16").each(function() {
    $(this).css({
      height: $(this).width() * 16 / 9
      //portrait
    });
  });
  $(".ratio4_3 li img, .thisRatio4_3").each(function() {
    $(this).css({
      height: $(this).width() * 3 / 4
      //landscape
    });
  });
  $(".ratio16_9 li img, .thisRatio16_9").each(function() {
    $(this).css({
      height: $(this).width() * 9 / 16
      //landscape
    });
  });
  $(".ratio1_1 li img, .thisRatio1_1").each(function() {
    $(this).css({
      height: $(this).width()
    });
  });
});