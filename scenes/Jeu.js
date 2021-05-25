  
class Jeu extends Phaser.Scene{
    constructor () {
      super('Jeu');
    }

updateFroid(){
      if(froid==3){

          froid1.destroy();
          froid2.destroy();
          froid3.destroy();

     }
     if(froid==2){

          froid1.destroy();
          froid2.destroy();
          froid3.destroy();
          froid1 = this.physics.add.sprite(500, 180, 'froid').setScrollFactor(0).setScale(0.1).setDepth(1);
     }
      if(froid==1){

          froid1.destroy();
          froid2.destroy();
          froid3.destroy();
          froid1 = this.physics.add.sprite(500, 180, 'froid').setScrollFactor(0).setScale(0.1).setDepth(1);
          froid2 = this.physics.add.sprite(600, 180, 'froid').setScrollFactor(0).setScale(0.1).setDepth(1);
     }
     if(froid==0){

      froid1.destroy();
      froid2.destroy();
      froid3.destroy();
      froid1 = this.physics.add.sprite(500, 180, 'froid').setScrollFactor(0).setScale(0.1).setDepth(1);
      froid2 = this.physics.add.sprite(600, 180, 'froid').setScrollFactor(0).setScale(0.1).setDepth(1);
      froid3 = this.physics.add.sprite(700, 180, 'froid').setScrollFactor(0).setScale(0.1).setDepth(1);
}

 }

joueurPrendDegats(degat){
     pvPlayer-=degat
    /* if(pvPlayer<0.1){
         this.death();
     }*/
     console.log(pvPlayer)
 }

tirSniperEnnemi(sniperEnnemi){ 
          let pointer = this.input.activePointer;
          for (const sniperEnnemi of this.sniperEnnemis.children.entries) {
          var ballesSniper = this.ballesSnipers.create(sniperEnnemi.x, sniperEnnemi.y, 'snowball').setFlipX(true).setScale(0.80);
          var randomBallesMachineGunners = Phaser.Math.Between(-50, 50);
          this.physics.moveTo(ballesSniper, player.x+randomBallesMachineGunners, player.y+randomBallesMachineGunners, vitesseBalleSniperEnnemi);
          //var angleBalle = (Math.atan2(player.y - sniperEnnemi.y, player.x - sniperEnnemi.x) * 180 / Math.PI);
         // snowball.angleBalle -= 90;
         ballesSniper.rotation = Phaser.Math.Angle.BetweenPoints(player, sniperEnnemi);
         this.physics.add.overlap(player, ballesSniper,  this.degatBalleSniper,null,this)

         ballesSniper.body.setAllowGravity(false);
      if(player.x<sniperEnnemi.x){

          sniperEnnemi.play('soldierShoot', true).setFlipX(false);
          ballesSniper.setGravityY(1000);
      }
      else if(player.x>sniperEnnemi.x){

          sniperEnnemi.play('soldierShoot', true).setFlipX(true);

      }
    }
}

tirMachineGunnerEnnemi(machineGunnerEnnemi){
          
          for (const machineGunnerEnnemi of this.machineGunnerEnnemis.children.entries) {
          var ballesMachineGunner = this.ballesMachineGunners.create(machineGunnerEnnemi.x, machineGunnerEnnemi.y, 'snowball').setFlipX(true).setScale(0.80);
          var randomBallesMachineGunners = Phaser.Math.Between(-150, 150);
          this.physics.moveTo(ballesMachineGunner, player.x+randomBallesMachineGunners, player.y+randomBallesMachineGunners, vitesseBalleMachineGunnerEnnemi);
          var angleBalle = (Math.atan2(player.y - machineGunnerEnnemi.y, player.x - machineGunnerEnnemi.x) * 180 / Math.PI);
         // snowball.angleBalle -= 90;
         ballesMachineGunner.rotation = Phaser.Math.Angle.BetweenPoints(player, machineGunnerEnnemi);
         this.physics.add.overlap(player, ballesMachineGunner,  this.degatBalleSniper,null,this)

         ballesMachineGunner.body.setAllowGravity(false);
      if(player.x<machineGunnerEnnemi.x){

          machineGunnerEnnemi.play('soldierShoot', true).setFlipX(false);
          ballesMachineGunner.setGravityY(1000);
      }
      else if(player.x>machineGunnerEnnemi.x){

          machineGunnerEnnemi.play('soldierShoot', true).setFlipX(true);

      }
    }
}

tirLanceGrenadeEnnemi(lanceGrenade){
          
    for (const lanceGrenade of this.lanceGrenades.children.entries) {
        var grenadeLanceGrenade = this.grenadesLanceGrenade.create(lanceGrenade.x, lanceGrenade.y, 'snowball').setFlipX(true).setScale(0.80);
        var randomBallesLanceGrenades = Phaser.Math.Between(-250, 250);
        this.physics.moveTo(grenadeLanceGrenade, player.x+randomBallesLanceGrenades, player.y-1000+randomBallesLanceGrenades, vitesseGrenadeLanceGrenadeEnnemi);
        var angleBalle = (Math.atan2(player.y - lanceGrenade.y, player.x - lanceGrenade.x) * 180 / Math.PI);
        // snowball.angleBalle -= 90;

        grenadeLanceGrenade.rotation = Phaser.Math.Angle.BetweenPoints(player, lanceGrenade);
        grenadeLanceGrenade.body.setGravityY(700)
        grenadeLanceGrenade.body.setBounce(0.5)
        this.physics.add.collider(grenadeLanceGrenade,this.platform)
        this.physics.add.collider(grenadeLanceGrenade,player)


        this.time.delayedCall(3000, this.explodeGrenadeLanceGrenade, [grenadeLanceGrenade], this);

        if(player.x<lanceGrenade.x){

            lanceGrenade.play('soldierShoot', true).setFlipX(false);
            grenadeLanceGrenade.setGravityY(1000);
        }
        else if(player.x>lanceGrenade.x){

            lanceGrenade.play('soldierShoot', true).setFlipX(true);

        }
    }
}

explodeGrenadeLanceGrenade(grenadeLanceGrenade){
    grenadeLanceGrenade.destroy();
    var explosionBomb = this.physics.add.sprite(grenadeLanceGrenade.x, grenadeLanceGrenade.y, 'explosion').setScale(0.2).setOrigin(0.5,0.5);
    this.physics.add.collider(explosionBomb,player,this.death, null, this)
    this.time.delayedCall(1000, this.destroyExplosion, [explosionBomb], this);
}

destroyExplosion(explosionBomb){
    explosionBomb.destroy();
}

destroyBalle(platform, balle){
    balle.destroy();
}

lancerSnowballYeti(yeti){
    
    if(hardcoreMode=="off"){
    
      
          for (const yeti of this.yetis.children.entries) {
          var ballesSoldat = this.ballesSoldats.create(yeti.x, yeti.y, 'snowball').setFlipX(true).setScale(0.80);
          this.physics.moveTo(ballesSoldat, player.x, player.y, vitesseBalleSoldatEnnemi);
          var randomBallesMachineGunners = Phaser.Math.Between(-50, 50);
          //var angleBalle = (Math.atan2(player.y - yeti.y, player.x - yeti.x) * 180 / Math.PI);
         // snowball.angleBalle -= 90;
         ballesSoldat.rotation = Phaser.Math.Angle.BetweenPoints(player, yeti);
         this.physics.add.overlap(player, ballesSoldat,  this.degatBalleSoldat,null,this)

         ballesSoldat.body.setAllowGravity(false);
      if(player.x<yeti.x){

      yeti.play('soldierShoot', true).setFlipX(false);
      ballesSoldat.setGravityY(1000);
      }
      else if(player.x>yeti.x){

      yeti.play('soldierShoot', true).setFlipX(true);

      }
    }
    }
    
      if(hardcoreMode=="on"){
                 
    for (const yeti of this.yetis.children.entries) {
      yeti.play('yetiThrow', true);
            var snowball = snowballs.create(yeti.x, yeti.y, 'snowball');

      if(player.x<yeti.x){
      snowball.setVelocity(Phaser.Math.FloatBetween(-200, -400), Phaser.Math.FloatBetween(-200, -400));
      yeti.anims.play('yetiThrow',true).setFlipX(false);
      snowball.setGravityY(1000);
      }
      else if(player.x>yeti.x){
      snowball.setVelocity(Phaser.Math.FloatBetween(200, 400), Phaser.Math.FloatBetween(-200, -400));
      yeti.anims.play('yetiThrow',true).setFlipX(true)
      snowball.setGravityY(1000);
      }
    }
    }
}
  
killSnowman(snowman, fireball){
    snowman.destroy();
    fireball.destroy();
}   

killSniperEnnemi(sniperEnnemi, fireball){
  sniperEnnemi.destroy();
    fireball.destroy();
}     

killYeti(yeti, fireball){
    yeti.destroy();
    fireball.destroy();
}     

killLanceGrenade(lanceGrenade, fireball){
    lanceGrenade.destroy();
    fireball.destroy();
}   

killMachineGunner(machineGunner, fireball){
      machineGunner.destroy();
      fireball.destroy();
}   
 
lancerfireball(player){
    if(fireballLeft>0){
  let pointer = this.input.activePointer;
       var bomb = bombs.create(player.x, player.y-5, 'fireball');
  this.physics.moveTo(bomb, pointer.worldX, pointer.worldY, 700);
  bomb.rotation = Phaser.Math.Angle.BetweenPoints(pointer, player);
  bomb.play('fireballSpin', true).setFlipX(false).setScale(0.1);
  bomb.setGravityY(500)
    fireballLeft -=1;
    this.changeShuriken();
    }
}
lancerTeleport(player){
    if(teleportationsLeft>0){
  let pointer = this.input.activePointer;
       var teleport = teleportations.create(player.x, player.y-5, 'teleport').setScale(0.05);
       teleport.setBounce(1)
  this.physics.moveTo(teleport, pointer.worldX, pointer.worldY, 300);
  teleport.rotation = Phaser.Math.Angle.BetweenPoints(pointer, player);
    teleportationsLeft -=1;
    this.time.delayedCall(1500, this.teleportToTeleporter, [teleport], this);  
    }
}

teleportToTeleporter(teleport){
    player.x=teleport.x
    player.y=teleport.y-32
    teleport.destroy();
    console.log(teleportationsLeft)
}

destroyFireball(bomb){

  this.shurikensItems.create(bomb.x+8, bomb.y-3, 'fireball').setScale(1)
      .setOrigin(0.5,0.5)
      .setDepth(-1)
      .setSize(20,20)
      bomb.destroy();
      
}  

destroyFireballPics(bomb){
    
        bomb.destroy();
      
}  

destroySnowball(snowball){
  snowball.destroy();
}
  
destroyPlatformFake(platformFake){
    platformFake.destroy();
   
    //platformFake.setAlpha(0.2)
}
  
showPlatformInvisible(platformInvisble){
    platformInvisble.setAlpha(1);
          if(player.body.blocked.down || player.body.touching.down){
     standing=true
     onPlatform="platform"
     
    }
    playerCanResetVelocity=true
    player.setAccelerationX(0)
}    
 
showPicsInvisible(PicsInvisible){
       

  if(playerInvincible==false){

      this.death();

    }

    PicsInvisible.setAlpha(1);
} 
  
collectHealthPlayer(powerUpHealth){
  powerUpHealth.destroy();

  //  Add and update the score
  if(froid>0){
  froid -= 1;
  }
  this.updateFroid();

}
  
collectCoin(coin){
 /* healthAmount-=10
   Health.innerHTML=healthAmount*/

  coin.destroy();
  totalCoins+=1;
  textPieces.destroy();
  textPieces = this.add.text(280, 200,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1);  
    // (totalCoins);

}    

pickUpShuriken(player,shuriken){
    shuriken.destroy();
    fireballLeft+=1;
    this.changeShuriken();
}
pickUpTeleport(player,teleport){
    teleport.destroy();
    teleportationsLeft+=1;

}

changeShuriken(){
  fireballLeftText.destroy();
  fireballLeftText = this.add.text(1170, 50,  fireballLeft,{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1);       
}
 
collectPowerUpFireball(powerUpFireball){
   ("pickupfireball")
  powerUpFireball.destroy();

  fireballPowerUpActive= true;
}
  
contactDrapeau(){
  
  if(totalCoins>14){
   (level)   
  totalCoins=0;

  if(level=="level4"){
      this.scene.start("Victoire");
  } 
  if(level=="level3"){
      level="level4"

      this.scene.restart();
  } 
  if(level=="level2"){
      level="level3"

      this.scene.restart();
  }  
  if(level=="level1"){
      level="level2"
         
      this.scene.restart();
  }    

  }
  else {
      console.log('Vous n\'avez que ' + totalCoins +' pièces')
  }
}    

degatSnowmanJoueur(snowman){
 // snowman.destroy();
  var explosionBomb = this.physics.add.sprite(snowman.x, snowman.y, 'explosion').setScrollFactor(0).setScale(0.5).setDepth(-1).setOrigin(0.5,1);

        this.death();    
}
  
contactYetiJoueur(yeti){
  this.bounce();
     yeti.destroy();

     if(hardcoreMode=="on"){
        this.death();
    }
    if(playerInvincible==false && hardcoreMode=="off"){
      froid+=1;
      this.updateFroid();
    }

}
  
bounce(){
   playerCanResetVelocity=false
      this.input.enabled = false;

      keyD.reset();
      keyQ.reset();
      keyZ.reset();  
    this.playerGoInvincible();
          if(player.body.touching.right){
         player.setVelocityX(-250);
    }
    else if(player.body.touching.down){
         player.setVelocityY(-250);
    }
    else if(player.body.touching.left){
         player.setVelocityX(+250);
    }

   
      this.time.delayedCall(400, this.inputEnabled, null, this);   
}
  
bouncePlatformMontagne(){
     


  if(player.body.blocked.right && player.body.blocked.down == false){
      if(padConnected){
          if(paddle.A){
         player.setVelocityY(-150);  
      }
  }
      if(keyZ.isDown ){
          console.log("test")
         player.setVelocityY(-150);
      }

    }
    if(player.body.blocked.left && player.body.blocked.down == false){
      
      if(padConnected){
          if(paddle.A){
         player.setVelocityY(-150);  
      }
  }
      if(keyZ.isDown){
         player.setVelocityY(-150);
      }

    }

  /*    this.time.delayedCall(400, this.inputEnabled, null, this);  
      this.time.delayedCall(800, this.canResetVelocity, null, this);  */

}   
  
inputEnabled(){
     this.input.enabled = true;
}

canResetVelocity(){
  playerCanResetVelocity=true
}

degatBalleSniper(player,ballesSniper, degats){

  ballesSniper.destroy();
    if(hardcoreMode=="on" ){
        this.death();
    }
  if(playerInvincible==false && hardcoreMode=="off"){
   froid+=1;
  this.joueurPrendDegats(40);
  this.playerGoInvincible();
  }
}
  
degatBalleSoldat(player,ballesSoldat, degats){

  ballesSoldat.destroy();
if(hardcoreMode=="on" ){
    this.death();
}
if(playerInvincible==false && hardcoreMode=="off"){
froid+=1;
this.joueurPrendDegats(15);
this.playerGoInvincible();
}


}

hitBomb (player, bomb){
  death();
}

playerInWater(){

    //standing=false
    gravity=200
    runSpeed=0.25
    playerInWater=true
    
}
  
playerInWaterTop(){

    runSpeed=1
    gravity=1000

    playerInWater=false
}

setSpeedPlatform (player, platform) {
  if(velociteChute>800){
  this.death()
}
velociteChute=player.body.velocity.y
  playerCanResetVelocity=true 
  canResetIceVelocity=true
  player.setGravityY(gravity)
   if(playerInWater==false){
   runSpeed = 1;
   }
   onPlatform = "platform"
    if(player.body.blocked.down || player.body.touching.down){
     standing=true

    }
}
  
setSpeedPlatformSnow (player, platform) {
  canResetIceVelocity=true
  playerCanResetVelocity=true
      onPlatform = "snow"
   runSpeed = 0.25;
    if(player.body.blocked.down || player.body.touching.down){
     standing=true
    }
}
  
setSpeedPlatformIce (player, platform) {
  if(player.body.blocked.down || player.body.touching.down){
     standing=true
    }
  if(canResetIceVelocity==true){
      player.setVelocityX(0)
      canResetIceVelocity=false
  }
    playerCanResetVelocity=false
    onPlatform="ice"
  

 
}
  
goRight(){

  if(onPlatform!="ice"){
      if(padConnected){
  if((paddle.left) && onPlatform != "ice"){
      player.setVelocityX(0);
      player.anims.play('idleNinja',true).setFlipX(false);
  }
    else if(standing==true){    
      if(playerSkin=="ninja"){
          player.play('run', true).setFlipX(false);           
      } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(false);            
      } 
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(false);            
      } 

    player.setVelocityX(250*runSpeed);
    playerDirection="right"
    }
    else if(standing==false){
      if(playerSkin=="ninja"){
          player.play('run', true).setFlipX(false);           
      } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(false);            
      } 
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(false);            
      } 
    player.setVelocityX(250*runSpeed);
    playerDirection="right"
    }
      }
   if((keyQ.isDown) && onPlatform != "ice"){
      player.setVelocityX(0);

      player.anims.play('idleNinja',true).setFlipX(false);
  }
    else if(standing==true){    
      if(playerSkin=="ninja"){
          player.play('run', true).setFlipX(false);           
      } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(false);            
      } 
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(false);            
      } 

    player.setVelocityX(250*runSpeed);
    playerDirection="right"
    }
    else if(standing==false){
      if(playerSkin=="ninja"){
          player.anims.play('jumpUpNinja',true).setFlipX(false);      
      } 
      if(playerSkin=="ninjaRouge"){
          player.play('jumpUpRouge', true).setFlipX(false);        
      } 
      if(playerSkin=="ninjaGreen"){
          player.play('jumpUpNinjaGreen', true).setFlipX(false);            
      } 
    
    player.setVelocityX(250*runSpeed);
    playerDirection="right"
    }
  }

        if(onPlatform=="ice"){
 
              player.setAccelerationX(200)
              if(playerSkin=="ninja"){
                  player.play('run', true).setFlipX(false);     
      } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(false);  
      } 
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(false);            
      } 
             
              playerDirection="right"
      }
 
}

goLeft(){
    if(onPlatform!="ice"){
    if(standing==true){   
      if(playerSkin=="ninja"){
          player.play('run', true).setFlipX(true); 
      } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);
      }  
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);
      }  

    playerDirection="left"
        player.setVelocityX(-250*runSpeed);
    }
    else if(standing==false){
      if(playerSkin=="ninja"){
          player.play('run', true).setFlipX(true); 
      } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);
      } 
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);
      } 
          playerDirection="left"
        player.setVelocityX(-250*runSpeed);
    }
  }
  if(onPlatform=="ice"){
              player.setAccelerationX(-200)
              if(playerSkin=="ninja"){
                  player.play('run', true).setFlipX(true);
      } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);
      } 
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);
      } 
            
              playerDirection="left"
      }
}

jump(){

    
  if(gravity==1000){     
      player.setVelocityY(-500);
      standing=false;
      if(playerSkin=="ninja"){
          player.play('jumpUpNinja', true);        
      } 
      if(playerSkin=="ninjaRouge"){
          player.play('jumpUpNinjaRouge', true);        
      }         
      if(playerSkin=="ninjaGreen"){
          player.play('jumpUpNinjaGreen', true);        
      } 

      if(padConnected){
      if( paddle.right && paddle.left && onPlatform !="ice"){
          player.setVelocityX(0)
      }
  }
      if( keyQ.isUp && keyD.isUp && onPlatform !="ice"){
          player.setVelocityX(0)
      }
  }
  if(gravity==100){
      player.setVelocityY(-100);
      standing=false;
      if(playerSkin=="ninja"){
          player.play('jump', true); } 
      if(playerSkin=="ninjaRouge"){
          player.play('jumpNinjaRouge', true);        
      }
      if(playerSkin=="ninjaGreen"){
          player.play('jumpNinjaGreen', true);        
      }  

      if(keyQ.isUp && keyD.isUp && onPlatform !="ice"){
          player.setVelocityX(0)
      }
      if(padConnected){
      if( paddle.right && paddle.left && onPlatform !="ice"){
          player.setVelocityX(0)
      }
      }
  }
  
}

playerPlatformMoving(player, platformMoving){
    if(player.body.blocked.down){

    if(platformMoving.direction=='LEFT'){
       this.goLeft()
        //  player.setVelocityX(-100);
    }
    if(platformMoving.direction=='RIGHT'){
        player.setVelocityX(100);
    }
    }
}
  
playerGoInvincible(){

          playerInvincible=true;
          this.invicibleAfterHitAlpha0;
          this.time.delayedCall(100, this.invicibleAfterHitAlpha1, null, this);
          this.time.delayedCall(200, this.invicibleAfterHitAlpha0, null, this);
          this.time.delayedCall(300, this.invicibleAfterHitAlpha1, null, this);
          this.time.delayedCall(400, this.invicibleAfterHitAlpha0, null, this);
          this.time.delayedCall(500, this.invicibleAfterHitAlpha1, null, this);           
          this.time.delayedCall(600, this.invicibleAfterHitAlpha0, null, this);
          this.time.delayedCall(700, this.invicibleAfterHitAlpha1, null, this);
          this.time.delayedCall(800, this.invicibleAfterHitAlpha0, null, this);
          this.time.delayedCall(900, this.invicibleAfterHitAlpha1, null, this);
          this.time.delayedCall(1000, this.invisibleOff, null, this);

    
}

invisibleOff(){
    playerInvincible=false;
    player.setTint(0xffffff)

}
  
invicibleAfterHitAlpha0(){
    player.setAlpha(0);
}
  
invicibleAfterHitAlpha1(){
    player.setAlpha(1);
    player.setTint(0xff0000)
}
  
destroyFireballSnowball(bomb, snowball){
    bomb.destroy();
    snowball.destroy();
}
   
death(){
   // if(level!="tutoriel"){


    this.input.keyboard.shutdown();
      player.setVelocityX(0);
      player.anims.play('die');
      player.setTint(0xff0000)
      this.physics.pause();
      keyD.reset();
      keyQ.reset();
      keyZ.reset(); 

    this.time.delayedCall(1000, this.mort, null, this);
    }
//  }

mort(){
       
  viesRestantes-=1;
 

  if(viesRestantes>0){
 player.setVelocityX(0);
   this.scene.start('Death');
  }
  if(viesRestantes==0){
  this.scene.start('GameOver');
  } 
}
  
playerEscalierDroit(){
  if(padConnected){
      if(paddle.right){
          if(player.body.blocked.down || player.body.touching.down){
              standing=true
          }
          if(playerSkin=="ninja"){
              player.play('run', true); } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true);       
      }
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true);       
      }  
         
          player.setVelocityY(-250)
      }
  }
    if(keyD.isDown){
              if(player.body.blocked.down || player.body.touching.down){
     standing=true
    }
    if(playerSkin=="ninja"){
              player.play('run', true); } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true);       
      }
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true);       
      }  
                   player.setVelocityY(-250)
    }

}

playerEscalierGauche(){
  if(padConnected){
      if(paddle.left){
          if(player.body.blocked.down || player.body.touching.down){
              standing=true
          }
          if(playerSkin=="ninja"){
              player.play('run', true).setFlipX(true);    
          } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);       
      }
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);       
      }  
         

          player.setVelocityY(-250)
      }
  }
    if(keyQ.isDown){
              if(player.body.blocked.down || player.body.touching.down){
     standing=true
    }
    if(playerSkin=="ninja"){
              player.play('run', true).setFlipX(true);    
          } 
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);       
      }
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);       
      }  
        player.setVelocityY(-250)
    }
}



delayStart(){

  player.body.setSize(230, 480, true);
  player.body.setOffset(150,0);

}


preload (){


  var powerUpSnow = this.load.image('powerupFireball', 'assets/powerupFireball.png');
  var powerUpHealth = this.load.image('powerUpHealth', 'assets/powerUpHealth.png');
  var platformFake = this.load.image('platformFake', 'assets/platformFake.png');
  var platformFalling = this.load.image('platformFalling', 'assets/platformFake.png');
  var platformInvisible = this.load.image('platformInvisible', 'assets/platformFake.png');
  var platformMoving = this.load.image('platformMoving', 'assets/platformFake.png');
  var picsInvisible = this.load.image('picsInvisible', 'assets/picsInvisible.png');
  this.load.image('blackSquare', 'assets/blackSquare.png');
  this.load.image('fireball', 'assets/fireball.png');
  this.load.image('coin', 'assets/cles.png');
  this.load.image('snowball', 'assets/snowball.png');
  this.load.image('soldatEnnemi', 'assets/soldatEnnemi.png');
  this.load.image('bomb', 'assets/bomb.png');
  //this.load.image('sky', 'assets/sky.png');
  this.load.image('flag', 'assets/igloo.png');
  this.load.image('snowman', 'assets/snowman.png');
 // this.load.image('ground', 'assets/platform.png');
  this.load.image('life', 'assets/life.png')
  this.load.image('explosion', 'assets/explosion.png')
  this.load.image('froid', 'assets/froid.png')
 // this.load.image('health', 'assets/star.png', { width: 10,  height: 20,});
  this.load.image('snowstorm', 'assets/snowstorm.png');
  this.load.image('water', 'assets/water.png');
  this.load.image('castor', 'assets/castor.png');
  this.load.image('player1Ninja', 'assets/playerNinjaIdle1.png');
  this.load.image('teleport', 'assets/teleporter.png');
  //this.load.spritesheet('dude1', 'assets/dude1.png', { frameWidth: 32, frameHeight: 48 });    
  this.load.spritesheet('spritesheetSoldatennemi', 'assets/spritesheetSoldatennemi.png', { frameWidth: 325, frameHeight: 591 });
  
  

     this.load.spritesheet('spritesheetPlayerNinja', 'assets/spritesheetPlayerNinja.png', { frameWidth: 520, frameHeight: 480 });
     this.load.spritesheet('spritesheetPlayerNinjaRed', 'assets/spritesheetPlayerNinjaRed.png', { frameWidth: 520, frameHeight: 480 });
     this.load.spritesheet('spritesheetPlayerNinjaGreen', 'assets/spritesheetPlayerNinjaGreen.png', { frameWidth: 520, frameHeight: 480 });    
  
  
  
  this.load.spritesheet('spritesheetFireball', 'assets/spritesheetFireball.png', { frameWidth: 263, frameHeight: 280 });
  this.load.spritesheet('spritesheetCastor', 'assets/spritesheetCastor.png', { frameWidth: 27, frameHeight: 20 });

  
  
   this.load.image('tiles', './assets/tileset.png');
   this.load.atlas('atlas', 'assets/mario-atlas.png', 'assets/mario-atlas.json');

    

   this.load.tilemapTiledJSON('tutoriel', './assets/tutoriel.json');
   this.load.tilemapTiledJSON('level1', './assets/level1.json');
   this.load.tilemapTiledJSON('level2', './assets/level2.json');
   this.load.tilemapTiledJSON('level3', './assets/level3.json');
   this.load.tilemapTiledJSON('level4', './assets/level4.json');


}

create (){

 if(level=="tutoriel"){
         this.map = this.make.tilemap({ key: 'tutoriel' });
    }
   if(level=="level1"){
         this.map = this.make.tilemap({ key: 'level1' });
    }
    if(level=="level2"){
       this.map = this.make.tilemap({ key: 'level2' });
    }     
    if(level=="level3"){
         this.map = this.make.tilemap({ key: 'level3' });
    }
    if(level=="level4"){
       this.map = this.make.tilemap({ key: 'level4' });
    }

  
  this.tileset = this.map.addTilesetImage('tileset', 'tiles');
  var background = this.map.createDynamicLayer('background', this.tileset, 0, 0);
  this.platform = this.map.createDynamicLayer('platform', this.tileset, 0, 0);
  var platformEscalierDroit = this.map.createDynamicLayer('platformEscalierDroit', this.tileset, 0, 0);
  var platformEscalierGauche = this.map.createDynamicLayer('platformEscalierGauche', this.tileset, 0, 0);
  var platformMontagne = this.map.createDynamicLayer('platformMontagne', this.tileset, 0, 0);
  var platformSnow = this.map.createDynamicLayer('platformSnow', this.tileset, 0, 0);
  var platformIce = this.map.createDynamicLayer('platformIce', this.tileset, 0, 0);
  var pics = this.map.createDynamicLayer('pics', this.tileset, 0, 0);
  //const texteTuto = this.map.getObjectLayer('tutoTexte').objects;
  
    
 this.platform.setCollisionByExclusion(-1, true);
 pics.setCollisionByExclusion(-1, true);
 platformEscalierDroit.setCollisionByExclusion(-1, true);
 platformEscalierGauche.setCollisionByExclusion(-1, true);
 platformMontagne.setCollisionByExclusion(-1, true);
 platformSnow.setCollisionByExclusion(-1, true);
 platformIce.setCollisionByExclusion(-1, true);


 /*this.input.gamepad.once('down', function (pad, button, index) {
          gamepad = pad;
      }); */
    
  /*  this.input.gamepad.on('down', function (pad, button, index) {
      return;
  }),*/


    /////////////////////////////////////////
    /////////////PLAYER//////////////////////
  var blackScreen = this.physics.add.sprite(1210, 50, 'blackSquare').setScrollFactor(0).setScale(0.15).setDepth(1);
  fireballLeftText = this.add.text(1170, 50,  fireballLeft,{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1);  
  var fireballLeftImage = this.physics.add.sprite(1220, 65, 'fireball').setScrollFactor(0).setScale(1.5).setDepth(1);
    
  viesRestantesText = this.add.text(280, 170,  viesRestantes,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1);  
  var life = this.physics.add.sprite(320, 180, 'life').setScrollFactor(0).setScale(0.05).setDepth(1);
    
  textPieces = this.add.text(280, 200,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1);  
  var pieces = this.physics.add.sprite(320, 210, 'coin').setScrollFactor(0).setScale(0.08).setDepth(1);
  if(hardcoreMode=="off"){    
  froid1 = this.physics.add.sprite(500, 180, 'froid').setScrollFactor(0).setScale(0.1).setDepth(1);
  froid2 = this.physics.add.sprite(600, 180, 'froid').setScrollFactor(0).setScale(0.1).setDepth(1);
  froid3 = this.physics.add.sprite(700, 180, 'froid').setScrollFactor(0).setScale(0.1).setDepth(1);
  }
  player = this.physics.add.sprite(60, 500, 'spritesheetPlayerNinja');
  player.setGravityY(1000)

  player.setCollideWorldBounds(false).setScale(0.2);
  this.time.delayedCall(100, this.delayStart, null, this);
  
/*  this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNames('atlas', {
          prefix: 'mario-atlas_',
          start: 1,
          end: 3,
      }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'idle',
      frames: [{ key: 'atlas', frame: 'mario-atlas_0' }],
      frameRate: 10
  });

  this.anims.create({
      key: 'jump',
      frames: [{ key: 'atlas', frame: 'mario-atlas_4' }],
      frameRate: 10
  });

  this.anims.create({
      key: 'die',
      frames: [{ key: 'atlas', frame: 'mario-atlas_5' }],
      frameRate: 10
  });*/



if(playerSkin=="ninja"){
  this.anims.create({
      key: 'runNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 1, end: 3 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'idleNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpUpNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 4, end: 4 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpDownNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 5, end: 5 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'crouchDownNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 6, end: 6 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'dieNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'throwFireballNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
}

if(playerSkin=="ninjaRouge"){
  this.anims.create({
      key: 'runNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 1, end: 3 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'idleNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpUpNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 4, end: 4 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpDownNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 5, end: 5 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'crouchDownNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 6, end: 6 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'dieNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'throwFireballNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
}


if(playerSkin=="ninjaGreen"){
  this.anims.create({
      key: 'runNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 1, end: 3 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'idleNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpUpNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 4, end: 4 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpDownNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 5, end: 5 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'crouchDownNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 6, end: 6 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'dieNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'throwFireballNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
}






    this.physics.add.collider(player, platformEscalierDroit, this.playerEscalierDroit, null, this);
    this.physics.add.collider(player, platformEscalierGauche, this.playerEscalierGauche, null, this);
    this.physics.add.collider(player, pics, this.death, null, this);


   //////////////////////////////////////////////
    ///////////////////////////////////////////////
    
    
    

    
    
    
    
 /*   
  var snowstorm = this.physics.add.sprite(-900, 0, 'snowstorm').setOrigin(0, 0);
    if(hardcoreMode=="off"){
      snowstorm.body.velocity.x=10;
    }
    if(hardcoreMode=="on"){
      snowstorm.body.velocity.x=17;
    }

  snowstorm.body.allowGravity = false*/

 
    
    
    
 // this.cameras.main.zoom = 1.75;
  this.cameras.main.zoom = 1;

  this.cursors = this.input.keyboard.createCursorKeys();
  

      //this.cameras.main.startFollow(player, true, 1, 0, 0, 0);  

    
  this.cameras.main
      .setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
      .startFollow(player);
  
  





this.anims.create({
  key: 'fireballSpin',
  frames: this.anims.generateFrameNumbers('spritesheetFireball',  {start: 0, end: 1 }),
  frameRate: 10,
  repeat: -1
});


  /////////////////////////////////////////
  //////////////teleportItems//////////////////
    
  const teleportItemObjects = this.map.getObjectLayer('teleportItem').objects;
  this.teleportItems = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const teleportItem of teleportItemObjects) {
  this.teleportItems.create(teleportItem.x+8, teleportItem.y-3, 'fireball').setScale(1.5)
      .setOrigin(0.5,0.5)
      .setDepth(-1)
  }


  this.physics.add.overlap(this.teleportItems, player, this.pickUpTeleport, null, this);


  /////////////////////////////////////////
  //////////////shurikens//////////////////
    
  const shurikensItemObjects = this.map.getObjectLayer('shurikensItem').objects;
  this.shurikensItems = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const shurikensItem of shurikensItemObjects) {
  this.shurikensItems.create(shurikensItem.x+8, shurikensItem.y-3, 'fireball').setScale(1.5)
      .setOrigin(0.5,0.5)
      .setDepth(-1)
  }

 

  this.physics.add.overlap(this.shurikensItems, player, this.pickUpShuriken, null, this);

  ///////////////////////////////////////
  ////////////Goomba////////////////////
  
  this.anims.create({
  key: 'castorRun',
  frames: this.anims.generateFrameNumbers('spritesheetCastor', { start: 0, end: 1 }),
  frameRate: 5,
  repeat: -1
});
    

   this.goombas = this.physics.add.group({
       allowGravity: true,
       immovable: true
   }); 
 
   const goombaObjects = this.map.getObjectLayer('goomba').objects;


  for (const goomba of goombaObjects) {
  this.goombas.create(goomba.x, goomba.y-11, 'castor')
      .setOrigin(0.5,0.5)
      .setDepth(-1)
      .setScale(1.5)
      .setGravityY(1000)
}
    
  

  
  for (const goomba of this.goombas.children.entries) {
    goomba.direction = 'LEFT';
      goomba.isDed = false;
}  
 this.collider = this.physics.add.collider(player, this.goombas, this.death, null, this)
 this.physics.add.collider(this.goombas, this.platform);

 this.physics.add.collider(this.goombas, platformIce);
 this.physics.add.collider(this.goombas, platformSnow);
 this.physics.add.collider(this.goombas, platformMontagne);
 this.physics.add.collider(this.goombas, this.goombas);
 
  ///////////////////////////////////////
  ////////////picsInvisible////////////////////
    
  const picsInvisibleObjects = this.map.getObjectLayer('picsInvisible').objects;
  this.picsInvisible = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const picsInvisible of picsInvisibleObjects) {
  this.picsInvisible.create(picsInvisible.x+8, picsInvisible.y-3, 'picsInvisible').setScale(0.5).setAlpha(0)
      .setOrigin(0.5,0.5)
      .setDepth(-1)
  }

  for (const picsInvisible of this.picsInvisible.children.entries) {
  picsInvisible.collider = this.physics.add.collider(picsInvisible, player, this.showPicsInvisible, null, this);
  
}      
    
    
        
   ///////////////////////////////////////
  ////////////platformInvisible////////////////////
    
  const platformInvisibleObjects = this.map.getObjectLayer('platformInvisible').objects;
  this.platformInvisible = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const platformInvisible of platformInvisibleObjects) { 
  this.platformInvisible.create(platformInvisible.x+7, platformInvisible.y-8, 'platformInvisible').setAlpha(0)
      .setOrigin(0.5,0.5)
      .setDepth(-1)
   
  }
    
  for (const platformInvisible of this.platformInvisible.children.entries) {
  platformInvisible.collider = this.physics.add.collider(platformInvisible, player, this.showPlatformInvisible, null, this);
  
}  
    
    
    
    
    
    
  ///////////////////////////////////////
  ////////////platformMoving////////////////////

  const platformMovingObjects = this.map.getObjectLayer('platformMoving').objects;
  this.platformsMoving = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const platformMoving of platformMovingObjects) {
  this.platformsMoving.create(platformMoving.x+7, platformMoving.y-8, 'platformMoving')
      .setOrigin(0.5,0.5)
      .setDepth(-1)
   
  }

  for (const platformMoving of this.platformsMoving.children.entries) {
      this.physics.add.collider(player, platformMoving, this.playerPlatformMoving, null, this)
      this.physics.add.collider(platformMoving, platform);
}    
    

  ///////////////////////////////////////
  ////////////platformFalling////////////////////

  const platformFallingObjects = this.map.getObjectLayer('platformFalling').objects;
  this.platformsFalling = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const platformFalling of platformFallingObjects) {
  this.platformsFalling.create(platformFalling.x+8, platformFalling.y-8, 'platformFalling')
      .setOrigin(0.5,0.5)
      .setDepth(-1)
   
  }

  for (const platformFalling of this.platformsFalling.children.entries) {
  platformFalling.collider = this.physics.add.collider(platformFalling, player, this.death, null, this);
  
}  
  ///////////////////////////////////////
  ////////////water//////////////////////

  const waterObjects = this.map.getObjectLayer('water').objects;
  this.waters = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const water of waterObjects) {
  this.waters.create(water.x+7, water.y-8, 'water').setScale(0.015)
      .setOrigin(0.5,0.5)
      .setDepth(-1)
   
  }

  for (const water of this.waters.children.entries) {
  water.collider = this.physics.add.overlap(water, player, this.playerInWater, null, this); 
}  
        ///////////////////////////////////////
  ////////////waterTop//////////////////////

  const waterTopObjects = this.map.getObjectLayer('waterTop').objects;
  this.watersTop = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const waterTop of waterTopObjects) {
  this.watersTop.create(waterTop.x+7, waterTop.y-8, 'water').setScale(0.015)
      .setOrigin(0.5,0.5)
      .setDepth(-1)
   
  }

  for (const waterTop of this.watersTop.children.entries) {
   waterTop.collider = this.physics.add.overlap(waterTop, player, this.playerInWaterTop, null, this); 
}  
  ///////////////////////////////////////
  ////////////platformFake////////////////////

  const platformFakeObjects = this.map.getObjectLayer('platformFake').objects;
  this.platformFake = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const platformFake of platformFakeObjects) {
  this.platformFake.create(platformFake.x+8, platformFake.y-8, 'platformFake')
      .setOrigin(0.5,0.5)
      .setDepth(-1)
   
  }

  for (const platformFake of this.platformFake.children.entries) {
  platformFake.collider = this.physics.add.overlap(platformFake, player, this.destroyPlatformFake, null, this);
  
}  

///////////////////////////////////////
  ////////////LanceursGrenades////////////////////
  this.grenadesLanceGrenade = this.physics.add.group({
    degats : 50,
 });
 console.log("grenades")
/* for (const ballesSniper of this.ballesSnipers.children.entries) {
 this.physics.add.overlap( player,ballesSniper, this.degatSnowballJoueur, [ballesSniper, 50], this);
 }*/
//this.physics.add.overlap(player,this.ballesSoldats, this.degatSnowballJoueur, [ballesSoldat, snowball, 20], this);

 const lanceGrenadesObjects = this.map.getObjectLayer('lanceGrenade').objects;
 this.lanceGrenades = this.physics.add.group({
    immovable: true,
 });

for (const lanceGrenade of lanceGrenadesObjects) {
this.lanceGrenades.create(lanceGrenade.x, lanceGrenade.y-20, 'soldatEnnemi')
    .setOrigin(0.5,0.5)
    .setDepth(-1)
    .setGravityY(1000)
    //.setSize(50, 55, true)
    .setOffset(0,0)
    .setScale(0.2)
}
  



for (const lanceGrenade of this.lanceGrenades.children.entries) {
    //sniperEnnemi.collider = this.physics.add.overlap(sniperEnnemi, player, this.contactYetiJoueur, null, this);
    lanceGrenade.direction = 'RIGHT';
}  
this.physics.add.collider(this.lanceGrenades, this.platform);

///////////////////////////////////////
  ////////////SniperEnnemi////////////////////
  this.ballesSnipers = this.physics.add.group({
      immovable: true,
      degats : 50,
   });

  /* for (const ballesSniper of this.ballesSnipers.children.entries) {
   this.physics.add.overlap( player,ballesSniper, this.degatSnowballJoueur, [ballesSniper, 50], this);
   }*/
  //this.physics.add.overlap(player,this.ballesSoldats, this.degatSnowballJoueur, [ballesSoldat, snowball, 20], this);
   



  this.anims.create({
  key: 'soldierShoot',
  frames: this.anims.generateFrameNumbers('spritesheetSoldatennemi', { start: 0, end: 1 }),
  frameRate: 5,
  repeat: 0
});


   const sniperEnnemiObjects = this.map.getObjectLayer('sniperEnnemi').objects;
   this.sniperEnnemis = this.physics.add.group({
      immovable: true,
   });

  for (const sniperEnnemi of sniperEnnemiObjects) {
  this.sniperEnnemis.create(sniperEnnemi.x, sniperEnnemi.y-20, 'soldatEnnemi')
      .setOrigin(0.5,0.5)
      .setDepth(-1)
      .setGravityY(1000)
      //.setSize(50, 55, true)
      .setOffset(0,0)
      .setScale(0.2)
}
    
  

  
  for (const sniperEnnemi of this.sniperEnnemis.children.entries) {
      //sniperEnnemi.collider = this.physics.add.overlap(sniperEnnemi, player, this.contactYetiJoueur, null, this);
      sniperEnnemi.direction = 'RIGHT';
}  
 this.physics.add.collider(this.sniperEnnemis, this.platform);

    
    


           ///////////////////////////////////////
  ////////////MachineGunnerennemi////////////////////
  this.ballesMachineGunners = this.physics.add.group({
      immovable: true,
      degats : 50,
   });
   console.log("machineGunner")
  /* for (const ballesSniper of this.ballesSnipers.children.entries) {
   this.physics.add.overlap( player,ballesSniper, this.degatSnowballJoueur, [ballesSniper, 50], this);
   }*/
  //this.physics.add.overlap(player,this.ballesSoldats, this.degatSnowballJoueur, [ballesSoldat, snowball, 20], this);
   



  this.anims.create({
  key: 'soldierShoot',
  frames: this.anims.generateFrameNumbers('spritesheetSoldatennemi', { start: 0, end: 1 }),
  frameRate: 5,
  repeat: 0
});


   const machineGunnerEnnemiObjects = this.map.getObjectLayer('machineGunnerEnnemi').objects;
   this.machineGunnerEnnemis = this.physics.add.group({
      immovable: true,
   });

  for (const machineGunnerEnnemi of machineGunnerEnnemiObjects) {
  this.machineGunnerEnnemis.create(machineGunnerEnnemi.x, machineGunnerEnnemi.y-20, 'soldatEnnemi')
      .setOrigin(0.5,0.5)
      .setDepth(-1)
      .setGravityY(1000)
      //.setSize(50, 55, true)
      .setOffset(0,0)
      .setScale(0.2)
}
    
  

  
  for (const machineGunnerEnnemi of this.machineGunnerEnnemis.children.entries) {
      machineGunnerEnnemi.direction = 'RIGHT';
}  
 this.physics.add.collider(this.machineGunnerEnnemis, this.platform);
 this.physics.add.collider(this.machineGunnerEnnemis, platformIce);
 this.physics.add.collider(this.machineGunnerEnnemis, platformSnow);
 this.physics.add.collider(this.machineGunnerEnnemis, platformMontagne);
    
    



  ///////////////////////////////////////
  ////////////Yeti////////////////////
  this.ballesSoldats = this.physics.add.group({
      immovable: true,
   });


  this.anims.create({
  key: 'soldierShoot',
  frames: this.anims.generateFrameNumbers('spritesheetSoldatennemi', { start: 0, end: 1 }),
  frameRate: 5,
  repeat: 0
});


   const yetiObjects = this.map.getObjectLayer('yeti').objects;
   this.yetis = this.physics.add.group({
      immovable: true,
   });

  for (const yeti of yetiObjects) {
  this.yetis.create(yeti.x, yeti.y-20, 'soldatEnnemi')
      .setOrigin(0.5,0.5)
      .setDepth(-1)
      .setGravityY(1000)
      //.setSize(50, 55, true)
      .setOffset(0,0)
      .setScale(0.2)
}
    
  

  
  for (const yeti of this.yetis.children.entries) {
  yeti.collider = this.physics.add.overlap(yeti, player, this.contactYetiJoueur, null, this);
  yeti.direction = 'RIGHT';
}  
 this.physics.add.collider(this.yetis, this.platform);
 this.physics.add.collider(this.yetis, platformIce);
 this.physics.add.collider(this.yetis, platformSnow);
 this.physics.add.collider(this.yetis, platformMontagne);
    
    
   ///////////////////////////////////////
  ////////////Snowman////////////////////

   const snowmanObjects = this.map.getObjectLayer('snowman').objects;
   this.snowmen = this.physics.add.group();

  for (const snowman of snowmanObjects) {
  this.snowmen.create(snowman.x+snowman.width/2, snowman.y-snowman.height/2, 'snowman').setScale(0.03)
      .setOrigin(0.5,0.5)
      .setGravityY(1000)
}
    
  

  
  for (const snowman of this.snowmen.children.entries) {
  snowman.collider = this.physics.add.overlap(snowman, player, this.degatSnowmanJoueur, null, this);

}  
      this.physics.add.collider(this.snowmen, this.platform);
      this.physics.add.collider(this.snowmen, this.platformsFalling);
  this.physics.add.collider(this.snowmen, this.snowmen);

//  this.physics.world.OVERLAP_BIAS = 10000

  ///////////////////////////////////////
  ////////////Pièces////////////////////
  
 const coinObjects = this.map.getObjectLayer('coin').objects;
   this.coins = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const coin of coinObjects) {
  this.coins.create(coin.x+8, coin.y-9, 'coin').setScale(0.0625)
      .setOrigin(0.5,0.5)
      .setDepth(-1);
}
    
  

  
  for (const coin of this.coins.children.entries) {
  coin.collider = this.physics.add.overlap(coin, player, this.collectCoin, null, this);
}
  

  
  ///////////////////////////////////////
  ////////////PowerUpFireball////////////
  
  const powerUpFireballObjects = this.map.getObjectLayer('powerUpFireball').objects;
   this.powerUpFireball = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const powerUpFireball of powerUpFireballObjects) {
  this.powerUpFireball.create(powerUpFireball.x+10, powerUpFireball.y-13,'powerupFireball').setScale(0.15)
      .setOrigin(0.5,0.5)
      .setDepth(-1);

}
      
  
  
  for (const powerUpFireball of this.powerUpFireball.children.entries) {
      this.physics.add.collider(powerUpFireball, pics)
      powerUpFireball.collider = this.physics.add.overlap(powerUpFireball, player, this.collectPowerUpFireball, null, this);
}

  
   ///////////////////////////////////////
  ////////////PowerUpHealth////////////
  if(hardcoreMode=="off"){
  const powerUpHealthObjects = this.map.getObjectLayer('powerUpHealth').objects;
   this.powerUpHealth = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const powerUpHealth of powerUpHealthObjects) {
  this.powerUpHealth.create(powerUpHealth.x+8, powerUpHealth.y-10,'powerUpHealth')
      .setOrigin(0.5,0.5)
      .setDepth(-1);

}
      
  
  
  for (const powerUpHealth of this.powerUpHealth.children.entries) {
  powerUpHealth.collider = this.physics.add.overlap(powerUpHealth, player, this.collectHealthPlayer, null, this);
}
  }
  
      ///////////////////////////////////////
      ////////////arrivée////////////////////
  
   const flagObjects = this.map.getObjectLayer('flag').objects;
   this.flag = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const flag of flagObjects) {
  this.flag.create(flag.x+40, flag.y-22, 'flag')
      .setOrigin(0.5,0.5)
      .setDepth(-1);
}
    
  

  
  for (const flag of this.flag.children.entries) {
  flag.collider = this.physics.add.overlap(flag, player, this.contactDrapeau, null, this);
}  
  
  
  
  
      ///////////////////////////////////////
      ///////////////////////////////////////
  

      
  keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
  keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
  //  A simple background for our game
 // this.add.image(400, 300, 'sky');

  //  The platforms group contains the ground and the 2 ledges we can jump on
 // platforms = this.physics.add.staticGroup();

  //  Here we create the ground.
  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
 // platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  //  Now let's create some ledges
 // platforms.create(600, 400, 'ground');
 // platforms.create(50, 250, 'ground');
 // platforms.create(750, 220, 'ground');

  // The player and its settings

  //  Player physics properties. Give the little guy a slight bounce.
 




  //  Our player animations, turning, walking left and walking right.


  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();

  //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
/*  healthPowerUp = this.physics.add.group({
      key: 'health',
      repeat: 0,
      setXY: { x: Phaser.Math.FloatBetween(4, 1000), y: 0, stepX: Phaser.Math.FloatBetween(4, 1000) }
  });*/

 /* healthPowerUp.children.iterate(  (child) {

      //  Give each star a slightly different bounce
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

  });*/

  bombs = this.physics.add.group();
  
  teleportations = this.physics.add.group();

  snowballs = this.physics.add.group();

  
  fireball = this.physics.add.group();
  roquettes = this.physics.add.group();
  //  The score

  
  //  Collide the player and the stars with the platforms

  //this.physics.add.collider(healthPowerUp, platform);
  
  this.physics.add.collider(teleportations, this.platform);

  this.physics.add.collider(bombs, this.platform, this.destroyFireball, null, this);
  this.physics.add.collider(bombs, platformIce, this.destroyFireball, null, this);
  this.physics.add.collider(bombs, platformSnow, this.destroyFireball, null, this);
  this.physics.add.collider(bombs, this.platformFake, this.destroyFireball, null, this);
  this.physics.add.collider(bombs, snowballs, this.destroyFireballSnowball, null, this);
  this.physics.add.collider(bombs, pics, this.destroyFireballPics, null, this);
 // this.physics.add.collider(snowballs, platform, this.destroyFireball, null, this);
  this.physics.add.collider(snowballs, platformIce, this.destroyFireball, null, this);
  this.physics.add.collider(snowballs, platformSnow, this.destroyFireball, null, this);
  this.physics.add.collider(snowballs, this.platformFake, this.destroyFireball, null, this);
  this.physics.add.collider(snowballs, snowballs, this.destroyFireballSnowball, null, this);
  this.physics.add.collider(snowballs, pics, this.destroyFireballPics, null, this);
  this.physics.add.collider(player, this.goomba, this.death, null, this);


  this.physics.add.collider(this.platform, ballesSoldat,  this.destroyBalle,null,this)
  this.physics.add.collider(this.platform, ballesSniper,  this.destroyBalle,null,this)
    
 // this.physics.add.collider(snowballs, platform, this.destroySnowball, null, this);


//   this.physics.add.collider(fireball, platform);
  
//   this.physics.add.collider(fireball, platformSnow);


  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar  
//   this.physics.add.overlap(player,healthPowerUp , collectHealthPlayer, null, this);

  
  
  
  this.physics.add.overlap(this.yetis, bombs, this.killYeti, null, this);
  

  
  this.physics.add.overlap(this.lanceGrenades, bombs, this.killLanceGrenade, null, this);
  this.physics.add.overlap(this.machineGunnerEnnemis, bombs, this.killMachineGunner, null, this);
  this.physics.add.overlap(this.sniperEnnemis, bombs, this.killSniperEnnemi, null, this);
  this.physics.add.overlap(this.snowmen, bombs, this.killSnowman, null, this);
  
  this.physics.add.collider(player, roquettes, this.hitBomb, null, this);
  
  this.physics.add.collider(player, this.platform, this.setSpeedPlatform, null, this);
    
  this.physics.add.collider(player, platformMontagne, this.bouncePlatformMontagne, null, this);
        
  this.physics.add.collider(player, platformSnow, this.setSpeedPlatformSnow, null, this);
  this.physics.add.collider(player, platformIce, this.setSpeedPlatformIce, null, this);




  /////////////////




  
}

update (){    




  velociteChute=player.body.velocity.y;

  /////////////
  this.input.gamepad.once('connected', function (pad) {
  //   'pad' is a reference to the gamepad that was just connected
      paddle = pad;
      padConnected = true;
  });
    
    if(playerInWater==true){

        gravity=100
      player.setGravityY(100)
    }
    if(playerInWater==false){
        gravity=1000
       player.setGravityY(1000)
    }

/*
if(player.body.blocked.down==true){

    if(player.velocityY >100){
      console.log("ebkebnrb")
    }
  }*/
    
    
    
for (const platformFalling of this.platformsFalling.children.entries) {    
if(player.x>platformFalling.x && player.x<platformFalling.x+35 && player.y>platformFalling.y){
  platformFalling.setVelocityY(600)
}   

}
    
    
    
    
/////////////////Bouger goomba//////////////////////
for (const goomba of this.goombas.children.entries) {

      if (goomba.body.blocked.right) {
          goomba.direction = 'LEFT';
          goomba.play('castorRun', true).setFlipX(false);
      }

      if (goomba.body.blocked.left) {
          goomba.direction = 'RIGHT';
          goomba.play('castorRun', true).setFlipX(true);
      }

      if (goomba.direction === 'RIGHT') {
          goomba.setVelocityX(300);
      } else {
          goomba.setVelocityX(-300);
      }


  }
    
/*for (const yeti of this.yetis.children.entries) {
      if (yeti.body.blocked.right) {
          yeti.direction = 'LEFT';
      }

      if (yeti.body.blocked.left) {
          yeti.direction = 'RIGHT';
      }

      if (yeti.direction === 'RIGHT') {
          yeti.setVelocityX(150);
      } else {
          yeti.setVelocityX(-150);
      }


  }*/


for (const platformMoving of this.platformsMoving.children.entries) {
      if (platformMoving.body.blocked.right) {
          platformMoving.direction = 'LEFT';
      }

      if (platformMoving.body.blocked.left) {
          platformMoving.direction = 'RIGHT';
      }

      if (platformMoving.direction === 'RIGHT') {
          platformMoving.setVelocityX(100);
      } else {
          platformMoving.setVelocityX(-100);
      }

    

  }


    cooldownTirSoldatEnnemiBeforeShoot--
    if(cooldownTirSoldatEnnemiBeforeShoot<=0){
      cooldownTirSoldatEnnemiBeforeShoot=cooldownTirSoldatEnnemi
        this.lancerSnowballYeti();
    }

    cooldownTirSniperEnnemiBeforeShoot--
    if(cooldownTirSniperEnnemiBeforeShoot<=0){
      cooldownTirSniperEnnemiBeforeShoot=cooldownTirSniperEnnemi
        this.tirSniperEnnemi();  
    }

    cooldownTirMachineGunnerEnnemiBeforeShoot--
    if(cooldownTirMachineGunnerEnnemiBeforeShoot<=0){
      cooldownTirMachineGunnerEnnemiBeforeShoot=cooldownTirMachineGunnerEnnemi
        this.tirMachineGunnerEnnemi();  
    }


    cooldownTirLanceGrenadeEnnemiBeforeShoot--
    if(cooldownTirLanceGrenadeEnnemiBeforeShoot<=0){
        cooldownTirLanceGrenadeEnnemiBeforeShoot=cooldownTirLanceGrenadeEnnemi
        this.tirLanceGrenadeEnnemi();  
    }
    
     




  // définie le contact du joueur avec un sol
   //standing = player.body.blocked.down || player.body.touching.down;
  
  
  

  
  
  
if(fireballPlayer == false){
   delaiFireballPlayer --
}
if (delaiFireballPlayer <= 0 && fireballPlayer == false) {
  delaiFireballPlayer = cooldownFireball;
  fireballPlayer = true;
}
  
       

this.input.on('pointerdown', function (pointer) {
    if(fireballPlayer == true && fireballPowerUpActive==true ){
        if(keyA.isDown){
          keyA.reset();
          this.lancerTeleport(player);
        }
        else if(keyA.isUp){
            fireballPlayer = false;
            this.lancerfireball(player);
        }
    }
}, this);

  



  

  
  
  
  
  if(player.body.blocked.down==false ){
      standing=false
  }
  
  
  
  if (keyQ.isDown)
  {
      this.goLeft();
  }
  if (keyD.isDown)
  {
      this.goRight();
  }
  
  
  
  

  if(standing==false){
      jumpingPlayer=true
  }
  
  if (standing==true)
  {
      jumpingPlayer=false
  }

  
  if (keyS.isDown && (standing == true || playerInWater==true))
  {   
      player.body.setSize(230, 340, true);
      player.body.setOffset(150,140);
      if(playerSkin=="ninja"){
      player.anims.play('crouchDownNinja');            
      } 
      if(playerSkin=="ninjaRouge"){
      player.anims.play('crouchDownNinjaRouge');            
      } 
      if(playerSkin=="ninjaGreen"){
      player.anims.play('crouchDownNinjaGreen');            
      } 
  }
 /* else{
      
      player.body.setSize(230, 480, true);
      player.body.setOffset(150,0); 
}*/
  if (keyZ.isDown && (standing == true || playerInWater==true))
  {   
      this.jump();
  }

  if(keyS.isUp && !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y-20) || this.platform.hasTileAtWorldXY(player.body.position.x+player.body.width, player.body.position.y-20))) {

          player.body.setSize(230, 480, false).setOffset(150, 0);
  }
  if(keyS.isUp && (this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y-20) || this.platform.hasTileAtWorldXY(player.body.position.x+player.body.width, player.body.position.y-20))) {

if(playerSkin=="ninja"){
  player.anims.play('crouchDownNinja');            
} 
if(playerSkin=="ninjaRouge"){
  player.anims.play('crouchDownNinjaRouge');            
} 
if(playerSkin=="ninjaGreen"){
  player.anims.play('crouchDownNinjaGreen');            
}
}


/*   
  if(keyZ.isDown && player.body.blocked.down==false && player.body.blocked.right==true){
      this.jump();
      this.bouncePlatformMontagne();
  }

  if(keyZ.isDown && player.body.blocked.down==false && player.body.blocked.left==true){
      this.jump();
      this.bouncePlatformMontagne();
  }*/

  
  if (player.body.blocked.down || playerInWater)
  {
      standing = true
  }
  

  
  
  if (keyD.isUp && keyQ.isUp && playerCanResetVelocity==true )
  {
      
      player.setAccelerationX(0);
      player.setVelocityX(0);

      if(keyS.isUp){
          if(!(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y-20) || this.platform.hasTileAtWorldXY(player.body.position.x+player.body.width, player.body.position.y-20))) {
      if(playerSkin=="ninja"){
      player.anims.play('idleNinja',true).setFlipX(false);           
      } 
      if(playerSkin=="ninjaRouge"){
          player.anims.play('idleNinjaRouge',true).setFlipX(false);         
      } 
      if(playerSkin=="ninjaGreen"){
          player.anims.play('idleNinjaGreen',true).setFlipX(false);           
      } }
  }
}
  if (keyD.isUp && keyQ.isUp && keyS.isUp  && playerCanResetVelocity==false )
  {

      player.setAccelerationX(0);
      if(!(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y-20) || this.platform.hasTileAtWorldXY(player.body.position.x+player.body.width, player.body.position.y-20))) {
      if(playerSkin=="ninja"){
      player.anims.play('idle');            
      } 
      if(playerSkin=="ninjaRouge"){
      player.anims.play('idleNinjaRouge');            
      } 
      if(playerSkin=="ninjaGreen"){
      player.anims.play('idleNinjaGreen');            
      } 
      }
  }

  if(standing==false){

      if(player.body.velocity.y<0){

          if(playerSkin=="ninja"){
      player.anims.play('jumpUp');            
      } 
      if(playerSkin=="ninjaRouge"){
      player.anims.play('jumpUpNinjaRouge');            
      } 
      if(playerSkin=="ninjaGreen"){
      player.anims.play('idleNinjaGreen');            
      } 
      }
      if(player.body.velocity.y>0){

      if(playerSkin=="ninja"){
      player.anims.play('jumpDownNinja');            
      } 
      if(playerSkin=="ninjaRouge"){
      player.anims.play('jumpDownNinjaRouge');            
      } 
      if(playerSkin=="ninjaGreen"){
      player.anims.play('jumpDownNinjaGreen');            
      } 
      }
  }
  
  
  
  if (player.y>1000){
      this.death();
  }
 
  if(padConnected){
      if(paddle.B){
          if(fireballPlayer == true && fireballPowerUpActive==true){
              fireballPlayer = false;
              this.lancerfireball(player);
          } 
      }
      if(paddle.left){
          this.goLeft();
      }
      if(paddle.right){
          this.goRight();
      }
      if(paddle.A && standing == true){
          this.jump();    
      }

      if (paddle.left==false && paddle.right==false &&  playerCanResetVelocity==false )
  {
          

      player.setAccelerationX(0);

      if(playerSkin=="ninja"){
      player.anims.play('idle');            
      } 
      if(playerSkin=="ninjaRouge"){
      player.anims.play('idleNinjaRouge');            
      } 
          
  }
      if (paddle.left==false && paddle.right==false &&  playerCanResetVelocity==true )
      {
          
          player.setVelocityX(0);

          if(playerSkin=="ninja"){
      player.anims.play('idle');            
      } 
      if(playerSkin=="ninjaRouge"){
      player.anims.play('idleNinjaRouge');            
      } 
          
      }
  }


  }





}