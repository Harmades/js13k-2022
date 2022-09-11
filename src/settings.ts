export const Settings = {
    debug: true,

    width: 400 * 3,
    height: 192 * 3,

    worldWidth: 400,
    worldHeight: 192,
    tileSize: 16,
    worldTileWidth: 25,
    worldTileHeight: 12,

    playerSpeedX: 300,
    playerSpeedY: 300,
    playerWidth: 15,
    playerHeight: 14,
    playerOx: 3,
    playerOy: 3,
    playerBulletSpeedX: 200,
    playerBulletSpeedY: 100,
    playerBulletsPoolSize: 200,
    playerSprayOpen: 1.2,
    playerBulletWidth: 3,
    playerBulletHeight: 3,
    playerInvincibleTime: 0.8,
    playerBlinkPeriod: 0.1,

    enemyWidth: 13,
    enemyHeight: 16,
    enemyOx: 0,
    enemyOy: 0,
    enemyBulletSpeedX: 150,
    enemyBulletSpeedY: 50,
    enemyBulletsPoolSize: 50,
    enemyShootFrequency: 1,
    enemyBulletPoolSize: 1000,
    enemySprayOpen: 1,

    bossWidth: 22,
    bossHeight: 33,
    bossOx: 6,
    bossOy: 3,
    bossRxMin: 100,
    bossRxMax: 200,
    bossRyMin: 100,
    bossRyMax: 200,
    bossSpeed: 300,
    bossBulletSpeedX: 100,
    bossBulletSpeedY: 100,
    bossBulletsPoolSize: 200,
    bossBigBulletWidth: 25,
    bossBigBulletHeight: 25,
    bossBigBulletExplosionTick: 200,
    bossPatternFrequency: 5,
    bossSprayOpen: 2,
    bossLife: 100,

    bulletWidth: 3,
    bulletHeight: 3,
    bulletOx: 1,
    bulletOy: 1,
    bulletMaxHeight: 500,

    bulletsVariance: 20,
    bulletsMaxdY: 200,

    waveEasyCount: 3,
    waveEasyTimeMin: 4,
    waveEasyTimeMax: 6,
    waveEasyAmplitudeMin: 10,
    waveEasyAmplitudeMax: 50,
    waveEasyFrequencyMin: 0.1,
    waveEasyFrequencyMax: 0.25,
    waveEasyRxMin: 100,
    waveEasyRxMax: 200,
    waveEasyRyMin: 100,
    waveEasyRyMax: 200,
    waveEasySyMin: 0,
    waveEasySyMax: 640 - 50,

    waveMediumCount: 3,
    waveMediumTimeMin: 4,
    waveMediumTimeMax: 6,
    waveMediumAmplitudeMin: 10,
    waveMediumAmplitudeMax: 50,
    waveMediumFrequencyMin: 0.1,
    waveMediumFrequencyMax: 0.25,
    waveMediumRxMin: 100,
    waveMediumRxMax: 200,
    waveMediumRyMin: 100,
    waveMediumRyMax: 200,
    waveMediumSyMin: 0,
    waveMediumSyMax: 640 - 50,

    waveHardCount: 3,
    waveHardTimeMin: 4,
    waveHardTimeMax: 6,
    waveHardAmplitudeMin: 10,
    waveHardAmplitudeMax: 50,
    waveHardFrequencyMin: 0.1,
    waveHardFrequencyMax: 0.25,
    waveHardRxMin: 100,
    waveHardRxMax: 200,
    waveHardRyMin: 100,
    waveHardRyMax: 200,
    waveHardSyMin: 0,
    waveHardSyMax: 640 - 50,

    powerUpMaxCount: 5,

    engineTimeResolution: 1,

    epsilon: 0.1,
    delta: 1 / 1000,
};
