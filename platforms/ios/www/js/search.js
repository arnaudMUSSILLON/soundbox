$("#search").on('click', function(){
  //display search input
  var header = $(this).parent();
  $(".header-button").hide();
  header.append('<a class="header-button" id="back-arrow"><i class="fa fa-arrow-left"></i></a>'
    +'<div class="search-box wow animated bounceInRight"><div class="search-icon"><i class="fa fa-search"></i>'+
    '</div><input type="text" id="search-input" placeholder="Search ..."></div>');

    //search function
    $('#search-input').keyup(function(){
      var something = $('#search-input').val().toUpperCase()
      search(something);
    });

    //back on click
    $('#back-arrow').click(function(){
      //remove search items and show menu
      $('#back-arrow').remove();
      $('.search-box').remove();
      $('.header-button').show();
    })
});


//search in the sounds
function search(something){
  for(var i=0; i<sounds.length;i++){
    //display sound if it matchs to the search
    if(sounds[i].name.toUpperCase().indexOf(something) > -1
      || sounds[i].category.toUpperCase().indexOf(something) > -1){
      $('#'+i).parent()[0].style.display = "";
    }else {
      $('#'+i).parent()[0].style.display = "none";
    }
  }
}
