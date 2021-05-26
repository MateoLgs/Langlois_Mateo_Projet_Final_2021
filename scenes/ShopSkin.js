
class ShopSkin extends Phaser.Scene {
    constructor (){
        super('ShopSkin');
    }
    preload(){
        this.load.image('randomButton', 'assets/random.png');
        this.load.image('whiteSquare', 'assets/whiteSquare.png');
        this.load.image('coin', 'assets/coin.png');
        this.load.image('shareButton', 'assets/share.png');
    }
    create(){
        var menuBackground = this.add.image(640, 360, 'Menu');
        var menuLevel1Button = this.add.image(400, 600, 'startButton').setScale(1).setInteractive();
        var menuLevel2Button = this.add.image(800, 600, 'tutorialButton').setScale(1).setInteractive();
        var patchNoteButton = this.add.image(30, 30, 'patchNoteButton').setScale(1).setInteractive();
        var skinsButton = this.add.image(700, 30, 'skinsButton').setScale(0.5).setInteractive();
        var menuHardcoreModeOn = this.add.image(1190, 675, 'hard').setScale(0.5).setInteractive().setAlpha(0);
        var menuHardcoreModeOff = this.add.image(1190, 675, 'easy').setScale(0.5).setInteractive();
        var patchNote = this.add.image(640,320, 'patchNote').setAlpha(0);
        var shopButton = this.add.image(1100, 70, 'shopButton').setScale(0.2).setInteractive();

        var screenShopSkinBackground = this.add.image(640, 360, 'whiteSquare').setScale(0.75).setOrigin(0.5,0.5);
        var randomButton = this.add.image(640, 360, 'randomButton').setScale(0.75).setOrigin(0.5,0.5).setInteractive();
        this.add.text(410, 80,  "Buy a Skin",{ fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(75);  
        var totalCoinsTextBuySkin = this.add.text(410, 150,  "Coins : "+ totalCoins,{ fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25);  
        var priceToPaySkin = this.add.text(530, 450,  "Unlock for: "+ priceToPaySkinNumber,{ fill:'#0f0', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25);  
        var exitButton = this.add.image(915,70, 'exitButton').setScale(0.1).setInteractive().setAlpha(1);
        var shareButton = this.add.image(5000,70, 'shareButton').setScale(0.1).setInteractive().setAlpha(1);
       
        randomButton.on('pointerdown', () => {
            if(totalCoins>=50){
            totalCoins-=50

            priceToPaySkin.destroy();
            totalCoinsTextBuySkin.destroy();
            totalCoinsTextBuySkin = this.add.text(410, 150,  "Coins : "+ totalCoins,{ fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25); 
            
            this.randomUnlockSkin(randomButton, totalCoinsTextBuySkin, shareButton);
            }
            else if (totalCoins<50){
                totalCoinsTextBuySkin.destroy();
            totalCoinsTextBuySkin = this.add.text(410, 150,  "Coins : "+ totalCoins,{ fill:'#f00', size:200, strokeThickness: 2, stroke: '#f00'}).setScrollFactor(0).setDepth(1).setFontSize(25); 
            }

        }) 

        exitButton.on('pointerdown', () => {
            this.scene.start('Skins');
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


    randomUnlockSkin(randomButton, totalCoinsTextBuySkin, shareButton){
        randomButton.destroy()

       // while(cooldownRandomUnlockSkinActive==true){
        cooldownRandomUnlockSkin--
      /*  if(cooldownRandomUnlockSkin<=0){
            cooldownRandomUnlockSkin=cooldownRandomUnlockSkinReset
           */
        var skinAfficheRandomUnlockSkin = Phaser.Math.Between(1, 3);
        console.log(skinAfficheRandomUnlockSkin)
           
        if(skinAfficheRandomUnlockSkin==1){
            console.log("1")   
            if(ninjaGreenSkinUnlocked==false){
                
                var skinAfficheRandomUnlockSkinImage = this.add.image(640, 360, 'ninjaSkinGreen').setScale(0.75).setOrigin(0.5,0.5);
                ninjaGreenSkinUnlocked=true
                shareButton.destroy();
                shareButton = this.add.image(660, 600, 'shareButton').setScale(0.3).setInteractive().setOrigin(0.5,0.5);
                shareButton.on('pointerdown', () => {
                    this.shareSkin("I just unlocked the Green Ninja !");
                }) 
            }
            else if(ninjaGreenSkinUnlocked==true){
                var skinAfficheRandomUnlockSkinImage = this.add.image(640, 360, 'coin').setScale(0.33).setOrigin(0.5,0.5);
                totalCoins+=10
                totalCoinsTextBuySkin.destroy();
            totalCoinsTextBuySkin = this.add.text(410, 150,  "Coins : "+ totalCoins,{ fill:'#f00', size:200, strokeThickness: 2, stroke: '#0f0'}).setScrollFactor(0).setDepth(1).setFontSize(25); 
            }
        }
        if(skinAfficheRandomUnlockSkin==2){
            console.log("2")
            
            if(ninjaRougeSkinUnlocked==false){
                var skinAfficheRandomUnlockSkinImage = this.add.image(640, 360, 'ninjaSkinRouge').setScale(0.75).setOrigin(0.5,0.5);
                ninjaRougeSkinUnlocked=true
                shareButton.destroy();
                shareButton = this.add.image(660, 600, 'shareButton').setScale(0.3).setInteractive().setOrigin(0.5,0.5);
                shareButton.on('pointerdown', () => {
                    this.shareSkin("I just unlocked the Red Ninja !");
                }) 
            }            
            else if(ninjaRougeSkinUnlocked==true){
                totalCoins+=10
                var skinAfficheRandomUnlockSkinImage = this.add.image(640, 360, 'coin').setScale(0.33).setOrigin(0.5,0.5);
                totalCoinsTextBuySkin.destroy();
            totalCoinsTextBuySkin = this.add.text(410, 150,  "Coins : "+ totalCoins,{ fill:'#f00', size:200, strokeThickness: 2, stroke: '#0f0'}).setScrollFactor(0).setDepth(1).setFontSize(25); 
            }
        }
        if(skinAfficheRandomUnlockSkin==3){
            
            console.log("3")
            var skinAfficheRandomUnlockSkinImage = this.add.image(640, 360, 'coin').setScale(0.33).setOrigin(0.5,0.5);
            totalCoins+=10
            totalCoinsTextBuySkin.destroy();
            totalCoinsTextBuySkin = this.add.text(410, 150,  "Coins : "+ totalCoins,{ fill:'#f00', size:200, strokeThickness: 2, stroke: '#0f0'}).setScrollFactor(0).setDepth(1).setFontSize(25); 
        }
    /*}

    }*/
}
}
  