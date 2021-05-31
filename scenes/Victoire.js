
class Victoire extends Phaser.Scene {

    constructor () {
        super('Victoire');
    }
        preload(){
              this.load.image('VictoireScreen', 'assets/victoireScreen.jpg');
        }
    create() {
        
        var gameOverScreen = this.add.image(600, 400, 'VictoireScreen').setScale(2.5);
		this.add.text(0.5, 0.5, 'Victoire')
      this.time.delayedCall(3000, this.switchToWin, null, this);
    }
    
    switchToWin(){
        keyS.reset();
        keyD.reset();
        keyQ.reset();
        keyZ.reset(); 

            
 level="level1";

 cooldownShuriken = 120;
 onPlatform ="";
 shuriken;
 snowball;
 runSpeed = 1;
 totalCoins=0;
 player;
 healthAmount = 100;
 health;
 shurikens;
 snowballs;
 platforms;
 cursors;
 snowman;
 shuriken;
 
 scoreText;
 viesRestantes=3;
 jumpingPlayer = true
 gravity=1000;
 shurikenPowerUpActive = false
 shurikenPlayer = true
 cooldownTirSoldatEnnemi
 delaiShurikenPlayer = 120;
 standing;
 keyA
 keyZ;
 keyS;
 keyD;
 keyQ;
 coins;
 playerInvincible=false;
 playerCanResetVelocity=true;
 hardcoreMode="off";  
 playerInWater = false;
 playerDirection ="right"
 textPieces;
 froid1;
 froid2;
 froid3;
 froid = 0;
 padConnected;
 paddle;

          this.scene.start('Menu');
        
    }
}
