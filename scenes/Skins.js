
class Skins extends Phaser.Scene {
    constructor () {
        super('Skins');
    }
    preload(){

    }
    create() {


        localStorage.setItem(localDataClicksDoneForEasterEggAchievement, clicksDoneForEasterEggAchievement);

        this.menuBackgroundEscape = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(1).setInteractive();;
        this.choixLevelStartButton = this.physics.add.image((this.cameras.main.centerX*2)*0.495, (this.cameras.main.centerY*2)*0.51, 'startButton').setScale(0.555).setInteractive().setImmovable(true);
        this.skinsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.125, (this.cameras.main.centerY*2)*0.84, 'skinsButton').setScale(1).setInteractive().setImmovable(true).setOrigin(0.5,0.5);    
        this.skinsButtonAnim = this.add.sprite((this.cameras.main.centerX*2)*0.125, (this.cameras.main.centerY*2)*0.865, 'skinsButton').setScale(1).setOrigin(0.5,0.5).setAlpha(0);    
        this.shopButton = this.physics.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.08, 'shopButton').setScale(0.3).setInteractive().setImmovable(true);
        this.achievementsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.85, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);
        this.controlsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.1, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);


        var choixSkinScreen = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'skinsBackground').setScale(1.2).setAlpha(1).setOrigin(0.5,0.5).setInteractive();
        var buySkin = this.add.image((this.cameras.main.centerX*2)*0.52, (this.cameras.main.centerY*2)*0.76, 'randomButton').setScale(0.6).setInteractive().setAlpha(1);
        var exitButton = this.add.image((this.cameras.main.centerX*2)*0.83, (this.cameras.main.centerY*2)*0.15, 'exitButton').setScale(0.1).setInteractive().setAlpha(1);

        
        if(ninjaRougeSkinUnlocked==true){
            var ninjaRougeSkin = this.add.image((this.cameras.main.centerX*2)*0.62,(this.cameras.main.centerY*2)*0.5, 'ninjaSkinRouge').setScale(0.2).setInteractive().setAlpha(1);
        }
        else {
            var ninjaRougeSkin = this.add.image((this.cameras.main.centerX*2)*0.62,(this.cameras.main.centerY*2)*0.5, 'ninjaSkinRouge').setScale(0.2).setInteractive().setAlpha(1).setTint(0x000000);
            this.add.text((this.cameras.main.centerX*2)*0.628,(this.cameras.main.centerY*2)*0.5,  "LOCKED",{ fill:'#ffffff', size:200}).setScrollFactor(0).setDepth(1).setTint(0xffffff).setOrigin(0.5,0.5).setFontSize(10);       
        }
        if(ninjaGreenSkinUnlocked==true){
            var ninjaGreenSkin = this.add.image((this.cameras.main.centerX*2)*0.52,(this.cameras.main.centerY*2)*0.5, 'ninjaSkinGreen').setScale(0.2).setInteractive().setAlpha(1);
        }
        else {
            var ninjaGreenSkin = this.add.image((this.cameras.main.centerX*2)*0.52,(this.cameras.main.centerY*2)*0.5, 'ninjaSkinGreen').setScale(0.2).setInteractive().setAlpha(1).setTint(0x000000).setOrigin(0.5,0.5);
            this.add.text((this.cameras.main.centerX*2)*0.528,(this.cameras.main.centerY*2)*0.5,  "LOCKED",{ fill:'#ffffff', size:200}).setScrollFactor(0).setDepth(1).setTint(0xffffff).setOrigin(0.5,0.5).setFontSize(10);      
             
        }
        if(ninjaSkinUnlocked==true){
            var ninjaSkin = this.add.image((this.cameras.main.centerX*2)*0.42,(this.cameras.main.centerY*2)*0.5, 'ninjaSkin').setScale(0.2).setInteractive().setAlpha(1);
        }
        else {
            var ninjaSkin = this.add.image((this.cameras.main.centerX*2)*0.42,(this.cameras.main.centerY*2)*0.5, 'ninjaSkin').setScale(0.2).setInteractive().setAlpha(1).setTint(0x000000);
            this.add.text((this.cameras.main.centerX*2)*0.428,(this.cameras.main.centerY*2)*0.5,  "LOCKED",{ fill:'#ffffff', size:200}).setScrollFactor(0).setDepth(1).setTint(0xffffff).setOrigin(0.5,0.5).setFontSize(10);          }

          
            this.popupAchievement();





    exitButton.on('pointerdown', () => {
        this.scene.start('Menu');
        }) 
    
    buySkin.on('pointerdown', () => {
        this.scene.start('ShopSkin');
    }) 
    this.menuBackgroundEscape.on('pointerdown', () => {
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
    