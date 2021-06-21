
class PostGame extends Phaser.Scene {

    constructor () {
        super('PostGame');
    }

    create() {

        keyS.reset();
        keyD.reset();
        keyQ.reset();
        keyZ.reset(); 

        pvPlayer=100
        cooldownShuriken = 20;
        gravity=1000;
        playerInvincible=false;
        shurikenLeft =5;
        teleportationsLeft = 0;

        pageLevelMenu = 1;
console.log(rewardCoinsPostGame)
       // totalCoins+=rewardCoinsPostGame
        localStorage.setItem(localDataTotalCoins, totalCoins);

        if(levelCompleted == false){
            this.screenEnd = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'deathScreen').setScale(1).setInteractive();
        }
        else if (levelCompleted == true){
            this.screenEnd = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'victoireScreen').setScale(1).setInteractive();
        }
        this.homeButton = this.add.image((this.cameras.main.centerX*2)*0.30,(this.cameras.main.centerY*2)*0.25, 'homeButton').setScale(1).setInteractive().setOrigin(0.5,0.5);
        this.adForReward = this.add.image((this.cameras.main.centerX*2)*0.70,(this.cameras.main.centerY*2)*0.25, 'adForReward').setScale(1).setInteractive().setOrigin(0.5,0.5);
        this.replayLevelButton = this.add.image((this.cameras.main.centerX*2)*0.5,(this.cameras.main.centerY*2)*0.25, 'replayLevelButton').setScale(1).setInteractive().setOrigin(0.5,0.5);

       this.homeButton.on('pointerdown', () => {
            this.scene.stop("PostGame");
            rewardCoinsPostGame=0

            this.scene.start('Menu');
        }) 
        this.replayLevelButton.on('pointerdown', () => {
            this.scene.stop("PostGame");
            rewardCoinsPostGame=0

            this.scene.start('Jeu');
        }) 
        this.adForReward.on('pointerdown', () => {
            this.blackScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'blackSquare').setScale(10).setInteractive().setOrigin(0.5,0.5);
            this.textPubPlaceholder =  this.add.text((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.4,  "PUBLICITÉ PLACEHOLDER",{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5); 
            this.textCooldownAd =  this.add.text((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2,  "10",{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5); 
            this.time.delayedCall(1000, this.cooldown, ["9"], this);
            this.time.delayedCall(2000, this.cooldown, ["8"], this);
            this.time.delayedCall(3000, this.cooldown, ["7"], this);
            this.time.delayedCall(4000, this.cooldown, ["6"], this);
            this.time.delayedCall(5000, this.cooldown, ["5"], this);
            this.time.delayedCall(6000, this.cooldown, ["4"], this);
            this.time.delayedCall(7000, this.cooldown, ["3"], this);
            this.time.delayedCall(8000, this.cooldown, ["2"], this);
            this.time.delayedCall(9000, this.cooldown, ["1"], this);
            this.time.delayedCall(10000, this.cooldown, ["0"], this);
            this.time.delayedCall(11000, this.backToReward, null, this);
        }) 

    }

    cooldown(timeLeftAd){
        this.textCooldownAd.destroy()
        this.textCooldownAd =  this.add.text((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2,  timeLeftAd,{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);
    }

    backToReward(){
        this.blackScreen.destroy()
        this.textPubPlaceholder.destroy()
        this.textCooldownAd.destroy()
        this.adForReward.destroy()
        this.blackScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'blackSquare').setScale(0.25).setInteractive().setOrigin(0.5,0.5);
        this.homeButton.disableInteractive()
        this.replayLevelButton.disableInteractive()
        this.rewardCoinsPostGameRandom = Phaser.Math.Between(1, rewardCoinsPostGame);
        totalCoins+=rewardCoinsPostGame
        totalCoins+=this.rewardCoinsPostGameRandom
        localStorage.setItem(localDataTotalCoins, totalCoins);
        this.reward =  this.add.text((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2,  this.rewardCoinsPostGameRandom,{ fill:'#fff', size:200}).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);
        this.crossRed = this.add.image((this.cameras.main.centerX*2)*0.615,(this.cameras.main.centerY*2)*0.285, 'crossRed').setScale(0.10).setInteractive().setOrigin(0.5,0.5);


        this.screenEnd.on('pointerdown', () => {
            this.blackScreen.destroy()
            this.crossRed.destroy()
            this.reward.destroy()
            this.homeButton.setInteractive()
            this.replayLevelButton.setInteractive()
        }) 
        this.crossRed.on('pointerdown', () => {
            this.blackScreen.destroy()
            this.crossRed.destroy()
            this.reward.destroy()
            this.homeButton.setInteractive()
            this.replayLevelButton.setInteractive()
        }) 

    }
    

}
