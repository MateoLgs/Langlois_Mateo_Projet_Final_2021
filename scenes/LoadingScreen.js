class LoadingScreen extends Phaser.Scene {
    isLoaded = false
    constructor() {
        super('LoadingScreen');
    }

    preload() {

        this.load.image('loadingScreen', 'assets/loadingScreen.png');
        this.load.image('loadingScreenControls', 'assets/loadingScreenControls.png');
        this.load.spritesheet('loadingIconSpritesheet', 'assets/loadingIconSpritesheet.png', {
            frameWidth: 40,
            frameHeight: 40
        });
        // this.time.delayedCall(1000, this.loading, null, this);
        this.load.on('complete', () => {
            console.log("hello 1")
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
        this.load.image('smallBullet', 'assets/smallBullet.png');
        this.load.image('heavyBullet', 'assets/heavyBullet.png');

        this.load.image('soldatEnnemi', 'assets/soldatEnnemi.png');
        this.load.image('machineGunnerEnnemi', 'assets/machineGunnerEnnemi.png');
        this.load.image('sniperEnnemi', 'assets/sniperEnnemi.png');
        this.load.image('launcherEnnemi', 'assets/launcherEnnemi.png');
        this.load.image('grenade', 'assets/grenade.png');
        this.load.image('roquette', 'assets/roquette.png');

        this.load.image('sky', 'assets/sky.png');


        this.load.image('flag', 'assets/igloo.png');
        this.load.image('snowman', 'assets/snowman.png');
        //this.load.image('ground', 'assets/platform.png');
        this.load.image('life', 'assets/life.png')

        this.load.image('explosion', 'assets/explosion.png')
        this.load.image('health', 'assets/star.png', {width: 10, height: 20,});
        this.load.image('snowstorm', 'assets/snowstorm.png');
        this.load.image('water', 'assets/water.png');


        this.load.image('castor', 'assets/castor.png');
        this.load.image('player1Ninja', 'assets/playerNinjaIdle1.png');
        this.load.image('teleport', 'assets/teleporter.png');
        this.load.image('caisse', 'assets/caisse.png');
        this.load.image('caisseBroken', 'assets/caisseBroken.png');
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

        this.load.spritesheet('skinsButtonOpenSpritesheet', 'assets/skinsButtonOpenSpritesheet.png', {
            frameWidth: 64,
            frameHeight: 120
        });

        this.load.image('katanaHealthImage1', 'assets/katanaHealthImage1.png');
        this.load.image('katanaHealthImage2', 'assets/katanaHealthImage2.png');
        this.load.image('katanaHealthImage3', 'assets/katanaHealthImage3.png');
        this.load.image('katanaHealthImage4', 'assets/katanaHealthImage4.png');
        this.load.image('katanaHealthImage5', 'assets/katanaHealthImage5.png');
        this.load.image('healthBarGreen', 'assets/healthBarGreen.png');


        this.load.spritesheet('teleporterSpritesheet', 'assets/teleporterSpritesheet.png', {
            frameWidth: 824,
            frameHeight: 812
        });
        this.load.spritesheet('shurikenSpritesheet', 'assets/shurikenSpritesheet.png', {
            frameWidth: 35,
            frameHeight: 35
        });
////////////////////////NINJA////////////////

        this.load.spritesheet('spritesheetPlayerNinjaJumping', 'assets/spritesheets/spritesheetPlayerNinjaJumping.png', {
            frameWidth: 96,
            frameHeight: 96
        });
        this.load.spritesheet('spritesheetPlayerNinjaWalking', 'assets/spritesheets/spritesheetPlayerNinjaWalking.png', {
            frameWidth: 80,
            frameHeight: 96
        });
        this.load.spritesheet('spritesheetPlayerNinjaIdle', 'assets/spritesheets/spritesheetPlayerNinjaIdle.png', {
            frameWidth: 110,
            frameHeight: 96
        });
        this.load.spritesheet('spritesheetPlayerNinjaDie', 'assets/spritesheets/spritesheetPlayerNinjaDie.png', {
            frameWidth: 130,
            frameHeight: 96
        });
        this.load.spritesheet('spritesheetPlayerNinjaCrouch', 'assets/spritesheets/spritesheetPlayerNinjaCrouch.png', {
            frameWidth: 100,
            frameHeight: 96
        });
        /////////////////////////////

////////////////////////NINJA BLANC////////////////

this.load.spritesheet('spritesheetPlayerNinjaJumpingBlanc', 'assets/spritesheets/spritesheetPlayerNinjaJumpingBlanc.png', {
    frameWidth: 96,
    frameHeight: 96
});
this.load.spritesheet('spritesheetPlayerNinjaWalkingBlanc', 'assets/spritesheets/spritesheetPlayerNinjaWalkingBlanc.png', {
    frameWidth: 80,
    frameHeight: 96
});
this.load.spritesheet('spritesheetPlayerNinjaIdleBlanc', 'assets/spritesheets/spritesheetPlayerNinjaIdleBlanc.png', {
    frameWidth: 110,
    frameHeight: 96
});
this.load.spritesheet('spritesheetPlayerNinjaDieBlanc', 'assets/spritesheets/spritesheetPlayerNinjaDieBlanc.png', {
    frameWidth: 130,
    frameHeight: 96
});
this.load.spritesheet('spritesheetPlayerNinjaCrouchBlanc', 'assets/spritesheets/spritesheetPlayerNinjaCrouchBlanc.png', {
    frameWidth: 100,
    frameHeight: 96
});
/////////////////////////////
////////////////////////NINJA CAM////////////////

this.load.spritesheet('spritesheetPlayerNinjaJumpingCam', 'assets/spritesheets/spritesheetPlayerNinjaJumpingCam.png', {
    frameWidth: 96,
    frameHeight: 96
});
this.load.spritesheet('spritesheetPlayerNinjaWalkingCam', 'assets/spritesheets/spritesheetPlayerNinjaWalkingCam.png', {
    frameWidth: 80,
    frameHeight: 96
});
this.load.spritesheet('spritesheetPlayerNinjaIdleCam', 'assets/spritesheets/spritesheetPlayerNinjaIdleCam.png', {
    frameWidth: 110,
    frameHeight: 96
});
this.load.spritesheet('spritesheetPlayerNinjaDieCam', 'assets/spritesheets/spritesheetPlayerNinjaDieCam.png', {
    frameWidth: 130,
    frameHeight: 96
});
this.load.spritesheet('spritesheetPlayerNinjaCrouchCam', 'assets/spritesheets/spritesheetPlayerNinjaCrouchCam.png', {
    frameWidth: 100,
    frameHeight: 96
});
/////////////////////////////




        this.load.spritesheet('spritesheetEnnemySoldierShoot', 'assets/spritesheets/spritesheetEnnemySoldierShoot.png', {
            frameWidth: 72,
            frameHeight: 96
        });
        this.load.spritesheet('spritesheetEnnemyMachineGunnerShoot', 'assets/spritesheets/spritesheetEnnemyMachineGunnerShoot.png', {
            frameWidth: 90,
            frameHeight: 96
        });
        this.load.spritesheet('spritesheetEnnemySniperShoot', 'assets/spritesheets/spritesheetEnnemySniperShoot.png', {
            frameWidth: 90,
            frameHeight: 96
        });
        this.load.spritesheet('spritesheetEnnemyGrenadeLauncherShoot', 'assets/spritesheets/spritesheetEnnemyLauncherShoot.png', {
            frameWidth: 74,
            frameHeight: 96
        });




        this.load.spritesheet('spritesheetPlayerNinjaRed', 'assets/spritesheetPlayerNinjaRed.png', {
            frameWidth: 520,
            frameHeight: 480
        });
        this.load.spritesheet('spritesheetPlayerNinjaGreen', 'assets/spritesheetPlayerNinjaGreen.png', {
            frameWidth: 520,
            frameHeight: 480
        });
       

        this.load.spritesheet('spritesheetCastor', 'assets/spritesheetCastor.png', {frameWidth: 27, frameHeight: 20});


        this.load.image('tiles', './assets/tileset.png');
        this.load.atlas('atlas', 'assets/mario-atlas.png', 'assets/mario-atlas.json');


        this.load.image('levelButton_1', 'assets/levelButton_1.png');
        this.load.image('levelButton_2', 'assets/levelButton_2.png');
        this.load.image('levelButton_3', 'assets/levelButton_3.png');
        this.load.image('levelButton_4', 'assets/levelButton_4.png');
        this.load.image('levelButton_5', 'assets/levelButton_5.png');
        this.load.image('levelButton_6', 'assets/levelButton_6.png');
        this.load.image('levelButton_7', 'assets/levelButton_7.png');
        this.load.image('levelButton_8', 'assets/levelButton_8.png');
        this.load.image('levelButton_9', 'assets/levelButton_9.png');
        this.load.image('levelButton_10', 'assets/levelButton_10.png');
        this.load.image('levelButton_11', 'assets/levelButton_11.png');
        this.load.image('levelButton_12', 'assets/levelButton_12.png');
        this.load.image('levelButton_13', 'assets/levelButton_13.png');
        this.load.image('levelButton_14', 'assets/levelButton_14.png');
        this.load.image('levelButton_15', 'assets/levelButton_15.png');
        this.load.image('levelButton_16', 'assets/levelButton_16.png');
        this.load.image('levelButton_17', 'assets/levelButton_17.png');
        this.load.image('levelButton_18', 'assets/levelButton_18.png');

        this.load.image('backButton', 'assets/backButton.png');

        this.load.image('Menu', 'assets/menuScreen.png');
        this.load.image('MenuScreenLevelChoix', 'assets/menuScreenLevelChoix.png');

        this.load.image('buySkin', 'assets/unlockSkin.png');
        this.load.image('startButton', 'assets/startButton.png');
        this.load.image('tutorialButton', 'assets/tutorialButton.png');
        this.load.image('skinsButton', 'assets/skinsButton.png');
        this.load.image('easy', 'assets/easy.png');
        this.load.image('backgroundScreen', 'assets/choixSkinScreen.jpg');

        this.load.image('screenControls', 'assets/screenControls.png');
        this.load.image('exitButtonGrey', 'assets/exitButtonGrey.png');

        this.load.image('randomButton', 'assets/random.png');
        this.load.image('whiteSquare', 'assets/whiteSquare.png');

        this.load.image('shareButton', 'assets/share.png');
        this.load.spritesheet('unlockCoinsAnimation', 'assets/unlockCoinsSpritesheet.png', { frameWidth: 200, frameHeight: 200 });


        this.load.image('choixSkinScreen', 'assets/choixSkinScreen.jpg');
        this.load.image('choixSkinScreen1', 'assets/choixSkinScreen1.png');
        this.load.image('skinsBackground', 'assets/skinsBackground.png');

        this.load.image('shop1', 'assets/shop1.png');
        this.load.image('shop2', 'assets/shop2.png');
        this.load.image('shop3', 'assets/shop3.png');
        this.load.image('shop4', 'assets/shop4.png');
        this.load.image('shop5', 'assets/shop5.png');
        this.load.image('shop6', 'assets/shop6.png');


        this.load.image('ninjaSkinRouge', 'assets/playerNinjaRedIdle1.png');
        this.load.image('ninjaSkin', 'assets/playerNinjaIdle1.png');
        this.load.image('ninjaSkinGreen', 'assets/playerNinjaGreenIdle1.png');

        this.load.tilemapTiledJSON('level1', './levels/level1.json');
        this.load.tilemapTiledJSON('level2', './levels/level2.json');
        this.load.tilemapTiledJSON('level3', './levels/level3.json');
        this.load.tilemapTiledJSON('level4', './levels/level4.json');

        this.load.audio('gameMusic1', ['assets/VFX/gameMusic1.mp3']);
        this.load.audio('sniperShot', ['assets/VFX/sniperShot.wav']);
        this.load.audio('soldierShot', ['assets/VFX/soldierShot.wav']);
        this.load.audio('cacShot', ['assets/VFX/cacShot.wav']);
        this.load.audio('grenadeShot', ['assets/VFX/grenadeShot.wav']);
        this.load.audio('roquetteShot', ['assets/VFX/roquetteShot.mp3']);
        this.load.audio('shurikenHitWall', ['assets/VFX/shurikenHitWall.wav']);
        this.load.audio('teleport', ['assets/VFX/teleport.wav']);
        this.load.audio('walking', ['assets/VFX/walking.wav']);


        this.load.on('complete', () => {
            this.isLoaded = true
        })
    }

    create() {

    }

    changeImage() {
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
        this.loadingIcon = this.add.sprite((this.cameras.main.centerX * 2) * 0.9, (this.cameras.main.centerY * 2) * 0.9, 'rien').setScale(1).setAlpha(1);
        this.loadingIcon.anims.play('loadingIconSpritesheet', true).setFlipX(false);
        var randomTip = Phaser.Math.Between(0, 6);
        this.textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.5, (this.cameras.main.centerY * 2) * 0.9, "Tip : " + this.loadingScreenTips[randomTip], {
            fill: '#fff',
            size: 200
        }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);

       while (!this.isLoaded) {}
        this.time.delayedCall(5000,this.startMenu,null,this)

    }

    startMenu() {


        let gameMusic1 = this.sound.add("gameMusic1", {loop: true, volume: 0.05});
        let sniperShot = this.sound.add("sniperShot", {loop: false, volume: 0.3});
        let soldierShot = this.sound.add("soldierShot", {loop: false, volume: 0.3});
        let cacShot = this.sound.add("cacShot", {loop: false, volume: 0.3});
        let grenadeShot = this.sound.add("grenadeShot", {loop: false, volume: 0.3});
        let roquetteShot = this.sound.add("roquetteShot", {loop: false, volume: 0.3});
        let shurikenHitWall = this.sound.add("shurikenHitWall", {loop: false, volume: 0.3});
        let teleport = this.sound.add("teleport", {loop: false, volume: 0.5});
        let walking = this.sound.add("walking", {loop: true, volume: 10});

        gameMusic1.play()

        this.scene.start('Menu',
            {
                sound:
                    {
                        gameMusic1: gameMusic1,
                        sniperShot: sniperShot,
                        soldierShot: soldierShot,
                        cacShot: cacShot,
                        grenadeShot: grenadeShot,
                        roquetteShot: roquetteShot,
                        shurikenHitWall: shurikenHitWall,
                        teleport: teleport,
                        walking: walking,
                    }
            })
    }

    loading() {

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
            frames: this.anims.generateFrameNumbers('loadingIconSpritesheet', {start: 0, end: 11}),
            frameRate: 10,
            repeat: -1
        });
    }


}
