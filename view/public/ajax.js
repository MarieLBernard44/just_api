var urlban = 'http://localhost:3000/api/v1/banque'
var urlass = 'http://localhost:3000/api/v1/assurance'
var urlbat = 'http://localhost:3000/api/v1/batiment'
var urldev = 'http://localhost:3000/api/v1/developpement'
var urlsan = 'http://localhost:3000/api/v1/sante'
var url = 'http://localhost:3000/api/v1/'

getProfil(url)

var activities =
  $.get(url, function (data) {
    var activities = []
      for (var key in data){
        var item = data[key];
        activities.push(item.sector)
      }
    var tab = Array.from(new Set(activities))
    console.log(tab)
    return tab
  })
console.log(activities)

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
function getLink(act){
  var a = document.createElement('a')
  a.setAttribute("class", "btn btn-info glyphicon glyphicon-save-file")
  a.setAttribute("href", "http://localhost:3000/download/"+act)
  a.innerHTML = 'Téléchargement'
  var p = document.createElement('p')
  p.innerHTML = 'Veuillez cliquer sur le bouton afin de télécharger la liste des profils du secteur'
  $("#ddl").append(p)
  $("#ddl").append(a)
}

$( document ).ready(function() {
  $( "#allbut" ).click( function() {
    getProfil(url)
  });
  $( "#banbut" ).click( function() {
    getProfil(urlban)
    getLink('banque')
  });
  $( "#assbut" ).click( function() {
    getProfil(urlass)
    getLink('assurance')
  });
  $( "#batbut" ).click( function() {
    getProfil(urlbat)
    getLink('batiment')
  });
  $( "#devbut" ).click( function() {
    getProfil(urldev)
    getLink('developpement')
  });
  $( "#sanbut" ).click( function() {
    getProfil(urlsan)
    getLink('sante')
  });

});
