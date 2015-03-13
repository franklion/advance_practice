$(function() {

  var data = {
    'name': '小明',
    'phone': '0987654321',
    'website': 'http://www.fashionguide.com.tw',
    'img': 'https://piposay.s3.amazonaws.com/pipo/44b226c7-5883-4bc7-9df4-18636eddb23a.png'
  };

  var template = $('#template').html();
  var html = renderer(data, template); 

  $('#right-aside-content').html(html);  

  /* 點擊動畫按鈕 */  
  $('#animate').click(function() {
    $('#show').attr({'open':true});
    $('#wrapper').addClass('enable-blur').addClass('unselect');
  })
     
  /* 離開 dialog */ 
  $('.leave').click(function() { 
    $('#show').attr({'open':false});
    $('#wrapper').removeClass('enable-blur').removeClass('unselect');
  })

  function renderer(data, template) {
    /* 取出JSON中key for IE 8 */
    if (!Object.keys) {
      Object.keys = function(obj){
        var keys = [];
        for(var i in obj){
          if(obj.hasOwnProperty(i)){
            keys.push(i);
          }
        }
        return keys;
      }
    }
    var key = Object.keys(data);

    for (var i = 0 ; i < key.length ; i++) {
      var temp = '{' + key[i] + '}';
      var reg = new RegExp(temp, 'g');
      template = template.replace(reg, data[key[i]]);
    }
      return template;
  }

});

