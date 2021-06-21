
class Shop extends Phaser.Scene {
    constructor () {
        super('Shop');
    }
    preload(){
    }
    create() {
     /*   this.input.gamepad.once('connected', function (pad) {
            //   'pad' is a reference to the gamepad that was just connected
                paddle = pad;
                padConnected = true;
            });
        mouseCursor = this.physics.add.sprite((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.90, 'mouseCursor').setScale(0.025).setDepth(5).setAlpha(1);
        mouseCursor.setCollideWorldBounds(true)
        mouseCursor.setSize(20, 20, false)
*/
this.menuBackgroundEscape = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(1).setInteractive();;
this.choixLevelStartButton = this.physics.add.image((this.cameras.main.centerX*2)*0.495, (this.cameras.main.centerY*2)*0.51, 'startButton').setScale(0.555).setInteractive().setImmovable(true);
this.skinsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.125, (this.cameras.main.centerY*2)*0.84, 'skinsButton').setScale(1).setInteractive().setImmovable(true).setOrigin(0.5,0.5);    
this.skinsButtonAnim = this.add.sprite((this.cameras.main.centerX*2)*0.125, (this.cameras.main.centerY*2)*0.865, 'skinsButton').setScale(1).setOrigin(0.5,0.5).setAlpha(0);    
this.shopButton = this.physics.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.08, 'shopButton').setScale(0.3).setInteractive().setImmovable(true);
this.achievementsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.85, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);


        var choixSkinScreen = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'choixSkinScreen').setScale(2.1).setAlpha(1).setInteractive();
        var exitButton = this.physics.add.image((this.cameras.main.centerX*2)*0.83,(this.cameras.main.centerY*2)*0.14, 'exitButton').setScale(0.1).setInteractive().setAlpha(1).setImmovable(true);
        var shopPack1 = this.physics.add.image((this.cameras.main.centerX*2)*0.27,(this.cameras.main.centerY*2)*0.32, 'shop1').setScale(0.07).setInteractive().setAlpha(1).setImmovable(true);
        var shopPack2 = this.physics.add.image((this.cameras.main.centerX*2)*0.47,(this.cameras.main.centerY*2)*0.32, 'shop2').setScale(0.07).setInteractive().setAlpha(1).setImmovable(true);
        var shopPack3 = this.physics.add.image((this.cameras.main.centerX*2)*0.67,(this.cameras.main.centerY*2)*0.32, 'shop3').setScale(0.07).setInteractive().setAlpha(1).setImmovable(true);
        var shopPack4 = this.physics.add.image((this.cameras.main.centerX*2)*0.27,(this.cameras.main.centerY*2)*0.70, 'shop4').setScale(0.07).setInteractive().setAlpha(1).setImmovable(true);
        var shopPack5 = this.physics.add.image((this.cameras.main.centerX*2)*0.47,(this.cameras.main.centerY*2)*0.70, 'shop5').setScale(0.07).setInteractive().setAlpha(1).setImmovable(true);
        var shopPack6 = this.physics.add.image((this.cameras.main.centerX*2)*0.67,(this.cameras.main.centerY*2)*0.70, 'shop6').setScale(0.07).setInteractive().setAlpha(1).setImmovable(true);
        var coinsAmountBackground = this.add.image((this.cameras.main.centerX*2)*0.233, (this.cameras.main.centerY*2)*0.14, 'choixSkinScreen').setScale(0.5).setOrigin(0.5,0.5);
        var totalCoinsText = this.add.text((this.cameras.main.centerX*2)*0.25, (this.cameras.main.centerY*2)*0.1,  "Coins : ",{ fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(30).setOrigin(0.5,0.5);  
        this.totalCoinsTextNumber = this.add.text((this.cameras.main.centerX*2)*0.233, (this.cameras.main.centerY*2)*0.17,  totalCoins,{ fill:'#000', size:200}).setScrollFactor(0).setDepth(1).setFontSize(25).setOrigin(0.5,0.5);  
        this.controlsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.1, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);

      /*  this.physics.add.overlap(mouseCursor,exitButton,this.exitShop,null,this)
        this.physics.add.overlap(mouseCursor,shopPack1,this.openShopPack1Gamepad,null,this)
        this.physics.add.overlap(mouseCursor,shopPack2,this.openShopPack2Gamepad,null,this)
        this.physics.add.overlap(mouseCursor,shopPack3,this.openShopPack3Gamepad,null,this)
        this.physics.add.overlap(mouseCursor,shopPack4,this.openShopPack4Gamepad,null,this)
        this.physics.add.overlap(mouseCursor,shopPack5,this.openShopPack5Gamepad,null,this)
        this.physics.add.overlap(mouseCursor,shopPack6,this.openShopPack6Gamepad,null,this)
*/
        
        this.menuBackgroundEscape.on('pointerdown', () => {
            this.scene.stop("Shop");
            this.scene.start('Menu');
        })
        exitButton.on('pointerdown', () => {
            this.scene.stop("Shop");
            this.scene.start('Menu');
        }) 

    
        shopPack1.on('pointerdown', () => {
            this.openShopPack1();
        })
        shopPack2.on('pointerdown', () => {
            this.openShopPack2();
        })
        shopPack3.on('pointerdown', () => {
            this.openShopPack3();
        })
        shopPack4.on('pointerdown', () => {
            this.openShopPack4();
        })
        shopPack5.on('pointerdown', () => {
            this.openShopPack5();
        })
        shopPack6.on('pointerdown', () => {
            this.openShopPack6();
        })

    } 
    update(){
    /*    if (this.input.gamepad.total === 0)
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
  /*  exitShop(){
        if(paddle.A){
            this.scene.stop("Shop");
            this.scene.start('Menu');
        }  
    }*/
    openShopPack1 ()
    {
        var shopPack1Lien = 'https://www.paypal.com/fr/webapps/mpp/home'
        var checkFenetre = window.open(shopPack1Lien, '_blank');
        if (checkFenetre && checkFenetre.focus)
        {
            checkFenetre.focus();
        }
        else if (!checkFenetre)
        {
            window.location.href = shopPack1Lien;
        }
        totalCoins+=100
        localStorage.setItem(localDataTotalCoins, totalCoins);
        this.totalCoinsTextNumber.setText(totalCoins)
    }
   /* openShopPack1Gamepad(){
            if(paddle.A){
                this.openShopPack1()
            }
        
    }*/
    openShopPack2 ()
    {
        var shopPack2Lien = 'https://www.paypal.com/fr/webapps/mpp/home'
        var checkFenetre = window.open(shopPack2Lien, '_blank');
        if (checkFenetre && checkFenetre.focus)
        {
            checkFenetre.focus();
        }
        else if (!checkFenetre)
        {
            window.location.href = shopPack2Lien;
        }
        totalCoins+=500
        localStorage.setItem(localDataTotalCoins, totalCoins);
        this.totalCoinsTextNumber.setText(totalCoins)

    }
   /* openShopPack2Gamepad(){
            if(paddle.A){
                this.openShopPack2()
            }
        
    }*/
    openShopPack3 ()
    {
        var shopPack3Lien = 'https://www.paypal.com/fr/webapps/mpp/home'
        var checkFenetre = window.open(shopPack3Lien, '_blank');
        if (checkFenetre && checkFenetre.focus)
        {
            checkFenetre.focus();
        }
        else if (!checkFenetre)
        {
            window.location.href = shopPack3Lien;
        }
        
        totalCoins+=1000
        localStorage.setItem(localDataTotalCoins, totalCoins);
        this.totalCoinsTextNumber.setText(totalCoins)

    }
 /*   openShopPack3Gamepad(){
            if(paddle.A){
                this.openShopPack3()
            }
        
    }*/
    openShopPack4 ()
    {
        var shopPack4Lien = 'https://www.paypal.com/fr/webapps/mpp/home'
        var checkFenetre = window.open(shopPack4Lien, '_blank');
        if (checkFenetre && checkFenetre.focus)
        {
            checkFenetre.focus();
        }
        else if (!checkFenetre)
        {
            window.location.href = shopPack4Lien;
        }
        
        totalCoins+=3000
        localStorage.setItem(localDataTotalCoins, totalCoins);
        this.totalCoinsTextNumber.setText(totalCoins)

    }
 /*   openShopPack4Gamepad(){
            if(paddle.A){
                this.openShopPack4()
            }
        
    }*/
    openShopPack5 ()
    {
        var shopPack5Lien = 'https://www.paypal.com/fr/webapps/mpp/home'
        var checkFenetre = window.open(shopPack5Lien, '_blank');
        if (checkFenetre && checkFenetre.focus)
        {
            checkFenetre.focus();
        }
        else if (!checkFenetre)
        {
            window.location.href = shopPack5Lien;
        }
        totalCoins+=10000
        localStorage.setItem(localDataTotalCoins, totalCoins);
        this.totalCoinsTextNumber.setText(totalCoins)    
    }
 /*   openShopPack5Gamepad(){
            if(paddle.A){
                this.openShopPack5()
            }
       
    }*/
    openShopPack6 ()
    {
        var shopPack6Lien = 'https://www.paypal.com/fr/webapps/mpp/home'
        var checkFenetre = window.open(shopPack6Lien, '_blank');
        if (checkFenetre && checkFenetre.focus)
        {
            checkFenetre.focus();
        }
        else if (!checkFenetre)
        {
            window.location.href = shopPack6Lien;
        }
        
        totalCoins+=50000
        localStorage.setItem(localDataTotalCoins, totalCoins);
        this.totalCoinsTextNumber.setText(totalCoins)
    }
   /* openShopPack6Gamepad(){
            if(paddle.A){
                this.openShopPack6()
            }
        
    }*/
}
    