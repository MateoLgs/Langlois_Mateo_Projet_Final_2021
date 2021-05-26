
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
        this.load.image('hard', 'assets/hard.png');
        this.load.image('choixSkinScreen', 'assets/choixSkinScreen.jpg');
    
        this.load.image('choixSkinScreen', 'assets/choixSkinScreen.jpg');
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
        var menuHardcoreModeOn = this.add.image(1190, 675, 'hard').setScale(0.5).setInteractive().setAlpha(0);
        var menuHardcoreModeOff = this.add.image(1190, 675, 'easy').setScale(0.5).setInteractive();
        var patchNote = this.add.image(640,320, 'patchNote').setAlpha(0);
        var shopButton = this.add.image(1100, 70, 'shopButton').setScale(0.2).setInteractive();
        var choixSkinScreen = this.add.image(640,360, 'choixSkinScreen').setScale(3).setAlpha(1);
        var buySkin = this.add.image(1030,550, 'buySkin').setScale(0.20).setInteractive().setAlpha(1);
        var exitButton = this.add.image(1050,140, 'exitButton').setScale(0.1).setInteractive().setAlpha(1);
        
        if(ninjaRougeSkinUnlocked==true){
            var ninjaRougeSkin = this.add.image(300,250, 'ninjaSkinRouge').setScale(0.4).setInteractive().setAlpha(1);
        }
        else {
            var ninjaRougeSkin = this.add.image(300,250, 'ninjaSkinRouge').setScale(0.4).setInteractive().setAlpha(1).setTint(0x000000);
            this.add.text(285, 240,  "LOCKED",{ fill:'#ffffff', size:200}).setScrollFactor(0).setDepth(1).setTint(0xffffff);       
        }
        if(ninjaGreenSkinUnlocked==true){
            var ninjaGreenSkin = this.add.image(700,250, 'ninjaSkinGreen').setScale(0.4).setInteractive().setAlpha(1);
        }
        else {
            var ninjaGreenSkin = this.add.image(700,250, 'ninjaSkinGreen').setScale(0.4).setInteractive().setAlpha(1).setTint(0x000000);
            this.add.text(685,240,  "LOCKED",{ fill:'#ffffff', size:200}).setScrollFactor(0).setDepth(1).setTint(0xffffff);       
        }
        if(ninjaSkinUnlocked==true){
            var ninjaSkin = this.add.image(500,250, 'ninjaSkin').setScale(0.4).setInteractive().setAlpha(1);
        }
        else {
            var ninjaSkin = this.add.image(500,250, 'ninjaSkin').setScale(0.4).setInteractive().setAlpha(1).setTint(0x000000);
            this.add.text(485,240,  "LOCKED",{ fill:'#ffffff', size:200}).setScrollFactor(0).setDepth(1).setTint(0xffffff);       
        }








    exitButton.on('pointerdown', () => {
        this.scene.start('Menu');
        }) 
    
    buySkin.on('pointerdown', () => {
        this.scene.start('ShopSkin');
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
    }
    