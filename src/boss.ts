import { abs, floor } from "./alias";
import {
    Bullets,
    create as createBullets,
    fire as fireBullets,
    Pattern as BulletsPattern,
    render as renderBullets,
    reset as resetBullets,
    resetRand as resetRandBullets,
    update as updateBullets,
} from "./bullets";
import { randColor } from "./random";
import { drawSprite, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";
import { Sprite } from "./sprite";
import { gg, onProgressChanged, end } from "./ui";
import { add as addVector, create as createVector } from "./vector";
import { playWouaf } from "./sound"

export type BossPattern = {
    waitTime: number;
    tx: number;
    ty: number;
    dx: number;
    dy: number;
    shootPattern: BulletsPattern[];
    shootCount: number[];
    shootFrequency: number[];
    shootSpeed: number[];
    shootRandom: number[];
    repeat: number;
    resetPosOnRepeat: boolean;
};

export type Boss = Sprite &
    Speed & {
        color: string;
        bullets: Bullets;
        elapsedTime: number;
        shootElapsedTime: number;
        shootCount: number;
        currentPattern: BossPattern;
        targetReached: boolean;
        patternIndex: number;
        repeatCount: number;
        newPatternTime: number;
        life: number;
        end: boolean;
    };

const spray: BossPattern = {
    waitTime: 2,
    tx: Settings.worldWidth * 0.8 - Settings.bossWidth,
    ty: Settings.worldHeight * 0.5 - Settings.bossHeight / 2,
    dx: 5,
    dy: 15,
    shootPattern: [
        BulletsPattern.Sixtuple,
        BulletsPattern.Quintuple,
        BulletsPattern.Triple,
        BulletsPattern.UpAndDown,
    ],
    shootCount: [4, 3, 5, 5],
    shootFrequency: [4, 3, 2, 5],
    shootSpeed: [50, 60, 75, 50],
    shootRandom: [25, 50, 75, 50],
    repeat: 3,
    resetPosOnRepeat: true,
};

const arrival: BossPattern = {
    waitTime: 1,
    tx: Settings.worldWidth * 0.5,
    ty: Settings.worldHeight * 0.5 - Settings.bossHeight / 2,
    dx: 25,
    dy: 0,
    shootPattern: [BulletsPattern.UpAndDown],
    shootCount: [3],
    shootFrequency: [1],
    shootSpeed: [200],
    repeat: 1,
    shootRandom: [0],
    resetPosOnRepeat: false,
};

const straight: BossPattern = {
    waitTime: 3,
    tx: Settings.worldWidth - Settings.bossWidth,
    ty: Settings.worldHeight * 0.2,
    dx: 0,
    dy: 60,
    shootPattern: [BulletsPattern.UpAndDown, BulletsPattern.StraightHole],
    shootCount: [5, 30],
    shootFrequency: [5, 3],
    shootSpeed: [200, 75],
    repeat: 1,
    shootRandom: [0, 5],
    resetPosOnRepeat: true,
};

const explosion: BossPattern = {
    waitTime: 0,
    tx: Settings.worldWidth - Settings.bossWidth,
    ty: Settings.worldHeight * 0.5 - Settings.bossHeight,
    dx: -50,
    dy: 0,
    shootPattern: [BulletsPattern.Explosion, BulletsPattern.Double],
    shootCount: [5, 5],
    shootFrequency: [3, 3],
    shootSpeed: [150, 175],
    repeat: 2,
    shootRandom: [15, 50],
    resetPosOnRepeat: true,
};

export function create(): Boss {
    const color = randColor();
    return {
        x: Settings.worldWidth * 0.5 - Settings.bossWidth / 2,
        y: Settings.worldHeight * 0.5 - Settings.bossHeight / 2,
        w: Settings.bossWidth,
        h: Settings.bossHeight,
        dx: 0,
        dy: 0,
        color,
        bullets: createBullets(
            Settings.bossBulletsPoolSize,
            Settings.bossBulletSpeedX,
            Settings.bossBulletSpeedY,
            Settings.bossSprayOpen,
            Settings.bulletWidth,
            Settings.bulletHeight,
            undefined,
            false
        ),
        elapsedTime: 0,
        currentPattern: straight,
        shootElapsedTime: 0,
        newPatternTime: 0,
        shootCount: 0,
        targetReached: false,
        patternIndex: 0,
        repeatCount: 0,
        life: Settings.bossLife,
        sprite: "boss",
        ox: Settings.bossOx,
        oy: Settings.bossOy,
        end: false,
    };
}

export function update(boss: Boss): void {
    boss.elapsedTime += Settings.delta;
    updateBullets(boss.bullets);
    if (boss.end) {
        boss.shootElapsedTime -= Settings.delta;
        return;
    }
    boss.shootElapsedTime += Settings.delta;

    const speed = Settings.bossSpeed;

    if (boss.newPatternTime != 0) {
        if (boss.elapsedTime >= boss.newPatternTime) {
            boss.newPatternTime = 0;
            /* TODO : Make it random */
            if (boss.currentPattern == spray || boss.currentPattern == arrival) {
                boss.currentPattern = straight;
            } else if (boss.currentPattern == straight) {
                boss.currentPattern = explosion;
            } else if (boss.currentPattern == explosion) {
                boss.currentPattern = spray;
            }
        } else {
            return;
        }
    }

    if (!boss.targetReached) {
        if (boss.x > boss.currentPattern.tx) {
            boss.dx = -speed;
        } else if (boss.x < boss.currentPattern.tx) {
            boss.dx = speed;
        }

        if (boss.y > boss.currentPattern.ty) {
            boss.dy = -speed;
        } else if (boss.y < boss.currentPattern.ty) {
            boss.dy = speed;
        }
    } else {
        if (
            boss.y > Settings.worldHeight * 0.9 - Settings.bossHeight ||
            boss.y < Settings.worldHeight * 0.1
        ) {
            boss.dy *= -1;
        }
    }

    boss.x += boss.dx * Settings.delta;
    boss.y += boss.dy * Settings.delta;

    if (boss.targetReached) {
        boss.sprite = "boss2";
        if (boss.shootCount < boss.currentPattern.shootCount[boss.patternIndex]) {
            if (
                boss.shootElapsedTime >=
                1 / boss.currentPattern.shootFrequency[boss.patternIndex]
            ) {
                boss.shootCount += 1;
                boss.shootElapsedTime = 0;
                if (boss.currentPattern.shootPattern[boss.patternIndex] != undefined) {
                    fireBullets(
                        boss.bullets,
                        boss.dx - boss.currentPattern.shootSpeed[boss.patternIndex],
                        addVector(boss, createVector(0, Settings.bossHeight / 2)),
                        boss.currentPattern.shootPattern[boss.patternIndex],
                        boss.currentPattern.shootRandom[boss.patternIndex]
                    );
                }
            }
        } else {
            boss.sprite = "boss";
            boss.shootCount = 0;
            resetRandBullets(boss.bullets);
            if (boss.patternIndex + 1 == boss.currentPattern.shootFrequency.length) {
                boss.patternIndex = 0;
                if (boss.repeatCount + 1 == boss.currentPattern.repeat) {
                    boss.repeatCount = 0;
                    boss.targetReached = false;
                    boss.newPatternTime = boss.elapsedTime + boss.currentPattern.waitTime;
                    return;
                } else {
                    boss.repeatCount += 1;
                    if (boss.currentPattern.resetPosOnRepeat) {
                        boss.targetReached = false;
                    }
                }
            } else {
                boss.patternIndex += 1;
            }
        }
        return;
    }

    if (abs(boss.currentPattern.tx - boss.x) < 1 && abs(boss.currentPattern.ty - boss.y) < 1) {
        boss.targetReached = true;
        boss.dx = boss.currentPattern.dx;
        boss.dy = boss.currentPattern.dy;
        return;
    }
}

export function bossHit(boss: Boss): void {
    boss.life--;
    if (boss.life == 0) {
        end();
        boss.end = true;
        boss.shootElapsedTime = 2;
        onProgressChanged(50 + ((Settings.bossLife - boss.life) / Settings.bossLife) * 50);
        playWouaf();
    } else {
        onProgressChanged(50 + ((Settings.bossLife - boss.life) / Settings.bossLife) * 50);
    }
}

export function render(renderer: Renderer, boss: Boss) {
    if (!boss.end || (floor(boss.elapsedTime / Settings.playerBlinkPeriod) % 2 == 0) && boss.shootElapsedTime >= 0) {
        drawSprite(renderer, boss);
    }
    renderBullets(renderer, boss.bullets);
}

export function reset(boss: Boss) {
    boss.x = Settings.worldWidth + Settings.bossWidth;
    boss.y = Settings.worldHeight * 0.5 - Settings.bossHeight / 2;
    boss.dx = 0;
    boss.dy = 0;
    resetBullets(boss.bullets);
    boss.elapsedTime = 0;
    boss.currentPattern = arrival;
    boss.shootElapsedTime = 0;
    boss.newPatternTime = 0;
    boss.shootCount = 0;
    boss.targetReached = false;
    boss.patternIndex = 0;
    boss.repeatCount = 0;
    boss.life = Settings.bossLife;
}
