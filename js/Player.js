class Player {
  constructor(){
    this.rank=null;
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

  updateRank(rank){
database.ref('/').update({
 cars_at_end: rank 
});


  }

  getRank(){
  var playerRankRef = database.ref('cars_at_end')  ;
  playerRankRef.on("value",(data)=>{
   this.rank = data.val() ;
  });
  }
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
