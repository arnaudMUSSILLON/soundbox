$("#search").on('click', function(){
  //display search input
  var header = $(this).parent();
  $(this).remove();
  header.append('<div class="search-box wow animated bounceInRight"><div class="search-icon"><i class="fa fa-search"></i>'+
    '</div><input type="text" id="search-input" placeholder="Search ..."></div>');

    //search function
    $('#search-input').keyup(function(){
      for(var i=0; i<sounds.length;i++){
        //display sound if it matchs to the search
        if(sounds[i].name.toUpperCase().indexOf($('#search-input').val().toUpperCase()) > -1){
          $('#'+i).parent()[0].style.display = "";
        }else {
          $('#'+i).parent()[0].style.display = "none";
        }
      }
    });
});
