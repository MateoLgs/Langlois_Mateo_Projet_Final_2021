    
class GameOver extends Phaser.Scene {

    constructor () {
        super('GameOver');
    }
        preload(){
              this.load.image('gameOverScreen', 'assets/gameOverScreen.jpg');
        }
    create() {
        morts+=1
        localStorage.setItem(localDataMorts, morts);





        var gameOverScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'gameOverScreen').setScale(2.1);
      this.time.delayedCall(2000, this.switchGameOverToMenu, null, this);
    }
    
    switchGameOverToMenu(){
        keyS.reset();
        keyD.reset();
        keyQ.reset();
        keyZ.reset(); 
        
        pvPlayer=100
        cooldownShuriken = 120;
        viesRestantes=5;
        gravity=1000;
        playerInvincible=false;
        shurikenLeft =5;
        pageLevelMenu = 1;

        this.scene.start('Menu');
        
    }
}  
    