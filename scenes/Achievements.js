
class Achievements extends Phaser.Scene {
    constructor () {
        super('Achievements');
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
        this.controlsButton = this.physics.add.image((this.cameras.main.centerX*2)*0.1, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(0.3).setInteractive().setImmovable(true);


        var backgroundScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'backgroundScreen').setScale(2.1).setAlpha(1).setInteractive();
        var exitButton = this.add.image((this.cameras.main.centerX*2)*0.82,(this.cameras.main.centerY*2)*0.17, 'exitButton').setScale(0.1).setInteractive().setAlpha(1);

     //   mouseCursor = this.physics.add.sprite((this.cameras.main.centerX*2)*0.25,(this.cameras.main.centerY*2)/2, 'mouseCursor').setScale(0.025).setDepth(5);




        var achievementsTitle = this.add.text((this.cameras.main.centerX*2)*0.5, (this.cameras.main.centerY*2)*0.2,  "ACHIEVEMENTS",{ fill:'#ffffff', size:200}).setDepth(1).setOrigin(0.5,0.5).setTint(0x000000).setScale(2);      
 
        achievementsCompleted=0


        var achievementsDeath = this.add.text((this.cameras.main.centerX*2)*0.2, (this.cameras.main.centerY*2)*0.3,  "Persistent (Die a total of " + mortsForAchievement + " times)",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        if(morts  < mortsForAchievement){
            var achievementsDeathStat = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.3,  morts + " / " + mortsForAchievement,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        }
        else if(morts > mortsForAchievement-1){
            achievementsCompleted+=1;
            localStorage.setItem(localDataAchievementsCompleted, achievementsCompleted);
            var achievementsDeathStat = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.3,  morts + " / " + mortsForAchievement,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x00ff00);       
        }
       
        var achievementsSkins = this.add.text((this.cameras.main.centerX*2)*0.2, (this.cameras.main.centerY*2)*0.35,  "Collector (Possess all skins)",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        if(skinsPossessed !== skinAmount){
            var achievementsSkinsStats = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.35,  skinsPossessed + " / " + skinAmount,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        }
        else if(skinsPossessed == skinAmount){
            achievementsCompleted+=1;
            localStorage.setItem(localDataAchievementsCompleted, achievementsCompleted);
            var achievementsSkinsStats = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.35,  skinsPossessed + " / " + skinAmount,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x00ff00);       
        }
        
        var achievementsCoins= this.add.text((this.cameras.main.centerX*2)*0.2, (this.cameras.main.centerY*2)*0.4,  "Rich (Collect a total of " + totalCoinsAchievement +" coins)",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        if(totalCoins < totalCoinsAchievement){
            var achievementsCoinsyStat = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.4,  totalCoins + " / " + totalCoinsAchievement ,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        }
        else if(totalCoins > totalCoinsAchievement-1){
            achievementsCompleted+=1;
            localStorage.setItem(localDataAchievementsCompleted, achievementsCompleted);
            var achievementsCoinsStat = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.4,  totalCoinsAchievement + " / " + totalCoinsAchievement ,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x00ff00);       
        }

        var achievementShootingShurikens = this.add.text((this.cameras.main.centerX*2)*0.2, (this.cameras.main.centerY*2)*0.45,  "Serial Shooter (Shoot a total of " + shotsDoneForAchievement + " times)",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        if(shotsDone < shotsDoneForAchievement){
            var achievementsEasterEggClicksSkinsStats = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.45,  shotsDone + " / " + shotsDoneForAchievement,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        }
        else if(shotsDone > shotsDoneForAchievement-1){
            achievementsCompleted+=1;
            localStorage.setItem(localDataAchievementsCompleted, achievementsCompleted);
            var achievementsEasterEggClicksSkinsStats = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.45,  shotsDoneForAchievement + " / " + shotsDoneForAchievement,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x00ff00);       
        }

        if(clicksDoneForEasterEggAchievement < clicksForEasterEggAchievement){
            var achievementsEasterEggClicksSkins = this.add.text((this.cameras.main.centerX*2)*0.2, (this.cameras.main.centerY*2)*0.5,  "Easter Egg n°1 ",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
            var achievementsEasterEggClicksSkinsStats = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.5,  "Hidden",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        }
        else if(clicksDoneForEasterEggAchievement > clicksForEasterEggAchievement-1){
            var achievementsEasterEggClicksSkins = this.add.text((this.cameras.main.centerX*2)*0.2, (this.cameras.main.centerY*2)*0.5,  "Easter egg n°1 (Visit skin tab "+ clicksForEasterEggAchievement+" times)",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
            achievementsCompleted+=1;
            localStorage.setItem(localDataAchievementsCompleted, achievementsCompleted);
            var achievementsEasterEggClicksSkinsStats = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.5,  "Commpleted !",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x00ff00);       
        }

        var achievementAllAchievementsCompleted = this.add.text((this.cameras.main.centerX*2)*0.2, (this.cameras.main.centerY*2)*0.55,  "TryHard (Complete all achievements)",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        if(achievementsCompleted < achievementsAmount-1){
            var achievementsEasterEggClicksSkinsStats = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.55,  achievementsCompleted + " / " + (achievementsAmount-1),{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        }
        else if(achievementsCompleted > achievementsAmount-2){
            var achievementsEasterEggClicksSkinsStats = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.55,  (achievementsAmount-1)  + " / " + (achievementsAmount-1),{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x00ff00);       
        }

        

        exitButton.on('pointerdown', () => {
            this.scene.stop("Achievements");
            this.scene.start('Menu');
        }) 
        
        this.menuBackgroundEscape.on('pointerdown', () => {
            this.scene.stop("Achievements");
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
    