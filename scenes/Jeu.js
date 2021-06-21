class Jeu extends Phaser.Scene {
    constructor() {
        super('Jeu');
    }

    uncrouchDisabled() {
        uncrouchPossible = false;
        console.log("caisse")
    }

/////////////////BOSS///////////////
    tirSoldatBoss(boss) {
        for (const boss of this.bosses.children.entries) {
            if (Math.abs(boss.x - player.x) < this.cameras.main.centerX*2) {

                var ballesSoldatBoss = this.ballesSoldats.create(boss.x, boss.y, 'snowball').setFlipX(true).setScale(1);
                var randomBallesMachineGunners = Phaser.Math.Between(-50, 50);
                this.physics.moveTo(ballesSoldatBoss, player.x + randomBallesMachineGunners, player.y + randomBallesMachineGunners, vitesseBalleSoldatEnnemi);

                ballesSoldatBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);
                this.physics.add.overlap(player, ballesSoldatBoss, this.degatBalleSoldat, null, this)
                ballesSoldatBoss.body.setAllowGravity(false);
                if (player.x < boss.x) {
                    boss.play('soldierShoot', true).setFlipX(false);
                    // ballesSoldatBoss.setGravityY(1000);
                } else if (player.x > boss.x) {
                    boss.play('soldierShoot', true).setFlipX(true);
                }
                this.data.sound.soldierShot.play()
            }
        }
    }

    tirSniperBoss(boss) {
        for (const boss of this.bosses.children.entries) {
            if (Math.abs(boss.x - player.x) < this.cameras.main.centerX*2) {

                var ballesSniperBoss = this.ballesSnipers.create(boss.x, boss.y, 'heavyBullet').setFlipX(true).setScale(1);
                var randomBallesMachineGunners = Phaser.Math.Between(-50, 50);
                this.physics.moveTo(ballesSniperBoss, player.x + randomBallesMachineGunners, player.y + randomBallesMachineGunners, vitesseBalleSniperEnnemi);
                ballesSniperBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);
                this.physics.add.overlap(player, ballesSniperBoss, this.degatBalleSniper, null, this)
                ballesSniperBoss.body.setAllowGravity(false);
                if (player.x < boss.x) {
                    boss.play('sniperShoot', true).setFlipX(false);
                    // ballesSniperBoss.setGravityY(1000);
                } else if (player.x > boss.x) {
                    boss.play('sniperShoot', true).setFlipX(true);
                }
                this.data.sound.sniperShot.play()
            }
        }
    }

    tirMachineGunnerBoss(boss) {
        for (const boss of this.bosses.children.entries) {
            if (Math.abs(boss.x - player.x) < this.cameras.main.centerX*2) {

                var ballesMachineGunnerBoss = this.ballesMachineGunners.create(boss.x, boss.y, 'smallBullet').setFlipX(true).setScale(1);
                var randomBallesMachineGunners = Phaser.Math.Between(-150, 150);
                this.physics.moveTo(ballesMachineGunnerBoss, player.x + randomBallesMachineGunners, player.y + randomBallesMachineGunners, vitesseBalleMachineGunnerEnnemi);
                var angleBalle = (Math.atan2(player.y - boss.y, player.x - boss.x) * 180 / Math.PI);
                ballesMachineGunnerBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);
                this.physics.add.overlap(player, ballesMachineGunnerBoss, this.degatBalleMachineGunner, null, this)

                ballesMachineGunnerBoss.body.setAllowGravity(false);
                if (player.x < boss.x) {
                    boss.play('machineGunnerShoot', true).setFlipX(false);
                    //ballesMachineGunnerBoss.setGravityY(1000);
                } else if (player.x > boss.x) {
                    boss.play('machineGunnerShoot', true).setFlipX(true);
                }
                this.data.sound.soldierShot.play()
            }
        }
    }

    tirLanceGrenadeBoss() {
        for (const boss of this.bosses.children.entries) {
            if (Math.abs(boss.x - player.x) < this.cameras.main.centerX*2) {

                var grenadeLanceGrenadeBoss = this.grenadesLanceGrenade.create(boss.x, boss.y, 'grenade').setFlipX(true).setScale(1);
                var randomBallesLanceGrenades = Phaser.Math.Between(-250, 250);
                this.physics.moveTo(grenadeLanceGrenadeBoss, player.x + randomBallesLanceGrenades, player.y - 1000 + randomBallesLanceGrenades, vitesseGrenadeLanceGrenadeEnnemi);
                var angleBalle = (Math.atan2(player.y - boss.y, player.x - boss.x) * 180 / Math.PI);
                this.physics.add.collider(grenadeLanceGrenadeBoss, this.platform);
                this.physics.add.collider(grenadeLanceGrenadeBoss, this.caisses);

                grenadeLanceGrenadeBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);
                grenadeLanceGrenadeBoss.body.setGravityY(700)
                grenadeLanceGrenadeBoss.body.setBounce(0.5)
                this.time.delayedCall(3000, this.explodeGrenadeLanceGrenade, [grenadeLanceGrenadeBoss], this);
                if (player.x < boss.x) {
                    boss.play('launcherShoot', true).setFlipX(false);
                    grenadeLanceGrenadeBoss.setGravityY(1000);
                } else if (player.x > boss.x) {
                    boss.play('launcherShoot', true).setFlipX(true);
                }
                this.data.sound.grenadeShot.play()

            }
        }
    }

    tirLanceRoquetteBoss() {

        for (const boss of this.bosses.children.entries) {
            if (Math.abs(boss.x - player.x) < this.cameras.main.centerX*2) {

                var roquetteLanceRoquetteBoss = this.roquettesLanceRoquettes.create(boss.x, boss.y, 'roquette').setFlipX(false).setScale(1);
                this.physics.moveTo(roquetteLanceRoquetteBoss, player.x, player.y, vitesseRoquetteLanceRoquetteEnnemi);
                var angleBalle = (Math.atan2(player.y - boss.y, player.x - boss.x) * 180 / Math.PI);

                roquetteLanceRoquetteBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, boss);


                this.physics.add.collider(roquetteLanceRoquetteBoss, this.platform, this.explodeRoquetteLanceRoquette, null, this);
                this.physics.add.collider(roquetteLanceRoquetteBoss, player, this.explodeRoquetteLanceRoquette, null, this);
                this.physics.add.collider(roquetteLanceRoquetteBoss, this.caisses, this.explodeRoquetteLanceRoquette, null, this);


                if (player.x < boss.x) {

                    boss.play('launcherShoot', true).setFlipX(false);
                } else if (player.x > boss.x) {

                    boss.play('launcherShoot', true).setFlipX(true);

                }
                this.data.sound.roquetteShot.play()
            }
        }
    }

    tirDrones() {
        for (const drone of this.drones.children.entries) {
            if (Math.abs(drone.x - player.x) < this.cameras.main.centerX*0.5) {

                var ballesMachineGunnerBoss = this.ballesMachineGunners.create(drone.x, drone.y+10, 'smallBullet').setFlipX(true).setScale(1);
                var randomBallesMachineGunners = Phaser.Math.Between(-150, 150);
                this.physics.moveTo(ballesMachineGunnerBoss, player.x + randomBallesMachineGunners, player.y + randomBallesMachineGunners, vitesseBalleDrone);
                var angleBalle = (Math.atan2(player.y - drone.y, player.x - drone.x) * 180 / Math.PI);
                ballesMachineGunnerBoss.rotation = Phaser.Math.Angle.BetweenPoints(player, drone);
                this.physics.add.overlap(player, ballesMachineGunnerBoss, this.degatBalleMachineGunner, null, this)

                ballesMachineGunnerBoss.body.setAllowGravity(false);
             
                this.data.sound.soldierShot.play()
            }
        }

    }

    damageBoss(boss, shuriken) {
        shuriken.destroy();
        if (bossInvincible == false) {
            pvBoss -= 1
            if (pvBoss > 0) {
                bossInvincible = true
                this.time.delayedCall(1000, this.bossStopInvincible, null, this);
            } else if (pvBoss < 0.1) {
                boss.destroy()
                totalCoins += 50;
                rewardCoinsPostGame += 50
                textPieces.destroy();
                textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.05, totalCoins, {
                    fill: '#fff',
                    size: 200
                }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
            }
        }
        console.log(pvBoss)
    }

    damageBossCac(boss, shuriken) {
        shuriken.destroy();
        if (bossInvincible == false) {
            console.log("ozevb")
            pvBoss -= 0.1
            if (pvBoss > 0.09) {
            } else if (pvBoss < 0.1) {
                boss.destroy()
                totalCoins += 50;
                rewardCoinsPostGame += 50
                textPieces.destroy();
                textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.05, totalCoins, {
                    fill: '#fff',
                    size: 200
                }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
            }
        }
        console.log(pvBoss)
    }

    bossStopInvincible() {
        bossInvincible = false
    }

////////////////////////////////////

    joueurPrendDegats(degat) {
        pvPlayer -= degat
        this.greenBarHealth.destroy();
        this.pvPlayerText.destroy();

        if (pvPlayer < 0.1) {

            this.death();
        } else if (pvPlayer > 0.1) {
            this.greenBarHealth = this.add.tileSprite((this.cameras.main.centerX * 2) * 0.4, (this.cameras.main.centerY * 2) * 0.1, (this.cameras.main.centerX * 2) * pvPlayer / 100 / 4.5, (this.cameras.main.centerY * 2) / 7.5, 'healthBarGreen').setScrollFactor(0).setScale(1).setDepth(1).setAlpha(1).setOrigin(0, 0.5);
            this.pvPlayerText = this.add.text((this.cameras.main.centerX * 2) * 0.4125, (this.cameras.main.centerY * 2) * 0.1, pvPlayer, {
                fill: '#0f0',
                size: 200
            }).setScrollFactor(0).setDepth(2).setOrigin(0.5, 0.5);

            if (pvPlayer > 50 && pvPlayer < 75) {
                this.katanaHealth.destroy();
                this.katanaHealth = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.29, (this.cameras.main.centerY * 2) * 0.1, 'katanaHealthImage2').setScrollFactor(0).setScale(0.25).setDepth(1).setAlpha(1).setOrigin(0, 0.5).setFlipX(true);
            } else if (pvPlayer > 25 && pvPlayer < 51) {
                this.katanaHealth.destroy();
                this.katanaHealth = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.29, (this.cameras.main.centerY * 2) * 0.08, 'katanaHealthImage3').setScrollFactor(0).setScale(0.25).setDepth(1).setAlpha(1).setOrigin(0, 0.5).setFlipX(true);
            } else if (pvPlayer > 0 && pvPlayer < 26) {
                this.katanaHealth.destroy();
                this.katanaHealth = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.29, (this.cameras.main.centerY * 2) * 0.06, 'katanaHealthImage4').setScrollFactor(0).setScale(0.25).setDepth(1).setAlpha(1).setOrigin(0, 0.5).setFlipX(true);
            }
        }
        this.playerGoInvincible();


    }

    tirSniperEnnemi(sniperEnnemi) {
        let pointer = this.input.activePointer;
        for (const sniperEnnemi of this.sniperEnnemis.children.entries) {
            if (Math.abs(sniperEnnemi.x - player.x) < this.cameras.main.centerX * 2) {
                var ballesSniper = this.ballesSnipers.create(sniperEnnemi.x, sniperEnnemi.y, 'heavyBullet').setFlipX(true).setScale(1);
                var randomBallesMachineGunners = Phaser.Math.Between(-50, 50);
                this.physics.moveTo(ballesSniper, player.x + randomBallesMachineGunners, player.y + randomBallesMachineGunners, vitesseBalleSniperEnnemi);
                //var angleBalle = (Math.atan2(player.y - sniperEnnemi.y, player.x - sniperEnnemi.x) * 180 / Math.PI);
                // snowball.angleBalle -= 90;
                ballesSniper.rotation = Phaser.Math.Angle.BetweenPoints(player, sniperEnnemi);
                this.physics.add.overlap(player, ballesSniper, this.degatBalleSniper, null, this)

                ballesSniper.body.setAllowGravity(false);
                if (player.x < sniperEnnemi.x) {

                    sniperEnnemi.play('sniperShoot', true).setFlipX(false);
                    ballesSniper.setGravityY(1000);
                } else if (player.x > sniperEnnemi.x) {

                    sniperEnnemi.play('sniperShoot', true).setFlipX(true);

                }
                this.data.sound.sniperShot.play()
                console.log("test")
            }
        }

    }

    tirMachineGunnerEnnemi(machineGunnerEnnemi) {

        for (const machineGunnerEnnemi of this.machineGunnerEnnemis.children.entries) {
            if (Math.abs(machineGunnerEnnemi.x - player.x) < this.cameras.main.centerX*2) {

                var ballesMachineGunner = this.ballesMachineGunners.create(machineGunnerEnnemi.x-23, machineGunnerEnnemi.y-20, 'smallBullet').setFlipX(true).setScale(1);
                var randomBallesMachineGunners = Phaser.Math.Between(-100, 100);
                this.physics.moveTo(ballesMachineGunner, player.x + randomBallesMachineGunners, player.y + randomBallesMachineGunners, vitesseBalleMachineGunnerEnnemi);
                var angleBalle = (Math.atan2(player.y - machineGunnerEnnemi.y, player.x - machineGunnerEnnemi.x) * 180 / Math.PI);
                // snowball.angleBalle -= 90;
                ballesMachineGunner.rotation = Phaser.Math.Angle.BetweenPoints(player, machineGunnerEnnemi);
                this.physics.add.overlap(player, ballesMachineGunner, this.degatBalleMachineGunner, null, this)

                ballesMachineGunner.body.setAllowGravity(false);
                if (player.x < machineGunnerEnnemi.x) {

                    machineGunnerEnnemi.play('machineGunnerShoot', true).setFlipX(false);
                    ballesMachineGunner.setGravityY(1000);
                } else if (player.x > machineGunnerEnnemi.x) {

                    machineGunnerEnnemi.play('machineGunnerShoot', true).setFlipX(true);

                }
                this.data.sound.soldierShot.play()

            }
        }
    }

    tirLanceGrenadeEnnemi() {
        for (const lanceGrenade of this.lanceGrenades.children.entries) {
            if (Math.abs(lanceGrenade.x - player.x) < this.cameras.main.centerX * 2) {

                var grenadeLanceGrenade = this.grenadesLanceGrenade.create(lanceGrenade.x, lanceGrenade.y, 'grenade').setFlipX(true).setScale(1);
                var randomBallesLanceGrenades = Phaser.Math.Between(-250, 250);
                this.physics.moveTo(grenadeLanceGrenade, player.x + randomBallesLanceGrenades, player.y - 1000 + randomBallesLanceGrenades, vitesseGrenadeLanceGrenadeEnnemi);
                var angleBalle = (Math.atan2(player.y - lanceGrenade.y, player.x - lanceGrenade.x) * 180 / Math.PI);
                this.physics.add.collider(grenadeLanceGrenade, this.platform);
                this.physics.add.collider(grenadeLanceGrenade, this.caisses);
                this.physics.add.collider(grenadeLanceGrenade, this.platformMontagne);

                grenadeLanceGrenade.rotation = Phaser.Math.Angle.BetweenPoints(player, lanceGrenade);
                grenadeLanceGrenade.body.setGravityY(700)
                grenadeLanceGrenade.body.setBounce(0.5)
                this.time.delayedCall(3000, this.explodeGrenadeLanceGrenade, [grenadeLanceGrenade], this);
                if (player.x < lanceGrenade.x) {
                    lanceGrenade.play('launcherShoot', true).setFlipX(false);
                    grenadeLanceGrenade.setGravityY(1000);
                } else if (player.x > lanceGrenade.x) {

                    lanceGrenade.play('launcherShoot', true).setFlipX(true);

                }
                this.data.sound.grenadeShot.play()
            }
        }
    }

    tirLanceRoquetteEnnemi() {

        for (const lanceRoquette of this.lanceRoquettes.children.entries) {
            if (Math.abs(lanceRoquette.x - player.x) < this.cameras.main.centerX*2) {

                var roquetteLanceRoquette = this.roquettesLanceRoquettes.create(lanceRoquette.x, lanceRoquette.y, 'roquette').setFlipX(false).setScale(1);
                this.physics.moveTo(roquetteLanceRoquette, player.x, player.y, vitesseRoquetteLanceRoquetteEnnemi);
                var angleBalle = (Math.atan2(player.y - lanceRoquette.y, player.x - lanceRoquette.x) * 180 / Math.PI);

                roquetteLanceRoquette.rotation = Phaser.Math.Angle.BetweenPoints(player, lanceRoquette);


                this.physics.add.collider(roquetteLanceRoquette, this.platform, this.explodeRoquetteLanceRoquette, null, this);
                this.physics.add.collider(roquetteLanceRoquette, player, this.explodeRoquetteLanceRoquette, null, this);
                this.physics.add.collider(roquetteLanceRoquette, this.caisses, this.explodeRoquetteLanceRoquette, null, this);
                this.physics.add.collider(roquetteLanceRoquette, this.platformMontagne, this.explodeRoquetteLanceRoquette, null, this);

                if (player.x < lanceRoquette.x) {

                    lanceRoquette.play('launcherShoot', true).setFlipX(false);
                } else if (player.x > lanceRoquette.x) {

                    lanceRoquette.play('launcherShoot', true).setFlipX(true);

                }
                this.data.sound.roquetteShot.play()
            }
        }
    }

    activateLaserVertical() {
        if (laserVerticalActivated == true) {
            this.physics.world.removeCollider(this.colliderLasersVertical);
            this.physics.world.removeCollider(this.colliderShurikenLaserVertical);

            for (const laserVertical of this.lasersVertical.children.entries) {
                laserVertical.setAlpha(0);
            }
            laserVerticalActivated = false;
        } else if (laserVerticalActivated == false) {
            this.colliderLasersVertical = this.physics.add.overlap(player, this.lasersVertical, this.death, null, this);
            this.colliderShurikenLaserVertical = this.physics.add.collider(shurikens, this.lasersVertical, this.killShuriken, null, this);

            for (const laserVertical of this.lasersVertical.children.entries) {
                laserVertical.setAlpha(1);
            }
            laserVerticalActivated = true;
        }
    }

    activateLaserHorizontal() {
        if (laserHorizontalActivated == true) {
            this.physics.world.removeCollider(this.colliderLasersHorizontal);
            this.physics.world.removeCollider(this.colliderShurikenLaserHorizontal);

            for (const laserHorizontal of this.lasersHorizontal.children.entries) {
                laserHorizontal.setAlpha(0);
            }
            laserHorizontalActivated = false;
        } else if (laserHorizontalActivated == false) {
            this.colliderLasersHorizontal = this.physics.add.overlap(player, this.lasersHorizontal, this.death, null, this);
            this.colliderShurikenLaserHorizontal = this.physics.add.collider(shurikens, this.lasersHorizontal, this.killShuriken, null, this);


            for (const laserHorizontal of this.lasersHorizontal.children.entries) {
                laserHorizontal.setAlpha(1);
            }
            laserHorizontalActivated = true;
        }
    }

    explodeGrenadeLanceGrenade(grenadeLanceGrenade) {
        grenadeLanceGrenade.destroy();
        var explosion = this.physics.add.sprite(grenadeLanceGrenade.x, grenadeLanceGrenade.y, 'explosion').setScale(0.5).setOrigin(0.5, 0.5).setAlpha(0.8);
        this.colliderExplosion = this.physics.add.overlap(explosion, player, this.killPlayerExplosion, null, this)
        this.physics.add.collider(this.caisses, explosion, this.breakCaisse, null, this);

        this.time.delayedCall(200, this.destroyColliderFunction, [this.colliderExplosion], this);
        this.time.delayedCall(1000, this.destroyExplosion, [explosion], this);
    }

    explodeRoquetteLanceRoquette(roquetteLanceRoquette) {
        roquetteLanceRoquette.destroy();
        var explosion = this.physics.add.sprite(roquetteLanceRoquette.x, roquetteLanceRoquette.y, 'explosion').setScale(0.5).setOrigin(0.5, 0.5).setAlpha(0.8);
        this.colliderExplosion = this.physics.add.overlap(explosion, player, this.killPlayerExplosion, null, this)
        this.physics.add.collider(this.caisses, explosion, this.breakCaisse, null, this);

        this.time.delayedCall(200, this.destroyColliderFunction, [this.colliderExplosion], this);
        this.time.delayedCall(1000, this.destroyExplosion, [explosion], this);
    }

    destroyColliderFunction() {
        this.physics.world.removeCollider(this.colliderExplosion);
        this.physics.world.removeCollider(this.colliderBoss);
    }

    killPlayerExplosion() {
        this.joueurPrendDegats(100)
    }

    destroyExplosion(explosionShuriken) {
        explosionShuriken.destroy();
    }

    destroyBalle(platform, balle) {
        platform.destroy();
    }

    tirSoldatEnnemi(yeti) {
        for (const yeti of this.yetis.children.entries) {
            if (Math.abs(yeti.x - player.x) < this.cameras.main.centerX*2) {

                // yeti.play('soldierShoot', true);
                var ballesSoldat = this.ballesSoldats.create(yeti.x-23, yeti.y-28, 'snowball');
                this.physics.moveTo(ballesSoldat, player.x, player.y, vitesseBalleSoldatEnnemi);


                ballesSoldat.rotation = Phaser.Math.Angle.BetweenPoints(player, yeti) - 135;
                this.physics.add.overlap(player, ballesSoldat, this.degatBalleSoldat, null, this)


                if (player.x < yeti.x) {
                    yeti.anims.play('soldierShoot', true).setFlipX(false);
                } else if (player.x > yeti.x) {
                    yeti.anims.play('soldierShoot', true).setFlipX(true);
                }
            }
            this.data.sound.soldierShot.play()

        }
    }

    killSnowman(snowman, shuriken) {
        snowman.destroy();
        shuriken.destroy();
    }

    killSniperEnnemi(sniperEnnemi, shuriken) {
        sniperEnnemi.destroy();
        shuriken.destroy();
        totalCoins += 10;
        rewardCoinsPostGame += 10
        textPieces.destroy();
        textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.05, totalCoins, {
            fill: '#fff',
            size: 200
        }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
    }

    killYeti(yeti, shuriken) {
        yeti.destroy();
        shuriken.destroy();
        totalCoins += 6;
        rewardCoinsPostGame += 6
        textPieces.destroy();
        textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.05, totalCoins, {
            fill: '#fff',
            size: 200
        }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
    }

    killLanceGrenade(lanceGrenade, shuriken) {
        lanceGrenade.destroy();
        shuriken.destroy();
        totalCoins += 12;
        rewardCoinsPostGame += 12
        textPieces.destroy();
        textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.05, totalCoins, {
            fill: '#fff',
            size: 200
        }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
    }

    killLanceRoquettes(lanceRoquettes, shuriken) {
        lanceRoquettes.destroy();
        shuriken.destroy();
        totalCoins += 15;
        rewardCoinsPostGame += 15
        textPieces.destroy();
        textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.05, totalCoins, {
            fill: '#fff',
            size: 200
        }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
    }

    killMachineGunner(machineGunner, shuriken) {
        machineGunner.destroy();
        shuriken.destroy();
        totalCoins += 3;
        rewardCoinsPostGame += 3
        textPieces.destroy();
        textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.05, totalCoins, {
            fill: '#fff',
            size: 200
        }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
    }

    lancershuriken(player) {
        if (shurikenLeft > 0) {
            shotsDone += 1;
            localStorage.setItem(localDataShotsDone, shotsDone);
            let pointer = this.input.activePointer;
            var shuriken = shurikens.create(player.x, player.y - 5, 'shuriken').setScale(0.75);
            shuriken.play('shuriken', true).setFlipX(true);

            shuriken.body.setSize(35, 35, true);
            this.physics.moveTo(shuriken, pointer.worldX, pointer.worldY, 700);
            shuriken.rotation = Phaser.Math.Angle.BetweenPoints(pointer, player);
            shuriken.setGravityY(500)
            shurikenLeft -= 1;
            this.changeShuriken();
        }
    }

    lancershurikenGamepad(player) {
        if (shurikenLeft > 0) {
            shotsDone += 1;
            localStorage.setItem(localDataShotsDone, shotsDone);
            let pointer = this.input.activePointer;
            var shuriken = shurikens.create(player.x, player.y - 5, 'shuriken').setScale(0.75);
            shuriken.play('shuriken', true).setFlipX(true);

            shuriken.body.setSize(35, 35, true);

            if (axisWidthR > 0) {
                shuriken.setVelocity(700, 700 * axisHeightR)
            }
            if (axisWidthR < 0) {
                shuriken.setVelocity(-700, 700 * axisHeightR)
            }
            shuriken.rotation = Phaser.Math.Angle.BetweenPoints(pointer, player);
            shuriken.setGravityY(500)
            shurikenLeft -= 1;
            this.changeShuriken();
        }
    }

    lancerShurikenMobile(player) {
        if (shurikenLeft > 0) {
            shotsDone += 1;
            localStorage.setItem(localDataShotsDone, shotsDone);
            let pointer = this.input.activePointer;
            var shuriken = shurikens.create(player.x, player.y - 5, 'shuriken').setScale(0.75);
            shuriken.play('shuriken', true).setFlipX(true);
            shuriken.body.setSize(35, 35, true);

            if (nextShotMobileDirection == "right") {
                shuriken.setVelocity(700, 700 * nextShotOrientation)
            }
            if (nextShotMobileDirection == "left") {
                shuriken.setVelocity(-700, 700 * nextShotOrientation / 2)
            }
            shuriken.rotation = Phaser.Math.Angle.BetweenPoints(pointer, player);
            shuriken.setGravityY(500)
            shurikenLeft -= 1;
            this.changeShuriken();
        }
    }

    lancerTeleport(player) {
        if (teleportationsLeft > 0) {
            let pointer = this.input.activePointer;
            var teleport = teleportations.create(player.x, player.y - 5, 'teleport').setScale(0.05);
            //  teleport.anims.play('teleporter',true).setFlipX(false);

            teleport.setBounce(1)
            this.physics.moveTo(teleport, pointer.worldX, pointer.worldY, 300);
            teleport.rotation = Phaser.Math.Angle.BetweenPoints(pointer, player);
            teleportationsLeft -= 1;

            this.changeTeleport();

            this.time.delayedCall(1250, this.teleportToTeleporter, [teleport], this);
        }
    }

    lancerTeleportGamepad(player) {
        if (teleportationsLeft > 0) {
            let pointer = this.input.activePointer;
            var teleport = teleportations.create(player.x, player.y - 5, 'teleport').setScale(0.05);
            //  teleport.anims.play('teleporter',true).setFlipX(false);

            teleport.setBounce(1)
            teleport.setVelocity(300, 300 * axisHeightR)
            teleport.rotation = Phaser.Math.Angle.BetweenPoints(pointer, player);
            teleportationsLeft -= 1;

            this.changeTeleport();

            this.time.delayedCall(1250, this.teleportToTeleporter, [teleport], this);
        }
    }

    lancerTeleportMobile(player) {
        if (teleportationsLeft > 0) {
            let pointer = this.input.activePointer;
            var teleport = teleportations.create(player.x, player.y - 5, 'teleport').setScale(0.05);
            // teleport.anims.play('teleporter',true).setFlipX(false);
            teleport.setBounce(1)
            if (nextShotMobileDirection == "right") {
                teleport.setVelocity(300, 300 * nextShotOrientation)
            }
            if (nextShotMobileDirection == "left") {
                teleport.setVelocity(-300, 300 * nextShotOrientation / 2)
            }
            teleport.rotation = Phaser.Math.Angle.BetweenPoints(pointer, player);
            teleportationsLeft -= 1;

            this.changeTeleport();

            this.time.delayedCall(1250, this.teleportToTeleporter, [teleport], this);
        }
    }

    teleportToTeleporter(teleport) {
        player.x = teleport.x
        player.y = teleport.y - 32
        teleport.destroy();
        this.data.sound.teleport.play()
    }

    destroyShuriken(shuriken) {
        this.shurikensItems.create(shuriken.x, shuriken.y, 'shuriken').setScale(0.75)
            .setOrigin(0.5, 0.5)
            .setDepth(-1)
            .setSize(35, 35)
        shuriken.destroy();
        this.data.sound.shurikenHitWall.play()
    }

    killShuriken(shuriken) {
        shuriken.destroy();
    }

    destroyShurikenPics(shuriken) {
        shuriken.destroy();
    }

    destroySnowball(snowball) {
        snowball.destroy();
    }

    destroyPlatformFake(platformFake) {
        platformFake.destroy();

        //platformFake.setAlpha(0.2)
    }

    showPlatformInvisible(platformInvisble) {
        platformInvisble.setAlpha(1);
        if (player.body.blocked.down || player.body.touching.down) {
            standing = true
            onPlatform = "platform"

        }
        playerCanResetVelocity = true
        player.setAccelerationX(0)
    }

    showPicsInvisible(PicsInvisible) {


        if (playerInvincible == false) {

            this.death();

        }

        PicsInvisible.setAlpha(1);
    }

    collectHealthPlayer(powerUpHealth) {
        powerUpHealth.destroy();


        this.joueurPrendDegats(-25);

    }

    collectCoin(coin) {

        coin.destroy();
        totalCoins += 10;
        rewardCoinsPostGame += 10
        textPieces.destroy();
        textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.05, totalCoins, {
            fill: '#fff',
            size: 200
        }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);

    }

    pickUpShuriken(player, shuriken) {
        shuriken.destroy();
        shurikenLeft += 1;
        this.changeShuriken();
    }

    pickUpTeleport(player, teleport) {
        teleport.destroy();
        teleportationsLeft += 1;
        teleportationsLeftText.destroy()
        teleportationsLeftText = this.add.text((this.cameras.main.centerX * 2) * 0.925, (this.cameras.main.centerY * 2) * 0.15, teleportationsLeft, {
            fill: '#fff',
            size: 200
        }).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
    }

    changeShuriken() {
        shurikenLeftText.destroy();
        shurikenLeftText = this.add.text((this.cameras.main.centerX * 2) * 0.925, (this.cameras.main.centerY * 2) * 0.075, shurikenLeft, {
            fill: '#fff',
            size: 200
        }).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
    }

    changeTeleport() {
        teleportationsLeftText.destroy()
        teleportationsLeftText = this.add.text((this.cameras.main.centerX * 2) * 0.925, (this.cameras.main.centerY * 2) * 0.15, teleportationsLeft, {
            fill: '#fff',
            size: 200
        }).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
    }

    collectPowerUpShuriken(powerUpShuriken) {
        ("pickupshuriken")
        powerUpShuriken.destroy();

        shurikenPowerUpActive = true;
    }

    contactDrapeau() {
        console.log(level)
//this.flag.destroy()
        if (level == "level1") {
            totalCoins += 100
            level2Unlocked = true
            localStorage.setItem(localDataLevel2Unlocked, level2Unlocked);
        } else if (level == "level2") {
            totalCoins += 150
            level3Unlocked = true
            localStorage.setItem(localDataLevel3Unlocked, level3Unlocked);
        } else if (level == "level3") {
            totalCoins += 200
            level4Unlocked = true
            localStorage.setItem(localDataLevel4Unlocked, level4Unlocked);
        } else if (level == "level4") {
            totalCoins += 250
            level5Unlocked = true
            localStorage.setItem(localDataLevel5Unlocked, level5Unlocked);
        } else if (level == "level5") {
            totalCoins += 300
            level6Unlocked = true
            localStorage.setItem(localDataLevel6Unlocked, level6Unlocked);
        } else if (level == "level6") {
            totalCoins += 350
            level7Unlocked = true
            localStorage.setItem(localDataLevel7Unlocked, level7Unlocked);
        } else if (level == "level7") {
            totalCoins += 400
            level8Unlocked = true
            localStorage.setItem(localDataLevel8Unlocked, level8Unlocked);
        } else if (level == "level8") {
            totalCoins += 450
            level9Unlocked = true
            localStorage.setItem(localDataLevel9Unlocked, level9Unlocked);
        } else if (level == "level9") {
            totalCoins += 500
            level10Unlocked = true
            localStorage.setItem(localDataLevel10Unlocked, level10Unlocked);
        } else if (level == "level10") {
            totalCoins += 550
            level11Unlocked = true
            localStorage.setItem(localDataLevel11Unlocked, level11Unlocked);
        } else if (level == "level11") {
            totalCoins += 600
            level12Unlocked = true
            localStorage.setItem(localDataLevel12Unlocked, level12Unlocked);
        } else if (level == "level12") {
            totalCoins += 650
            level13Unlocked = true
            localStorage.setItem(localDataLevel13Unlocked, level13Unlocked);
        } else if (level == "level13") {
            totalCoins += 700
            level14Unlocked = true
            localStorage.setItem(localDataLevel14Unlocked, level14Unlocked);
        } else if (level == "level14") {
            totalCoins += 750
            level15Unlocked = true
            localStorage.setItem(localDataLevel15Unlocked, level15Unlocked);
        } else if (level == "level15") {
            totalCoins += 800
            level16Unlocked = true
            localStorage.setItem(localDataLevel16Unlocked, level16Unlocked);
        } else if (level == "level16") {
            totalCoins += 850
            level17Unlocked = true
            localStorage.setItem(localDataLevel17Unlocked, level17Unlocked);
        } else if (level == "level17") {
            totalCoins += 900
            level18Unlocked = true
            localStorage.setItem(localDataLevel18Unlocked, level18Unlocked);
        } else if (level == "level18") {
            totalCoins += 1000
        }

        this.scene.stop("Jeu");
        levelCompleted = true;

        this.scene.start("PostGame");

    }

    degatSnowmanJoueur(snowman) {
        snowman.destroy();
        var explosion = this.physics.add.sprite(snowman.x, snowman.y, 'explosion').setScale(0.5).setOrigin(0.5, 0.5).setAlpha(0.8);
        this.joueurPrendDegats(100)
        this.death();
    }

    bouncePlatformMontagne() {


        if (player.body.blocked.right && player.body.blocked.down == false) {
            if (padConnected) {
                if (paddle.A) {
                    player.setVelocityY(-150);
                }
            }
            if (keyZ.isDown) {
                player.setVelocityY(-150);
            }

        }
        if (player.body.blocked.left && player.body.blocked.down == false) {

            if (padConnected) {
                if (paddle.A) {
                    player.setVelocityY(-150);
                }
            }
            if (keyZ.isDown) {
                player.setVelocityY(-150);
            }

        }

        /*    this.time.delayedCall(400, this.inputEnabled, null, this);
      this.time.delayedCall(800, this.canResetVelocity, null, this);  */

    }

    inputEnabled() {
        this.input.enabled = true;
    }

    canResetVelocity() {
        playerCanResetVelocity = true
    }

    degatBalleMachineGunner(player, ballesSniper) {
        ballesSniper.destroy();
        if (playerInvincible == false) {
            this.joueurPrendDegats(15);
        }
    }

    degatBalleSniper(player, ballesSniper) {
        ballesSniper.destroy();
        if (playerInvincible == false) {
            this.joueurPrendDegats(60);
        }
    }

    degatBalleSoldat(player, ballesSoldat) {
        ballesSoldat.destroy();
        if (playerInvincible == false) {
            this.joueurPrendDegats(25);
        }
    }

    hitShuriken(player, shuriken) {
        death();
    }

    playerInWater() {

        //standing=false
        gravity = 200
        runSpeed = 0.25
        playerInWater = true

    }

    playerInWaterTop() {

        runSpeed = 1
        gravity = 1000

        playerInWater = false
    }

    setSpeedPlatform(player, platform) {
        if (velociteChute > 800) {
            this.joueurPrendDegats(100)
            this.death()
            console.log("tzetghjkl")
        }
        velociteChute = player.body.velocity.y
        playerCanResetVelocity = true
        canResetIceVelocity = true
        player.setGravityY(gravity)
        if (playerInWater == false) {
            runSpeed = 1;
        }
        onPlatform = "platform"
        if (player.body.blocked.down || player.body.touching.down) {
            standing = true

        }
    }

    setSpeedPlatformSnow(player, platform) {
        canResetIceVelocity = true
        playerCanResetVelocity = true
        onPlatform = "snow"
        runSpeed = 0.25;
        if (player.body.blocked.down || player.body.touching.down) {
            standing = true
        }
    }

    setSpeedPlatformIce(player, platform) {
        if (player.body.blocked.down || player.body.touching.down) {
            standing = true
        }
        if (canResetIceVelocity == true) {
            player.setVelocityX(0)
            player.anims.play('ninjaIdle', true).setFlipX(false);

            this.data.sound.walking.pause()

            canResetIceVelocity = false
        }
        playerCanResetVelocity = false
        onPlatform = "ice"


    }

    goRight() {

        if ((keyQ.isDown) && onPlatform != "ice") {
            player.setVelocityX(0);
            player.anims.play('ninjaIdle', true).setFlipX(false);

            this.data.sound.walking.pause()


            // player.anims.play('idleNinja',true).setFlipX(false);
        } else if (standing == true) {
            if (playerSkin == "ninja") {
                //  player.play('run', true).setFlipX(false);
            }
            if (playerSkin == "ninjaRouge") {
                //  player.play('runNinjaRouge', true).setFlipX(false);
            }
            if (playerSkin == "ninjaGreen") {
                //  player.play('runNinjaGreen', true).setFlipX(false);
            }

            player.setVelocityX(250 * runSpeed);
            player.anims.play('ninjaWalking', true).setFlipX(false);

            this.data.sound.walking.resume()

            playerDirection = "right"
        } else if (standing == false) {
            /*   if(playerSkin=="ninja"){
        //  player.anims.play('jumpUpNinja',true).setFlipX(false);
      }
      if(playerSkin=="ninjaRouge"){
        //  player.play('jumpUpRouge', true).setFlipX(false);
      }
      if(playerSkin=="ninjaGreen"){
         // player.play('jumpUpNinjaGreen', true).setFlipX(false);
      }*/

            player.setVelocityX(250 * runSpeed);
            if(player.body.velocity.y>0){
                console.log("up")
                player.anims.play('ninjaJumpingUp', false).setFlipX(true);
            }
            if(player.body.velocity.y<0){
                console.log("o")
                player.anims.play('ninjaJumpingDown', false).setFlipX(true);
            }
            this.data.sound.walking.pause()
            // player.anims.play('ninjaWalking', true).setFlipX(false);

            playerDirection = "right"
        }


        if (onPlatform == "ice") {

            if (playerSkin == "ninja") {
                // player.play('run', true).setFlipX(false);
            }
            if (playerSkin == "ninjaRouge") {
                //     player.play('runNinjaRouge', true).setFlipX(false);
            }
            if (playerSkin == "ninjaGreen") {
                //  player.play('runNinjaGreen', true).setFlipX(false);
            }

            playerDirection = "right"
        }

    }

    goRightGamepad() {

        if (onPlatform != "ice") {
            if (standing == true) {
                /*  if(playerSkin=="ninja"){
              player.play('run', true).setFlipX(true);
          }
          if(playerSkin=="ninjaRouge"){
              player.play('runNinjaRouge', true).setFlipX(true);
          }
          if(playerSkin=="ninjaGreen"){
              player.play('runNinjaGreen', true).setFlipX(true);
          }  */

                playerDirection = "left"
                player.setVelocityX(250 * runSpeed * axisWidth * -1);
                player.anims.play('ninjaWalking', true).setFlipX(false);

                this.data.sound.walking.resume()

            } else if (standing == false) {
                /*  if(playerSkin=="ninja"){
            //  player.play('run', true).setFlipX(true);
          }
          if(playerSkin=="ninjaRouge"){
              player.play('runNinjaRouge', true).setFlipX(false);
          }
          if(playerSkin=="ninjaGreen"){
              player.play('runNinjaGreen', true).setFlipX(false);
          } */
                //  player.anims.play('ninjaWalking', true).setFlipX(false);

                playerDirection = "left"
                player.setVelocityX(250 * runSpeed * axisWidth * -1);
                this.data.sound.walking.pause()

            }
        }
        if (onPlatform == "ice") {
            player.setAccelerationX(200)
         /*   if (playerSkin == "ninja") {
                player.play('run', true).setFlipX(false);
            }
            if (playerSkin == "ninjaRouge") {
                player.play('runNinjaRouge', true).setFlipX(false);
            }
            if (playerSkin == "ninjaGreen") {
                player.play('runNinjaGreen', true).setFlipX(false);
            }*/

            playerDirection = "left"
        }

    }

    goLeft() {
        if (onPlatform != "ice") {
            if (standing == true) {
                /*    if(playerSkin=="ninja"){
          player.play('run', true).setFlipX(true);
      }
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);
      }
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);
      }  */

                playerDirection = "left"
                player.setVelocityX(-250 * runSpeed);
                player.anims.play('ninjaWalking', true).setFlipX(true);
                console.log("left")
                this.data.sound.walking.resume()

            } else if (standing == false) {
                /*  if(playerSkin=="ninja"){
          player.play('run', true).setFlipX(true);
      }
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);
      }
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);
      } */
                playerDirection = "left"
                player.setVelocityX(-250 * runSpeed);
                //player.anims.play('ninjaWalking', true).setFlipX(true);

                this.data.sound.walking.pause()

            }
        }
        if (onPlatform == "ice") {
            player.setAccelerationX(-200)
            /*      if(playerSkin=="ninja"){
                  player.play('run', true).setFlipX(true);
      }
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);
      }
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);
      } */

            playerDirection = "left"
        }
    }

    goLeftGamepad() {

        if (onPlatform != "ice") {
            if (standing == true) {
                /*  if(playerSkin=="ninja"){
          player.play('run', true).setFlipX(true);
      }
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);
      }
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);
      }  */

                playerDirection = "left"
                player.setVelocityX(-250 * runSpeed * axisWidth * -1);
                player.anims.play('ninjaWalking', true).setFlipX(true);

                this.data.sound.walking.resume()

            } else if (standing == false) {
                /*   if(playerSkin=="ninja"){
        //  player.play('run', true).setFlipX(true);
      }
      if(playerSkin=="ninjaRouge"){
          player.play('runNinjaRouge', true).setFlipX(true);
      }
      if(playerSkin=="ninjaGreen"){
          player.play('runNinjaGreen', true).setFlipX(true);
      } */
                playerDirection = "left"
                //  player.anims.play('ninjaWalking', true).setFlipX(true);

                player.setVelocityX(-250 * runSpeed * axisWidth * -1);
                this.data.sound.walking.pause()

            }
        }
        if (onPlatform == "ice") {
            player.setAccelerationX(-200)
       /*     if (playerSkin == "ninja") {
                player.play('run', true).setFlipX(true);
            }
            if (playerSkin == "ninjaRouge") {
                player.play('runNinjaRouge', true).setFlipX(true);
            }
            if (playerSkin == "ninjaGreen") {
                player.play('runNinjaGreen', true).setFlipX(true);
            }*/

            playerDirection = "left"
        }
    }

    jump() {


        if (gravity == 1000) {
            player.setVelocityY(-500);


            if(player.body.velocity.y>0 && standing){
                console.log("up")
                player.anims.play('ninjaJumpingUp', true).setFlipX(true);
            }
            if(player.body.velocity.y<0  && standing){
                console.log("o")
                player.anims.play('ninjaJumpingDown', true).setFlipX(true);
            }

            if (keyQ.isUp && keyD.isUp && onPlatform != "ice" && axisWidth <= 0.2 && axisHeight <= 0.2 && axisWidth >= -0.2 && axisHeight >= -0.2  && standing) {
                player.setVelocityX(0)

                this.data.sound.walking.pause()

            }
            
            standing = false;
        }


    }

    playerPlatformMoving(player, platformMoving) {
        if (player.body.blocked.down) {

            if (platformMoving.direction == 'LEFT') {
                this.goLeft()
                //  player.setVelocityX(-100);
            }
            if (platformMoving.direction == 'RIGHT') {
                player.setVelocityX(100);
            }
        }
    }

    playerGoInvincible() {
console.log("test")
        playerInvincible = true;

        this.invicibleAfterHitAlpha0;
        this.time.delayedCall(100, this.invicibleAfterHitAlpha1, null, this);
        this.time.delayedCall(200, this.invicibleAfterHitAlpha0, null, this);
        this.time.delayedCall(300, this.invicibleAfterHitAlpha1, null, this);
        this.time.delayedCall(400, this.invicibleAfterHitAlpha0, null, this);
        this.time.delayedCall(500, this.invicibleAfterHitAlpha1, null, this);
        this.time.delayedCall(600, this.invicibleAfterHitAlpha0, null, this);
        this.time.delayedCall(700, this.invicibleAfterHitAlpha1, null, this);
        this.time.delayedCall(800, this.invicibleAfterHitAlpha0, null, this);
        this.time.delayedCall(900, this.invicibleAfterHitAlpha1, null, this);
        this.time.delayedCall(1000, this.invisibleOff, null, this);


    }

    invisibleOff() {
        playerInvincible = false;
    }

    invicibleAfterHitAlpha0() {
        player.setAlpha(0);
    }

    invicibleAfterHitAlpha1() {
        player.setAlpha(1);
    }

    destroyShurikenSnowball(shuriken, snowball) {
        shuriken.destroy();
        snowball.destroy();
    }

    death() {
        if (this.deathCalled == false) {
            this.deathCalled = true
            this.input.keyboard.shutdown();
            player.setVelocityX(0);
            this.data.sound.walking.pause()
            if(playerDirection=="left"){
                console.log("tue4")

                player.anims.play('ninjaDie', true).setFlipX(true);
            }
            else if(playerDirection=="right"){
                console.log("tue")
                player.anims.play('ninjaDie', true).setFlipX(false);
            }
            
            player.setTint(0xff0000)
            this.physics.pause();
            keyD.reset();
            keyQ.reset();
            keyZ.reset();


            console.log(laserVerticalActivated)

            this.katanaHealth.destroy();
            this.katanaHealth = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.29, (this.cameras.main.centerY * 2) * 0.05, 'katanaHealthImage5').setScrollFactor(0).setScale(0.25).setDepth(1).setAlpha(1).setOrigin(0, 0.5).setFlipX(true);

            this.time.delayedCall(2000, this.mort, null, this);
        } else {
        }
    }

    mort() {

        console.log(this.scene)
        morts += 1
        localStorage.setItem(localDataMorts, morts);

        levelCompleted = false;

        //player.setVelocityX(0);

        this.scene.stop("Jeu")
        console.log('stop')
        this.scene.start("PostGame")

        console.log('stop')
    }

    playerEscalierDroit() {
        if (padConnected) {
            if (paddle.right) {
                if (player.body.blocked.down || player.body.touching.down) {
                    standing = true
                }
           /*     if (playerSkin == "ninja") {
                    player.play('run', true);
                }
                if (playerSkin == "ninjaRouge") {
                    player.play('runNinjaRouge', true);
                }
                if (playerSkin == "ninjaGreen") {
                    player.play('runNinjaGreen', true);
                }*/

                player.setVelocityY(-250)
            }
        }
        if (keyD.isDown) {
            if (player.body.blocked.down || player.body.touching.down) {
                standing = true
            }
         /*   if (playerSkin == "ninja") {
                player.play('run', true);
            }
            if (playerSkin == "ninjaRouge") {
                player.play('runNinjaRouge', true);
            }
            if (playerSkin == "ninjaGreen") {
                player.play('runNinjaGreen', true);
            }*/
            player.setVelocityY(-250)
        }

    }

    playerEscalierGauche() {
        if (padConnected) {
            if (paddle.left) {
                if (player.body.blocked.down || player.body.touching.down) {
                    standing = true
                }
             /*   if (playerSkin == "ninja") {
                    player.play('run', true).setFlipX(true);
                }
                if (playerSkin == "ninjaRouge") {
                    player.play('runNinjaRouge', true).setFlipX(true);
                }
                if (playerSkin == "ninjaGreen") {
                    player.play('runNinjaGreen', true).setFlipX(true);
                }*/


                player.setVelocityY(-250)
            }
        }
        if (keyQ.isDown) {
            if (player.body.blocked.down || player.body.touching.down) {
                standing = true
            }
          /*  if (playerSkin == "ninja") {
                player.play('run', true).setFlipX(true);
            }
            if (playerSkin == "ninjaRouge") {
                player.play('runNinjaRouge', true).setFlipX(true);
            }
            if (playerSkin == "ninjaGreen") {
                player.play('runNinjaGreen', true).setFlipX(true);
            }*/
            player.setVelocityY(-250)
        }
    }

    breakCaisse(caisse, shuriken) {

        shuriken.destroy()
        if (caisse.pv == 2) {
            caisse.destroy()
            caisse = this.caisses.create(caisse.x, caisse.y, 'caisseBroken').setScale(0.1)
                .setOrigin(0.5, 0.5)
                .setDepth(2)
            caisse.pv = 1

        } else if (caisse.pv == 1) {
            caisse.destroy()

        }
    }

    stopSlash(cacAttaque) {
        cacAttaque.destroy()
    }

    declareVariables() {


        var level="level1";
        var teleportationsLeft = 0;
        var teleportationsLeftText;
        
        var shurikenLeft =0;
        var shurikenLeftText;
        
        var cooldownShuriken = 120;
        var onPlatform ="";
        var shuriken;
        var snowball;
        var platform;
        var pageLevelMenu = 1;
        var levelCompleted = false;
        var gameSupport = "keyboard"
        var nextShotMobile = "shuriken"
        var nextReleaseShot = false
        var nextShotOrientation = 0
        var nextShotMobileDirection = ""
        var currentlyCrouching = false
        
        ///////////////ACHIEVEMENTS////////////////////
        var morts ;
        var localDataMorts = "morts";
        morts = Number(localStorage.getItem(localDataMorts))
        var mortsForAchievement = 100
        var popupMortAchievementShown = false
        var localDataPopupMortAchievementShown = "popupMortAchievementShown";
        popupMortAchievementShown = Boolean(localStorage.getItem(localDataPopupMortAchievementShown));
        
        
        var totalCoins;
        var localDataTotalCoins = "totalCoins";
        totalCoins = Number(localStorage.getItem(localDataTotalCoins))
        var totalCoinsAchievement = 10000
        var popupCoinsAchievementShown = false
        var localDataPopupCoinsAchievementShown = "popupCoinsAchievementShown";
        popupCoinsAchievementShown = Boolean(localStorage.getItem(localDataPopupCoinsAchievementShown));
        
        
        var achievementsCompleted;
        var localDataAchievementsCompleted = "achievementsCompleted";
        achievementsCompleted = Number(localStorage.getItem(localDataAchievementsCompleted))
        var achievementsAmount= 6;
        var popupAchievementsCompletedAchievementShown = false
        var localDataPopupAchievementsCompletedAchievementShown = "popupAchievementsCompletedAchievementShown";
        popupAchievementsCompletedAchievementShown = Boolean(localStorage.getItem(localDataPopupAchievementsCompletedAchievementShown));
        
        
        var shotsDone;
        var localDataShotsDone = "shotsDone";
        shotsDone = Number(localStorage.getItem(localDataShotsDone))
        var shotsDoneForAchievement = 1000;
        var popupShotsAchievementShown = false
        var localDataPopupShotsAchievementShown = "popupShotsAchievementShown";
        popupShotsAchievementShown = Boolean(localStorage.getItem(localDataPopupShotsAchievementShown));
        
        
        var clicksDoneForEasterEggAchievement;
        var localDataClicksDoneForEasterEggAchievement = "clicksDoneForEasterEggAchievement";
        clicksDoneForEasterEggAchievement = Number(localStorage.getItem(localDataClicksDoneForEasterEggAchievement));
        var clicksForEasterEggAchievement = 50;
        var easterEggClicksCompleted = false;
        var popupEasterEggN1AchievementShown = false
        var localDataPopupEasterEggN1AchievementShown = "popupEasterEggN1AchievementShown";
        popupEasterEggN1AchievementShown = Boolean(localStorage.getItem(localDataPopupEasterEggN1AchievementShown));
        
        
        
        var skinsPossessed;
        var localDataSkinsPossessed = "skinsPossessed";
        skinsPossessed = Number(localStorage.getItem(localDataSkinsPossessed));
        var skinAmount = 2;
        var popupSkinAchievementShown = false
        var localDataPopupSkinAchievementShown = "popupSkinAchievementShown";
        popupSkinAchievementShown = Boolean(localStorage.getItem(localDataPopupSkinAchievementShown));
        
        ///////////////LEVELS////////////////////////////////
        
        var level1Unlocked = true;
            var localDataLevel1Unlocked = "level1";
            level1Unlocked = Boolean(localStorage.getItem(localDataLevel1Unlocked));
        var level2Unlocked = false;
            var localDataLevel2Unlocked = "level2";
            level2Unlocked = Boolean(localStorage.getItem(localDataLevel2Unlocked));
        var level3Unlocked = false;
            var localDataLevel3Unlocked = "level3";
            level3Unlocked = Boolean(localStorage.getItem(localDataLevel3Unlocked));
        var level4Unlocked = false;
            var localDataLevel4Unlocked = "level4";
            level4Unlocked = Boolean(localStorage.getItem(localDataLevel4Unlocked));
        var level5Unlocked = false;
            var localDataLevel5Unlocked = "level5";
            level5Unlocked = Boolean(localStorage.getItem(localDataLevel5Unlocked));
        var level6Unlocked = false;
            var localDataLevel6Unlocked = "level6";
            level6Unlocked = Boolean(localStorage.getItem(localDataLevel6Unlocked));
        var level7Unlocked = false;
            var localDataLevel7Unlocked = "level7";
            level7Unlocked = Boolean(localStorage.getItem(localDataLevel7Unlocked));
        var level8Unlocked = false;
            var localDataLevel8Unlocked = "level8";
            level8Unlocked = Boolean(localStorage.getItem(localDataLevel8Unlocked));
        var level9Unlocked = false;
            var localDataLevel9Unlocked = "level9";
            level9Unlocked = Boolean(localStorage.getItem(localDataLevel9Unlocked));
        var level10Unlocked = false;
            var localDataLevel10Unlocked = "level10";
            level10Unlocked = Boolean(localStorage.getItem(localDataLevel10Unlocked));
        var level11Unlocked = false;
            var localDataLevel11Unlocked = "level11";
            level11Unlocked = Boolean(localStorage.getItem(localDataLevel11Unlocked));
        var level12Unlocked = false;
            var localDataLevel12Unlocked = "level12";
            level12Unlocked = Boolean(localStorage.getItem(localDataLevel12Unlocked));
        var level13Unlocked = false;
            var localDataLevel13Unlocked = "level13";
            level13Unlocked = Boolean(localStorage.getItem(localDataLevel13Unlocked));
        var level14Unlocked = false;
            var localDataLevel14Unlocked = "level14";
            level14Unlocked = Boolean(localStorage.getItem(localDataLevel14Unlocked));
        var level15Unlocked = false;
            var localDataLevel15Unlocked = "level15";
            level15Unlocked = Boolean(localStorage.getItem(localDataLevel15Unlocked));
        var level16Unlocked = false;
            var localDataLevel16Unlocked = "level16";
            level16Unlocked = Boolean(localStorage.getItem(localDataLevel16Unlocked));
        var level17Unlocked = false;
            var localDataLevel17Unlocked = "level17";
            level17Unlocked = Boolean(localStorage.getItem(localDataLevel17Unlocked));
        var level18Unlocked = false;
            var localDataLevel18Unlocked = "level18";
            level18Unlocked = Boolean(localStorage.getItem(localDataLevel18Unlocked));
        
        /////////////////////////////////////////////////////////////
        this.deathCalled = false

        var platform;
        var player;
        var mouseCursor
        var health;
        var shurikens;
        var teleportations;
        var snowballs;
        var platforms;
        var cursors;
        var snowman;
        var shuriken;
        var scoreText;
        var jumpingPlayer = true
        var shurikenPowerUpActive = true
        var shurikenPlayer = "true"
        var cooldownTirSoldatEnnemi
        var delaiShurikenPlayer = 120;
        var standing;
        var keyA
        var keyZ;
        var keyS;
        var keyD;
        var keyQ;
        var spaceBar
        var coins;
        var playerInvincible=false;
        var playerCanResetVelocity=true;
        var hardcoreMode="off";  
        var playerInWater = false;
        var playerDirection ="right"
        var textPieces;
        var froid1;
        var froid2;
        var froid3;
        var froid = 0;
        var axisWidth = 0
        var axisHeight = 0
        var axisWidthR = 0
        var axisHeightR = 0
        var padConnected;
        var pad;
        var pad1;
        var paddle;
        var gamepadStart=true
        var patchNote;
        var exitButton;
        var rectCrouchPlayer;
        var uncrouchPossible = true
        var canResetIceVelocity=true
        var playerContactCaisse = false
        var graphics;
        var laserDrones
        
        //////////SKINS/////////////////
        var playerSkin="ninja";
        var skinAfficheRandomUnlockSkinImage;
        var priceToPaySkinNumber = 50;
        
        
        var ninjaRougeSkinUnlocked;
            var localDataNinjaRougeSkinUnlocked = "ninjaRougeSkinUnlocked";
            ninjaRougeSkinUnlocked = Boolean(localStorage.getItem(localDataNinjaRougeSkinUnlocked));
        var ninjaGreenSkinUnlocked;
            var localDataNinjaGreenSkinUnlocked = "ninjaGreenkinUnlocked";
            ninjaGreenSkinUnlocked = Boolean(localStorage.getItem(localDataNinjaGreenSkinUnlocked));
        var ninjaSkinUnlocked = true;
        
        
        var probaDropSkinGreenNinja = 3
        var probaDropSkinRedNinja = 1
        var probaDropCoins = 100-probaDropSkinGreenNinja-probaDropSkinRedNinja
        
        ////////////////////////////////
        
        //////////////ENNEMIS//////////////
        var vitesseBalleSoldatEnnemi=400
        var cooldownTirSoldatEnnemi=120
        var cooldownTirSoldatEnnemiBeforeShoot =cooldownTirSoldatEnnemi
        var ballesSoldat;
        
        var vitesseBalleSniperEnnemi=700
        var cooldownTirSniperEnnemi=300
        var cooldownTirSniperEnnemiBeforeShoot =cooldownTirSniperEnnemi
        var ballesSniper;
        
        var vitesseBalleMachineGunnerEnnemi=200
        var cooldownTirMachineGunnerEnnemi=60
        var cooldownTirMachineGunnerEnnemiBeforeShoot =cooldownTirMachineGunnerEnnemi
        var ballesMachineGunners;
        
        var vitesseGrenadeLanceGrenadeEnnemi=600
        var cooldownTirLanceGrenadeEnnemi=200
        var cooldownTirLanceGrenadeEnnemiBeforeShoot =cooldownTirLanceGrenadeEnnemi
        var ballesLanceGrenades;
        
        var vitesseRoquetteLanceRoquetteEnnemi=150
        var cooldownTirLanceRoquetteEnnemi=300
        var cooldownTirLanceRoquetteEnnemiBeforeShoot =cooldownTirLanceRoquetteEnnemi
        var ballesLanceRoquettes;
        var cooldownRecalculationRoquetteDirection = 60
        var cooldownRecalculationRoquetteDirectionReset = cooldownRecalculationRoquetteDirection
        
        var vitesseBalleDrone = 50
        var vitesseDeplacementDrone = 50
        var cooldownTirDrone = 30
        var cooldownTirDroneReset = cooldownTirDrone
        
        var cooldownActivationLaserVertical = 120
        var cooldownActivationLaserVerticalReset = cooldownActivationLaserVertical;
        var laserVertical;
        var laserVerticalActivated = true;
        
        var cooldownActivationLaserHorizontal = 120
        var cooldownActivationLaserHorizontalReset = cooldownActivationLaserHorizontal;
        var laserHorizontal;
        var laserHorizontalActivated = true;
        ////////////BOSS//////////
        var pvBoss = 5
        var bossInvincible = false
        var vitesseBalleSoldatBoss=400
        var cooldownTirSoldatBoss=240
        var cooldownTirSoldatBossBeforeShoot =cooldownTirSoldatBoss
        var ballesSoldatBoss;
        var vitesseBalleSniperBoss=700
        var cooldownTirSniperBoss=600
        var cooldownTirSniperBossBeforeShoot =cooldownTirSniperBoss
        var ballesSniperBoss;
        var vitesseBalleMachineGunnerBoss=400
        var cooldownTirMachineGunnerBoss=120
        var cooldownTirMachineGunnerBossBeforeShoot =cooldownTirMachineGunnerBoss
        var ballesMachineGunners;
        var vitesseGrenadeLanceGrenadeBoss=600
        var cooldownTirLanceGrenadeBoss=600
        var cooldownTirLanceGrenadeBossBeforeShoot =cooldownTirLanceGrenadeBoss
        var ballesLanceGrenades;
        var vitesseRoquetteLanceRoquetteBoss=150
        var cooldownTirLanceRoquetteBoss=600
        var cooldownTirLanceRoquetteBossBeforeShoot =cooldownTirLanceRoquetteBoss
        var ballesLanceRoquettesBoss;
        var cooldownRecalculationRoquetteDirectionBoss = 120
        var cooldownRecalculationRoquetteDirectionResetBoss = cooldownRecalculationRoquetteDirectionBoss
        /////////////////////////////////
        
        //////////VALEURS/////////////
        var gravity=1000;
        var pvJoueur = 100
        var runSpeed=1
        var rewardCoinsPostGame = 0;
        
        var line
        var graphics
        
        
        
        var velociteChute = 0;
        var pvPlayer = 100;
        
        var gameMusic1

    }

    dumpJoyStickStateMove() {
        var cursorKeysMovement = this.joyStickMovement.createCursorKeys();
        var s = 'Key down: ';
        for (var name in cursorKeysMovement) {
            if (cursorKeysMovement[name].isDown) {
                s += name + ' ';
            }
        }
        s += '\n';
        s += ('Force: ' + Math.floor(this.joyStickMovement.force * 100) / 100 + '\n');
        s += ('Angle: ' + Math.floor(this.joyStickMovement.angle * 100) / 100 + '\n');
        this.textMove.setText(s);
    }

    dumpJoyStickStateShoot() {
        var cursorKeysShoot = this.joyStickShoot.createCursorKeys();
        var s = 'Key down: ';
        for (var name in cursorKeysShoot) {
            if (cursorKeysShoot[name].isDown) {
                s += name + ' ';
            }
        }
        s += '\n';
        s += ('Force: ' + Math.floor(this.joyStickShoot.force * 100) / 100 + '\n');
        s += ('Angle: ' + Math.floor(this.joyStickShoot.angle * 100) / 100 + '\n');
        this.textShoot.setText(s);
    }

    createMobileUi() {
        /*
    if(gameSupport=='mobile'){
        this.jumpButton = this.physics.add.sprite((this.cameras.main.centerX*2)*0.95,(this.cameras.main.centerY*2)*0.35, 'jumpButton').setScrollFactor(0).setScale(0.35).setDepth(10).setOrigin(0.5,0.5).setInteractive().setAlpha(0.8);;
        this.crouchButton = this.physics.add.sprite((this.cameras.main.centerX*2)*0.95,(this.cameras.main.centerY*2)*0.5, 'crouchButton').setScrollFactor(0).setScale(0.35).setDepth(10).setOrigin(0.5,0.5).setInteractive().setAlpha(0.8);;
        this.nextShotTeleportation = this.physics.add.sprite((this.cameras.main.centerX*2)*0.7,(this.cameras.main.centerY*2)*0.75, 'nextShotTeleportation').setScrollFactor(0).setScale(0.35).setDepth(10).setOrigin(0.5,0.5).setInteractive().setAlpha(0);
        this.nextShotShuriken = this.physics.add.sprite((this.cameras.main.centerX*2)*0.7,(this.cameras.main.centerY*2)*0.75, 'nextShotShuriken').setScrollFactor(0).setScale(0.20).setDepth(10).setOrigin(0.5,0.5).setInteractive().setAlpha(0.8);

   this.joyStickMovement = this.plugins.get('rexvirtualjoystickplugin').add(this, {
            x: (this.cameras.main.centerX*2)*0.15,
            y: (this.cameras.main.centerY*2)*0.75,
            radius: 100,
            base: this.add.circle(0, 0, 75, 0x888888),
            thumb: this.add.circle(0, 0, 35, 0xcccccc),
            // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
            // forceMin: 16,
             enable: true
        })            .on('update', this.dumpJoyStickStateMove, this);
        this.textMove = this.add.text(0, 0);
        this.dumpJoyStickStateMove();

    this.joyStickMovement.base.setAlpha(0.5).setDepth(10)
    this.joyStickMovement.thumb.setAlpha(0.5).setDepth(10)


    this.joyStickShoot = this.plugins.get('rexvirtualjoystickplugin').add(this, {
        x: (this.cameras.main.centerX*2)*0.85,
        y: (this.cameras.main.centerY*2)*0.75,
        radius: 100,
        base: this.add.circle(0, 0, 75, 0x888888),
        thumb: this.add.circle(0, 0, 35, 0xcccccc),
        // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
        // forceMin: 16,
        // enable: true
    })            .on('update', this.dumpJoyStickStateShoot, this);
    this.textShoot = this.add.text(0, 0);
    this.dumpJoyStickStateShoot();

this.joyStickShoot.base.setAlpha(0.5).setDepth(10)
this.joyStickShoot.thumb.setAlpha(0.5).setDepth(10)






    this.jumpButton.on('pointerdown', () => {
        if(standing == true || playerInWater==true){
            this.jump()
        }
    })
    this.crouchButton.on('pointerdown', () => {
        player.body.setSize(45, 45, true);
        player.body.setOffset(20,45);
        currentlyCrouching=true
    })
    this.crouchButton.on('pointerup', () => {
        currentlyCrouching=false
    })

    this.nextShotShuriken.on('pointerdown', () => {
        this.nextShotTeleportation.setAlpha(0.8);
        this.nextShotShuriken.setAlpha(0)
        nextShotMobile = "teleport"
    });
    this.nextShotTeleportation.on('pointerdown', () => {
        this.nextShotTeleportation.setAlpha(0)
        this.nextShotShuriken.setAlpha(0.8);
        nextShotMobile = "shuriken"
    });

    }
*/

    }

    destroyMobileUi() {
        /*
 this.jumpButton.destroy();
   this.crouchButton.destroy();

this.joyStickMovement.base.setAlpha(0)
this.joyStickMovement.thumb.setAlpha(0)
    console.log("bugnothere")

    this.joyStickShoot.base.setAlpha(0)
    this.joyStickShoot.thumb.setAlpha(0)

    this.nextShotShuriken.destroy()
    this.nextShotTeleportation.destroy()
*/
    }

    damageDrone(shuriken, drone) {
        shuriken.destroy()
        drone.pv -= 1
        if (drone.pv == 0) {
            drone.destroy()
        }
    }


    loadAnimations() {

        this.anims.create({
            key: 'teleporter',
            frames: this.anims.generateFrameNumbers('teleporterSpritesheet', {start: 0, end: 1}),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'shuriken',
            frames: this.anims.generateFrameNumbers('shurikenSpritesheet', {start: 0, end: 1}),
            frameRate: 20,
            repeat: -1
        });

        if (playerSkin == "ninja") {
            this.anims.create({
                key: 'ninjaIdle',
                frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaIdle', {start: 0, end: 4}),
                frameRate: 6,
                repeat: -1
            });
        
        this.anims.create({
            key: 'ninjaWalking',
            frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaWalking', {start: 0, end: 7}),
            frameRate: 13,
            repeat: -1
        });
        this.anims.create({
            key: 'ninjaJumpingUp',
            frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaJumping', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({
            key: 'ninjaJumpingDown',
            frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaJumping', {start: 2, end: 4}),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({
            key: 'ninjaDie',
            frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaDie', {start: 0, end: 4}),
            frameRate: 6,
            repeat: 0
        });
        this.anims.create({
            key: 'ninjaCrouch',
            frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaCrouch', {start: 0, end: 2}),
            frameRate: 6,
            repeat: -1
        });
    }
    else if (playerSkin == "ninjaRouge") {
        this.anims.create({
            key: 'ninjaIdle',
            frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaIdleBlanc', {start: 0, end: 4}),
            frameRate: 6,
            repeat: -1
        });
    
    this.anims.create({
        key: 'ninjaWalking',
        frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaWalkingBlanc', {start: 0, end: 7}),
        frameRate: 13,
        repeat: -1
    });
    this.anims.create({
        key: 'ninjaJumpingUp',
        frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaJumpingBlanc', {start: 0, end: 1}),
        frameRate: 2,
        repeat: -1
    });
    this.anims.create({
        key: 'ninjaJumpingDown',
        frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaJumpingBlanc', {start: 2, end: 4}),
        frameRate: 2,
        repeat: -1
    });
    this.anims.create({
        key: 'ninjaDie',
        frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaDieBlanc', {start: 0, end: 4}),
        frameRate: 6,
        repeat: 0
    });
    this.anims.create({
        key: 'ninjaCrouch',
        frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaCrouchBlanc', {start: 0, end: 2}),
        frameRate: 6,
        repeat: -1
    });
}
else if (playerSkin == "ninjaGreen") {
    this.anims.create({
        key: 'ninjaIdle',
        frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaIdleCam', {start: 0, end: 4}),
        frameRate: 6,
        repeat: -1
    });

this.anims.create({
    key: 'ninjaWalking',
    frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaWalkingCam', {start: 0, end: 7}),
    frameRate: 13,
    repeat: -1
});
this.anims.create({
    key: 'ninjaJumpingUp',
    frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaJumpingCam', {start: 0, end: 1}),
    frameRate: 2,
    repeat: -1
});
this.anims.create({
    key: 'ninjaJumpingDown',
    frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaJumpingCam', {start: 2, end: 4}),
    frameRate: 2,
    repeat: -1
});
this.anims.create({
    key: 'ninjaDie',
    frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaDieCam', {start: 0, end: 4}),
    frameRate: 6,
    repeat: 0
});
this.anims.create({
    key: 'ninjaCrouch',
    frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaCrouchCam', {start: 0, end: 2}),
    frameRate: 6,
    repeat: -1
});
}



        this.anims.create({
            key: 'soldierShoot',
            frames: this.anims.generateFrameNumbers('spritesheetEnnemySoldierShoot', {start: 0, end: 2}),
            frameRate: 15,
            repeat: 0
        });
        this.anims.create({
            key: 'machineGunnerShoot',
            frames: this.anims.generateFrameNumbers('spritesheetEnnemyMachineGunnerShoot', {start: 0, end: 2}),
            frameRate: 15,
            repeat: 0
        });
        this.anims.create({
            key: 'sniperShoot',
            frames: this.anims.generateFrameNumbers('spritesheetEnnemySniperShoot', {start: 0, end: 2}),
            frameRate: 15,
            repeat: 0
        });
        this.anims.create({
            key: 'launcherShoot',
            frames: this.anims.generateFrameNumbers('spritesheetEnnemyGrenadeLauncherShoot', {start: 0, end: 2}),
            frameRate: 15,
            repeat: 0
        });
    //}

    }

    init(data) {
        this.data = data
    }

    preload() {
    }

    create(data) {


        if (level == "level1") {
            this.map = this.make.tilemap({key: 'level1'});
        }
        if (level == "level2") {
            this.map = this.make.tilemap({key: 'level2'});
        }
        if (level == "level3") {
            this.map = this.make.tilemap({key: 'level3'});
        }
        if (level == "level4") {
            this.map = this.make.tilemap({key: 'level4'});
        }

        this.declareVariables()


        console.timeEnd('1')

        console.time('2')
        this.keyboardGameModeButton = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.80, (this.cameras.main.centerY * 2) * 0.1, 'keyboardGameModeButton').setScrollFactor(0).setScale(1).setDepth(10).setOrigin(0.5, 0.5).setInteractive().setAlpha(1);
        this.mobileGameModeButton = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.80, (this.cameras.main.centerY * 2) * 0.1, 'mobileGameModeButton').setScrollFactor(0).setScale(1).setDepth(10).setOrigin(0.5, 0.5).setInteractive().setAlpha(0);
        this.controllerGameModeButton = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.80, (this.cameras.main.centerY * 2) * 0.1, 'controllerGameModeButton').setScrollFactor(0).setScale(1.5).setDepth(10).setOrigin(0.5, 0.5).setInteractive().setAlpha(0);


        console.timeEnd('2')
        console.time('3')
    /*    this.mobileGameModeButton.on('pointerdown', () => {
            this.keyboardGameModeButton.setAlpha(1)
            this.mobileGameModeButton.setAlpha(0)
            gameSupport = "keyboard"
            this.destroyMobileUi()
        });*/
        this.keyboardGameModeButton.on('pointerdown', () => {
            this.keyboardGameModeButton.setAlpha(0)
            this.controllerGameModeButton.setAlpha(1)
            gameSupport = "controller"
        });
        this.controllerGameModeButton.on('pointerdown', () => {
            this.controllerGameModeButton.setAlpha(0)
            this.keyboardGameModeButton.setAlpha(1)
            gameSupport = "keyboard"
        //    this.createMobileUi()
        });


        console.timeEnd('3')
        console.time('4')
        this.loadAnimations()


        console.timeEnd('4')
        console.time('5')
        this.bg_0 = this.add.tileSprite(0, (this.cameras.main.centerY * 2) , 8960, 448, "bg_0").setDepth(-10).setScale(1.5);
        this.bg_0.setOrigin(0, 0.75)
        this.bg_0.setScrollFactor(0.05);

         this.bg_1 = this.add.tileSprite(0 , (this.cameras.main.centerY * 2), 8960, 448, "bg_1").setDepth(-10).setScale(1);
         this.bg_1.setOrigin(0, 0.60);
         this.bg_1.setScrollFactor(0.3);

         this.bg_2 = this.add.tileSprite(0, (this.cameras.main.centerY * 2) , 8960, 448, "bg_2").setDepth(-10).setScale(1);
         this.bg_2.setOrigin(0,0.10);
         this.bg_2.setScrollFactor(0.6);




        console.timeEnd('5')
        console.time('6')
        this.tileset = this.map.addTilesetImage('tileset', 'tiles');
        this.background = this.map.createLayer('background', this.tileset, 0, 0);
        this.platform = this.map.createLayer('platform', this.tileset, 0, 0);
        var platformEscalierDroit = this.map.createLayer('platformEscalierDroit', this.tileset, 0, 0);
        var platformEscalierGauche = this.map.createLayer('platformEscalierGauche', this.tileset, 0, 0);
        this.platformMontagne = this.map.createLayer('platformMontagne', this.tileset, 0, 0);
        var platformSnow = this.map.createLayer('platformSnow', this.tileset, 0, 0);
        var platformIce = this.map.createLayer('platformIce', this.tileset, 0, 0);
        var pics = this.map.createLayer('pics', this.tileset, 0, 0);


        console.timeEnd('6')
        console.time('7')
        this.platform.setCollisionByExclusion(-1, true);
        pics.setCollisionByExclusion(-1, true);
        platformEscalierDroit.setCollisionByExclusion(-1, true);
        platformEscalierGauche.setCollisionByExclusion(-1, true);
        this.platformMontagne.setCollisionByExclusion(-1, true);
        platformSnow.setCollisionByExclusion(-1, true);
        platformIce.setCollisionByExclusion(-1, true);


        console.timeEnd('7')

        console.time('8')
        /////////////////////////////////////////
        /////////////PLAYER//////////////////////
        teleportationsLeftText = this.add.text((this.cameras.main.centerX * 2) * 0.925, (this.cameras.main.centerY * 2) * 0.15, teleportationsLeft, {
            fill: '#fff',
            size: 200
        }).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
      //  var teleportationsLeftImage = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.975, (this.cameras.main.centerY * 2) * 0.15, 'teleport').setScrollFactor(0).setScale(0.04).setDepth(1).setRotation(0.9).setOrigin(0.5, 0.5);
        shurikenLeftText = this.add.text((this.cameras.main.centerX * 2) * 0.925, (this.cameras.main.centerY * 2) * 0.075, shurikenLeft, {
            fill: '#fff',
            size: 200
        }).setScale(2).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
        var shurikenLeftImage = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.975, (this.cameras.main.centerY * 2) * 0.075, 'shuriken').setScrollFactor(0).setScale(1).setDepth(1).setRotation(0.9).setOrigin(0.5, 0.5);
        textPieces = this.add.text((this.cameras.main.centerX * 2) * 0.1, (this.cameras.main.centerY * 2) * 0.05, totalCoins, {
            fill: '#fff',
            size: 200
        }).setScrollFactor(0).setDepth(1).setOrigin(0.5, 0.5);
        var pieces = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.025, (this.cameras.main.centerY * 2) * 0.05, 'coin').setScrollFactor(0).setScale(0.5).setDepth(1).setOrigin(0.5, 0.5);

        console.log(pvPlayer)
        this.backgroundBarHealth = this.add.tileSprite((this.cameras.main.centerX * 2) * 0.4, (this.cameras.main.centerY * 2) * 0.1, (this.cameras.main.centerX * 2) / 4.5, (this.cameras.main.centerY * 2) / 7.5, 'backgroundBarHealth').setScrollFactor(0).setScale(1).setDepth(1).setAlpha(1).setOrigin(0, 0.5);
        this.pvPlayerText = this.add.text((this.cameras.main.centerX * 2) * 0.4125, (this.cameras.main.centerY * 2) * 0.1, pvPlayer, {
            fill: '#0f0',
            size: 200
        }).setScrollFactor(0).setDepth(2).setOrigin(0.5, 0.5);
        this.greenBarHealth = this.add.tileSprite((this.cameras.main.centerX * 2) * 0.4, (this.cameras.main.centerY * 2) * 0.1, (this.cameras.main.centerX * 2) * pvPlayer / 100 / 4.5, (this.cameras.main.centerY * 2) / 7.5, 'healthBarGreen').setScrollFactor(0).setScale(1).setDepth(1).setAlpha(1).setOrigin(0, 0.5);
        this.katanaHealth = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.29, (this.cameras.main.centerY * 2) * 0.1, 'katanaHealthImage1').setScrollFactor(0).setScale(0.25).setDepth(1).setAlpha(1).setOrigin(0, 0.5).setFlipX(true);


        player = this.physics.add.sprite((this.cameras.main.centerX * 2) * 0.2, (this.cameras.main.centerY * 2) * 1.25, 'spritesheetPlayerNinjaWalking');
        player.setGravityY(1000)

        player.body.setSize(45, 90, false).setOffset(20, 5)
        player.setCollideWorldBounds(false)


        console.timeEnd('8')
        console.time('9')

/*
  this.anims.create({
      key: 'jumpUpNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 4, end: 4 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpDownNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 5, end: 5 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'crouchDownNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 6, end: 6 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'dieNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'throwShurikenNinja',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
}

if(playerSkin=="ninjaRouge"){
  this.anims.create({
      key: 'runNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 1, end: 3 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'idleNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpUpNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 4, end: 4 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpDownNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 5, end: 5 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'crouchDownNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinja',  {start: 6, end: 6 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'dieNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'throwShurikenNinjaRouge',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaRed',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
}


if(playerSkin=="ninjaGreen"){
  this.anims.create({
      key: 'runNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 1, end: 3 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'idleNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpUpNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 4, end: 4 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'jumpDownNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 5, end: 5 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'crouchDownNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 6, end: 6 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'dieNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'throwShurikenNinjaGreen',
      frames: this.anims.generateFrameNumbers('spritesheetPlayerNinjaGreen',  {start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
  });
}
*/


        this.physics.add.collider(player, platformEscalierDroit, this.playerEscalierDroit, null, this);
        this.physics.add.collider(player, platformEscalierGauche, this.playerEscalierGauche, null, this);
        this.physics.add.collider(player, pics, this.death, null, this);


        //////////////////////////////////////////////
        ///////////////////////////////////////////////


        console.timeEnd('9')


        console.time('10')

        this.camera = this.cameras.main.zoom = 1;

        this.cursors = this.input.keyboard.createCursorKeys();


        //this.cameras.main.startFollow(player, true, 1, 0, 0, 0);


        this.cameras.main
            .setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
            .startFollow(player);


        console.timeEnd('10')
        console.time('11')

        /*
this.anims.create({
  key: 'shurikenSpin',
  frames: this.anims.generateFrameNumbers('spritesheetShuriken',  {start: 0, end: 1 }),
  frameRate: 10,
  repeat: -1
});*/


        /////////////////////////////////////////
        //////////////Caisses//////////////////

        const caisseObjects = this.map.getObjectLayer('caisseDestructible').objects;
        this.caisses = this.physics.add.group({
            immovable: true,
            allowGravity: true
        });

        for (const caisse of caisseObjects) {
            this.caisses.create(caisse.x/* + caisse.width / 2*/, caisse.y /*- caisse.height / 2*/, 'caisse').setScale(0.1)
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
        }
        for (const caisse of this.caisses.children.entries) {
            caisse.pv = 2
        }

        this.physics.add.collider(this.caisses, player);
        this.physics.add.collider(this.caisses, this.platform);
        this.physics.add.collider(this.caisses, this.caisses);


        console.timeEnd('11')
        console.time('12')

        ///////////////////////////////////////
        ////////////SniperEnnemi////////////////////

        const bossObjects = this.map.getObjectLayer('boss').objects;
        this.bosses = this.physics.add.group({
            immovable: true,
        });

        for (const boss of bossObjects) {
            this.bosses.create(boss.x, boss.y - 20, 'soldatEnnemi')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
                .setGravityY(1000)
                .setOffset(0, 0)
               
        }

        for (const boss of this.bosses.children.entries) {
            boss.direction = 'LEFT';
        }
        this.physics.add.collider(this.bosses, this.platform);
        this.physics.add.collider(this.bosses, this.platformMontagne);
        this.physics.add.collider(this.bosses, this.caisses);


        /////////////////////////////////////////
        //////////////teleportItems//////////////////

        const teleportItemObjects = this.map.getObjectLayer('teleportItem').objects;
        this.teleportItems = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const teleportItem of teleportItemObjects) {
            this.teleportItems.create(teleportItem.x + teleportItem.width / 2, teleportItem.y - teleportItem.height / 2 - 4, 'teleport').setScale(0.025)
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
        }


        this.physics.add.overlap(this.teleportItems, player, this.pickUpTeleport, null, this);


        /////////////////////////////////////////
        //////////////shurikens//////////////////

        const shurikensItemObjects = this.map.getObjectLayer('shurikensItem').objects;
        this.shurikensItems = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const shurikensItem of shurikensItemObjects) {
            this.shurikensItems.create(shurikensItem.x + 8, shurikensItem.y - 3, 'shuriken').setScale(0.75)
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
        }


        console.timeEnd('12')
        console.time('13')
        this.physics.add.overlap(this.shurikensItems, player, this.pickUpShuriken, null, this);

        ///////////////////////////////////////
        ////////////Goomba////////////////////
        /*
  this.anims.create({
  key: 'castorRun',
  frames: this.anims.generateFrameNumbers('spritesheetCastor', { start: 0, end: 1 }),
  frameRate: 5,
  repeat: -1
});*/


        this.goombas = this.physics.add.group({
            allowGravity: true,
            immovable: true
        });

        const goombaObjects = this.map.getObjectLayer('goomba').objects;


        for (const goomba of goombaObjects) {
            this.goombas.create(goomba.x, goomba.y - 11, 'castor')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
                .setScale(1.5)
                .setGravityY(1000)
        }


        console.timeEnd('13')
        console.time('14')
        for (const goomba of this.goombas.children.entries) {
            goomba.direction = 'LEFT';
            goomba.isDed = false;
        }
        this.collider = this.physics.add.collider(player, this.goombas, this.death, null, this)
        this.physics.add.collider(this.goombas, this.platform);

        this.physics.add.collider(this.goombas, platformIce);
        this.physics.add.collider(this.goombas, platformSnow);
        this.physics.add.collider(this.goombas, this.platformMontagne);
        this.physics.add.collider(this.goombas, this.goombas);

        ///////////////////////////////////////
        ////////////picsInvisible////////////////////

        const picsInvisibleObjects = this.map.getObjectLayer('picsInvisible').objects;
        this.picsInvisible = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const picsInvisible of picsInvisibleObjects) {
            this.picsInvisible.create(picsInvisible.x + 8, picsInvisible.y - 3, 'picsInvisible').setScale(0.5).setAlpha(0)
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
        }

        for (const picsInvisible of this.picsInvisible.children.entries) {
            picsInvisible.collider = this.physics.add.collider(picsInvisible, player, this.showPicsInvisible, null, this);

        }


        console.timeEnd('14')
        console.time('15')
        ///////////////////////////////////////
        ////////////platformInvisible////////////////////

        const platformInvisibleObjects = this.map.getObjectLayer('platformInvisible').objects;
        this.platformInvisible = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const platformInvisible of platformInvisibleObjects) {
            this.platformInvisible.create(platformInvisible.x + 7, platformInvisible.y - 8, 'platformInvisible').setAlpha(0)
                .setOrigin(0.5, 0.5)
                .setDepth(-1)

        }

        for (const platformInvisible of this.platformInvisible.children.entries) {
            platformInvisible.collider = this.physics.add.collider(platformInvisible, player, this.showPlatformInvisible, null, this);

        }


        console.timeEnd('15')
        console.time('16')

        ///////////////////////////////////////
        ////////////lasersHorizontal////////////////////

        const laserHorizontalObjects = this.map.getObjectLayer('laserHorizontal').objects;
        this.lasersHorizontal = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const laserHorizontal of laserHorizontalObjects) {
            this.lasersHorizontal.create(laserHorizontal.x + laserHorizontal.width / 2, laserHorizontal.y - laserHorizontal.height / 2, 'laserHorizontal')
                .setOrigin(0.5, 0.5)
                .setDepth(1)
        }


        this.colliderLasersHorizontal = this.physics.add.overlap(player, this.lasersHorizontal, this.death, null, this)

        ///////////////////////////////////////
        ////////////lasersVertical///////////////////

        const laserVerticalObjects = this.map.getObjectLayer('laserVertical').objects;
        this.lasersVertical = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const laserVertical of laserVerticalObjects) {
            this.lasersVertical.create(laserVertical.x + laserVertical.width / 2, laserVertical.y - laserVertical.height / 2, 'laserVertical')
                .setOrigin(0.5, 0.5)
                .setDepth(1)
        }


        this.colliderLasersVertical = this.physics.add.overlap(player, this.lasersVertical, this.death, null, this)

        //////////////////////////////////////
        ////////////Drones////////////////////
        this.laserDrones = this.physics.add.group({
            immovable: true,
        });

        const droneObjects = this.map.getObjectLayer('drone').objects;
        this.drones = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const drone of droneObjects) {
            this.drones.create(drone.x + drone.width / 2, drone.y - drone.height / 2, 'drone')
                .setOrigin(0.5, 0.5)
                .setDepth(1)
        }
        for (const drone of this.drones.children.entries) {
            drone.pv = 3
        }

        this.physics.add.collider(player, this.drones, this.death, null, this)
        this.physics.add.collider(this.platform, this.drones)

        console.timeEnd('16')
        console.time('17')
        ///////////////////////////////////////
        ////////////platformMoving////////////////////

        const platformMovingObjects = this.map.getObjectLayer('platformMoving').objects;
        this.platformsMoving = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const platformMoving of platformMovingObjects) {
            this.platformsMoving.create(platformMoving.x + 7, platformMoving.y - 8, 'platformMoving')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
        }

        for (const platformMoving of this.platformsMoving.children.entries) {
            this.physics.add.collider(player, platformMoving, this.playerPlatformMoving, null, this)
            this.physics.add.collider(platformMoving, this.platform);
        }
        this.physics.add.collider(this.platformsMoving, this.platformsMoving)


        ///////////////////////////////////////
        ////////////platformFalling////////////////////

        const platformFallingObjects = this.map.getObjectLayer('platformFalling').objects;
        this.platformsFalling = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const platformFalling of platformFallingObjects) {
            this.platformsFalling.create(platformFalling.x + 8, platformFalling.y - 8, 'platformFalling')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)

        }

        for (const platformFalling of this.platformsFalling.children.entries) {
            platformFalling.collider = this.physics.add.collider(platformFalling, player, this.death, null, this);

        }
        ///////////////////////////////////////
        ////////////water//////////////////////

        const waterObjects = this.map.getObjectLayer('water').objects;
        this.waters = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const water of waterObjects) {
            this.waters.create(water.x + 7, water.y - 8, 'water').setScale(0.015)
                .setOrigin(0.5, 0.5)
                .setDepth(-1)

        }

        for (const water of this.waters.children.entries) {
            water.collider = this.physics.add.overlap(water, player, this.playerInWater, null, this);
        }
        ///////////////////////////////////////
        ////////////waterTop//////////////////////

        const waterTopObjects = this.map.getObjectLayer('waterTop').objects;
        this.watersTop = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const waterTop of waterTopObjects) {
            this.watersTop.create(waterTop.x + 7, waterTop.y - 8, 'water').setScale(0.015)
                .setOrigin(0.5, 0.5)
                .setDepth(-1)

        }

        for (const waterTop of this.watersTop.children.entries) {
            waterTop.collider = this.physics.add.overlap(waterTop, player, this.playerInWaterTop, null, this);
        }
        ///////////////////////////////////////
        ////////////platformFake////////////////////

        const platformFakeObjects = this.map.getObjectLayer('platformFake').objects;
        this.platformFake = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const platformFake of platformFakeObjects) {
            this.platformFake.create(platformFake.x + 8, platformFake.y - 8, 'platformFake')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)

        }

        for (const platformFake of this.platformFake.children.entries) {
            platformFake.collider = this.physics.add.overlap(platformFake, player, this.destroyPlatformFake, null, this);

        }

///////////////////////////////////////
        ////////////LanceursGrenades////////////////////
        this.grenadesLanceGrenade = this.physics.add.group({});


        const lanceGrenadesObjects = this.map.getObjectLayer('lanceGrenade').objects;
        this.lanceGrenades = this.physics.add.group({
            immovable: true,
        });

        for (const lanceGrenade of lanceGrenadesObjects) {
            this.lanceGrenades.create(lanceGrenade.x, lanceGrenade.y - 20, 'launcherEnnemi')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
                .setGravityY(1000)
                //.setSize(50, 55, true)
                .setOffset(0, 0)
                .setScale(1)
        }


        console.timeEnd('17')
        console.time('18')

        for (const lanceGrenade of this.lanceGrenades.children.entries) {
            lanceGrenade.direction = 'RIGHT';
        }
        this.physics.add.collider(this.lanceGrenades, this.platform);

///////////////////////////////////////
        ////////////LanceursRoquettes////////////////////
        this.roquettesLanceRoquettes = this.physics.add.group({});


        const lanceRoquettesObjects = this.map.getObjectLayer('lanceRoquette').objects;
        this.lanceRoquettes = this.physics.add.group({
            immovable: true,
        });

        for (const lanceRoquette of lanceRoquettesObjects) {
            this.lanceRoquettes.create(lanceRoquette.x, lanceRoquette.y - 20, 'launcherEnnemi')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
                .setOffset(0, 0)
                .setScale(1)
                .setGravityY(1000)
        }


        for (const lanceRoquette of this.lanceRoquettes.children.entries) {
            lanceRoquette.direction = 'RIGHT';
        }
        this.physics.add.collider(this.lanceRoquettes, this.platform);


///////////////////////////////////////
        ////////////SniperEnnemi////////////////////
        this.ballesSnipers = this.physics.add.group({
            immovable: true,
        });
        /*
  this.anims.create({
  key: 'soldierShoot',
  frames: this.anims.generateFrameNumbers('spritesheetSoldatEnnemi', { start: 0, end: 1 }),
  frameRate: 5,
  repeat: 0
});*/

        const sniperEnnemiObjects = this.map.getObjectLayer('sniperEnnemi').objects;
        this.sniperEnnemis = this.physics.add.group({
            immovable: true,
        });

        for (const sniperEnnemi of sniperEnnemiObjects) {
            this.sniperEnnemis.create(sniperEnnemi.x, sniperEnnemi.y - 20, 'sniperEnnemi')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
                .setGravityY(1000)
                //.setSize(50, 55, true)
                .setOffset(0, 0)
                .setScale(1)
        }

        for (const sniperEnnemi of this.sniperEnnemis.children.entries) {
            sniperEnnemi.direction = 'RIGHT';
        }
        this.physics.add.collider(this.sniperEnnemis, this.platform);


        console.timeEnd('18')
        console.time('19')

        ///////////////////////////////////////
        ////////////MachineGunnerennemi////////////////////
        this.ballesMachineGunners = this.physics.add.group({
            immovable: true,
        });


        /*
  this.anims.create({
  key: 'soldierShoot',
  frames: this.anims.generateFrameNumbers('spritesheetSoldatEnnemi', { start: 0, end: 1 }),
  frameRate: 5,
  repeat: 0
});*/


        const machineGunnerEnnemiObjects = this.map.getObjectLayer('machineGunnerEnnemi').objects;
        this.machineGunnerEnnemis = this.physics.add.group({
            immovable: true,
        });

        for (const machineGunnerEnnemi of machineGunnerEnnemiObjects) {
            this.machineGunnerEnnemis.create(machineGunnerEnnemi.x, machineGunnerEnnemi.y - 20, 'machineGunnerEnnemi')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
                .setGravityY(1000)
                //.setSize(50, 55, true)
                .setOffset(0, 0)
                .setScale(1)
        }


        for (const machineGunnerEnnemi of this.machineGunnerEnnemis.children.entries) {
            machineGunnerEnnemi.direction = 'RIGHT';
        }
        this.physics.add.collider(this.machineGunnerEnnemis, this.platform);
        this.physics.add.collider(this.machineGunnerEnnemis, platformIce);
        this.physics.add.collider(this.machineGunnerEnnemis, platformSnow);
        this.physics.add.collider(this.machineGunnerEnnemis, this.platformMontagne);


        ///////////////////////////////////////
        ////////////Yeti////////////////////
        this.ballesSoldats = this.physics.add.group({
            immovable: true,
        });

        /*
  this.anims.create({
  key: 'soldierShoot',
  frames: this.anims.generateFrameNumbers('spritesheetSoldatEnnemi', { start: 0, end: 1 }),
  frameRate: 5,
  repeat: 0
});*/


        const yetiObjects = this.map.getObjectLayer('yeti').objects;
        this.yetis = this.physics.add.group({
            immovable: true,
        });

        for (const yeti of yetiObjects) {
            this.yetis.create(yeti.x, yeti.y - 20, 'soldatEnnemi')
                .setOrigin(0.5, 0.5)
                .setDepth(-1)
                .setGravityY(1000)
                //.setSize(50, 55, true)
                .setScale(1)
        }


        console.timeEnd('19')
        console.time('20')

        for (const yeti of this.yetis.children.entries) {
            yeti.direction = 'RIGHT';
        }
        this.physics.add.collider(this.yetis, this.platform);
        this.physics.add.collider(this.yetis, platformIce);
        this.physics.add.collider(this.yetis, platformSnow);
        this.physics.add.collider(this.yetis, this.platformMontagne);


        ///////////////////////////////////////
        ////////////Snowman////////////////////

        const snowmanObjects = this.map.getObjectLayer('snowman').objects;
        this.snowmen = this.physics.add.group();

        for (const snowman of snowmanObjects) {
            this.snowmen.create(snowman.x + snowman.width / 2, snowman.y - snowman.height / 2, 'snowman').setScale(1)
                .setOrigin(0.5, 0.5)
                .setGravityY(1000)
        }


        for (const snowman of this.snowmen.children.entries) {
            snowman.collider = this.physics.add.overlap(snowman, player, this.degatSnowmanJoueur, null, this);

        }
        this.physics.add.collider(this.snowmen, this.platform);
        this.physics.add.collider(this.snowmen, this.platformsFalling);
        this.physics.add.collider(this.snowmen, this.snowmen);

//  this.physics.world.OVERLAP_BIAS = 10000

        ///////////////////////////////////////
        ////////////Pièces////////////////////

        const coinObjects = this.map.getObjectLayer('coin').objects;
        this.coins = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const coin of coinObjects) {
            this.coins.create(coin.x + 8, coin.y - 9, 'coin').setScale(0.5)
                .setOrigin(0.5, 0.5)
                .setDepth(-1);
        }


        for (const coin of this.coins.children.entries) {
            coin.collider = this.physics.add.overlap(coin, player, this.collectCoin, null, this);
        }


        ///////////////////////////////////////
        ////////////PowerUpHealth////////////

        const powerUpHealthObjects = this.map.getObjectLayer('powerUpHealth').objects;
        this.powerUpHealth = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const powerUpHealth of powerUpHealthObjects) {
            this.powerUpHealth.create(powerUpHealth.x + 8, powerUpHealth.y - 10, 'powerUpHealth')
                .setOrigin(0.5, 0.5)
                .setDepth(-1);

        }


        for (const powerUpHealth of this.powerUpHealth.children.entries) {
            powerUpHealth.collider = this.physics.add.overlap(powerUpHealth, player, this.collectHealthPlayer, null, this);
        }


        ///////////////////////////////////////
        ////////////arrivée////////////////////

        const flagObjects = this.map.getObjectLayer('flag').objects;
        this.flag = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        for (const flag of flagObjects) {
            this.flag.create(flag.x + 40, flag.y - 22, 'flag')
                .setOrigin(0.5, 0.5)
                .setDepth(-1);
        }


        console.timeEnd('20')
        console.time('21')


        for (const flag of this.flag.children.entries) {
            flag.collider = this.physics.add.overlap(flag, player, this.contactDrapeau, null, this);
        }


        ///////////////////////////////////////
        ///////////////////////////////////////


        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //  A simple background for our game
        // this.add.image(400, 300, 'sky');

        //  The platforms group contains the ground and the 2 ledges we can jump on
        // platforms = this.physics.add.staticGroup();

        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        // platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        //  Now let's create some ledges
        // platforms.create(600, 400, 'ground');
        // platforms.create(50, 250, 'ground');
        // platforms.create(750, 220, 'ground');

        // The player and its settings

        //  Player physics properties. Give the little guy a slight bounce.


        //  Our player animations, turning, walking left and walking right.


        cursors = this.input.keyboard.createCursorKeys();


        this.cacAttaques = this.physics.add.group();

        shurikens = this.physics.add.group();

        teleportations = this.physics.add.group();

        snowballs = this.physics.add.group();


        shuriken = this.physics.add.group();
        //  The score


        console.timeEnd('21')
        console.time('22')
        //  Collide the player and the stars with the platforms

        //this.physics.add.collider(healthPowerUp, platform);
        this.physics.add.collider(teleportations, this.platformMontagne);
        this.physics.add.collider(teleportations, this.platform);
        this.physics.add.collider(this.bosses, shurikens, this.damageBoss, null, this);

        this.physics.add.collider(shurikens, this.platform, this.destroyShuriken, null, this);
        this.physics.add.collider(shurikens, platformIce, this.destroyShuriken, null, this);
        this.physics.add.collider(shurikens, platformSnow, this.destroyShuriken, null, this);
        this.physics.add.collider(shurikens, this.platformFake, this.destroyShuriken, null, this);
        this.physics.add.collider(shurikens, snowballs, this.destroyShurikenSnowball, null, this);
        this.physics.add.collider(shurikens, pics, this.destroyShurikenPics, null, this);
        this.physics.add.collider(shurikens, this.drones, this.damageDrone, null, this)

        this.colliderShurikenLaserHorizontal = this.physics.add.collider(shurikens, this.lasersHorizontal, this.killShuriken, null, this);
        this.colliderShurikenLaserVertical = this.physics.add.collider(shurikens, this.lasersVertical, this.killShuriken, null, this);


        this.physics.add.collider(snowballs, this.platform, this.destroyBalle, null, this);
        this.physics.add.collider(snowballs, platformIce, this.destroyBalle, null, this);
        this.physics.add.collider(snowballs, platformSnow, this.destroyBalle, null, this);
        this.physics.add.collider(snowballs, this.platformFake, this.destroyBalle, null, this);
        this.physics.add.collider(snowballs, snowballs, this.destroyBalle, null, this);
        this.physics.add.collider(snowballs, pics, this.destroyBalle, null, this);
        this.physics.add.collider(player, this.goomba, this.death, null, this);

        this.physics.add.collider(this.platformMontagne, this.ballesSoldats, this.destroyBalle, null, this)
        this.physics.add.collider(this.platform, this.ballesSoldats, this.destroyBalle, null, this)
        this.physics.add.collider(this.platform, this.ballesSnipers, this.destroyBalle, null, this)
        this.physics.add.collider(this.platform, this.ballesMachineGunners, this.destroyBalle, null, this)

        this.physics.add.collider(this.caisses, this.ballesSoldats, this.breakCaisse, null, this);
        this.physics.add.collider(this.caisses, this.ballesSnipers, this.breakCaisse, null, this);
        this.physics.add.collider(this.caisses, this.ballesMachineGunners, this.breakCaisse, null, this);


        console.timeEnd('22')
        console.time('23')
//   this.physics.add.collider(shuriken, platform);

//   this.physics.add.collider(shuriken, platformSnow);


        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar
//   this.physics.add.overlap(player,healthPowerUp , collectHealthPlayer, null, this);


        this.physics.add.collider(this.caisses, shurikens, this.breakCaisse, null, this);
        this.physics.add.overlap(this.yetis, shurikens, this.killYeti, null, this);
        this.physics.add.overlap(this.lanceRoquettes, shurikens, this.killLanceGrenade, null, this);
        this.physics.add.overlap(this.lanceGrenades, shurikens, this.killLanceGrenade, null, this);
        this.physics.add.overlap(this.machineGunnerEnnemis, shurikens, this.killMachineGunner, null, this);
        this.physics.add.overlap(this.sniperEnnemis, shurikens, this.killSniperEnnemi, null, this);


        this.physics.add.overlap(this.bosses, this.cacAttaques, this.damageBossCac, null, this);
        this.physics.add.overlap(this.yetis, this.cacAttaques, this.killYeti, null, this);
        this.physics.add.overlap(this.lanceRoquettes, this.cacAttaques, this.killLanceGrenade, null, this);
        this.physics.add.overlap(this.lanceGrenades, this.cacAttaques, this.killLanceGrenade, null, this);
        this.physics.add.overlap(this.machineGunnerEnnemis, this.cacAttaques, this.killMachineGunner, null, this);
        this.physics.add.overlap(this.sniperEnnemis, this.cacAttaques, this.killSniperEnnemi, null, this);

        this.physics.add.collider(player, this.platform, this.setSpeedPlatform, null, this);

        this.physics.add.collider(player, this.platformMontagne, this.bouncePlatformMontagne, null, this);

        this.physics.add.collider(player, platformSnow, this.setSpeedPlatformSnow, null, this);
        this.physics.add.collider(player, platformIce, this.setSpeedPlatformIce, null, this);


        console.timeEnd('23')
        console.time('24')

        /////////////////


        rectCrouchPlayer = this.physics.add.sprite(0, 0, 'spritesheetPlayerNinja').setAlpha(0.2);

        console.timeEnd('24')

        this.data.sound.walking.play()
    }

    update() {
        if (pvPlayer > 0) {

            /*
if(gameSupport=="mobile"){
    if((((Math.floor(this.joyStickMovement.angle * 100) / 100 )<180 && (Math.floor(this.joyStickMovement.angle * 100) / 100 )>100) || ((Math.floor(this.joyStickMovement.angle * 100) / 100 )>-180  && (Math.floor(this.joyStickMovement.angle * 100) / 100 )<-100)) && (Math.floor(this.joyStickMovement.force * 100) / 100 )>20){
        this.goLeft()
    }
    if((((Math.floor(this.joyStickMovement.angle * 100) / 100 )<90 && (Math.floor(this.joyStickMovement.angle * 100) / 100 )>10) || ((Math.floor(this.joyStickMovement.angle * 100) / 100 )>-90  && (Math.floor(this.joyStickMovement.angle * 100) / 100 )<-10))&& (Math.floor(this.joyStickMovement.force * 100) / 100 )>20){
        this.goRight()
    }
    if((Math.floor(this.joyStickMovement.force * 100) / 100)<20){
        player.setVelocityX(0)
    }



    if((Math.floor(this.joyStickShoot.force * 100) / 100)>20)  {
         nextReleaseShot=true
         nextShotOrientation = (Math.floor(this.joyStickShoot.angle * 100) / 100 ) /90
         if(((Math.floor(this.joyStickShoot.angle * 100) / 100 )<180 && (Math.floor(this.joyStickShoot.angle * 100) / 100 )>100) || ((Math.floor(this.joyStickShoot.angle * 100) / 100 )>-180  && (Math.floor(this.joyStickShoot.angle * 100) / 100 )<-100))
            {
                nextShotMobileDirection="left"
            }
            if(((Math.floor(this.joyStickShoot.angle * 100) / 100 )<90 && (Math.floor(this.joyStickShoot.angle * 100) / 100 )>10) || ((Math.floor(this.joyStickShoot.angle * 100) / 100 )>-90  && (Math.floor(this.joyStickShoot.angle * 100) / 100 )<-10)){
                nextShotMobileDirection="right"
            }
        }

if(nextReleaseShot==true && (Math.floor(this.joyStickShoot.force * 100) / 100)<20){

    if(shurikenPlayer == "true"){

        if(nextReleaseShot=true && nextShotMobile=="teleport" && teleportationsLeft>0){
            shurikenPlayer = "false";
            nextReleaseShot=false
            console.log("teleport")
        this.lancerTeleportMobile(player);

        }
        if(nextShotMobile =="shuriken"){

            shurikenPlayer = "false";
            nextReleaseShot=false
            this.lancerShurikenMobile(player);
        }

    }
    nextReleaseShot=false
}
if(currentlyCrouching==false){

    if(!(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y-45) || this.platform.hasTileAtWorldXY(player.body.position.x+45, player.body.position.y-45 ) || this.platform.hasTileAtWorldXY(player.body.position.x+45/2, player.body.position.y-45)  || this.platform.hasTileAtWorldXY(player.body.position.x+45/2, player.body.position.y-45) ) &&  !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y-20) || this.platform.hasTileAtWorldXY(player.body.position.x+20, player.body.position.y-20 ) || this.platform.hasTileAtWorldXY(player.body.position.x+45/2, player.body.position.y-20)  || this.platform.hasTileAtWorldXY(player.body.position.x+45/2, player.body.position.y-20)) &&  !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y-10) || this.platform.hasTileAtWorldXY(player.body.position.x+20, player.body.position.y-10 ) || this.platform.hasTileAtWorldXY(player.body.position.x+45/2, player.body.position.y-10)  || this.platform.hasTileAtWorldXY(player.body.position.x+45/2, player.body.position.y-10))  ) {
        if(uncrouchPossible==true){
            player.body.setSize(45, 90, false).setOffset(20, 0);
        }
            else{
                uncrouchPossible = true;
            }
    }
}



}*/


            rectCrouchPlayer.destroy()
            rectCrouchPlayer = this.physics.add.sprite(player.x, player.y, 'spritesheetPlayerNinja').setAlpha(0).setOffset(20, 5);
            rectCrouchPlayer.body.setSize(45, 90, true)
            this.physics.add.overlap(rectCrouchPlayer, this.caisses, this.uncrouchDisabled, null, this);


            for (const drone of this.drones.children.entries) {
                if (Math.abs(drone.x - player.x) < this.cameras.main.centerX * 2) {

                    this.physics.moveTo(drone, player.x, player.y - 200, vitesseDeplacementDrone);
                }
            }
            cooldownTirDrone--
            if (cooldownTirDrone <= 0) {
                cooldownTirDrone = cooldownTirDroneReset
                this.tirDrones();
            }


            /*  for (const drone of this.drones.children.entries) {

        line =  new Phaser.Geom.Line(drone.x, drone.y, player.x, player.y);
    }
    graphics.clear();
    graphics.lineStyle(4, 0xffffff);
    graphics.strokeLineShape(line);
*/


            velociteChute = player.body.velocity.y;

            /////////////


            if (playerInWater == true) {

                gravity = 100
                player.setGravityY(100)
            }
            if (playerInWater == false) {
                gravity = 1000
                player.setGravityY(1000)
            }


            for (const platformFalling of this.platformsFalling.children.entries) {
                if (player.x > platformFalling.x && player.x < platformFalling.x + 35 && player.y > platformFalling.y) {
                    platformFalling.setVelocityY(600)
                }

            }

///////////////////////////////////////////////////////
//////////////////////////BOSS/////////////////////////
            cooldownTirSoldatBossBeforeShoot--
            if (cooldownTirSoldatBossBeforeShoot <= 0) {
                cooldownTirSoldatBossBeforeShoot = cooldownTirSoldatBoss
                this.tirSoldatBoss();
            }

            cooldownTirSniperBossBeforeShoot--
            if (cooldownTirSniperBossBeforeShoot <= 0) {
                cooldownTirSniperBossBeforeShoot = cooldownTirSniperBoss
                this.tirSniperBoss();
            }

            cooldownTirMachineGunnerBossBeforeShoot--
            if (cooldownTirMachineGunnerBossBeforeShoot <= 0) {
                cooldownTirMachineGunnerBossBeforeShoot = cooldownTirMachineGunnerBoss
                this.tirMachineGunnerBoss();
            }

            cooldownTirLanceGrenadeBossBeforeShoot--
            if (cooldownTirLanceGrenadeBossBeforeShoot <= 0) {
                cooldownTirLanceGrenadeBossBeforeShoot = cooldownTirLanceGrenadeBoss
                this.tirLanceGrenadeBoss();
            }

            cooldownTirLanceRoquetteBossBeforeShoot--
            if (cooldownTirLanceRoquetteBossBeforeShoot <= 0) {
                cooldownTirLanceRoquetteBossBeforeShoot = cooldownTirLanceRoquetteBoss
                this.tirLanceRoquetteBoss();
            }

            cooldownRecalculationRoquetteDirectionBoss--
            if (cooldownRecalculationRoquetteDirectionBoss <= 0) {
                cooldownRecalculationRoquetteDirectionBoss = cooldownRecalculationRoquetteDirectionResetBoss
                for (const roquetteLanceRoquette of this.roquettesLanceRoquettes.children.entries) {
                    this.physics.moveTo(roquetteLanceRoquette, player.x, player.y, vitesseRoquetteLanceRoquetteEnnemi);
                    roquetteLanceRoquette.rotation = Phaser.Math.Angle.BetweenPoints(player, roquetteLanceRoquette);
                }
            }
/////////////////Bouger boss//////////////////////
            for (const boss of this.bosses.children.entries) {

                if (boss.body.blocked.right) {
                    boss.direction = 'LEFT';
                }

                if (boss.body.blocked.left) {
                    boss.direction = 'RIGHT';
                }

                if (boss.direction === 'RIGHT') {
                    boss.setVelocityX(100);
                } else {
                    boss.setVelocityX(-100);
                }


            }


            for (const goomba of this.goombas.children.entries) {

                if (goomba.body.blocked.right) {
                    goomba.direction = 'LEFT';
                    goomba.play('castorRun', true).setFlipX(false);
                }

                if (goomba.body.blocked.left) {
                    goomba.direction = 'RIGHT';
                    goomba.play('castorRun', true).setFlipX(true);
                }

                if (goomba.direction === 'RIGHT') {
                    goomba.setVelocityX(300);
                } else {
                    goomba.setVelocityX(-300);
                }


            }
            /*for (const yeti of this.yetis.children.entries) {
      if (yeti.body.blocked.right) {
          yeti.direction = 'LEFT';
      }

      if (yeti.body.blocked.left) {
          yeti.direction = 'RIGHT';
      }

      if (yeti.direction === 'RIGHT') {
          yeti.setVelocityX(150);
      } else {
          yeti.setVelocityX(-150);
      }


  }*/


            for (const platformMoving of this.platformsMoving.children.entries) {
                if (platformMoving.body.blocked.right) {
                    platformMoving.direction = 'LEFT';
                }

                if (platformMoving.body.blocked.left) {
                    platformMoving.direction = 'RIGHT';
                }

                if (platformMoving.direction === 'RIGHT') {
                    platformMoving.setVelocityX(100);
                } else {
                    platformMoving.setVelocityX(-100);
                }
            }


            cooldownTirSoldatEnnemiBeforeShoot--
            if (cooldownTirSoldatEnnemiBeforeShoot <= 0) {
                cooldownTirSoldatEnnemiBeforeShoot = cooldownTirSoldatEnnemi
                this.tirSoldatEnnemi();
            }

            cooldownTirSniperEnnemiBeforeShoot--
            if (cooldownTirSniperEnnemiBeforeShoot <= 0) {
                cooldownTirSniperEnnemiBeforeShoot = cooldownTirSniperEnnemi
                this.tirSniperEnnemi();
            }

            cooldownTirMachineGunnerEnnemiBeforeShoot--
            if (cooldownTirMachineGunnerEnnemiBeforeShoot <= 0) {
                cooldownTirMachineGunnerEnnemiBeforeShoot = cooldownTirMachineGunnerEnnemi
                this.tirMachineGunnerEnnemi();
            }

            cooldownTirLanceGrenadeEnnemiBeforeShoot--
            if (cooldownTirLanceGrenadeEnnemiBeforeShoot <= 0) {
                cooldownTirLanceGrenadeEnnemiBeforeShoot = cooldownTirLanceGrenadeEnnemi
                this.tirLanceGrenadeEnnemi();
            }

            cooldownTirLanceRoquetteEnnemiBeforeShoot--
            if (cooldownTirLanceRoquetteEnnemiBeforeShoot <= 0) {
                cooldownTirLanceRoquetteEnnemiBeforeShoot = cooldownTirLanceRoquetteEnnemi
                this.tirLanceRoquetteEnnemi();
            }

            cooldownActivationLaserHorizontal--
            if (cooldownActivationLaserHorizontal <= 0) {
                cooldownActivationLaserHorizontal = cooldownActivationLaserHorizontalReset
                this.activateLaserHorizontal();
            }

            cooldownActivationLaserVertical--
            if (cooldownActivationLaserVertical <= 0) {
                cooldownActivationLaserVertical = cooldownActivationLaserVerticalReset
                this.activateLaserVertical();
            }

            cooldownRecalculationRoquetteDirection--
            if (cooldownRecalculationRoquetteDirection <= 0) {
                cooldownRecalculationRoquetteDirection = cooldownRecalculationRoquetteDirectionReset
                for (const roquetteLanceRoquette of this.roquettesLanceRoquettes.children.entries) {
                    this.physics.moveTo(roquetteLanceRoquette, player.x, player.y, vitesseRoquetteLanceRoquetteEnnemi);
                    roquetteLanceRoquette.rotation = Phaser.Math.Angle.BetweenPoints(player, roquetteLanceRoquette);
                }
            }

            if (shurikenPlayer == "false") {
                delaiShurikenPlayer--
            }
            if (delaiShurikenPlayer <= 0 && shurikenPlayer == "false") {
                delaiShurikenPlayer = cooldownShuriken;

                shurikenPlayer = "true";
            }


            if (gameSupport == "keyboard") {
                this.input.on('pointerdown', function (pointer) {
                    if (shurikenPlayer == "true" && shurikenPowerUpActive == true && gameSupport == "keyboard") {
                        if (keyA.isDown && teleportationsLeft > 0) {
                            shurikenPlayer = "false";

                            this.lancerTeleport(player);
                        } else if (keyA.isUp) {
                            shurikenPlayer = "false";
                            this.lancershuriken(player);
                        }
                        keyA.reset();

                    }
                }, this);


                if (spaceBar.isDown) {
                    if (playerDirection == 'right') {
                        var cacAttaque = this.cacAttaques.create(player.x + 40, player.y - 3, 'cacAttaque').setScale(0.1)
                            .setOrigin(0.5, 0.5)
                            .setDepth(-1)
                    }
                    if (playerDirection == 'left') {
                        var cacAttaque = this.cacAttaques.create(player.x - 40, player.y - 3, 'cacAttaque').setScale(0.1)
                            .setOrigin(0.5, 0.5)
                            .setDepth(-1)
                            .setFlipX(true)
                    }
                    this.data.sound.cacShot.play()

                    this.time.delayedCall(50, this.stopSlash, [cacAttaque], this);
                    spaceBar.reset()
                }


                if (player.body.blocked.down || player.body.touching.down) {
                    standing = true
                }
                if (player.body.blocked.down == false && player.body.touching.down == false && playerContactCaisse == false) {
                    standing = false
                }
                playerContactCaisse = false


                if (keyQ.isDown) {
                    this.goLeft();
                }
                if (keyD.isDown) {
                    this.goRight();
                }
                if (keyZ.isDown) {
                    if (standing == true || playerInWater == true) {
                        this.jump()
                    }
                }


                if (standing == false) {
                    jumpingPlayer = true
                }

                if (standing == true) {
                    jumpingPlayer = false
                }


                if ((keyS.isDown) && (standing == true || playerInWater == true)) {
                    player.body.setSize(45, 45, true);
                    player.body.setOffset(20, 45);
                    player.anims.play('ninjaCrouch');
                    if (playerSkin == "ninja") {
                        //    player.anims.play('crouchDownNinja');
                    }
                    if (playerSkin == "ninjaRouge") {
                        //  player.anims.play('crouchDownNinjaRouge');
                    }
                    if (playerSkin == "ninjaGreen") {
                        // player.anims.play('crouchDownNinjaGreen');
                    }
                }


                if ((keyS.isUp) && !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 45)) && !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + 20, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 20)) && !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 10) || this.platform.hasTileAtWorldXY(player.body.position.x + 20, player.body.position.y - 10) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 10) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 10))) {
                    if (uncrouchPossible == true) {
                        player.body.setSize(45, 90, false).setOffset(20, 5);

                    } else {
                        console.log("uncrouch")
                        uncrouchPossible = true;
                    }
                }

                if ((keyS.isUp) && (this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 45))) {
                    player.anims.play('ninjaCrouch');

                    if (playerSkin == "ninja") {
                        // player.anims.play('crouchDownNinja');
                    }
                    if (playerSkin == "ninjaRouge") {
                        //player.anims.play('crouchDownNinjaRouge');
                    }
                    if (playerSkin == "ninjaGreen") {
                        // player.anims.play('crouchDownNinjaGreen');
                    }
                }


                if (player.body.blocked.down || playerInWater) {
                    standing = true
                }


                if (keyD.isUp && keyQ.isUp && playerCanResetVelocity == true) {

                    player.setAccelerationX(0);
                    player.setVelocityX(0);
                    

                    this.data.sound.walking.pause()

                    if (keyS.isUp) {
                        if (!(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + player.body.width, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 20))) {
                         /*   if (playerSkin == "ninja") {
                                // player.anims.play('idleNinja',true).setFlipX(false);
                            }
                            if (playerSkin == "ninjaRouge") {
                                //   player.anims.play('idleNinjaRouge',true).setFlipX(false);
                            }
                            if (playerSkin == "ninjaGreen") {
                                //    player.anims.play('idleNinjaGreen',true).setFlipX(false);
                            }*/
                            player.anims.play('ninjaIdle', true).setFlipX(false);

                        }
                    }
                }
                if (keyD.isUp && keyQ.isUp && keyS.isUp && playerCanResetVelocity == false) {

                    player.setAccelerationX(0);
                    if (!(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + player.body.width, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 20))) {
                        if (playerSkin == "ninja") {
                            //  player.anims.play('idle');
                        }
                        if (playerSkin == "ninjaRouge") {
                            //  player.anims.play('idleNinjaRouge');
                        }
                        if (playerSkin == "ninjaGreen") {
                            // player.anims.play('idleNinjaGreen');
                        }
                    }
                }

                if (standing == false) {

                    if (player.body.velocity.y < 0) {

                        if (playerSkin == "ninja") {
                            // player.anims.play('jumpUp');
                        }
                        if (playerSkin == "ninjaRouge") {
                            //  player.anims.play('jumpUpNinjaRouge');
                        }
                        if (playerSkin == "ninjaGreen") {
                            //   player.anims.play('idleNinjaGreen');
                        }
                    }
                    if (player.body.velocity.y > 0) {

                        if (playerSkin == "ninja") {
                            // player.anims.play('jumpDownNinja');
                        }
                        if (playerSkin == "ninjaRouge") {
                            //  player.anims.play('jumpDownNinjaRouge');
                        }
                        if (playerSkin == "ninjaGreen") {
                            //  player.anims.play('jumpDownNinjaGreen');
                        }
                    }
                }
            }


            if (player.y > 1000) {
                this.death();
            }


            if (gameSupport == "controller") {
                if (this.input.gamepad.total === 0) {
                    return;
                }

                pad = this.input.gamepad.getPad(0);
                if (pad.axes.length) {
                    axisWidth = pad.axes[0].getValue();
                    axisHeight = pad.axes[1].getValue();

                    axisWidthR = pad.axes[2].getValue();
                    axisHeightR = pad.axes[3].getValue();


                    if (axisWidth >= 0.2) {
                        this.goRightGamepad()
                    } else if (axisWidth <= -0.2) {
                        this.goLeftGamepad()
                    }
                    if (axisWidth < 0.2 && axisWidth > -0.2) {
                        player.setAccelerationX(0);
                        player.setVelocityX(0);
                        player.anims.play('ninjaIdle', true).setFlipX(false);

                    }
                }

                if (pad.A && (standing == true || playerInWater == true)) {
                    this.jump();
                }

                if (pad.R2) {
                    if (playerDirection == 'right') {
                        var cacAttaque = this.cacAttaques.create(player.x + 40, player.y - 3, 'cacAttaque').setScale(0.1)
                            .setOrigin(0.5, 0.5)
                            .setDepth(-1)
                    }
                    if (playerDirection == 'left') {
                        var cacAttaque = this.cacAttaques.create(player.x - 40, player.y - 3, 'cacAttaque').setScale(0.1)
                            .setOrigin(0.5, 0.5)
                            .setDepth(-1)
                            .setFlipX(true)
                    }
                    this.time.delayedCall(10, this.stopSlash, [cacAttaque], this);

                }


                if (axisWidthR > 0.5 || axisWidthR < -0.5) {

                    if (shurikenPlayer == "true" && shurikenPowerUpActive == true) {

                        if (pad.L2 && teleportationsLeft > 0) {
                            shurikenPlayer = "false";

                            this.lancerTeleportGamepad(player);
                        }
                        if (!pad.L2) {
                            shurikenPlayer = "false";
                            this.lancershurikenGamepad(player);
                        }

                    }

                }

                if (pad.B && (standing == true || playerInWater == true)) {
                    player.body.setSize(45, 45, true);
                    player.body.setOffset(20, 45);
                    if (playerSkin == "ninja") {
                        //player.anims.play('crouchDownNinja');
                    }
                    if (playerSkin == "ninjaRouge") {
                        //player.anims.play('crouchDownNinjaRouge');
                    }
                    if (playerSkin == "ninjaGreen") {
                        //  player.anims.play('crouchDownNinjaGreen');
                    }
                }


                if (!pad.B && !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 45)) && !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + 20, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 20) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 20)) && !(this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 10) || this.platform.hasTileAtWorldXY(player.body.position.x + 20, player.body.position.y - 10) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 10) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 10))) {
                    if (uncrouchPossible == true) {
                        player.body.setSize(45, 90, false).setOffset(20, 5);
                    } else {
                        uncrouchPossible = true;
                    }
                }

                if (!pad.B && (this.platform.hasTileAtWorldXY(player.body.position.x, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 45) || this.platform.hasTileAtWorldXY(player.body.position.x + 45 / 2, player.body.position.y - 45))) {

                    if (playerSkin == "ninja") {
//player.anims.play('crouchDownNinja');
                    }
                    if (playerSkin == "ninjaRouge") {
//player.anims.play('crouchDownNinjaRouge');
                    }
                    if (playerSkin == "ninjaGreen") {
//player.anims.play('crouchDownNinjaGreen');
                    }
                }
            }
        }


    }
}
