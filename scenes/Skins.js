
class Skins extends Phaser.Scene {
    constructor () {
        super('Skins');
    }
    preload(){
        this.load.image('Menu', 'assets/menuScreen.png');
        this.load.image('buySkin', 'assets/unlockSkin.png');
        this.load.image('startButton', 'assets/startButton.png');
        this.load.image('tutorialButton', 'assets/tutorialButton.png');
        this.load.image('skinsButton', 'assets/skinsButton.png');
        this.load.image('patchNoteButton', 'assets/patchNoteButton.png');
        this.load.image('easy', 'assets/easy.png');
        this.load.image('choixSkinScreen', 'assets/choixSkinScreen.jpg');
    
        this.load.image('choixSkinScreen', 'assets/choixSkinScreen.jpg');
        this.load.image('exitButton', 'assets/exitButton.png');
        this.load.image('ninjaSkinRouge', 'assets/playerNinjaRedIdle1.png');
        this.load.image('ninjaSkin', 'assets/playerNinjaIdle1.png');
        this.load.image('ninjaSkinGreen', 'assets/playerNinjaGreenIdle1.png');
    }
    create() {
        localStorage.setItem(localDataClicksDoneForEasterEggAchievement, clicksDoneForEasterEggAchievement);

        var menuBackground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(0.7);
        var menuLevel1Button = this.add.image((this.cameras.main.centerX*2)*0.3125, (this.cameras.main.centerY*2)*0.833, 'startButton').setScale(0.7).setInteractive();
        var menuLevel2Button = this.add.image((this.cameras.main.centerX*2)*0.625, (this.cameras.main.centerY*2)*0.833, 'tutorialButton').setScale(0.7).setInteractive();
        var patchNoteButton = this.add.image((this.cameras.main.centerX*2)*0.0234, (this.cameras.main.centerY*2)*0.06, 'patchNoteButton').setScale(0.7).setInteractive();
        var skinsButton = this.add.image((this.cameras.main.centerX*2)*0.1, (this.cameras.main.centerY*2)*0.9, 'skinsButton').setScale(0.5).setInteractive();     
        var shopButton = this.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.08, 'shopButton').setScale(0.14).setInteractive();
        var achievementsButton = this.add.image((this.cameras.main.centerX*2)*0.85, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(1.4).setInteractive();
        var menuBackgroundEscape = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(0.7).setInteractive();

        var choixSkinScreen = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'choixSkinScreen').setScale(2.1).setAlpha(1).setOrigin(0.5,0.5).setInteractive();
        var buySkin = this.add.image((this.cameras.main.centerX*2)*0.80, (this.cameras.main.centerY*2)*0.76, 'buySkin').setScale(0.16).setInteractive().setAlpha(1);
        var exitButton = this.add.image((this.cameras.main.centerX*2)*0.83, (this.cameras.main.centerY*2)*0.15, 'exitButton').setScale(0.1).setInteractive().setAlpha(1);

        
        if(ninjaRougeSkinUnlocked==true){
            var ninjaRougeSkin = this.add.image((this.cameras.main.centerX*2)*0.30,(this.cameras.main.centerY*2)*0.25, 'ninjaSkinRouge').setScale(0.2).setInteractive().setAlpha(1);
        }
        else {
            var ninjaRougeSkin = this.add.image((this.cameras.main.centerX*2)*0.30,(this.cameras.main.centerY*2)*0.25, 'ninjaSkinRouge').setScale(0.2).setInteractive().setAlpha(1).setTint(0x000000);
            this.add.text((this.cameras.main.centerX*2)*0.308,(this.cameras.main.centerY*2)*0.25,  "LOCKED",{ fill:'#ffffff', size:200}).setScrollFactor(0).setDepth(1).setTint(0xffffff).setOrigin(0.5,0.5).setFontSize(10); ;       
        }
        if(ninjaGreenSkinUnlocked==true){
            var ninjaGreenSkin = this.add.image((this.cameras.main.centerX*2)*0.40,(this.cameras.main.centerY*2)*0.25, 'ninjaSkinGreen').setScale(0.2).setInteractive().setAlpha(1);
        }
        else {
            var ninjaGreenSkin = this.add.image((this.cameras.main.centerX*2)*0.40,(this.cameras.main.centerY*2)*0.25, 'ninjaSkinGreen').setScale(0.2).setInteractive().setAlpha(1).setTint(0x000000).setOrigin(0.5,0.5);
            this.add.text((this.cameras.main.centerX*2)*0.408,(this.cameras.main.centerY*2)*0.25,  "LOCKED",{ fill:'#ffffff', size:200}).setScrollFactor(0).setDepth(1).setTint(0xffffff).setOrigin(0.5,0.5).setFontSize(10);      
             
        }
        if(ninjaSkinUnlocked==true){
            var ninjaSkin = this.add.image((this.cameras.main.centerX*2)*0.20,(this.cameras.main.centerY*2)*0.25, 'ninjaSkin').setScale(0.2).setInteractive().setAlpha(1);
        }
        else {
            var ninjaSkin = this.add.image((this.cameras.main.centerX*2)*0.20,(this.cameras.main.centerY*2)*0.25, 'ninjaSkin').setScale(0.2).setInteractive().setAlpha(1).setTint(0x000000);
            this.add.text((this.cameras.main.centerX*2)*0.208,(this.cameras.main.centerY*2)*0.25,  "LOCKED",{ fill:'#ffffff', size:200}).setScrollFactor(0).setDepth(1).setTint(0xffffff).setOrigin(0.5,0.5).setFontSize(10); ;          }



            this.popupAchievement();





    exitButton.on('pointerdown', () => {
        this.scene.start('Menu');
        }) 
    
    buySkin.on('pointerdown', () => {
        this.scene.start('ShopSkin');
    }) 
    menuBackgroundEscape.on('pointerdown', () => {
        this.scene.stop("Skin");
        this.scene.start('Menu');
    }) 
    
    ninjaRougeSkin.on('pointerdown', () => {
            if(ninjaRougeSkinUnlocked==true){
                playerSkin = "ninjaRouge"
                this.scene.start('Menu');
            }
            if(ninjaRougeSkinUnlocked==false){
                this.scene.start('ShopSkin');
            }
        }) 
    
    ninjaGreenSkin.on('pointerdown', () => {
        if(ninjaGreenSkinUnlocked==true){
                playerSkin = "ninjaGreen"
                this.scene.start('Menu');
            }
            if(ninjaGreenSkinUnlocked==false){
                this.scene.start('ShopSkin');
            }
        }) 
    
    ninjaSkin.on('pointerdown', () => {
        if(ninjaSkinUnlocked==true){
                playerSkin = "ninja"
                this.scene.start('Menu');
            }
            if(ninjaSkinUnlocked==false){
                this.scene.start('ShopSkin');
            }
        }) 
    } 

    popupAchievement(){
        var popUpAchievementInProgress = false
        if((clicksDoneForEasterEggAchievement > clicksForEasterEggAchievement-1) && popupEasterEggN1AchievementShown==false && popUpAchievementInProgress == false){
            popupEasterEggN1AchievementShown = true
            localStorage.setItem(localDataPopupEasterEggN1AchievementShown, popupEasterEggN1AchievementShown);  
            popUpAchievementInProgress = true
            var achievementEEN1Popup = this.physics.add.sprite((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementEEN1PopupText1 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.12,  "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5,0.5);  
            var achievementEEN1PopupText2 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.19,  "EASTER EGG N°1").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
            var achievementEEN1PopupText3 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.24,  "(Visit skin tab "+ clicksForEasterEggAchievement+" times)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
            this.tweens.add({
                targets: achievementEEN1Popup,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementEEN1PopupText1,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementEEN1PopupText2,
                alpha: 1,
                duration: 1000,
            });
            this.tweens.add({
                targets: achievementEEN1PopupText3,
                alpha: 1,
                duration: 1000,
            });
            this.time.delayedCall(5000, this.destroyPopup, [achievementEEN1PopupText1], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementEEN1PopupText2], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementEEN1PopupText3], this);
            this.time.delayedCall(5000, this.destroyPopup, [achievementEEN1Popup], this);      
            this.time.delayedCall(5000, this.popupAchievement, null, this);
        }
        else if((achievementsCompleted > achievementsAmount-2) && popupAchievementsCompletedAchievementShown==false && popUpAchievementInProgress == false){
            popupAchievementsCompletedAchievementShown = true
            localStorage.setItem(localDataPopupAchievementsCompletedAchievementShown, popupAchievementsCompletedAchievementShown);  
            popUpAchievementInProgress = true
            var achievementCompletedAchievementsPopup = this.physics.add.sprite((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementCompletedAchievementsPopupText1 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.12,  "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5,0.5);  
            var achievementCompletedAchievementsPopupText2 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.19,  "TRYHARD").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
            var achievementCompletedAchievementsPopupText3 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.24,  "(Complete all achievements)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
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
    destroyPopup(element){
            
          this.tweens.add({
              targets: element,
              alpha: 0,
              duration: 1000,
          });
  
  

      }
    }
    