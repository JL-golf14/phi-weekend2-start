var currentPhi = 0;
var i=0;
var phiSpot =0;


$(document).ready(function(){
  $('#loadData');

  $.ajax({
    url: '/data',
    method: 'GET',

    success : function (data) {



      var appendBox =  function(){
        boxEl = $("#viewedPhi").append();
        boxEl.append('<li class="phiBox">'+'</li>');
      };

      for (var i = 0; i < data.phirephiters.length; i++) {
        $("#dataContainer").empty();
        appendBox();
        var phiArray = data.phirephiters[i];
        phiSpot = data.phirephiters[currentPhi];
        appendDom(data.phirephiters[currentPhi]);

      }; // closes for loop



      function appendDom(phi){
        var $el =$("#dataContainer").append();
        $el.append('<h2>' + phi.name  + '</h2>');
        $el.append('<h2>'+"Git username: " + phi.git_username  + '</h2>');
        $el.append('<h2>'+"phi quote: " + phi.shoutout  + '</h2>');
        $el.append('<img src ="' + phi.imageURL + ' height = "300px" width = "300px"/>')
      } // closes appendDom

      $("#nextButton").on("click", function(){
        clearInterval(buttonSpot(currentPhi));
        buttonSpot(currentPhi);
        if (currentPhi>data.phirephiters.length-1) { currentPhi=0;
        }else {currentPhi++;
        }  //closes if
        $("#dataContainer").empty();
        appendDom(data.phirephiters[currentPhi]);
        setInterval(buttonSpot(currentPhi),1000);

      }); // closes next button

      $("#prevButton").on("click", function(){

        buttonSpot(currentPhi);
        clearInterval(buttonSpot(currentPhi));
        if (currentPhi<=0) { currentPhi = data.phirephiters.length-1;
        } else{ currentPhi--;

        }
        $("#dataContainer").empty();
        appendDom(data.phirephiters[currentPhi]);
        setInterval(buttonSpot(currentPhi),1000);
      }); // closes prev button


      function buttonSpot(){
        $( "li" ).css("background-color", "white")
       $( "li" ).eq( currentPhi ).css({ "background-color": "red", "transition" : "ease-in-out"} );
     };

     setInterval(buttonSpot(),1000);
     console.log(setInterval(buttonSpot(),1000));
if (setInterval(buttonSpot(),1000)) {currentPhi++;
  appendDom(data.phirephiters[currentPhi]);
}

    }   //closes success
  }); // closes ajax
}); // closes doc ready
