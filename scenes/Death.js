
class Death extends Phaser.Scene {

    constructor () {
        super('Death');
    }
        preload(){
              this.load.image('deathScreen', 'assets/deathScreen.png');
        }
    create() {
        morts+=1
        
        var deathScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'deathScreen').setScale(2.2);
      this.time.delayedCall(1500, this.switchDeathToLevel, null, this);
    }
    
    switchDeathToLevel(){
        keyS.reset();
        keyD.reset();
        keyQ.reset();
        keyZ.reset();        
        
        pvPlayer=100
        cooldownShuriken = 120;
        gravity=1000;
        playerInvincible=false;
        shurikenLeft =5;
        pageLevelMenu = 1;

   

          this.scene.start('Jeu');
        
    }
}
   