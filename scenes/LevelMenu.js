    
class LevelMenu extends Phaser.Scene {

    constructor () {
        super('LevelMenu');
    }
        preload(){     
            this.load.image('backButton', 'assets/backButton.png');    
        }
    create() {
        var menuBackground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(0.7);
        var backButton = this.add.image((this.cameras.main.centerX*2)*0.04,(this.cameras.main.centerY*2)*0.075, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5);

        if(pageLevelMenu==1){
            var nextPageButton = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.9, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5).setRotation(4.7);

            if(level1Unlocked == true){
                var menuLevel1Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'tutorialButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level1Unlocked == false){
                var menuLevel1Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'tutorialButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level2Unlocked == true){
                var menuLevel2Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'startButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level2Unlocked == false){
                var menuLevel2Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'startButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level3Unlocked == true){
                var menuLevel3Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'startButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level3Unlocked == false){
                var menuLevel3Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'startButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level4Unlocked == true){
                var menuLevel4Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'tutorialButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level4Unlocked == false){
                var menuLevel4Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'tutorialButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level5Unlocked == true){
                var menuLevel5Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'tutorialButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level5Unlocked == false){
                var menuLevel5Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'tutorialButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level6Unlocked == true){
                var menuLevel6Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'startButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level6Unlocked == false){
                var menuLevel6Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'startButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 

        nextPageButton.on('pointerdown', () => {
            pageLevelMenu+=1;
            this.scene.restart();
        })    
        menuLevel1Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
        })      
        menuLevel2Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
        menuLevel3Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
            })    
        menuLevel4Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
        menuLevel5Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
            }) 
        menuLevel6Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
    }

    if(pageLevelMenu==2){
        var nextPageButton = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.9, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5).setRotation(4.7);
        var previousPageButton = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.1, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5).setRotation(1.6);
        if(level7Unlocked == true){
            var menuLevel7Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'tutorialButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level7Unlocked == false){
            var menuLevel7Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'tutorialButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level8Unlocked == true){
            var menuLevel8Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'startButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level8Unlocked == false){
            var menuLevel8Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'startButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level9Unlocked == true){
            var menuLevel9Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'startButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level9Unlocked == false){
            var menuLevel9Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'startButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level10Unlocked == true){
            var menuLevel10Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'tutorialButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level10Unlocked == false){
            var menuLevel10Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'tutorialButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level11Unlocked == true){
            var menuLevel11Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'tutorialButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level11Unlocked == false){
            var menuLevel11Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'tutorialButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level12Unlocked == true){
            var menuLevel12Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'startButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level12Unlocked == false){
            var menuLevel12Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'startButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        previousPageButton.on('pointerdown', () => {
            pageLevelMenu-=1;
            this.scene.restart();
        })    
        nextPageButton.on('pointerdown', () => {
            pageLevelMenu+=1;
            this.scene.restart();
        }) 
        menuLevel7Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
        })      
        menuLevel8Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
        }) 
        menuLevel9Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
            })    
        menuLevel10Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
        }) 
        menuLevel11Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
            }) 
        menuLevel12Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
    }
    if(pageLevelMenu==3){
        var previousPageButton = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.1, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5).setRotation(1.6);
        if(level13Unlocked == true){
            var menuLevel13Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'tutorialButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level13Unlocked == false){
            var menuLevel13Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'tutorialButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level14Unlocked == true){
            var menuLevel14Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'startButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level14Unlocked == false){
            var menuLevel14Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'startButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level15Unlocked == true){
            var menuLevel15Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'startButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level15Unlocked == false){
            var menuLevel15Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'startButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level16Unlocked == true){
            var menuLevel16Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'tutorialButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level16Unlocked == false){
            var menuLevel16Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'tutorialButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level17Unlocked == true){
            var menuLevel17Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'tutorialButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level17Unlocked == false){
            var menuLevel17Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'tutorialButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level18Unlocked == true){
            var menuLevel18Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'startButton').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level18Unlocked == false){
            var menuLevel18Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'startButton').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        previousPageButton.on('pointerdown', () => {
            pageLevelMenu-=1;
            this.scene.restart();
        })    
        menuLevel13Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
        })      
        menuLevel14Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
        }) 
        menuLevel15Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
            })    
        menuLevel16Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
        }) 
        menuLevel17Button.on('pointerdown', () => {
            this.choixMenuLevelButton("tutoriel");
            }) 
        menuLevel18Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
    }

    backButton.on('pointerdown', () => {
        this.scene.start('Menu');
    }) 
}
    choixMenuLevelButton(varLevel){
              level=varLevel
      this.scene.start('Jeu');
    }


    
    popupAchievement(){
        var popUpAchievementInProgress = false
        if((morts > mortsForAchievement-1) && popupMortAchievementShown==false && popUpAchievementInProgress == false){
            popupMortAchievementShown = true
            popUpAchievementInProgress = true
            var achievementMortsPopup = this.physics.add.sprite((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementMortsPopupText1 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.12,  "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5,0.5);  
            var achievementMortsPopupText2 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.20,  "PERSISTENT").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
            var achievementMortsPopupText3 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.26,  "(Die " + mortsForAchievement + " times)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
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
        }

        else if((skinsPossessed == skinAmount) && popupSkinAchievementShown==false && popUpAchievementInProgress == false){
            popupSkinAchievementShown = true
            popUpAchievementInProgress = true
            var achievementSkinsPopup = this.physics.add.sprite((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
             var achievementSkinsPopupText1 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.12,  "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5,0.5);  
             var achievementSkinsPopupText2 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.18,  "COLLECTOR").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setAlpha(0).setOrigin(0.5,0.5);  
             var achievementSkinsPopupText3 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.24,  "(Possess all skins)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
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
        }

        else if((totalCoins > totalCoinsAchievement-1) && popupCoinsAchievementShown==false && popUpAchievementInProgress == false){
            popupCoinsAchievementShown = true
            popUpAchievementInProgress = true
            var achievementCoinsPopup = this.physics.add.sprite((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementCoinsPopupText1 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.12,  "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5,0.5);  
            var achievementCoinsPopupText2 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.19,  "RICH").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
            var achievementCoinsPopupText3 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.24,  "(Collect " + totalCoinsAchievement +" coins)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
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
        }

        else if((shotsDone > shotsDoneForAchievement-1) && popupShotsAchievementShown==false && popUpAchievementInProgress == false){
            popupShotsAchievementShown = true
            popUpAchievementInProgress = true
            var achievementShotsPopup = this.physics.add.sprite((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.2, 'blackRectangle').setScrollFactor(1).setScale(0.5).setAlpha(0)
            var achievementShotsPopupText1 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.12,  "Achievement Completed !").setFontSize(15).setScrollFactor(1).setTint(0x00ff00).setAlpha(0).setOrigin(0.5,0.5);  
            var achievementShotsPopupText2 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.19,  "SERIAL SHOOTER").setFontSize(20).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
            var achievementShotsPopupText3 = this.add.text((this.cameras.main.centerX*2)*0.12, (this.cameras.main.centerY*2)*0.24,  "(Shoot " + shotsDoneForAchievement + " times)").setFontSize(12).setScrollFactor(1).setTint(0xffffff).setOrigin(0.5,0.5).setAlpha(0);  
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
        }

        else if((clicksDoneForEasterEggAchievement > clicksForEasterEggAchievement-1) && popupMEasterEggN1AchievementShown==false && popUpAchievementInProgress == false){
            popupMEasterEggN1AchievementShown = true
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
