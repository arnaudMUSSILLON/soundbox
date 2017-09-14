sounds = [
  {id:1, name:"ah", path:"sounds/ha.mp3"},
  {id:2, name:"ah Remix1", path:"sounds/ahremix1.mp3"},
  {id:3, name:"Filme mes pieds", path:"sounds/filmemespieds.mp3"},
  {id:4, name:"Pas le temps de niaiser", path:"sounds/pasletempsdeniaiser.mp3"},
  {id:5, name:"Votre épée", path:"sounds/votreepee.mp3"},
]

$.each(sounds, function(index, value){
  $("#sound-container").append('<div class="box">'
    +value.name
    +'<audio id='+value.id+' src='
    +value.path
    +'/></audio></div>');
});

$(".box").on("click", function(){
  $(this).find('audio')[0].play();
})
