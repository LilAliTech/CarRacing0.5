class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index; // players/player1
    database.ref(playerIndex).set({
      name: this.name, distance: this.distance
    });
  }
  
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data)=>{
      allPlayers = data.val();
    });
  }
}
// player1 
//    name
// distance