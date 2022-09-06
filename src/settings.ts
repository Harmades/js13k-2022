export const Settings = {
    debug: false,

    width: 960,
    height: 640,

    playerSpeedX: 300,
    playerSpeedY: 300,
    playerWidth: 50,
    playerHeight: 50,
    playerBulletSpeedX: 800,
	playerBulletSpeedY: 100,
	playerBulletsPoolSize: 200,

    enemyWidth: 50,
    enemyHeight: 50,
    enemyBulletSpeedX: 150,
	enemyBulletSpeedY: 50,
	enemyBulletsPoolSize: 50,
    enemyShootFrequency: 1,
    enemyBulletPoolSize: 1000,

    bossWidth: 150,
    bossHeight: 150,
    bossRxMin: 100,
    bossRxMax: 200,
    bossRyMin: 100,
    bossRyMax: 200,
    bossSpeed: 100,
    bossBulletSpeedX: 200,
    bossBulletSpeedY: 25,
    bossBulletsPoolSize: 200,
    bossBigBulletWidth: 25,
    bossBigBulletHeight: 25,
    bossBigBulletExplosionTick: 200,
    bossPatternFrequency: 5,

    bulletWidth: 5,
    bulletHeight: 5,

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

    engineTimeResolution: 1,

    epsilon: 0.1,
    delta: 1 / 1000,
};
