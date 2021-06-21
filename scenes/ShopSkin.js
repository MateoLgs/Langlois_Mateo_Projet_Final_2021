
class ShopSkin extends Phaser.Scene {
    constructor (){
        super('ShopSkin');
    }
    preload(){

        
    }
    create(){
        this.menuBackgroundEscape = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(1).setInteractive();
        this.choixLevelStartButton = this.physics.add.image((this.cameras.main.centerX*2)*0.495, (this.cameras.main.centerY*2)*0.51, 'startButton').setScale(0.555).setInteractive().setImmovable(true);
        this.skinsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.125, (this.cameras.main.centerY*2)*0.84, 'skinsButton').setScale(1).setInteractive().setImmovable(true).setOrigin(0.5,0.5);    
        this.skinsButtonAnim = this.add.sprite((this.cameras.main.centerX*2)*0.125, (this.cameras.main.centerY*2)*0.865, 'skinsButton').setScale(1).setOrigin(0.5,0.5).setAlpha(0);    
        this.shopButton = this.physics.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.08, 'shopButton').setScale(0.3).setInteractive().setImmovable(true);
        this.achievementsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.85, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);
        this.controlsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.1, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);


        
        var screenShopSkinBackground = this.add.image(this.cameras.main.centerX, (this.cameras.main.centerY*2)*0.6, 'choixSkinScreen1').setScale(1).setOrigin(0.5,0.5).setInteractive();
        var randomButton = this.add.image((this.cameras.main.centerX*2)*0.52, (this.cameras.main.centerY*2)*0.75, 'randomButton').setScale(0.75).setOrigin(0.5,0.5).setInteractive();
      //  var buyASkinText = this.add.text((this.cameras.main.centerX*2)*0.25, (this.cameras.main.centerY*2)*0.30,  "Buy a Skin",{ fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(75);  
        var coinsAmountBackground = this.add.image((this.cameras.main.centerX*2)*0.283, (this.cameras.main.centerY*2)*0.14, 'choixSkinScreen').setScale(0.5).setOrigin(0.5,0.5);
        var totalCoinsTextBuySkin = this.add.text((this.cameras.main.centerX*2)*0.3, (this.cameras.main.centerY*2)*0.1,  "Coins : ",{ fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(30).setOrigin(0.5,0.5);  
        var totalCoinsTextBuySkinNumber = this.add.text((this.cameras.main.centerX*2)*0.283, (this.cameras.main.centerY*2)*0.17,  totalCoins,{ fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);  

       // var priceToPaySkin = this.add.text((this.cameras.main.centerX*2)/2, (this.cameras.main.centerY*2)*0.9,  "Unlock for: "+ priceToPaySkinNumber,{ fill:'#0f0', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);  
        var exitButton = this.add.image((this.cameras.main.centerX*2)*0.78,(this.cameras.main.centerY*2)*0.31, 'exitButton').setScale(0.1).setInteractive().setAlpha(1).setOrigin(0.5,0.5);
        var shareButton = this.add.image((this.cameras.main.centerX*2)*100,(this.cameras.main.centerY*2)*100, 'shareButton').setScale(0.1).setInteractive().setAlpha(1).setOrigin(0.5,0.5);
       
        
        this.anims.create({
            key: 'unlockCoins',
            frames: this.anims.generateFrameNumbers('loadingIconSpritesheet',  {start: 0, end: 10 }),
            frameRate: 10,
            repeat: -1
        });



        randomButton.on('pointerdown', () => {
            if(totalCoins>=50){
                totalCoins-=50
                localStorage.setItem(localDataTotalCoins, totalCoins);

                exitButton.destroy();

                this.randomUnlockSkin(randomButton, totalCoinsTextBuySkin, totalCoinsTextBuySkinNumber, shareButton);
            }
            else if (totalCoins<50){
                totalCoinsTextBuySkin.destroy();
                totalCoinsTextBuySkin = this.add.text((this.cameras.main.centerX*2)*0.3, (this.cameras.main.centerY*2)*0.1,  "Coins : ",{fill:'#f00', size:200, strokeThickness: 2, stroke: '#f00'}).setScrollFactor(0).setDepth(1).setFontSize(30).setOrigin(0.5,0.5);  
                totalCoinsTextBuySkinNumber = this.add.text((this.cameras.main.centerX*2)*0.283, (this.cameras.main.centerY*2)*0.17,  totalCoins,{fill:'#f00', size:200, strokeThickness: 2, stroke: '#f00'}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);  
            }

        }) 

        exitButton.on('pointerdown', () => {
            this.scene.stop("ShopSkin");
            this.scene.start('Skins');
        }) 
        this.menuBackgroundEscape.on('pointerdown', () => {
            this.scene.stop("ShopSkin");
            this.scene.start('Menu');
        }) 







    }

    shareSkin (text)
    {
        var textTweet = text;
        var shareLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textTweet);
        var checkFenetre = window.open(shareLink, '_blank');
        if (checkFenetre && checkFenetre.focus)
        {
            checkFenetre.focus();
        }
        else if (!checkFenetre)
        {
            window.location.href = shareLink;
        }
    }


    randomUnlockSkin(randomButton, totalCoinsTextBuySkin, totalCoinsTextBuySkinNumber, shareButton){
        randomButton.destroy()


        var skinAfficheRandomUnlockSkin = Phaser.Math.Between(1, 100);
        console.log(skinAfficheRandomUnlockSkin)
           
        if(skinAfficheRandomUnlockSkin <= probaDropSkinGreenNinja && ninjaGreenSkinUnlocked==false){
            if(ninjaGreenSkinUnlocked==false){
                ninjaGreenSkinUnlocked=true
                localStorage.setItem(localDataNinjaGreenSkinUnlocked, ninjaGreenSkinUnlocked);

                var animUnlock = this.physics.add.sprite((this.cameras.main.centerX*2)/2, (this.cameras.main.centerY*2)/2, 'coin').setScale(3);
                animUnlock.anims.play('unlockCoins',true).setFlipX(false);
                totalCoinsTextBuySkin.destroy();
                totalCoinsTextBuySkinNumber.destroy();
                totalCoinsTextBuySkin = this.add.text((this.cameras.main.centerX*2)*0.3, (this.cameras.main.centerY*2)*0.1,  "Coins : ",{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(30).setOrigin(0.5,0.5);  
                totalCoinsTextBuySkinNumber = this.add.text((this.cameras.main.centerX*2)*0.283, (this.cameras.main.centerY*2)*0.17,  totalCoins,{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);               
                


                this.time.addEvent({
                    delay: 1000,
                    callback: ()=>{
                        var skinAfficheRandomUnlockSkinImage = this.add.image((this.cameras.main.centerX*2)*0.6, (this.cameras.main.centerY*2)*0.6, 'ninjaSkinGreen').setScale(0.55).setOrigin(0.5,0.5);

                        totalCoinsTextBuySkin.destroy();
                        totalCoinsTextBuySkinNumber.destroy();
                        totalCoinsTextBuySkin = this.add.text((this.cameras.main.centerX*2)*0.3, (this.cameras.main.centerY*2)*0.1,  "Coins : ",{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(30).setOrigin(0.5,0.5);  
                        totalCoinsTextBuySkinNumber = this.add.text((this.cameras.main.centerX*2)*0.283, (this.cameras.main.centerY*2)*0.17,  totalCoins,{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);               
                        exitButton = this.add.image((this.cameras.main.centerX*2)*0.78,(this.cameras.main.centerY*2)*0.31, 'exitButton').setScale(0.1).setInteractive().setAlpha(1).setOrigin(0.5,0.5);
                        animUnlock.destroy()
                        shareButton.destroy();
                        skinsPossessed +=1
                        localStorage.setItem(localDataSkinsPossessed, skinsPossessed);

                        shareButton = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.6, 'shareButton').setScale(0.3).setInteractive().setOrigin(0.5,0.5);
                        shareButton.on('pointerdown', () => {
                        this.shareSkin("I just unlocked the Green Ninja !");
                        }) 
                        var buySkin = this.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.83, 'randomButton').setScale(0.6).setInteractive().setAlpha(1);
                        buySkin.on('pointerdown', () => {
                            this.scene.start('ShopSkin');
                        }) 
                        exitButton.on('pointerdown', () => {
                            console.log("button1")
                            this.scene.start('Skins');
                        }) 
                    }
                })

            }
        }
        else{
            skinAfficheRandomUnlockSkin = Phaser.Math.Between(1, 100);
            console.log("2ème :" +skinAfficheRandomUnlockSkin)
            if(skinAfficheRandomUnlockSkin <= probaDropSkinRedNinja && ninjaRougeSkinUnlocked==false){            
                if(ninjaRougeSkinUnlocked==false){
                    ninjaRougeSkinUnlocked=true
                    localStorage.setItem(localDataNinjaRougeSkinUnlocked, ninjaRougeSkinUnlocked);


                    var animUnlock = this.physics.add.sprite((this.cameras.main.centerX*2)/2, (this.cameras.main.centerY*2)/2, 'coin').setScale(3);
                    animUnlock.anims.play('unlockCoins',true).setFlipX(false);
                    totalCoinsTextBuySkin.destroy();
                    totalCoinsTextBuySkinNumber.destroy();
                    totalCoinsTextBuySkin = this.add.text((this.cameras.main.centerX*2)*0.3, (this.cameras.main.centerY*2)*0.1,  "Coins : ",{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(30).setOrigin(0.5,0.5);  
                    totalCoinsTextBuySkinNumber = this.add.text((this.cameras.main.centerX*2)*0.283, (this.cameras.main.centerY*2)*0.17,  totalCoins,{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);               
                    

                    this.time.addEvent({
                        delay: 1000,
                        callback: ()=>{
                            var skinAfficheRandomUnlockSkinImage = this.add.image((this.cameras.main.centerX*2)*0.5, (this.cameras.main.centerY*2)*0.6, 'ninjaSkinRouge').setScale(0.55).setOrigin(0.5,0.5);

                            totalCoinsTextBuySkin.destroy();
                            totalCoinsTextBuySkinNumber.destroy();
                            totalCoinsTextBuySkin = this.add.text((this.cameras.main.centerX*2)*0.3, (this.cameras.main.centerY*2)*0.1,  "Coins : ",{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(30).setOrigin(0.5,0.5);  
                            totalCoinsTextBuySkinNumber = this.add.text((this.cameras.main.centerX*2)*0.283, (this.cameras.main.centerY*2)*0.17,  totalCoins,{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);               
                            exitButton = this.add.image((this.cameras.main.centerX*2)*0.78,(this.cameras.main.centerY*2)*0.31, 'exitButton').setScale(0.1).setInteractive().setAlpha(1).setOrigin(0.5,0.5);
                            animUnlock.destroy()
                            shareButton.destroy();
                            skinsPossessed +=1
                            localStorage.setItem(localDataSkinsPossessed, skinsPossessed);

                            shareButton = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.6, 'shareButton').setScale(0.3).setInteractive().setOrigin(0.5,0.5);
                            shareButton.on('pointerdown', () => {
                            this.shareSkin("I just unlocked the Red Ninja !");
                            }) 
                            var buySkin = this.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.83, 'randomButton').setScale(0.6).setInteractive().setAlpha(1);
                            buySkin.on('pointerdown', () => {
                                this.scene.start('ShopSkin');
                            }) 
                            exitButton.on('pointerdown', () => {
                                console.log("button1")
                                this.scene.start('Skins');
                            }) 
                        }
                    })

                }   
            }

            else{
                var animUnlock = this.physics.add.sprite((this.cameras.main.centerX*2)*0.53, (this.cameras.main.centerY*2)*0.75, 'coin').setScale(3);
                animUnlock.anims.play('unlockCoins',true).setFlipX(false);
                totalCoinsTextBuySkin.destroy();
                totalCoinsTextBuySkinNumber.destroy();
                totalCoinsTextBuySkin = this.add.text((this.cameras.main.centerX*2)*0.3, (this.cameras.main.centerY*2)*0.1,  "Coins : ",{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(30).setOrigin(0.5,0.5);  
                totalCoinsTextBuySkinNumber = this.add.text((this.cameras.main.centerX*2)*0.283, (this.cameras.main.centerY*2)*0.17,  totalCoins,{fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);               
                
                totalCoins+=10
                localStorage.setItem(localDataTotalCoins, totalCoins);



                this.time.addEvent({
                    delay: 1000,
                    callback: ()=>{
                        var skinAfficheRandomUnlockSkinImage = this.physics.add.sprite((this.cameras.main.centerX*2)/2, (this.cameras.main.centerY*2)*0.8, 'coin').setScale(2).setOrigin(0.5,0.5);
                        totalCoinsTextBuySkin.destroy();
                        totalCoinsTextBuySkinNumber.destroy();
                        totalCoinsTextBuySkin = this.add.text((this.cameras.main.centerX*2)*0.3, (this.cameras.main.centerY*2)*0.1,  "Coins : ",{fill:'#0f0', size:200, strokeThickness: 2, stroke: '#0f0'}).setScrollFactor(0).setDepth(1).setFontSize(30).setOrigin(0.5,0.5);  
                        totalCoinsTextBuySkinNumber = this.add.text((this.cameras.main.centerX*2)*0.283, (this.cameras.main.centerY*2)*0.17,  totalCoins,{fill:'#0f0', size:200, strokeThickness: 2, stroke: '#0f0'}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);               
                        exitButton = this.add.image((this.cameras.main.centerX*2)*0.78,(this.cameras.main.centerY*2)*0.31, 'exitButton').setScale(0.1).setInteractive().setAlpha(1).setOrigin(0.5,0.5);
                        animUnlock.destroy()
                        var buySkin = this.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.83, 'randomButton').setScale(0.6).setInteractive().setAlpha(1);
                        buySkin.on('pointerdown', () => {
                            this.scene.start('ShopSkin');
                        }) 
                        exitButton.on('pointerdown', () => {
                            console.log("button1")
                            this.scene.start('Skins');
                        }) 
                    }
                })


            }


        }
        this.popupAchievement();




      
    }
    popupAchievement(){
            var popUpAchievementInProgress = false    
            if((skinsPossessed == skinAmount) && popupSkinAchievementShown==false && popUpAchievementInProgress == false){
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
  