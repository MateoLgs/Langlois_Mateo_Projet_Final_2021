
class LoadingScreen extends Phaser.Scene {

    constructor () {
        super('LoadingScreen');
    }
    preload(){
        this.load.image('loadingScreen', 'assets/loadingScreen.png');
        this.load.image('loadingScreenControls', 'assets/loadingScreenControls.png');
        this.load.spritesheet('loadingIconSpritesheet', 'assets/loadingIconSpritesheet.png', { frameWidth: 40, frameHeight: 40 });

    }
    create() {
        this.loadingScreenTips = [
        "Grab some of the walls to see if you can climb them.", 
        "Do not hesitate to get hit by a bullet in order to get somewhere.", 
        "Bullets inflict you a different amount of damage, \n          but explosions instantly kill you.", 
        "Watch out for snipers, they may be hidden outside of your screen.", 
        "You're out of ammo? Grab some on the floor, \n          or use your close range attack.", 
        "The best way to win? Be good.", 
        "Do you lose a lot? Try not dying"
        ]
        this.menuBackground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'loadingScreen').setScale(1).setAlpha(0);
        this.loadingScreenControls = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'loadingScreenControls').setScale(1).setAlpha(0);

        this.tweens.add({
            targets: this.menuBackground,
            alpha: 1,
            duration: 1000,
        });

        this.time.delayedCall(2000, this.changeImage, null, this);
        
        
        this.anims.create({
            key: 'loadingIconSpritesheet',
            frames: this.anims.generateFrameNumbers('loadingIconSpritesheet',  {start: 0, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
    }
    changeImage(){
        this.tweens.add({
            targets: this.menuBackground,
            alpha: 0,
            duration: 1000,
        });
        this.tweens.add({
            targets: this.loadingScreenControls,
            alpha: 1,
            duration: 1000,
        });
        this.loadingIcon = this.add.sprite((this.cameras.main.centerX*2)*0.9, (this.cameras.main.centerY*2)*0.9, 'rien').setScale(1).setAlpha(1);
        this.loadingIcon.anims.play('loadingIconSpritesheet',true).setFlipX(false);  
        var randomTip = Phaser.Math.Between(0, 6);
        this.textPieces = this.add.text((this.cameras.main.centerX*2)*0.5,(this.cameras.main.centerY*2)*0.9,  "Tip : " + this.loadingScreenTips[randomTip],{ fill:'#fff', size:200}).setScrollFactor(0).setDepth(1).setOrigin(0.5,0.5);  

        this.time.delayedCall(5000, this.startMenu, null, this);
    }
    startMenu(){


        this.scene.start("Menu")
    }


}
