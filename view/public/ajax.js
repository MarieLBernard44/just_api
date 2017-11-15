var url = 'http://localhost:3000/api/v1/'
$.get(url, function (data) {
        //console.log(data);
});

$( document ).ready(function() {


  $( "#banbut" ).on( "click", function() {

  });

  $( "#assbut" ).on( "click", function() {
    $.get(url, function (data) {

      for (var key in data){

        var item = data[key];
        console.log(item);

        if (item.sector == 'Assurance'){
          var tr = document.createElement('tr')
          for (var key in item){
            var td = document.createElement('td')
            td.append(item[key])
            console.log(td)
            tr.append(td)
          }

          $("#tabody").append(tr);
        }

      }

    });
  });

});
