
class LoadingScreen extends Phaser.Scene {

    constructor () {
        super('LoadingScreen');
    }

    preload(){
       
        this.load.image('loadingScreen', 'assets/loadingScreen.png');
        this.load.image('loadingScreenControls', 'assets/loadingScreenControls.png');
        this.load.spritesheet('loadingIconSpritesheet', 'assets/loadingIconSpritesheet.png', { frameWidth: 40, frameHeight: 40 });
       // this.time.delayedCall(1000, this.loading, null, this);
       this.load.on('complete', () => {

        this.loading()
    });


    this.load.image("bg_0", "assets/bg-0.png");
    this.load.image("bg_1", "assets/bg-1.png");
    this.load.image("bg_2", "assets/bg-2.png");
    this.load.image("bg_3", "assets/bg-3.png");
    this.load.image("bg_4", "assets/bg-4.png");


  this.load.image('nextShotTeleportation', 'assets/nextShotTeleportation.png');
  this.load.image('nextShotShuriken', 'assets/nextShotShuriken.png');
  this.load.image('mobileGameModeButton', 'assets/mobileGameModeButton.jpg');
  this.load.image('keyboardGameModeButton', 'assets/keyboardGameModeButton.png');
  this.load.image('controllerGameModeButton', 'assets/controllerGameModeButton.png');
  this.load.image('crouchButton', 'assets/crouchButton.png');
  this.load.image('jumpButton', 'assets/jumpButton.png');
  this.load.image('backgroundBarHealth', 'assets/backgroundBarHealth.png');
  this.load.image('powerUpHealth', 'assets/powerUpHealth.png');
  this.load.image('platformFake', 'assets/platformFake.png');
  this.load.image('platformFalling', 'assets/platformFake.png');
  this.load.image('platformInvisible', 'assets/platformFake.png');
  this.load.image('platformMoving', 'assets/platformFake.png');
  this.load.image('picsInvisible', 'assets/picsInvisible.png');
  this.load.image('laserHorizontal', 'assets/laserHorizontal.png');
  this.load.image('laserVertical', 'assets/laserVertical.png');
  this.load.image('drone', 'assets/drone.png');
  this.load.image('shuriken', 'assets/shuriken.png');
  this.load.image('coin', 'assets/coin.png');
  this.load.image('snowball', 'assets/mediumBullet.png');
  this.load.image('soldatEnnemi', 'assets/soldatEnnemi.png');
  this.load.image('sky', 'assets/sky.png');



  this.load.image('flag', 'assets/igloo.png');
 this.load.image('snowman', 'assets/snowman.png');
  //this.load.image('ground', 'assets/platform.png');
  this.load.image('life', 'assets/life.png')
 
  this.load.image('explosion', 'assets/explosion.png')
  this.load.image('health', 'assets/star.png', { width: 10,  height: 20,});
  this.load.image('snowstorm', 'assets/snowstorm.png');
  this.load.image('water', 'assets/water.png');
 
 
  this.load.image('castor', 'assets/castor.png');
  this.load.image('player1Ninja', 'assets/playerNinjaIdle1.png');
  this.load.image('teleport', 'assets/teleporter.png');
  this.load.image('caisse', 'assets/caisse.png');
  this.load.image('caisseBroken', 'assets/caisseBroken.jpg');
  this.load.image('cacAttaque', 'assets/slash.png');




  this.load.image('deathScreen', 'assets/deathScreen.png');
  this.load.image('victoireScreen', 'assets/victoireScreen.jpg');
  this.load.image('replayLevelButton', 'assets/replayLevelButton.png');
  this.load.image('homeButton', 'assets/homeButton.png');
  this.load.image('adForReward', 'assets/adForReward.png');
  this.load.image('crossRed', 'assets/crossRed.png');
  this.load.image('blackSquare', 'assets/blackSquare.png');


    this.load.image('Menu', 'assets/menuScreen.png');
    this.load.image('startButton', 'assets/startButton.png');
    this.load.image('tutorialButton', 'assets/tutorialButton.png');
    this.load.image('skinsButton', 'assets/skinsButton.png');
    this.load.image('shopButton', 'assets/shopButton.png');
    this.load.image('achievementsButton', 'assets/achievements.png');
    this.load.image('exitButton', 'assets/exitButton.png');
    this.load.image('blackRectangle', 'assets/blackRectangle.png');        
    this.load.image('mouseCursor', 'assets/mouseCursor.png');        

    this.load.spritesheet('skinsButtonOpenSpritesheet', 'assets/skinsButtonOpenSpritesheet.png', { frameWidth: 64, frameHeight: 120 });


  this.load.image('katanaHealthImage1', 'assets/katanaHealthImage1.png');
  this.load.image('katanaHealthImage2', 'assets/katanaHealthImage2.png');
  this.load.image('katanaHealthImage3', 'assets/katanaHealthImage3.png');
  this.load.image('katanaHealthImage4', 'assets/katanaHealthImage4.png');
  this.load.image('katanaHealthImage5', 'assets/katanaHealthImage5.png');
  this.load.image('healthBarGreen', 'assets/healthBarGreen.png');


  this.load.spritesheet('teleporterSpritesheet', 'assets/teleporterSpritesheet.png', { frameWidth: 824, frameHeight: 812 });
  this.load.spritesheet('shurikenSpritesheet', 'assets/shurikenSpritesheet.png', { frameWidth: 35, frameHeight: 35 });

  







     this.load.spritesheet('spritesheetPlayerNinjaWalking', 'assets/spritesheets/spritesheetPlayerNinjaWalking.png', { frameWidth: 80, frameHeight: 96 });
     this.load.spritesheet('spritesheetPlayerNinjaRed', 'assets/spritesheetPlayerNinjaRed.png', { frameWidth: 520, frameHeight: 480 });
     this.load.spritesheet('spritesheetPlayerNinjaGreen', 'assets/spritesheetPlayerNinjaGreen.png', { frameWidth: 520, frameHeight: 480 });    
     this.load.spritesheet('spritesheetSoldatEnnemi', 'assets/spritesheetSoldatEnnemi.png', { frameWidth: 325, frameHeight: 591 });

  
  
  this.load.spritesheet('spritesheetCastor', 'assets/spritesheetCastor.png', { frameWidth: 27, frameHeight: 20 });

  
  
   this.load.image('tiles', './assets/tileset.png');
   this.load.atlas('atlas', 'assets/mario-atlas.png', 'assets/mario-atlas.json');

    

   this.load.tilemapTiledJSON('level1', './levels/level1.json');
   this.load.tilemapTiledJSON('level2', './levels/level2.json');
   this.load.tilemapTiledJSON('level3', './levels/level3.json');
   this.load.tilemapTiledJSON('level4', './levels/level4.json');

   this.load.audio('sniperShot', ['assets/VFX/sniperShot.wav']);
   this.load.audio('soldierShot', ['assets/VFX/soldierShot.wav']);
   this.load.audio('cacShot', ['assets/VFX/cacShot.wav']);
   this.load.audio('grenadeShot', ['assets/VFX/grenadeShot.wav']);
   this.load.audio('roquetteShot', ['assets/VFX/roquetteShot.mp3']);
   this.load.audio('shurikenHitWall', ['assets/VFX/shurikenHitWall.wav']);
   this.load.audio('teleport', ['assets/VFX/teleport.wav']);
   this.load.audio('walking', ['assets/VFX/walking.wav']);
   this.load.on('complete', () => {

    this.startMenu()
});
    }
    create() {

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

 //       this.time.delayedCall(5000, this.startMenu, null, this);
    }
    startMenu(){


        this.scene.start("Menu")
    }
    loading(){

        console.log("mlusic")
        
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



}
