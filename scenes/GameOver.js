    
class GameOver extends Phaser.Scene {

    constructor () {
        super('GameOver');
    }
        preload(){
              this.load.image('gameOverScreen', 'assets/gameOverScreen.jpg');
        }
    create() {
        morts+=1

        var gameOverScreen = this.add.image(640, 360, 'gameOverScreen').setScale(2.1);
        this.add.text(10, 10, 'Morts : ')
        this.add.text(100, 10, morts)
      this.time.delayedCall(2000, this.switchGameOverToMenu, null, this);
    }
    
    switchGameOverToMenu(){
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
 keyA;
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
    