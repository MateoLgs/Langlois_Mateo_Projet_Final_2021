
class Victoire extends Phaser.Scene {

    constructor () {
        super('Victoire');
    }
        preload(){
              this.load.image('VictoireScreen', 'assets/victoireScreen.jpg');
        }
    create() {
        
        var victoireScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'VictoireScreen').setScale(2.5);
        this.time.delayedCall(3000, this.switchToWin, null, this);
    }
    
    switchToWin(){
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
