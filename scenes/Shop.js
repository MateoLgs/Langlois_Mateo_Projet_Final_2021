
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
        this.load.image('hard', 'assets/hard.png');
        this.load.image('choixSkinScreen', 'assets/choixSkinScreen.jpg');
    
        this.load.image('choixSkinScreen', 'assets/choixSkinScreen.jpg');
        this.load.image('blackSquare', 'assets/blackSquare.png');
        this.load.image('exitButton', 'assets/exitButton.png');
        this.load.image('ninjaSkinRouge', 'assets/playerNinjaRedIdle1.png');
        this.load.image('ninjaSkin', 'assets/playerNinjaIdle1.png');
        this.load.image('ninjaSkinGreen', 'assets/playerNinjaGreenIdle1.png');
    }
    create() {
        var menuBackground = this.add.image(640, 360, 'Menu');
        var menuLevel1Button = this.add.image(400, 600, 'startButton').setScale(1).setInteractive();
        var menuLevel2Button = this.add.image(800, 600, 'tutorialButton').setScale(1).setInteractive();
        var patchNoteButton = this.add.image(30, 30, 'patchNoteButton').setScale(1).setInteractive();
        var skinsButton = this.add.image(700, 30, 'skinsButton').setScale(0.5).setInteractive();
        var shopButton = this.add.image(1100, 70, 'shopButton').setScale(0.2).setInteractive();
        var menuHardcoreModeOn = this.add.image(1190, 675, 'hard').setScale(0.5).setInteractive().setAlpha(0);
        var menuHardcoreModeOff = this.add.image(1190, 675, 'easy').setScale(0.5).setInteractive();
        var patchNote = this.add.image(640,320, 'patchNote').setAlpha(0);
        var choixSkinScreen = this.add.image(640,360, 'choixSkinScreen').setScale(3).setAlpha(1);
        var exitButton = this.add.image(1050,140, 'exitButton').setScale(0.1).setInteractive().setAlpha(1);
        var shopPack1 = this.add.image(350,230, 'blackSquare').setScale(0.1).setInteractive().setAlpha(1);
        var shopPack2 = this.add.image(600,230, 'blackSquare').setScale(0.1).setInteractive().setAlpha(1);
        var shopPack3 = this.add.image(850,230, 'blackSquare').setScale(0.1).setInteractive().setAlpha(1);
        var shopPack4 = this.add.image(350,500, 'blackSquare').setScale(0.1).setInteractive().setAlpha(1);
        var shopPack5 = this.add.image(600,500, 'blackSquare').setScale(0.1).setInteractive().setAlpha(1);
        var shopPack6 = this.add.image(850,500, 'blackSquare').setScale(0.1).setInteractive().setAlpha(1);
        
        
        
        exitButton.on('pointerdown', () => {
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
    