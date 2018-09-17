// fix 100 vh in Android Chrome
var vhFix = new VHChromeFix([{
  selector: '.fullViewH',
  vh: 100
}]);

$(document).ready(function() {

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").remove();

  //Dropdown button addClass.btn_secondary
  $(".uk-nav-dropdown li").parent().parent().siblings().removeClass("btn_secondary");
  $(".uk-nav-dropdown li.uk-active").parent().parent().siblings().addClass("btn_secondary");

  //c3.chart
  var chart = c3.generate({
    data: {
      columns: [
        ["教育活動", 62],
        ["學術活動", 30],
        ["藝文活動", 5],
        ["育樂活動", 3],
        ["其它", 0]
      ],
      type: 'donut',
      onclick: function(d, i) {
        console.log("onclick", d, i);
      },
      onmouseover: function(d, i) {
        console.log("onmouseover", d, i);
      },
      onmouseout: function(d, i) {
        console.log("onmouseout", d, i);
      }
    },
    donut: {
      title: "100%"
    }
  });

  setTimeout(function() {
    chart.load({
      columns: [
        ["教育活動", 62],
        ["學術活動", 30],
        ["藝文活動", 5],
        ["育樂活動", 3],
        ["其它", 0]
      ]
    });
  }, 1500);

  setTimeout(function() {
    chart.unload({
      ids: 'data1'
    });
    chart.unload({
      ids: 'data2'
    });
    chart.unload({
      ids: 'data3'
    });
    chart.unload({
      ids: 'data4'
    });
    chart.unload({
      ids: 'data5'
    });
  }, 2500);

});