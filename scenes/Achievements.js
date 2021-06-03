
class Achievements extends Phaser.Scene {
    constructor () {
        super('Achievements');
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
        this.load.image('backgroundScreen', 'assets/choixSkinScreen.jpg');
    }
    create(){
        var menuBackground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(0.7);
        var menuLevel1Button = this.add.image((this.cameras.main.centerX*2)*0.3125, (this.cameras.main.centerY*2)*0.833, 'startButton').setScale(0.7).setInteractive();
        var menuLevel2Button = this.add.image((this.cameras.main.centerX*2)*0.625, (this.cameras.main.centerY*2)*0.833, 'tutorialButton').setScale(0.7).setInteractive();
        var patchNoteButton = this.add.image((this.cameras.main.centerX*2)*0.0234, (this.cameras.main.centerY*2)*0.06, 'patchNoteButton').setScale(0.7).setInteractive();
        var skinsButton = this.add.image((this.cameras.main.centerX*2)*0.1, (this.cameras.main.centerY*2)*0.9, 'skinsButton').setScale(0.5).setInteractive();     
        var shopButton = this.add.image((this.cameras.main.centerX*2)*0.75, (this.cameras.main.centerY*2)*0.08, 'shopButton').setScale(0.14).setInteractive();
        var achievementsButton = this.add.image((this.cameras.main.centerX*2)*0.85, (this.cameras.main.centerY*2)*0.08, 'achievementsButton').setScale(1.4).setInteractive();
        var patchNote = this.add.image((this.cameras.main.centerX),(this.cameras.main.centerY), 'patchNote').setAlpha(0).setScale(0.7);
        var menuBackgroundEscape = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Menu').setScale(0.7).setAlpha(1).setInteractive();

        var backgroundScreen = this.add.image((this.cameras.main.centerX*2)/2,(this.cameras.main.centerY*2)/2, 'backgroundScreen').setScale(2.1).setAlpha(1).setInteractive();
        var exitButton = this.add.image((this.cameras.main.centerX*2)*0.82,(this.cameras.main.centerY*2)*0.17, 'exitButton').setScale(0.1).setInteractive().setAlpha(1);

        var achievementsTitle = this.add.text((this.cameras.main.centerX*2)*0.5, (this.cameras.main.centerY*2)*0.2,  "ACHIEVEMENTS",{ fill:'#ffffff', size:200}).setDepth(1).setOrigin(0.5,0.5).setTint(0x000000).setScale(2);      
 
        achievementsCompleted=0


        var achievementsDeath = this.add.text((this.cameras.main.centerX*2)*0.2, (this.cameras.main.centerY*2)*0.3,  "Persistent (Die a total of " + mortsForAchievement + " times)",{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        if(morts  < mortsForAchievement){
            var achievementsDeathStat = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.3,  morts + " / " + mortsForAchievement,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x000000);       
        }
        else if(morts > mortsForAchievement-1){

            achievementsCompleted+=1;
            localStorage.setItem(localDataAchievementsCompleted, achievementsCompleted);
            var achievementsDeathStat = this.add.text((this.cameras.main.centerX*2)*0.7, (this.cameras.main.centerY*2)*0.3,  mortsForAchievement + " / " + mortsForAchievement,{ fill:'#ffffff', size:200}).setDepth(1).setTint(0x00ff00);       
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
        
        menuBackgroundEscape.on('pointerdown', () => {
            this.scene.stop("Achievements");
            this.scene.start('Menu');
        })
    } 


    
}
    