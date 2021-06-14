    
class LevelMenu extends Phaser.Scene {

    constructor () {
        super('LevelMenu');
    }
        preload(){     
            
            this.load.image('backButton', 'assets/backButton.png');    
        }
    create() {
        level1Unlocked = true;

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
            this.choixMenuLevelButton("level4");
        })      
        menuLevel2Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level2");
        }) 
        menuLevel3Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level3");
            })    
        menuLevel4Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level4");
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
            this.choixMenuLevelButton("level1");
        })      
        menuLevel8Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
        menuLevel9Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
            })    
        menuLevel10Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
        menuLevel11Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
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
            this.choixMenuLevelButton("level1");
        })      
        menuLevel14Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
        menuLevel15Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
            })    
        menuLevel16Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
        menuLevel17Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
            }) 
        menuLevel18Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
        }) 
    }

    backButton.on('pointerdown', () => {
        this.scene.stop("LevelMenu");
        this.scene.start('Menu');
    }) 
}
    choixMenuLevelButton(varLevel){
              level=varLevel
             // this.scene.stop("LevelMenu");
      this.scene.start('Jeu');
    }


    

    destroyPopup(element){
          
        this.tweens.add({
            targets: element,
            alpha: 0,
            duration: 1000,
        });



    }


     
}
