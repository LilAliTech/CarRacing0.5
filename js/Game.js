class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }




  play(){
    form.hide();
    textSize(40);
    text("START GAME", 200,300)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 200;                 
      for (var plr in allPLayers){
        if(plr ==="player" + player.index){
          fill("red");
        }
       else{
         fill("Black");
       }
      }
      display_position += 25;
      textSize(18);
      text(allPlayers[plr].name + " : " + allPlayers[plr].distance,130,display_position);
      // Muhammed : 100 
    }
  if(keyIsDown(UP_ARROW)&& player.index !== null){
    player.distance += 50;
    player.update();
  }
    
  }

}
