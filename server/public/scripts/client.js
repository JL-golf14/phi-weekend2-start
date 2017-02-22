$(document).ready(function(){
  console.log("JQUERY RUNNING");
$("#loadData").on("click", function(){
console.log('Getting Data');

  //make ajax request

$.ajax({

url: '/data',
method: 'GET',
success: function(data){
  console.log("Data from Server:", data);
  for (var i = 0; i < data.people.length; i++) {


  appendDom(data.people[i]);
}
  }
});
function appendDom(person){
  $("#dataContainer").append('<div class="person"></div>');
  var $el =$("#dataContainer").children().last();
  $el.append('<h2>' + person.name  + '</h2>');
  $el.append('<img src="' + person.imageURL  + '"/>');
}

});
});
