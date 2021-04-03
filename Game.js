class Game {
  constructor(){

  }
  
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

 async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountref = await database.ref("playerCount").once("value");
      if(playerCountref.exists()){
        playerCount=playerCountref.val();
        player.getCount();
      }
      //player.getCount();
      form = new Form();
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(18);
    text("GAMING STARTING ...",120,100);
  }
}
