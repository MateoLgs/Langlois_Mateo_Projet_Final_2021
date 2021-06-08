    
class Menu extends Phaser.Scene {

    constructor () {
        super('Menu');
    }

        preload(){
            this.load.image('deathScreen', 'assets/deathScreen.png');
            this.load.image('victoireScreen', 'assets/victoireScreen.jpg');
            this.load.image('replayLevelButton', 'assets/replayLevelButton.jpg');
            this.load.image('homeButton', 'assets/homeButton.jpg');
            this.load.image('adForReward', 'assets/adForReward.png');
            this.load.image('crossRed', 'assets/crossRed.png');
            this.load.image('blackSquare', 'assets/blackSquare.png');


              this.load.image('Menu', 'assets/menuScreen.png');
              this.load.image('startButton', 'assets/startButton.png');
              this.load.image('tutorialButton', 'assets/tutorialButton.png');
              this.load.image('skinsButton', 'assets/skinsButton.png');
              this.load.image('shopButton', 'assets/shopButton.png');
              this.load.image('patchNoteButton', 'assets/patchNoteButton.png');
              this.load.image('patchNote', 'assets/patchNote.png');
              this.load.image('achievementsButton', 'assets/achievements.png');
              this.load.image('exitButton', 'assets/exitButton.png');
              this.load.image('blackSquare', 'assets/blackSquare.png');       
              this.load.image('blackRectangle', 'assets/blackRectangle.png');        
            }
    create() {
        


        var menuBackground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(0.7);
        var choixMenuStartButton = this.add.image((this.cameras.main.centerX*2)/2, (this.cameras.main.centerY*2)/2, 'startButton').setScale(0.7).setInteractive();
        var patchNoteButton = this.add.image((this.cameras.main.centerX*2)*0.0234, (this.cameras.main.centerY*2)*0.06, 'patchNoteButton').setScale(0.7).setInteractive();
        var skinsButton = this.add.image((this.cameras.main.centerX*2)*0.1, (this.cameras.main.centerY*2)*0.9, 'skinsButton').setScale(0.5).setInteractive();     
        var shopButton = this.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.08, 'shopButton').setScale(0.14).setInteractive();
        var achievementsButton = this.add.image((this.cameras.main.centerX*2)*0.85, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(1.4).setInteractive();
        var patchNote = this.add.image((this.cameras.main.centerX),(this.cameras.main.centerY), 'patchNote').setAlpha(0).setScale(0.7);
        var exitButtonPatchNote = this.add.image((this.cameras.main.centerX*2)*0.703,(this.cameras.main.centerY*2)*0.07, 'exitButton').setScale(0.1).setInteractive().setAlpha(0);

        this.popupAchievement();

        
        choixMenuStartButton.on('pointerdown', () => {
      this.choixMenuStartButton();
        }) 
        

   
    skinsButton.on('pointerdown', () => {
        clicksDoneForEasterEggAchievement +=1;
        this.scene.stop("Menu");
        this.scene.start('Skins');
    }) 

    shopButton.on('pointerdown', () => {
        this.scene.stop("Menu");
      this.scene.start('Shop');
  }) 

  achievementsButton.on('pointerdown', () => {
    this.scene.stop("Menu");
    this.scene.start('Achievements');
}) 


    patchNoteButton.on('pointerdown', () => {
        patchNote.setAlpha(1)
        exitButtonPatchNote.setAlpha(1)
        }) 
        
    exitButtonPatchNote.on('pointerdown', () => {
        exitButtonPatchNote.setAlpha(0)
        patchNote.setAlpha(0)
        }) 
    }
    choixMenuStartButton(){
        this.scene.stop("Menu");
      this.scene.start('LevelMenu');
    }



    
    popupAchievement(){
        var popUpAchievementInProgress = false
        if((morts === mortsForAchievement) && popupMortAchievementShown===false && popUpAchievementInProgress === false){
            console.log("treeeee")
            popupMortAchievementShown = true
            localStorage.setItem(localDataPopupMortAchievementShown, popupMortAchievementShown);  
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
            localStorage.setItem(localDataPopupSkinAchievementShown, popupSkinAchievementShown);  
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
            localStorage.setItem(localDataPopupCoinsAchievementShown, popupCoinsAchievementShown);  

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
            localStorage.setItem(localDataPopupShotsAchievementShown, popupShotsAchievementShown);  
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
