var categories = ['Voix', 'Chanson', 'Remix'];

//click the icon on the header
$('#category').on('click', function(){
  //check if the category tab is active
  if(!$('#category').hasClass('active')){
    //add a tab for each category
    $('.wrapper').append('<div id="wrapper-category" class="wow animated animated-tempo fadeInUp">'
      +'<ul><li class="li-category">Tous</li></ul></div>');
    for(var i=0; i<categories.length; i++){
      $('#wrapper-category').find('ul').append('<li class="li-category">'+categories[i]+'</li');
    }
  }else{
    //hide the categories and display the sounds
    $('#wrapper-category').addClass('wow animated fadeOutDown');
    setTimeout(function(){$('#wrapper-category').remove()}, 350); //wait for the css animation before removing element
  }
  $('#category').toggleClass('active header-btn-hover');


  //search the sounds for the clicked category
  $('.li-category').click(function(){
    //not the same behave if item is 'TOUS'
    item = $(this)[0].innerHTML.toUpperCase();
    if(item == 'TOUS'){
      search('');
    }else{
      search(item)
    }
    $('#wrapper-category').addClass('wow animated fadeOutDown');
    setTimeout(function(){$('#wrapper-category').remove()}, 350);
    $('#category').toggleClass('active header-btn-hover');
  });
});
