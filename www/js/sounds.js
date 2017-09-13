sounds = [
  {name:"ah", path:"../sounds/ha.mp3"},
  {name:"ah Remix1", path:"../sounds/ahremix1.mp3"},
  {name:"Filme mes pieds", path:"../sounds/filmemespieds.mp3"},
  {name:"Pas le temps de niaiser", path:"../sounds/pasletempsdeniaiser.mp3"},
  {name:"Votre épée", path:"../sounds/votreepee.mp3"},
]

$.each(sounds, function(index, value){
  $("#sound-container").append('<div class="box">'+value.name+'</div>');
});
