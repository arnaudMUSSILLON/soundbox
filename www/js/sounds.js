sounds = [
  {id:1, name:"AH !", path:"sounds/ha.mp3"},
  {id:2, name:"AH !", path:"sounds/ahremix1.mp3"},
  {id:3, name:"FILME MES PIEDS", path:"sounds/filmemespieds.mp3"},
  {id:4, name:"PAS LE TEMPS", path:"sounds/pasletempsdeniaiser.mp3"},
  {id:5, name:"VOTRE ÉPÉE", path:"sounds/votreepee.mp3"},
]

/*sounds = [
    {id:1, name:"AH !", path:"sounds/ha.mp3"},
    {id:2, name:"AH ! Remix #1", path:"sounds/ahremix1.mp3"},
    {id:3, name:"FILME MES PIEDS", path:"sounds/filmemespieds.mp3"},
    {id:4, name:"PAS LE TEMPS DE NIAISER", path:"sounds/pasletempsdeniaiser.mp3"},
    {id:5, name:"ELLE EST GROSSE VOTRE ÉPÉE", path:"sounds/votreepee.mp3"},
]*/

$.each(sounds, function(index, value){
  $("#sound-container").append('<div class="box">'
    +value.name
    +'<audio id='+value.id+' src='
    +value.path
    +'/></audio></div>');
});

$(".box").on("click", function(){
  var sound = $(this).find('audio')[0];
  sound.play();
  $(this).css('background-color','yellow');
  var that = $(this);
  sound.addEventListener('ended',function(that){
    alert('ca marche');
    $(that).css("background-color","red")
  });

})