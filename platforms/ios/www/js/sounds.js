sounds = [
  {
    id:0,
    name:"ah",
    path:"sounds/ha.mp3",
    category:"voix"
  },
  {
    id:1,
    name:"ah Remix1",
    path:"sounds/ahremix1.mp3",
    category:"remix"
  },
  {
    id:2,
    name:"ah Remix2",
    path:"sounds/ahremix2.mp3",
    category:"remix"
  },
  {
    id:3,
    name:"ah Remix3",
    path:"sounds/ahremix3.mp3",
    category:"remix"
  },
  {
    id:4,
    name:"ah Remix4",
    path:"sounds/ahremix4.mp3",
    category:"remix"
  },
  {
    id:5,
    name:"ah Remix5",
    path:"sounds/ahremix5.mp3",
    category:"remix"
  },
  {
    id:6,
    name:"ah Remix6",
    path:"sounds/ahremix6.mp3",
    category:"remix"
  },
  {
    id:7,
    name:"Filme mes pieds",
    path:"sounds/filmemespieds.mp3",
    category:"voix"
  },
  {
    id:8,
    name:"Pas le temps de niaiser",
    path:"sounds/pasletempsdeniaiser.mp3",
    category:"voix"
  },
  {
    id:9,
    name:"Votre épée",
    path:"sounds/votreepee.mp3",
    category:"voix"
  },
  {
    id:10,
    name:"Tunak tunak",
    path:"sounds/tunaktunak.mp3",
    category:"chanson"
  },
  {
    id:11,
    name:"nope",
    path:"sounds/nope.mp3",
    category:"voix"
  }
]

$.each(sounds, function(index, value){
  $("#sound-container").append('<div class="box">'+value.name+'<audio id='
    +value.id+' src='
    +value.path+'/></audio></div>');
});

$(".box").on("click", function(){
  $(this).find('audio')[0].play();
})
