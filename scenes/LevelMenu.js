    
class LevelMenu extends Phaser.Scene {

    constructor () {
        super('LevelMenu');
    }
    init(data){
        this.data = data
    }
        preload(){
        }
    create() {
        level1Unlocked = true;
        var menuBackground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'MenuScreenLevelChoix').setScale(1);
        var backButton = this.add.image((this.cameras.main.centerX*2)*0.04,(this.cameras.main.centerY*2)*0.075, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5);

        if(pageLevelMenu==1){
            var nextPageButton = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.9, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5).setRotation(4.7);

            if(level1Unlocked == true){
                var menuLevel1Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'levelButton_1').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level1Unlocked == false){
                var menuLevel1Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'levelButton_1').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level2Unlocked == true){
                var menuLevel2Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'levelButton_2').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level2Unlocked == false){
                var menuLevel2Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'levelButton_2').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level3Unlocked == true){
                var menuLevel3Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'levelButton_3').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level3Unlocked == false){
                var menuLevel3Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'levelButton_3').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level4Unlocked == true){
                var menuLevel4Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'levelButton_4').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level4Unlocked == false){
                var menuLevel4Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'levelButton_4').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level5Unlocked == true){
                var menuLevel5Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'levelButton_5').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level5Unlocked == false){
                var menuLevel5Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'levelButton_5').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 
            if(level6Unlocked == true){
                var menuLevel6Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'levelButton_6').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
            }
            else if(level6Unlocked == false){
                var menuLevel6Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'levelButton_6').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
            } 

        nextPageButton.on('pointerdown', () => {
            pageLevelMenu+=1;
            this.scene.restart();
        })    
        menuLevel1Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level1");
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
            this.choixMenuLevelButton("level5");
            }) 
        menuLevel6Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level6");
        }) 
    }

    if(pageLevelMenu==2){
        var nextPageButton = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.9, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5).setRotation(4.7);
        var previousPageButton = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.1, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5).setRotation(1.6);
        if(level7Unlocked == true){
            var menuLevel7Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'levelButton_7').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level7Unlocked == false){
            var menuLevel7Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'levelButton_7').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level8Unlocked == true){
            var menuLevel8Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'levelButton_8').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level8Unlocked == false){
            var menuLevel8Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'levelButton_8').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level9Unlocked == true){
            var menuLevel9Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'levelButton_9').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level9Unlocked == false){
            var menuLevel9Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'levelButton_9').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level10Unlocked == true){
            var menuLevel10Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'levelButton_10').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level10Unlocked == false){
            var menuLevel10Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'levelButton_10').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level11Unlocked == true){
            var menuLevel11Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'levelButton_11').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level11Unlocked == false){
            var menuLevel11Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'levelButton_11').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level12Unlocked == true){
            var menuLevel12Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'levelButton_12').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level12Unlocked == false){
            var menuLevel12Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'levelButton_12').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
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
            this.choixMenuLevelButton("level7");
        })      
        menuLevel8Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level8");
        }) 
        menuLevel9Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level9");
            })    
        menuLevel10Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level10");
        }) 
        menuLevel11Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level11");
            }) 
        menuLevel12Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level12");
        }) 
    }
    if(pageLevelMenu==3){
        var previousPageButton = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)*0.1, 'backButton').setAlpha(1).setScale(0.3).setInteractive().setOrigin(0.5,0.5).setRotation(1.6);
        if(level13Unlocked == true){
            var menuLevel13Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'levelButton_13').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level13Unlocked == false){
            var menuLevel13Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.3, 'levelButton_13').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level14Unlocked == true){
            var menuLevel14Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'levelButton_14').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level14Unlocked == false){
            var menuLevel14Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.3, 'levelButton_14').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level15Unlocked == true){
            var menuLevel15Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'levelButton_15').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level15Unlocked == false){
            var menuLevel15Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.5, 'levelButton_15').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level16Unlocked == true){
            var menuLevel16Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'levelButton_16').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level16Unlocked == false){
            var menuLevel16Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.5, 'levelButton_16').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level17Unlocked == true){
            var menuLevel17Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'levelButton_17').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level17Unlocked == false){
            var menuLevel17Button = this.add.image((this.cameras.main.centerX*2)*0.35, (this.cameras.main.centerY*2)*0.7, 'levelButton_17').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        if(level18Unlocked == true){
            var menuLevel18Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'levelButton_18').setScale(0.7).setInteractive().setOrigin(0.5,0.5);
        }
        else if(level18Unlocked == false){
            var menuLevel18Button = this.add.image((this.cameras.main.centerX*2)*0.65, (this.cameras.main.centerY*2)*0.7, 'levelButton_18').setScale(0.7).setOrigin(0.5,0.5).setTint(0x222222);
        } 
        previousPageButton.on('pointerdown', () => {
            pageLevelMenu-=1;
            this.scene.restart();
        })    
        menuLevel13Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level13");
        })      
        menuLevel14Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level14");
        }) 
        menuLevel15Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level15");
            })    
        menuLevel16Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level16");
        }) 
        menuLevel17Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level17");
            }) 
        menuLevel18Button.on('pointerdown', () => {
            this.choixMenuLevelButton("level18");
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
      this.scene.start('Jeu', this.data);
    }


    

    destroyPopup(element){
          
        this.tweens.add({
            targets: element,
            alpha: 0,
            duration: 1000,
        });



    }


     
}
