
class Death extends Phaser.Scene {

    constructor () {
        super('Death');
    }
        preload(){
              this.load.image('deathScreen', 'assets/deathScreen.png');
        }
    create() {
        morts+=1
        var gameOverScreen = this.add.image(640, 360, 'deathScreen').setScale(2.2);
		this.add.text(10, 10, 'Morts : ')
        this.add.text(100, 10, morts)
      this.time.delayedCall(1500, this.switchDeathToLevel, null, this);
    }
    
    switchDeathToLevel(){
        keyS.reset();
        keyD.reset();
        keyQ.reset();
        keyZ.reset();        
        
    


 cooldownFireball = 120;
 onPlatform ="";
 runSpeed = 1;
 totalCoins=0;

 jumpingPlayer = true
 gravity=1000;
 fireballPowerUpActive = false
 fireballPlayer = true
 cooldownTirSoldatEnnemi
 delaiFireballPlayer = 120;
 playerInvincible=false;
 playerCanResetVelocity=true; 
 playerInWater = false;
 playerDirection ="right"
 froid = 0

   

          this.scene.start('Jeu');
        
    }
}
   