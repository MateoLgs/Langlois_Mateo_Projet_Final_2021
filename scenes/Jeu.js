  
class Jeu extends Phaser.Scene{
    constructor () {
      super('Jeu');
    }


/////////////////BOSS///////////////
tirSoldatBoss(boss){
    for (const boss of this.bosses.children.entries) {
        var ballesSoldatBoss = this.ballesSoldats.create(boss.x, boss.y, 'snowball').setFlipX(true).setScale(0.80);
        var randomBallesMachineGunners = Phaser.Math.Between(-50, 50);
        this.physics.moveTo(ballesSoldatBoss, player.x+randomBallesMachineGunners, player.y+randomBallesMachineGunners, vitesseBalleSoldatEnnemi);

        ballesSoldatBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);
        this.physics.add.overlap(player, ballesSoldatBoss,  this.degatBalleSoldat,null,this)
        ballesSoldatBoss.body.setAllowGravity(false);
        if(player.x<boss.x){
            boss.play('soldierShoot', true).setFlipX(false);
            ballesSoldatBoss.setGravityY(1000);
        }
        else if(player.x>boss.x){
            boss.play('soldierShoot', true).setFlipX(true);
        }
    }
}

tirSniperBoss(boss){ 
    for (const boss of this.bosses.children.entries) {
        var ballesSniperBoss = this.ballesSnipers.create(boss.x, boss.y, 'snowball').setFlipX(true).setScale(0.80);
        var randomBallesMachineGunners = Phaser.Math.Between(-50, 50);
        this.physics.moveTo(ballesSniperBoss, player.x+randomBallesMachineGunners, player.y+randomBallesMachineGunners, vitesseBalleSniperEnnemi);
        ballesSniperBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);
        this.physics.add.overlap(player, ballesSniperBoss,  this.degatBalleSniper,null,this)
        ballesSniperBoss.body.setAllowGravity(false);
        if(player.x<boss.x){
            boss.play('soldierShoot', true).setFlipX(false);
            ballesSniperBoss.setGravityY(1000);
        }
        else if(player.x>boss.x){
            boss.play('soldierShoot', true).setFlipX(true);
        }
    }
}

tirMachineGunnerBoss(boss){
    for (const boss of this.bosses.children.entries) {
        var ballesMachineGunnerBoss = this.ballesMachineGunners.create(boss.x, boss.y, 'snowball').setFlipX(true).setScale(0.80);
        var randomBallesMachineGunners = Phaser.Math.Between(-150, 150);
        this.physics.moveTo(ballesMachineGunnerBoss, player.x+randomBallesMachineGunners, player.y+randomBallesMachineGunners, vitesseBalleMachineGunnerEnnemi);
        var angleBalle = (Math.atan2(player.y - boss.y, player.x - boss.x) * 180 / Math.PI);
        ballesMachineGunnerBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);
        this.physics.add.overlap(player, ballesMachineGunnerBoss,  this.degatBalleMachineGunner,null,this)
        ballesMachineGunnerBoss.body.setAllowGravity(false);
        if(player.x<boss.x){
            boss.play('soldierShoot', true).setFlipX(false);
            ballesMachineGunnerBoss.setGravityY(1000);
        }
        else if(player.x>boss.x){
            boss.play('soldierShoot', true).setFlipX(true);
        }
    }
}

tirLanceGrenadeBoss(){
    for (const boss of this.bosses.children.entries) {
        var grenadeLanceGrenadeBoss = this.grenadesLanceGrenade.create(boss.x, boss.y, 'snowball').setFlipX(true).setScale(0.80);
        var randomBallesLanceGrenades = Phaser.Math.Between(-250, 250);
        this.physics.moveTo(grenadeLanceGrenadeBoss, player.x+randomBallesLanceGrenades, player.y-1000+randomBallesLanceGrenades, vitesseGrenadeLanceGrenadeEnnemi);
        var angleBalle = (Math.atan2(player.y - boss.y, player.x - boss.x) * 180 / Math.PI);
        this.physics.add.collider(grenadeLanceGrenadeBoss, this.platform);
        grenadeLanceGrenadeBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);
        grenadeLanceGrenadeBoss.body.setGravityY(700)
        grenadeLanceGrenadeBoss.body.setBounce(0.5)
        this.time.delayedCall(3000, this.explodeGrenadeLanceGrenade, [grenadeLanceGrenadeBoss], this);
        if(player.x<boss.x){
            boss.play('soldierShoot', true).setFlipX(false);
            grenadeLanceGrenadeBoss.setGravityY(1000);
        }
        else if(player.x>boss.x){
            boss.play('soldierShoot', true).setFlipX(true);
        }
    }
}

tirLanceRoquetteBoss(){
          
    for (const boss of this.bosses.children.entries) {
        var roquetteLanceRoquetteBoss = this.roquettesLanceRoquettes.create(boss.x, boss.y, 'snowball').setFlipX(true).setScale(0.80);
        this.physics.moveTo(roquetteLanceRoquetteBoss, player.x, player.y, vitesseRoquetteLanceRoquetteEnnemi);
        var angleBalle = (Math.atan2(player.y - boss.y, player.x - boss.x) * 180 / Math.PI);

        roquetteLanceRoquetteBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);

    
        this.physics.add.collider(roquetteLanceRoquetteBoss, this.platform, this.explodeRoquetteLanceRoquette,null,this);
        this.physics.add.collider(roquetteLanceRoquetteBoss, player, this.explodeRoquetteLanceRoquette, null ,this);
       

        if(player.x<boss.x){

            boss.play('soldierShoot', true).setFlipX(false);
        }
        else if(player.x>boss.x){

            boss.play('soldierShoot', true).setFlipX(true);

        }
    }
}

damageBoss(boss, shuriken){
    shuriken.destroy();
    if(bossInvincible==false){
        pvBoss-=1
        if(pvBoss>0){
            bossInvincible=true
            this.time.delayedCall(2000, this.bossStopInvincible, null, this);
        }
        else if(pvBoss==0){
            boss.destroy()
            totalCoins+=50;
            rewardCoinsPostGame+=50
            textPieces.destroy();
            textPieces = this.add.text((this.cameras.main.centerX*2)*0.05,(this.cameras.main.centerY*2)*0.05,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
        }
    }
    console.log(pvBoss)
}

bossStopInvincible(){
    bossInvincible=false
}
////////////////////////////////////

updateFroid(){


 }

joueurPrendDegats(degat){
     pvPlayer-=degat
     this.greenBarHealth.destroy();
     this.pvPlayerText.destroy();

     if(pvPlayer>0.1){
     this.greenBarHealth = this.add.tileSprite((this.cameras.main.centerX*2)*0.425,(this.cameras.main.centerY*2)*0.1,(this.cameras.main.centerX*2)*pvPlayer/100,(this.cameras.main.centerY*2)/2,'healthBarGreen').setScrollFactor(0).setScale(0.2).setDepth(1).setAlpha(1).setOrigin(0,0.5);
     this.pvPlayerText = this.add.text((this.cameras.main.centerX*2)*0.4125,(this.cameras.main.centerY*2)*0.1,  pvPlayer,{ fill:'#0f0', size:200}).setScrollFactor(0).setDepth(2).setOrigin(0.5,0.5);  

    }
    if(pvPlayer<0.1){
         this.death();
    }
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
         this.physics.add.overlap(player, ballesMachineGunner,  this.degatBalleMachineGunner,null,this)

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

tirLanceGrenadeEnnemi(){  
    for (const lanceGrenade of this.lanceGrenades.children.entries) {
        var grenadeLanceGrenade = this.grenadesLanceGrenade.create(lanceGrenade.x, lanceGrenade.y, 'snowball').setFlipX(true).setScale(0.80);
        var randomBallesLanceGrenades = Phaser.Math.Between(-250, 250);
        this.physics.moveTo(grenadeLanceGrenade, player.x+randomBallesLanceGrenades, player.y-1000+randomBallesLanceGrenades, vitesseGrenadeLanceGrenadeEnnemi);
        var angleBalle = (Math.atan2(player.y - lanceGrenade.y, player.x - lanceGrenade.x) * 180 / Math.PI);
        this.physics.add.collider(grenadeLanceGrenade, this.platform);
        grenadeLanceGrenade.rotation = Phaser.Math.Angle.BetweenPoints(player, lanceGrenade);
        grenadeLanceGrenade.body.setGravityY(700)
        grenadeLanceGrenade.body.setBounce(0.5)
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

tirLanceRoquetteEnnemi(){
          
    for (const lanceRoquette of this.lanceRoquettes.children.entries) {
        var roquetteLanceRoquette = this.roquettesLanceRoquettes.create(lanceRoquette.x, lanceRoquette.y, 'snowball').setFlipX(true).setScale(0.80);
        this.physics.moveTo(roquetteLanceRoquette, player.x, player.y, vitesseRoquetteLanceRoquetteEnnemi);
        var angleBalle = (Math.atan2(player.y - lanceRoquette.y, player.x - lanceRoquette.x) * 180 / Math.PI);

        roquetteLanceRoquette.rotation = Phaser.Math.Angle.BetweenPoints(player, lanceRoquette);

    
        this.physics.add.collider(roquetteLanceRoquette, this.platform, this.explodeRoquetteLanceRoquette,null,this);
        this.physics.add.collider(roquetteLanceRoquette, player, this.explodeRoquetteLanceRoquette, null ,this);
       

        if(player.x<lanceRoquette.x){

            lanceRoquette.play('soldierShoot', true).setFlipX(false);
        }
        else if(player.x>lanceRoquette.x){

            lanceRoquette.play('soldierShoot', true).setFlipX(true);

        }
    }
}

activateLaserVertical(){
    if(laserVerticalActivated==true){
        this.physics.world.removeCollider(this.colliderLasersVertical);
        this.physics.world.removeCollider(this.colliderShurikenLaserVertical);

        for (const laserVertical of this.lasersVertical.children.entries) {
            laserVertical.setAlpha(0);
        }   
        laserVerticalActivated=false;
    }
    else if(laserVerticalActivated==false){
        this.colliderLasersVertical = this.physics.add.overlap(player,this.lasersVertical, this.death, null, this);
        this.colliderShurikenLaserVertical = this.physics.add.collider(shurikens, this.lasersVertical, this.killShuriken, null, this);

        for (const laserVertical of this.lasersVertical.children.entries) {
            laserVertical.setAlpha(1);
        }  
        laserVerticalActivated=true; 
    }
}

activateLaserHorizontal(){
    if(laserHorizontalActivated==true){
        this.physics.world.removeCollider(this.colliderLasersHorizontal);
        this.physics.world.removeCollider(this.colliderShurikenLaserHorizontal);

        for (const laserHorizontal of this.lasersHorizontal.children.entries) {
            laserHorizontal.setAlpha(0);
        }   
        laserHorizontalActivated=false;
    }
    else if(laserHorizontalActivated==false){
        this.colliderLasersHorizontal = this.physics.add.overlap(player,this.lasersHorizontal, this.death, null, this);
        this.colliderShurikenLaserHorizontal = this.physics.add.collider(shurikens, this.lasersHorizontal, this.killShuriken, null, this);

        
        for (const laserHorizontal of this.lasersHorizontal.children.entries) {
            laserHorizontal.setAlpha(1);
        }  
        laserHorizontalActivated=true; 
    }
}

explodeGrenadeLanceGrenade(grenadeLanceGrenade){
    grenadeLanceGrenade.destroy();
    var explosion = this.physics.add.sprite(grenadeLanceGrenade.x, grenadeLanceGrenade.y, 'explosion').setScale(0.2).setOrigin(0.5,0.5);
    this.colliderExplosion = this.physics.add.overlap(explosion, player, this.killPlayerExplosion, null, this)
    this.time.delayedCall(200, this.destroyColliderFunction, [this.colliderExplosion], this);
    this.time.delayedCall(1000, this.destroyExplosion, [explosion], this);
}

explodeRoquetteLanceRoquette(roquetteLanceRoquette){
    roquetteLanceRoquette.destroy();
    var explosion = this.physics.add.sprite(roquetteLanceRoquette.x, roquetteLanceRoquette.y, 'explosion').setScale(0.2).setOrigin(0.5,0.5);
    this.colliderExplosion = this.physics.add.overlap(explosion, player, this.killPlayerExplosion, null, this)
    this.time.delayedCall(200, this.destroyColliderFunction, [this.colliderExplosion], this);
    this.time.delayedCall(1000, this.destroyExplosion, [explosion], this);
}

destroyColliderFunction(){
    this.physics.world.removeCollider(this.colliderExplosion);
    this.physics.world.removeCollider(this.colliderBoss);
}

killPlayerExplosion(){
    this.death();
}

destroyExplosion(explosionShuriken){
    explosionShuriken.destroy();
}

destroyBalle(platform, balle){
    platform.destroy();
}

tirSoldatEnnemi(yeti){               
    for (const yeti of this.yetis.children.entries) {
            yeti.play('soldierShoot', true);
            var ballesSoldat = this.ballesSoldats.create(yeti.x, yeti.y, 'snowball');
            this.physics.moveTo(ballesSoldat, player.x, player.y, vitesseBalleSoldatEnnemi);


            ballesSoldat.rotation = Phaser.Math.Angle.BetweenPoints(player, yeti)-135;
            this.physics.add.overlap(player, ballesSoldat,  this.degatBalleSoldat,null,this)


        if(player.x<yeti.x){
            yeti.anims.play('soldierShoot',true).setFlipX(false);
        }
        else if(player.x>yeti.x){
            yeti.anims.play('soldierShoot',true).setFlipX(true)
        }
    }
}
  
killSnowman(snowman, shuriken){
    snowman.destroy();
    shuriken.destroy();
}   

killSniperEnnemi(sniperEnnemi, shuriken){
  sniperEnnemi.destroy();
  shuriken.destroy();
  totalCoins+=10;
  rewardCoinsPostGame+=10
  textPieces.destroy();
  textPieces = this.add.text((this.cameras.main.centerX*2)*0.05,(this.cameras.main.centerY*2)*0.05,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
}     

killYeti(yeti, shuriken){
    yeti.destroy();
    shuriken.destroy();
    totalCoins+=6;
    rewardCoinsPostGame+=6
    textPieces.destroy();
    textPieces = this.add.text((this.cameras.main.centerX*2)*0.05,(this.cameras.main.centerY*2)*0.05,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
}     

killLanceGrenade(lanceGrenade, shuriken){
    lanceGrenade.destroy();
    shuriken.destroy();
    totalCoins+=12;
    rewardCoinsPostGame+=12
    textPieces.destroy();
    textPieces = this.add.text((this.cameras.main.centerX*2)*0.05,(this.cameras.main.centerY*2)*0.05,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
}   

killLanceRoquettes(lanceRoquettes, shuriken){
    lanceRoquettes.destroy();
    shuriken.destroy();
    totalCoins+=15;
    rewardCoinsPostGame+=15
    textPieces.destroy();
    textPieces = this.add.text((this.cameras.main.centerX*2)*0.05,(this.cameras.main.centerY*2)*0.05,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
}   

killMachineGunner(machineGunner, shuriken){
      machineGunner.destroy();
      shuriken.destroy();
      totalCoins+=3;
      rewardCoinsPostGame+=3
      textPieces.destroy();
      textPieces = this.add.text((this.cameras.main.centerX*2)*0.05,(this.cameras.main.centerY*2)*0.05,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
    }   
 
lancershuriken(player){
    if(shurikenLeft>0){
        shotsDone+=1; 
        localStorage.setItem(localDataShotsDone, shotsDone);
  let pointer = this.input.activePointer;
       var shuriken = shurikens.create(player.x, player.y-5, 'shuriken').setScale(0.1);
       
       shuriken.body.setSize(180, 180, true);
       shuriken.body.setOffset(-70,-70);
  this.physics.moveTo(shuriken, pointer.worldX, pointer.worldY, 700);
  shuriken.rotation = Phaser.Math.Angle.BetweenPoints(pointer, player);
  shuriken.play('shurikenSpin', true).setFlipX(false);
  shuriken.setGravityY(500)
    shurikenLeft -=1;
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
    
    teleportationsLeftText.destroy()
    teleportationsLeftText = this.add.text((this.cameras.main.centerX*2)*0.925,(this.cameras.main.centerY*2)*0.15,  teleportationsLeft,{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  

    this.time.delayedCall(1250, this.teleportToTeleporter, [teleport], this);  
    }
}

teleportToTeleporter(teleport){
    player.x=teleport.x
    player.y=teleport.y-32
    teleport.destroy();
    console.log(teleportationsLeft)
}

destroyShuriken(shuriken){
  this.shurikensItems.create(shuriken.x, shuriken.y, 'shuriken').setScale(1)
      .setOrigin(0.5,0.5)
      .setDepth(-1)
      .setSize(20,20)
      shuriken.destroy();    
}  

killShuriken(shuriken){
    shuriken.destroy();
}

destroyShurikenPics(shuriken){
        shuriken.destroy();    
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

  if(pvJoueur>0){
    pvJoueur += 25;
  }
  this.updateFroid();

}
  
collectCoin(coin){

  coin.destroy();
  totalCoins+=10;
  rewardCoinsPostGame+=10
  textPieces.destroy();
  textPieces = this.add.text((this.cameras.main.centerX*2)*0.05,(this.cameras.main.centerY*2)*0.05,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  

}    

pickUpShuriken(player,shuriken){
    shuriken.destroy();
    shurikenLeft+=1;
    this.changeShuriken();
}
pickUpTeleport(player,teleport){
    teleport.destroy();
    teleportationsLeft+=1;
}

changeShuriken(){
  shurikenLeftText.destroy();
  shurikenLeftText = this.add.text((this.cameras.main.centerX*2)*0.925,(this.cameras.main.centerY*2)*0.075,  shurikenLeft,{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
}
 
collectPowerUpShuriken(powerUpShuriken){
   ("pickupshuriken")
  powerUpShuriken.destroy();

  shurikenPowerUpActive= true;
}
  
contactDrapeau(){
console.log(level)
    if(level=="level1"){
        totalCoins+=100
        level2Unlocked = true
        localStorage.setItem(localDataLevel2Unlocked, level2Unlocked);        
    }    
    else if(level=="level2"){
        totalCoins+=150
        level3Unlocked = true
        localStorage.setItem(localDataLevel3Unlocked, level3Unlocked);        
    }
    else if(level=="level3"){
        totalCoins+=200
        level4Unlocked = true
        localStorage.setItem(localDataLevel4Unlocked, level4Unlocked);        
    }    
    else if(level=="level4"){
        totalCoins+=250
        level5Unlocked = true
        localStorage.setItem(localDataLevel5Unlocked, level5Unlocked);        
    }      
    else if(level=="level5"){
        totalCoins+=300
        level6Unlocked = true
        localStorage.setItem(localDataLevel6Unlocked, level6Unlocked);        
    }      
    else if(level=="level6"){
        totalCoins+=350
        level7Unlocked = true
        localStorage.setItem(localDataLevel7Unlocked, level7Unlocked);        
    }      
    else if(level=="level7"){
        totalCoins+=400
        level8Unlocked = true
        localStorage.setItem(localDataLevel8Unlocked, level8Unlocked);        
    }           
    else if(level=="level8"){
        totalCoins+=450
        level9Unlocked = true
        localStorage.setItem(localDataLevel9Unlocked, level9Unlocked);        
    }      
    else if(level=="level9"){
        totalCoins+=500
        level10Unlocked = true
        localStorage.setItem(localDataLevel10Unlocked, level10Unlocked);        
    }      
    else if(level=="level10"){
        totalCoins+=550
        level11Unlocked = true
        localStorage.setItem(localDataLevel11Unlocked, level11Unlocked);        
    }        
    else if(level=="level11"){
        totalCoins+=600
        level12Unlocked = true
        localStorage.setItem(localDataLevel12Unlocked, level12Unlocked);        
    }      
    else if(level=="level12"){
        totalCoins+=650
        level13Unlocked = true
        localStorage.setItem(localDataLevel13Unlocked, level13Unlocked);        
    }     
    else if(level=="level13"){
        totalCoins+=700
        level14Unlocked = true
        localStorage.setItem(localDataLevel14Unlocked, level14Unlocked);        
    }     
    else if(level=="level14"){
        totalCoins+=750
        level15Unlocked = true
        localStorage.setItem(localDataLevel15Unlocked, level15Unlocked);        
    }     
    else if(level=="level15"){
        totalCoins+=800
        level16Unlocked = true
        localStorage.setItem(localDataLevel16Unlocked, level16Unlocked);        
    }     
    else if(level=="level16"){
        totalCoins+=850
        level17Unlocked = true
        localStorage.setItem(localDataLevel17Unlocked, level17Unlocked);        
    }        
    else if(level=="level17"){
        totalCoins+=900
        level18Unlocked = true
        localStorage.setItem(localDataLevel18Unlocked, level18Unlocked);        
    }   
    else if(level=="level18"){
        totalCoins+=1000       
    }   

    this.scene.stop("Jeu");
    levelCompleted = true;

    this.scene.start("PostGame");

}    

degatSnowmanJoueur(snowman){
  snowman.destroy();
    var explosionShuriken = this.physics.add.sprite(snowman.x, snowman.y, 'explosion').setScrollFactor(0).setScale(0.2).setDepth(1).setOrigin(0.5,0.5);
    this.death();    
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

degatBalleMachineGunner(player,ballesSniper){
    ballesSniper.destroy();
    if(playerInvincible==false){
          this.joueurPrendDegats(15);
          this.playerGoInvincible();
    }
  }

degatBalleSniper(player,ballesSniper){
  ballesSniper.destroy();
  if(playerInvincible==false){
        this.joueurPrendDegats(60);
        this.playerGoInvincible();
  }
}
  
degatBalleSoldat(player,ballesSoldat){
    ballesSoldat.destroy();
    if(playerInvincible==false){
        this.joueurPrendDegats(25);
    }
}

hitShuriken (player, shuriken){
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
  
destroyShurikenSnowball(shuriken, snowball){
    shuriken.destroy();
    snowball.destroy();
}
   
death(){

console.log("death")
    this.input.keyboard.shutdown();
      player.setVelocityX(0);
      player.anims.play('die');
      player.setTint(0xff0000)
      this.physics.pause();
      keyD.reset();
      keyQ.reset();
      keyZ.reset(); 



    this.time.delayedCall(1000, this.mort, null, this);
   // }
}

mort(){
       

    morts+=1
    levelCompleted = false;

 player.setVelocityX(0);
 this.scene.stop("Jeu");
   this.scene.start('PostGame');

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



preload (){
    this.load.image("bg_1", "assets/bg-1.png");
    this.load.image("bg_2", "assets/bg-2.png");



  this.load.image('backgroundBarHealth', 'assets/backgroundBarHealth.png');
  this.load.image('healthBarGreen', 'assets/healthBarGreen.png');
  this.load.image('powerUpHealth', 'assets/powerUpHealth.png');
  this.load.image('platformFake', 'assets/platformFake.png');
  this.load.image('platformFalling', 'assets/platformFake.png');
  this.load.image('platformInvisible', 'assets/platformFake.png');
  this.load.image('platformMoving', 'assets/platformFake.png');
  this.load.image('picsInvisible', 'assets/picsInvisible.png');
  this.load.image('laserHorizontal', 'assets/laserHorizontal.png');
  this.load.image('laserVertical', 'assets/laserVertical.png');
  this.load.image('drone', 'assets/drone.png');
  this.load.image('blackSquare', 'assets/blackSquare.png');
  this.load.image('shuriken', 'assets/shuriken.png');
  this.load.image('coin', 'assets/coin.png');
  this.load.image('snowball', 'assets/mediumBullet.png');
  this.load.image('soldatEnnemi', 'assets/soldatEnnemi.png');
  //this.load.image('sky', 'assets/sky.png');
  this.load.image('flag', 'assets/igloo.png');
  this.load.image('snowman', 'assets/snowman.png');
 // this.load.image('ground', 'assets/platform.png');
  this.load.image('life', 'assets/life.png')
  this.load.image('explosion', 'assets/explosion.png')
 // this.load.image('health', 'assets/star.png', { width: 10,  height: 20,});
  this.load.image('snowstorm', 'assets/snowstorm.png');
  this.load.image('water', 'assets/water.png');
  this.load.image('castor', 'assets/castor.png');
  this.load.image('player1Ninja', 'assets/playerNinjaIdle1.png');
  this.load.image('teleport', 'assets/teleporter.png');
  //this.load.spritesheet('dude1', 'assets/dude1.png', { frameWidth: 32, frameHeight: 48 });    
  this.load.spritesheet('spritesheetSoldatEnnemi', 'assets/spritesheetSoldatEnnemi.png', { frameWidth: 325, frameHeight: 591 });
  
  

     this.load.spritesheet('spritesheetPlayerNinja', 'assets/spritesheetPlayerNinja.png', { frameWidth: 80, frameHeight: 96 });
     this.load.spritesheet('spritesheetPlayerNinjaRed', 'assets/spritesheetPlayerNinjaRed.png', { frameWidth: 520, frameHeight: 480 });
     this.load.spritesheet('spritesheetPlayerNinjaGreen', 'assets/spritesheetPlayerNinjaGreen.png', { frameWidth: 520, frameHeight: 480 });    
  
  
  
  this.load.spritesheet('spritesheetShuriken', 'assets/spritesheetShuriken.png', { frameWidth: 263, frameHeight: 280 });
  this.load.spritesheet('spritesheetCastor', 'assets/spritesheetCastor.png', { frameWidth: 27, frameHeight: 20 });

  
  
   this.load.image('tiles', './assets/tileset.png');
   this.load.atlas('atlas', 'assets/mario-atlas.png', 'assets/mario-atlas.json');

    

   this.load.tilemapTiledJSON('level1', './levels/level1.json');
   this.load.tilemapTiledJSON('level2', './levels/level2.json');
   this.load.tilemapTiledJSON('level3', './levels/level3.json');
   this.load.tilemapTiledJSON('level4', './levels/level4.json');


}

create (){


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

  this.bg_1 = this.add.tileSprite(0, 0, 10000, 10000, "bg_1").setDepth(-10).setScale(2.6);
  this.bg_1.setOrigin(0, 0);
  this.bg_1.setScrollFactor(0.25);
  
  this.bg_2 = this.add.tileSprite(0, 0, 10000, 10000, "bg_2").setDepth(-10).setScale(2.6);
  this.bg_2.setOrigin(0, 0);
  this.bg_2.setScrollFactor(0.5);


  this.tileset = this.map.addTilesetImage('tileset', 'tiles');
  var background = this.map.createDynamicLayer('background', this.tileset, 0, 0);
  this.platform = this.map.createDynamicLayer('platform', this.tileset, 0, 0);
  var platformEscalierDroit = this.map.createDynamicLayer('platformEscalierDroit', this.tileset, 0, 0);
  var platformEscalierGauche = this.map.createDynamicLayer('platformEscalierGauche', this.tileset, 0, 0);
  var platformMontagne = this.map.createDynamicLayer('platformMontagne', this.tileset, 0, 0);
  var platformSnow = this.map.createDynamicLayer('platformSnow', this.tileset, 0, 0);
  var platformIce = this.map.createDynamicLayer('platformIce', this.tileset, 0, 0);
  var pics = this.map.createDynamicLayer('pics', this.tileset, 0, 0);
  
    
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
  teleportationsLeftText = this.add.text((this.cameras.main.centerX*2)*0.925,(this.cameras.main.centerY*2)*0.15,  teleportationsLeft,{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
  var teleportationsLeftImage = this.physics.add.sprite((this.cameras.main.centerX*2)*0.975,(this.cameras.main.centerY*2)*0.15, 'teleport').setScrollFactor(0).setScale(0.04).setDepth(1).setRotation(0.9).setOrigin(0.5,0.5);
  shurikenLeftText = this.add.text((this.cameras.main.centerX*2)*0.925,(this.cameras.main.centerY*2)*0.075,  shurikenLeft,{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
  var shurikenLeftImage = this.physics.add.sprite((this.cameras.main.centerX*2)*0.975,(this.cameras.main.centerY*2)*0.075, 'shuriken').setScrollFactor(0).setScale(1.5).setDepth(1).setRotation(0.9).setOrigin(0.5,0.5);
  textPieces = this.add.text((this.cameras.main.centerX*2)*0.05,(this.cameras.main.centerY*2)*0.05,  totalCoins,{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  
  var pieces = this.physics.add.sprite((this.cameras.main.centerX*2)*0.025,(this.cameras.main.centerY*2)*0.05, 'coin').setScrollFactor(0).setScale(0.025).setDepth(1).setOrigin(0.5,0.5);

  this.greenBarHealth = this.add.tileSprite((this.cameras.main.centerX*2)*0.425,(this.cameras.main.centerY*2)*0.1,(this.cameras.main.centerX*2)*pvPlayer/100,(this.cameras.main.centerY*2)/2,'healthBarGreen').setScrollFactor(0).setScale(0.2).setDepth(1).setAlpha(1).setOrigin(0,0.5);
  this.backgroundBarHealth = this.add.tileSprite((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.1,(this.cameras.main.centerX*2),(this.cameras.main.centerY*2)/2, 'backgroundBarHealth').setScrollFactor(0).setScale(0.25).setDepth(2).setOrigin(0.5,0.5);
  this.pvPlayerText = this.add.text((this.cameras.main.centerX*2)*0.4125,(this.cameras.main.centerY*2)*0.1,  pvPlayer,{ fill:'#0f0', size:200}).setScrollFactor(0).setDepth(2).setOrigin(0.5,0.5);  


  player = this.physics.add.sprite((this.cameras.main.centerX*2)*0.05,(this.cameras.main.centerY*2)*0.75, 'spritesheetPlayerNinja');
  player.setGravityY(1000)

  player.body.setSize(45, 90, false).setOffset(20, 0)
  player.body.setOffset(0,0);
  player.setCollideWorldBounds(false)



  
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
      key: 'throwShurikenNinja',
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
      key: 'throwShurikenNinjaRouge',
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
      key: 'throwShurikenNinjaGreen',
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
    
    
    

    
    
    
    


 
    
    
    
  this.camera = this.cameras.main.zoom = 1;

  this.cursors = this.input.keyboard.createCursorKeys();
  

      //this.cameras.main.startFollow(player, true, 1, 0, 0, 0);  

    
  this.cameras.main
      .setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
      .startFollow(player);
  
  





this.anims.create({
  key: 'shurikenSpin',
  frames: this.anims.generateFrameNumbers('spritesheetShuriken',  {start: 0, end: 1 }),
  frameRate: 10,
  repeat: -1
});



  ///////////////////////////////////////
  ////////////SniperEnnemi////////////////////

 const bossObjects = this.map.getObjectLayer('boss').objects;
 this.bosses = this.physics.add.group({
    immovable: true,
 });

for (const boss of bossObjects) {
this.bosses.create(boss.x, boss.y-20, 'soldatEnnemi')
    .setOrigin(0.5,0.5)
    .setDepth(-1)
    .setGravityY(1000)
    .setOffset(0,0)
    .setScale(0.2)
}
  
for (const boss of this.bosses.children.entries) {
    boss.direction = 'RIGHT';
}  
this.physics.add.collider(this.bosses, this.platform);



  /////////////////////////////////////////
  //////////////teleportItems//////////////////
    
  const teleportItemObjects = this.map.getObjectLayer('teleportItem').objects;
  this.teleportItems = this.physics.add.group({
          immovable: true,
          allowGravity: false
      });

  for (const teleportItem of teleportItemObjects) {
  this.teleportItems.create(teleportItem.x+8, teleportItem.y-3, 'shuriken').setScale(0.75)
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
  this.shurikensItems.create(shurikensItem.x+8, shurikensItem.y-3, 'shuriken').setScale(0.75)
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
  ////////////lasersHorizontal////////////////////

    const laserHorizontalObjects = this.map.getObjectLayer('laserHorizontal').objects;
        this.lasersHorizontal = this.physics.add.group({
            immovable: true,
            allowGravity: false
    });

    for (const laserHorizontal of laserHorizontalObjects) {
        this.lasersHorizontal.create(laserHorizontal.x+laserHorizontal.width/2, laserHorizontal.y-laserHorizontal.height/2, 'laserHorizontal')
            .setOrigin(0.5,0.5)
            .setDepth(1)
    }


    this.colliderLasersHorizontal = this.physics.add.overlap(player, this.lasersHorizontal, this.death, null, this)

      ///////////////////////////////////////
  ////////////lasersVertical///////////////////

  const laserVerticalObjects = this.map.getObjectLayer('laserVertical').objects;
  this.lasersVertical = this.physics.add.group({
      immovable: true,
      allowGravity: false
});

for (const laserVertical of laserVerticalObjects) {
  this.lasersVertical.create(laserVertical.x+laserVertical.width/2, laserVertical.y-laserVertical.height/2, 'laserVertical')
      .setOrigin(0.5,0.5)
      .setDepth(1)
}


this.colliderLasersVertical = this.physics.add.overlap(player, this.lasersVertical, this.death, null, this)

  //////////////////////////////////////
  ////////////Drones////////////////////

const droneObjects = this.map.getObjectLayer('drone').objects;
    this.drones = this.physics.add.group({
        immovable: true,
        allowGravity: false
});

for (const drone of droneObjects) {
    this.drones.create(drone.x+drone.width/2, drone.y-drone.height/2, 'drone')
      .setOrigin(0.5,0.5)
      .setDepth(1)
}


this.physics.add.collider(player, this.drones, this.death, null, this)
this.physics.add.collider(this.platform, this.drones)
    
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
        this.physics.add.collider(platformMoving, this.platform);
    }    
    this.physics.add.collider(this.platformsMoving, this.platformsMoving)


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
 });

 
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
    .setScale(0.15)
}
  



for (const lanceGrenade of this.lanceGrenades.children.entries) {
    lanceGrenade.direction = 'RIGHT';
}  
this.physics.add.collider(this.lanceGrenades, this.platform);

///////////////////////////////////////
  ////////////LanceursRoquettes////////////////////
  this.roquettesLanceRoquettes = this.physics.add.group({
});


const lanceRoquettesObjects = this.map.getObjectLayer('lanceRoquette').objects;
this.lanceRoquettes = this.physics.add.group({
   immovable: true,
});

for (const lanceRoquette of lanceRoquettesObjects) {
this.lanceRoquettes.create(lanceRoquette.x, lanceRoquette.y-20, 'soldatEnnemi')
   .setOrigin(0.5,0.5)
   .setDepth(-1)
   .setOffset(0,0)
   .setScale(0.15)
   .setGravityY(1000)
}
 



for (const lanceRoquette of this.lanceRoquettes.children.entries) {
   lanceRoquette.direction = 'RIGHT';
}  
this.physics.add.collider(this.lanceRoquettes, this.platform);





///////////////////////////////////////
  ////////////SniperEnnemi////////////////////
  this.ballesSnipers = this.physics.add.group({
      immovable: true,
   });

  this.anims.create({
  key: 'soldierShoot',
  frames: this.anims.generateFrameNumbers('spritesheetSoldatEnnemi', { start: 0, end: 1 }),
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
      .setScale(0.15)
    }
    
  for (const sniperEnnemi of this.sniperEnnemis.children.entries) {
      sniperEnnemi.direction = 'RIGHT';
}  
 this.physics.add.collider(this.sniperEnnemis, this.platform);

    
    


           ///////////////////////////////////////
  ////////////MachineGunnerennemi////////////////////
  this.ballesMachineGunners = this.physics.add.group({
      immovable: true,
   });

   



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
      .setScale(0.15)
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
      .setScale(0.15)
    }
    
  

  
  for (const yeti of this.yetis.children.entries) {
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
  this.snowmen.create(snowman.x+snowman.width/2, snowman.y-snowman.height/2, 'snowman').setScale(0.01)
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
  this.coins.create(coin.x+8, coin.y-9, 'coin').setScale(0.03)
      .setOrigin(0.5,0.5)
      .setDepth(-1);
}
    
  

  
  for (const coin of this.coins.children.entries) {
  coin.collider = this.physics.add.overlap(coin, player, this.collectCoin, null, this);
}
  


  
   ///////////////////////////////////////
  ////////////PowerUpHealth////////////

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


  cursors = this.input.keyboard.createCursorKeys();



  shurikens = this.physics.add.group();
  
  teleportations = this.physics.add.group();

  snowballs = this.physics.add.group();

  
  shuriken = this.physics.add.group();
  //  The score

  
  //  Collide the player and the stars with the platforms

  //this.physics.add.collider(healthPowerUp, platform);
  this.physics.add.collider(teleportations, platformMontagne);
  this.physics.add.collider(teleportations, this.platform);
  this.physics.add.collider(this.bosses, shurikens, this.damageBoss, null, this);
  this.physics.add.collider(shurikens, this.platform, this.destroyShuriken, null, this);
  this.physics.add.collider(shurikens, platformIce, this.destroyShuriken, null, this);
  this.physics.add.collider(shurikens, platformSnow, this.destroyShuriken, null, this);
  this.physics.add.collider(shurikens, this.platformFake, this.destroyShuriken, null, this);
  this.physics.add.collider(shurikens, snowballs, this.destroyShurikenSnowball, null, this);
  this.physics.add.collider(shurikens, pics, this.destroyShurikenPics, null, this);4
  this.colliderShurikenLaserHorizontal = this.physics.add.collider(shurikens, this.lasersHorizontal, this.killShuriken, null, this);
  this.colliderShurikenLaserVertical = this.physics.add.collider(shurikens, this.lasersVertical, this.killShuriken, null, this);


  this.physics.add.collider(snowballs, this.platform, this.destroyBalle, null, this);
  this.physics.add.collider(snowballs, platformIce, this.destroyBalle, null, this);
  this.physics.add.collider(snowballs, platformSnow, this.destroyBalle, null, this);
  this.physics.add.collider(snowballs, this.platformFake, this.destroyBalle, null, this);
  this.physics.add.collider(snowballs, snowballs, this.destroyBalle, null, this);
  this.physics.add.collider(snowballs, pics, this.destroyBalle, null, this);
  this.physics.add.collider(player, this.goomba, this.death, null, this);


  this.physics.add.collider(this.platform, this.ballesSoldats,  this.destroyBalle,null,this)
  this.physics.add.collider(this.platform, this.ballesSnipers,  this.destroyBalle,null,this)
  this.physics.add.collider(this.platform, this.ballesMachineGunners,  this.destroyBalle,null,this)

    


//   this.physics.add.collider(shuriken, platform);
  
//   this.physics.add.collider(shuriken, platformSnow);


  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar  
//   this.physics.add.overlap(player,healthPowerUp , collectHealthPlayer, null, this);

  
  
  
  this.physics.add.overlap(this.yetis, shurikens, this.killYeti, null, this);
  

  this.physics.add.overlap(this.lanceRoquettes, shurikens, this.killLanceRoquette, null, this);
  this.physics.add.overlap(this.lanceGrenades, shurikens, this.killLanceGrenade, null, this);
  this.physics.add.overlap(this.machineGunnerEnnemis, shurikens, this.killMachineGunner, null, this);
  this.physics.add.overlap(this.sniperEnnemis, shurikens, this.killSniperEnnemi, null, this);
  this.physics.add.overlap(this.snowmen, shurikens, this.killSnowman, null, this);
  
  
  this.physics.add.collider(player, this.platform, this.setSpeedPlatform, null, this);
    
  this.physics.add.collider(player, platformMontagne, this.bouncePlatformMontagne, null, this);
        
  this.physics.add.collider(player, platformSnow, this.setSpeedPlatformSnow, null, this);
  this.physics.add.collider(player, platformIce, this.setSpeedPlatformIce, null, this);




  /////////////////


  graphics = this.add.graphics();


}

update (){    




    for (const drone of this.drones.children.entries) {    
        this.physics.moveTo(drone, player.x,player.y-300, vitesseDeplacementDrone);
    }
    



  /*  for (const drone of this.drones.children.entries) {

        line =  new Phaser.Geom.Line(drone.x, drone.y, player.x, player.y);      
    }
    graphics.clear();
    graphics.lineStyle(4, 0xffffff);
    graphics.strokeLineShape(line);
*/





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
   
    
for (const platformFalling of this.platformsFalling.children.entries) {    
if(player.x>platformFalling.x && player.x<platformFalling.x+35 && player.y>platformFalling.y){
  platformFalling.setVelocityY(600)
}   

}

///////////////////////////////////////////////////////
//////////////////////////BOSS/////////////////////////
cooldownTirSoldatBossBeforeShoot--
if(cooldownTirSoldatBossBeforeShoot<=0){
  cooldownTirSoldatBossBeforeShoot=cooldownTirSoldatBoss
    this.tirSoldatBoss();
}

cooldownTirSniperBossBeforeShoot--
if(cooldownTirSniperBossBeforeShoot<=0){
  cooldownTirSniperBossBeforeShoot=cooldownTirSniperBoss
    this.tirSniperBoss();  
}

cooldownTirMachineGunnerBossBeforeShoot--
if(cooldownTirMachineGunnerBossBeforeShoot<=0){
  cooldownTirMachineGunnerBossBeforeShoot=cooldownTirMachineGunnerBoss
    this.tirMachineGunnerBoss();  
}

cooldownTirLanceGrenadeBossBeforeShoot--
if(cooldownTirLanceGrenadeBossBeforeShoot<=0){
    cooldownTirLanceGrenadeBossBeforeShoot=cooldownTirLanceGrenadeBoss
    this.tirLanceGrenadeBoss();  
}

cooldownTirLanceRoquetteBossBeforeShoot--
if(cooldownTirLanceRoquetteBossBeforeShoot<=0){
    cooldownTirLanceRoquetteBossBeforeShoot=cooldownTirLanceRoquetteBoss
    this.tirLanceRoquetteBoss();  
}
    
/////////////////Bouger boss//////////////////////
for (const boss of this.bosses.children.entries) {

      if (boss.body.blocked.right) {
        boss.direction = 'LEFT';
          boss.play('castorRun', true).setFlipX(false);
      }

      if (boss.body.blocked.left) {
        boss.direction = 'RIGHT';
          boss.play('castorRun', true).setFlipX(true);
      }

      if (boss.direction === 'RIGHT') {
        boss.setVelocityX(100);
      } else {
        boss.setVelocityX(-100);
      }


  }
    

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
        this.tirSoldatEnnemi();
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
    
    cooldownTirLanceRoquetteEnnemiBeforeShoot--
    if(cooldownTirLanceRoquetteEnnemiBeforeShoot<=0){
        cooldownTirLanceRoquetteEnnemiBeforeShoot=cooldownTirLanceRoquetteEnnemi
        this.tirLanceRoquetteEnnemi();  
    }

    cooldownActivationLaserHorizontal--
    if(cooldownActivationLaserHorizontal<=0){
        cooldownActivationLaserHorizontal=cooldownActivationLaserHorizontalReset
        this.activateLaserHorizontal();  
    }

    cooldownActivationLaserVertical--
    if(cooldownActivationLaserVertical<=0){
        cooldownActivationLaserVertical=cooldownActivationLaserVerticalReset
        this.activateLaserVertical();  
    }

    cooldownRecalculationRoquetteDirection--
    if(cooldownRecalculationRoquetteDirection<=0){
        cooldownRecalculationRoquetteDirection=cooldownRecalculationRoquetteDirectionReset
        for (const roquetteLanceRoquette of this.roquettesLanceRoquettes.children.entries) {    
            this.physics.moveTo(roquetteLanceRoquette, player.x,player.y, vitesseRoquetteLanceRoquetteEnnemi);
            roquetteLanceRoquette.rotation = Phaser.Math.Angle.BetweenPoints(player, roquetteLanceRoquette);
        }  
    }
     

     




  // définie le contact du joueur avec un sol
   //standing = player.body.blocked.down || player.body.touching.down;
  
  
  

  
  
  
if(shurikenPlayer == false){
   delaiShurikenPlayer --
}
if (delaiShurikenPlayer <= 0 && shurikenPlayer == false) {
  delaiShurikenPlayer = cooldownShuriken;
  shurikenPlayer = true;
}
  
       

this.input.on('pointerdown', function (pointer) {
    if(shurikenPlayer == true && shurikenPowerUpActive==true ){
        if(keyA.isDown && teleportationsLeft>0){
            shurikenPlayer = false;

          this.lancerTeleport(player);
        }
        else if(keyA.isUp){
            shurikenPlayer = false;
            this.lancershuriken(player);
        }
        keyA.reset();

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
      player.body.setSize(45, 45, true);
      player.body.setOffset(20,45);
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

  if (keyZ.isDown && (standing == true || playerInWater==true))
  {   
      this.jump();
  }

  if(keyS.isUp && !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y-20) || this.platform.hasTileAtWorldXY(player.body.position.x+player.body.width, player.body.position.y-20))) {

          player.body.setSize(45, 90, false).setOffset(20, 0);
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
          if(shurikenPlayer == true && shurikenPowerUpActive==true){
              shurikenPlayer = false;
              this.lancershuriken(player);
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
