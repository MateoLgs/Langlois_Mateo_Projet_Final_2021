
class Controls extends Phaser.Scene {
    constructor () {
        super('Controls');
    }
    preload(){
    }
    create(){
        this.menuBackgroundEscape = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(1).setAlpha(1).setInteractive();
        this.choixLevelStartButton = this.physics.add.image((this.cameras.main.centerX*2)*0.495, (this.cameras.main.centerY*2)*0.51, 'startButton').setScale(0.555).setInteractive().setImmovable(true);
        this.skinsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.125, (this.cameras.main.centerY*2)*0.84, 'skinsButton').setScale(1).setInteractive().setImmovable(true).setOrigin(0.5,0.5);    
        this.skinsButtonAnim = this.add.sprite((this.cameras.main.centerX*2)*0.125, (this.cameras.main.centerY*2)*0.865, 'skinsButton').setScale(1).setOrigin(0.5,0.5).setAlpha(0);    
        this.shopButton = this.physics.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.08, 'shopButton').setScale(0.3).setInteractive().setImmovable(true);
        this.achievementsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.85, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);
      

        var backgroundScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'screenControls').setScale(1).setAlpha(1).setInteractive();
        var exitButton = this.add.image((this.cameras.main.centerX*2)*0.97,(this.cameras.main.centerY*2)*0.05, 'exitButtonGrey').setScale(0.1).setInteractive().setAlpha(1);

     //   mouseCursor = this.physics.add.sprite((this.cameras.main.centerX*2)*0.25,(this.cameras.main.centerY*2)/2, 'mouseCursor').setScale(0.025).setDepth(5);



        exitButton.on('pointerdown', () => {
            this.scene.stop("Controls");
            this.scene.start('Menu');
        }) 
        
        this.menuBackgroundEscape.on('pointerdown', () => {
            this.scene.stop("Controls");
            this.scene.start('Menu');
        })
    } 
    update(){
   /*     if(padConnected){

            if(paddle.left){
                mouseCursor.setVelocityX(-750)
            }
            else if(paddle.right){
                mouseCursor.setVelocityX(750)
            }
            else if(paddle.up){
                mouseCursor.setVelocityY(-750)
            }
            else if(paddle.down){
                mouseCursor.setVelocityY(750)
            }
            else{
                mouseCursor.setVelocity(0)
            }


        }*/
    }

    
}
    