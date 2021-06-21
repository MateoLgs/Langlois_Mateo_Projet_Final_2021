class Menu extends Phaser.Scene {

    constructor() {
        super('Menu');
    }

    preload() {
    }

    create() {


        /* this.input.gamepad.once('connected', function (pad) {
             //   'pad' is a reference to the gamepad that was just connected
                 paddle = pad;
                 padConnected = true;
             });
         mouseCursor = this.physics.add.sprite((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.75, 'mouseCursor').setScale(0.025).setDepth(5).setAlpha(1);
         mouseCursor.setCollideWorldBounds(true)
         mouseCursor.setSize(20, 20, false)
 */
        this.menuBackground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(1);
        this.choixLevelStartButton = this.physics.add.image((this.cameras.main.centerX * 2) * 0.495, (this.cameras.main.centerY * 2) * 0.51, 'startButton').setScale(0.555).setInteractive().setImmovable(true);
        this.skinsButton = this.physics.add.image((this.cameras.main.centerX * 2) * 0.125, (this.cameras.main.centerY * 2) * 0.84, 'skinsButton').setScale(1).setInteractive().setImmovable(true).setOrigin(0.5, 0.5);
        this.skinsButtonAnim = this.add.sprite((this.cameras.main.centerX * 2) * 0.125, (this.cameras.main.centerY * 2) * 0.865, 'skinsButton').setScale(1).setOrigin(0.5, 0.5).setAlpha(0);
        this.shopButton = this.physics.add.image((this.cameras.main.centerX * 2) * 0.75, (this.cameras.main.centerY * 2) * 0.08, 'shopButton').setScale(0.3).setInteractive().setImmovable(true);
        this.achievementsButton = this.physics.add.image((this.cameras.main.centerX * 2) * 0.85, (this.cameras.main.centerY * 2) * 0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);
        this.controlsButton = this.physics.add.image((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);

        this.anims.create({
            key: 'skinsButtonOpenSpritesheet',
            frames: this.anims.generateFrameNumbers('skinsButtonOpenSpritesheet', {start: 0, end: 3}),
            frameRate: 6,
            repeat: 0
        });
        this.camera = this.cameras.main;

        /*
                this.physics.add.overlap(mouseCursor,this.choixLevelStartButton,this.choixMenuStartButtonGamepad,null,this)
                this.physics.add.overlap(mouseCursor,this.skinsButton,this.openSkins,null,this)
                this.physics.add.overlap(mouseCursor,this.shopButton,this.openShop,null,this)
                this.physics.add.overlap(mouseCursor,this.achievementsButton,this.achievementButtonGamepad,null,this)
        */

        this.popupAchievement();


        this.choixLevelStartButton.on('pointerdown', () => {
            this.choixMenuStartButton();
        })


        this.skinsButton.on('pointerdown', () => {
            clicksDoneForEasterEggAchievement += 1;
            this.skinsButtonAnim.setAlpha(1)
            this.skinsButtonAnim.anims.play('skinsButtonOpenSpritesheet', true).setFlipX(false);
            this.time.delayedCall(700, this.goToSkinAnimation, null, this);
            this.skinsButton.destroy()
        })


        this.shopButton.on('pointerdown', () => {
            this.scene.stop("Menu");
            this.scene.start('Shop');
        })

        this.achievementsButton.on('pointerdown', () => {
            this.scene.stop("Menu");
            this.scene.start('Achievements');
        })


        this.controlsButton.on('pointerdown', () => {
            this.scene.stop("Menu");
            this.scene.start('Controls');
        })


    }

    update() {

        /*
                if (this.input.gamepad.total === 0)
                {
                    return;
                }
                pad = this.input.gamepad.getPad(0);

                if (pad.axes.length)
                {
                    axisWidth = pad.axes[0].getValue();
                    axisHeight = pad.axes[1].getValue();


                    if(axisWidth >=0.2){
                        mouseCursor.setVelocityX(350)
                    }
                    if(axisWidth <=-0.2){
                        mouseCursor.setVelocityX(-350)
                    }
                    if(axisHeight >=0.2){
                        mouseCursor.setVelocityY(350)
                    }
                    if(axisHeight <=-0.2){
                        mouseCursor.setVelocityY(-350)
                    }

                    if(axisHeight<0.2 && axisHeight>-0.2 && axisWidth>-0.2 && axisWidth<0.2){
                        mouseCursor.setVelocity(0)
                    }
                }*/
    }

    goToSkinAnimation() {
        this.camera.pan((this.cameras.main.centerX * 2) * 0.125, (this.cameras.main.centerY * 2) * 0.84, 1000, 'Power2');
        this.camera.zoomTo(15, 2000);
        this.time.delayedCall(2000, this.goToSkinAnimation2, null, this);

    }

    goToSkinAnimation2() {
        this.scene.stop("Menu");
        this.scene.start('Skins');
    }


    choixMenuStartButton() {
        this.scene.stop("Menu");
        this.scene.start('LevelMenu', this.data);
    }

    /*
        choixMenuStartButtonGamepad(){
            if(padConnected){
                if(paddle.A){
                    this.scene.stop("Menu");
                    this.scene.start('LevelMenu');
                }
            }
        }
        achievementButtonGamepad(){
            if(padConnected){
                if(paddle.A){
                    this.scene.stop("Menu");
                    this.scene.start('Achievements');
                }
            }
        }
        openSkins(){
            if(padConnected){
                if(paddle.A){
                    this.scene.stop("Menu");
                    this.scene.start('Skins');
                }
            }
        }
        openShop(){
            if(padConnected){
                if(paddle.A){
                    this.scene.stop("Menu");
                    this.scene.start('Shop');
                }
            }
        }*/

    init(data) {
        this.data = data
    }


    popupAchievement() {
        var popUpAchievementInProgress = false
        if ((morts === mortsForAchievement) && popupMortAchievementShown === false && popUpAchievementInProgress === false) {
            console.log("treeeee")
            popupMortAchievementShown = true
            localStorage.setItem(localDataPopupMortAchievementShown, popupMortAchievementShown);
            popUpAchievementInProgress = true
            var achievementMortsPopup = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementMortsPopupText1 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.12, "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5, 0.5);
            var achievementMortsPopupText2 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.20, "PERSISTENT").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5, 0.5).setAlpha(0);
            var achievementMortsPopupText3 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.26, "(Die " + mortsForAchievement + " times)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5, 0.5).setAlpha(0);
            this.tweens.add({
                targets: achievementMortsPopup,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementMortsPopupText1,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementMortsPopupText2,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementMortsPopupText3,
                alpha: 1,
                duration: 1000,
            });
            this.time.delayedCall(5000, this.destroyPopup, [achievementMortsPopupText1], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementMortsPopupText2], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementMortsPopupText3], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementMortsPopup], this);
            this.time.delayedCall(5000, this.popupAchievement, null, this);
        } else if ((skinsPossessed == skinAmount) && popupSkinAchievementShown == false && popUpAchievementInProgress == false) {
            popupSkinAchievementShown = true
            localStorage.setItem(localDataPopupSkinAchievementShown, popupSkinAchievementShown);
            popUpAchievementInProgress = true
            var achievementSkinsPopup = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementSkinsPopupText1 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.12, "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5, 0.5);
            var achievementSkinsPopupText2 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.18, "COLLECTOR").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setAlpha(0).setOrigin(0.5, 0.5);
            var achievementSkinsPopupText3 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.24, "(Possess all skins)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5, 0.5).setAlpha(0);
            this.tweens.add({
                targets: achievementSkinsPopup,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementSkinsPopupText1,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementSkinsPopupText2,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementSkinsPopupText3,
                alpha: 1,
                duration: 1000,
            });
            this.time.delayedCall(5000, this.destroyPopup, [achievementSkinsPopup], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementSkinsPopupText1], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementSkinsPopupText2], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementSkinsPopupText3], this);
            this.time.delayedCall(5000, this.popupAchievement, null, this);
        } else if ((totalCoins > totalCoinsAchievement - 1) && popupCoinsAchievementShown == false && popUpAchievementInProgress == false) {
            popupCoinsAchievementShown = true
            localStorage.setItem(localDataPopupCoinsAchievementShown, popupCoinsAchievementShown);

            popUpAchievementInProgress = true
            var achievementCoinsPopup = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementCoinsPopupText1 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.12, "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5, 0.5);
            var achievementCoinsPopupText2 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.19, "RICH").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5, 0.5).setAlpha(0);
            var achievementCoinsPopupText3 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.24, "(Collect " + totalCoinsAchievement + " coins)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5, 0.5).setAlpha(0);
            this.tweens.add({
                targets: achievementCoinsPopup,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementCoinsPopupText1,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementCoinsPopupText2,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementCoinsPopupText3,
                alpha: 1,
                duration: 1000,
            });
            this.time.delayedCall(5000, this.destroyPopup, [achievementCoinsPopupText1], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementCoinsPopupText2], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementCoinsPopupText3], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementCoinsPopup], this);
            this.time.delayedCall(5000, this.popupAchievement, null, this);
        } else if ((shotsDone > shotsDoneForAchievement - 1) && popupShotsAchievementShown == false && popUpAchievementInProgress == false) {
            popupShotsAchievementShown = true
            localStorage.setItem(localDataPopupShotsAchievementShown, popupShotsAchievementShown);
            popUpAchievementInProgress = true
            var achievementShotsPopup = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementShotsPopupText1 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.12, "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5, 0.5);
            var achievementShotsPopupText2 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.19, "SERIAL SHOOTER").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5, 0.5).setAlpha(0);
            var achievementShotsPopupText3 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.24, "(Shoot " + shotsDoneForAchievement + " times)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5, 0.5).setAlpha(0);
            this.tweens.add({
                targets: achievementShotsPopup,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementShotsPopupText1,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementShotsPopupText2,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementShotsPopupText3,
                alpha: 1,
                duration: 1000,
            });
            this.time.delayedCall(5000, this.destroyPopup, [achievementShotsPopupText1], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementShotsPopupText2], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementShotsPopupText3], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementShotsPopup], this);
            this.time.delayedCall(5000, this.popupAchievement, null, this);
        } else if ((achievementsCompleted > achievementsAmount - 2) && popupAchievementsCompletedAchievementShown == false && popUpAchievementInProgress == false) {
            popupAchievementsCompletedAchievementShown = true
            localStorage.setItem(localDataPopupAchievementsCompletedAchievementShown, popupAchievementsCompletedAchievementShown);

            popUpAchievementInProgress = true
            var achievementCompletedAchievementsPopup = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementCompletedAchievementsPopupText1 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.12, "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5, 0.5);
            var achievementCompletedAchievementsPopupText2 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.19, "TRYHARD").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5, 0.5).setAlpha(0);
            var achievementCompletedAchievementsPopupText3 = this.add.text((this.cameras.main.centerX * 2) * 0.12, (this.cameras.main.centerY * 2) * 0.24, "(Complete all achievements)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5, 0.5).setAlpha(0);
            this.tweens.add({
                targets: achievementCompletedAchievementsPopup,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementCompletedAchievementsPopupText1,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementCompletedAchievementsPopupText2,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementCompletedAchievementsPopupText3,
                alpha: 1,
                duration: 1000,
            });
            this.time.delayedCall(5000, this.destroyPopup, [achievementCompletedAchievementsPopupText1], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementCompletedAchievementsPopupText2], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementCompletedAchievementsPopupText3], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementCompletedAchievementsPopup], this);
            this.time.delayedCall(5000, this.popupAchievement, null, this);

        }

    }

    destroyPopup(element) {
        //  while(element.alpha>0){

        this.tweens.add({
            targets: element,
            alpha: 0,
            duration: 1000,
        });


        //element.destroy();
        //console.log("étezogv")
        // }
    }


}
