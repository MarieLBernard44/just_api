var urlban = 'http://localhost:3000/api/v1/banque'
var urlass = 'http://localhost:3000/api/v1/assurance'
var urlbat = 'http://localhost:3000/api/v1/batiment'
var urldev = 'http://localhost:3000/api/v1/developpement'
var urlsan = 'http://localhost:3000/api/v1/sante'
var url = 'http://localhost:3000/api/v1/'

getProfil(url)

function getProfil(url){
  $("#tabody").empty()
  $.get(url, function (data) {
    for (var key in data){
      var item = data[key];
      var tr = document.createElement('tr')
      for (var key in item){
        var td = document.createElement('td')
        td.append(item[key])
        tr.append(td)
      }
      $("#tabody").append(tr);
    }
  })
}

$( document ).ready(function() {
  $( "#allbut" ).click( function() {
    getProfil(url)
  });
  $( "#banbut" ).click( function() {
    getProfil(urlban)
  });
  $( "#assbut" ).click( function() {
    getProfil(urlass)
  });
  $( "#batbut" ).click( function() {
    getProfil(urlbat)
  });
  $( "#devbut" ).click( function() {
    getProfil(urldev)
  });
  $( "#sanbut" ).click( function() {
    getProfil(urlsan)
  });


});
