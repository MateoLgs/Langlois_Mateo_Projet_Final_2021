
class Shop extends Phaser.Scene {
    constructor () {
        super('Shop');
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
    
        this.load.image('blackSquare', 'assets/blackSquare.png');
        this.load.image('exitButton', 'assets/exitButton.png');
        this.load.image('ninjaSkinRouge', 'assets/playerNinjaRedIdle1.png');
        this.load.image('ninjaSkin', 'assets/playerNinjaIdle1.png');
        this.load.image('ninjaSkinGreen', 'assets/playerNinjaGreenIdle1.png');
    }
    create() {



        var menuBackground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(0.7);
        var menuLevel1Button = this.add.image((this.cameras.main.centerX*2)*0.3125, (this.cameras.main.centerY*2)*0.833, 'startButton').setScale(0.7).setInteractive();
        var menuLevel2Button = this.add.image((this.cameras.main.centerX*2)*0.625, (this.cameras.main.centerY*2)*0.833, 'tutorialButton').setScale(0.7).setInteractive();
        var patchNoteButton = this.add.image((this.cameras.main.centerX*2)*0.0234, (this.cameras.main.centerY*2)*0.06, 'patchNoteButton').setScale(0.7).setInteractive();
        var skinsButton = this.add.image((this.cameras.main.centerX*2)*0.1, (this.cameras.main.centerY*2)*0.9, 'skinsButton').setScale(0.5).setInteractive();     
        var shopButton = this.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.08, 'shopButton').setScale(0.14).setInteractive();
        var achievementsButton = this.add.image((this.cameras.main.centerX*2)*0.85, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(1.4).setInteractive();
        var menuBackgroundEscape = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(0.7).setInteractive();

        var choixSkinScreen = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'choixSkinScreen').setScale(2.1).setAlpha(1).setInteractive();
        var exitButton = this.add.image((this.cameras.main.centerX*2)*0.83,(this.cameras.main.centerY*2)*0.14, 'exitButton').setScale(0.1).setInteractive().setAlpha(1);
        var shopPack1 = this.add.image((this.cameras.main.centerX*2)*0.27,(this.cameras.main.centerY*2)*0.32, 'blackSquare').setScale(0.07).setInteractive().setAlpha(1);
        var shopPack2 = this.add.image((this.cameras.main.centerX*2)*0.47,(this.cameras.main.centerY*2)*0.32, 'blackSquare').setScale(0.07).setInteractive().setAlpha(1);
        var shopPack3 = this.add.image((this.cameras.main.centerX*2)*0.67,(this.cameras.main.centerY*2)*0.32, 'blackSquare').setScale(0.07).setInteractive().setAlpha(1);
        var shopPack4 = this.add.image((this.cameras.main.centerX*2)*0.27,(this.cameras.main.centerY*2)*0.70, 'blackSquare').setScale(0.07).setInteractive().setAlpha(1);
        var shopPack5 = this.add.image((this.cameras.main.centerX*2)*0.47,(this.cameras.main.centerY*2)*0.70, 'blackSquare').setScale(0.07).setInteractive().setAlpha(1);
        var shopPack6 = this.add.image((this.cameras.main.centerX*2)*0.67,(this.cameras.main.centerY*2)*0.70, 'blackSquare').setScale(0.07).setInteractive().setAlpha(1);
        
        
        menuBackgroundEscape.on('pointerdown', () => {
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
    }

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
            window.location.href = shopPack1Lien;
        }
    }

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
            window.location.href = shopPack1Lien;
        }
    }
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
            window.location.href = shopPack1Lien;
        }
    }
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
            window.location.href = shopPack1Lien;
        }
    }
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
            window.location.href = shopPack1Lien;
        }
    }
}
    