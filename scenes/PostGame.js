
class PostGame extends Phaser.Scene {

    constructor () {
        super('PostGame');
    }
        preload(){
            this.load.image('deathScreen', 'assets/deathScreen.png');
            this.load.image('victoireScreen', 'assets/victoireScreen.jpg');
            this.load.image('replayLevelButton', 'assets/replayLevelButton.jpg');
            this.load.image('homeButton', 'assets/homeButton.jpg');
            this.load.image('adForReward', 'assets/adForReward.png');



        }
    create() {
        if(levelCompleted == false){
            var deathScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'deathScreen').setScale(2.2);
        }
        else if (levelCompleted == true){
            var victoireScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'victoireScreen').setScale(1.8);
        }
        var homeButton = this.add.image((this.cameras.main.centerX*2)*0.25,(this.cameras.main.centerY*2)*0.75, 'homeButton').setScale(1.7).setInteractive().setOrigin(0.5,0.5);
        var replayLevelButton = this.add.image((this.cameras.main.centerX*2)*0.5,(this.cameras.main.centerY*2)*0.75, 'replayLevelButton').setScale(1.7).setInteractive().setOrigin(0.5,0.5);
        var adForReward = this.add.image((this.cameras.main.centerX*2)*0.75,(this.cameras.main.centerY*2)*0.75, 'adForReward').setScale(0.15).setInteractive().setOrigin(0.5,0.5);

        homeButton.on('pointerdown', () => {
            this.scene.stop("PostGame");
            this.scene.start('Menu');
        }) 
        replayLevelButton.on('pointerdown', () => {
            this.scene.stop("PostGame");
            this.scene.start('Jeu');
        }) 
        adForReward.on('pointerdown', () => {
            this.scene.stop("PostGame");
            this.scene.start('Jeu');
        }) 

    }
    
    switchToWin(){
        keyS.reset();
        keyD.reset();
        keyQ.reset();
        keyZ.reset(); 

        pvPlayer=100
        cooldownShuriken = 120;
        gravity=1000;
        playerInvincible=false;
        shurikenLeft =5;
        teleportationsLeft = 3;

        pageLevelMenu = 1;

          this.scene.start('Menu');
        
    }
}
