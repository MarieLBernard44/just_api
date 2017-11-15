var urlban = 'http://localhost:3000/api/v1/banque'
var urlass = 'http://localhost:3000/api/v1/assurance'
var url = 'http://localhost:3000/api/v1/'

getAll()

$( document ).ready(function() {
$( "#allbut" ).click( function() {
  $("#tabody").empty()
  getAll()
});
});
function getAll(){
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

  $( "#banbut" ).click( function() {
    $("#tabody").empty()
    $.get(urlban, function (data) {
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
  });

  $( "#assbut" ).click( function() {
    $("#tabody").empty()
    $.get(urlass, function (data) {
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
    });
  });

});
