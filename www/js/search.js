$("#search").on('click', function(){
  var header = $(this).parent();
  $(this).remove();
  header.append('<div class="search-box wow animated bounceInRight"><div class="search-icon"><i class="fa fa-search"></i>'+
    '</div><input type="text" class="search-input" placeholder="Search ..."></div>');
});
