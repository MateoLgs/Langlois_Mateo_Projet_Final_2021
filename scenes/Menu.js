    
class Menu extends Phaser.Scene {

    constructor () {
        super('Menu');
    }
        preload(){
              this.load.image('Menu', 'assets/menuScreen.png');
              this.load.image('startButton', 'assets/startButton.png');
              this.load.image('tutorialButton', 'assets/tutorialButton.png');
              this.load.image('skinsButton', 'assets/skinsButton.png');
              this.load.image('shopButton', 'assets/shopButton.png');
              this.load.image('patchNoteButton', 'assets/patchNoteButton.png');
              this.load.image('easy', 'assets/easy.png');
              this.load.image('hard', 'assets/hard.png');
              this.load.image('patchNote', 'assets/patchNote.png');
              this.load.image('exitButton', 'assets/exitButton.png');
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
        var exitButtonPatchNote = this.add.image(900,50, 'exitButton').setScale(0.1).setInteractive().setAlpha(0);

    menuHardcoreModeOff.on('pointerdown', () => {
      menuHardcoreModeOn.setAlpha(1)
      menuHardcoreModeOff.setAlpha(0)
      hardcoreMode="on";
        })  
         
    menuHardcoreModeOn.on('pointerdown', () => {
      menuHardcoreModeOff.setAlpha(1)
      menuHardcoreModeOn.setAlpha(0)
      hardcoreMode="off";
        })   
        
    menuLevel1Button.on('pointerdown', () => {
      this.choixMenulevel1Button();
        }) 
        
    menuLevel2Button.on('pointerdown', () => {
      this.choixMenulevel2Button();
        }) 
   
    skinsButton.on('pointerdown', () => {
        this.scene.start('Skins');
    }) 

    shopButton.on('pointerdown', () => {
      this.scene.start('Shop');
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

    choixMenulevel1Button(){
              level="level1"
      this.scene.start('Jeu');
    }

    choixMenulevel2Button(){
        level="tutoriel"
      this.scene.start('Jeu');
    }
     
}
