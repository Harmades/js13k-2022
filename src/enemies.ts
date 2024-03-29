import { Boss, create as createBoss, render as renderBoss, update as updateBoss } from "./boss";
import { Bullet } from "./bullet";
import { getActiveBullets } from "./bullets";
import { Enemy, render as renderEnemy, update as updateEnemy } from "./enemy";
import { awardMoney, Player } from "./player";
import { Renderer } from "./renderer";
import { Settings } from "./settings";
import { playBossMusic } from "./sound";
import { onProgressChanged } from "./ui";
import { create as createWave, WaveDifficulty } from "./wave";

export type Enemies = {
    entities: Enemy[];
    deadCount: number;
    boss: Boss;
    player: Player;
    waveTempo: number;
};

let currentWave = 1;
let bossWave = Settings.waveEasyCount + Settings.waveMediumCount + Settings.waveHardCount + 1;

export function create(player: Player): Enemies {
    return {
        entities: createWave(WaveDifficulty.Easy).enemies,
        deadCount: 0,
        boss: createBoss(),
        player,
        waveTempo: 0,
    };
}

export function update(enemies: Enemies): void {
    if (enemies.waveTempo > 0) {
        enemies.waveTempo -= Settings.delta;
        if (enemies.waveTempo <= 0) {
            enemies.waveTempo = 0;
            nextWave(enemies);
        }
    } else if (
        enemies.entities.every(
            (e) => (e.x < -e.w || e.dead) && e.bullets.bullets.every((b) => !b.isActive)
        )
    ) {
        enemies.waveTempo = Settings.waveTempo;
    }
    if (currentWave < bossWave) {
        for (let enemy of enemies.entities) {
            updateEnemy(enemy);
        }
    } else {
        updateBoss(enemies.boss);
    }
}

export function render(renderer: Renderer, enemies: Enemies): void {
    if (currentWave < bossWave) {
        for (let enemy of enemies.entities) {
            renderEnemy(renderer, enemy);
        }
    } else {
        renderBoss(renderer, enemies.boss);
    }
}

export function getActiveEnemies(enemies: Enemies): Enemy[] {
    return enemies.entities.filter((e) => !e.dead);
}

export function nextWave(enemies: Enemies): void {
    if (currentWave == 10) return;
    currentWave++;
    let difficulty: WaveDifficulty = WaveDifficulty.Easy;
    if (currentWave > 3 && currentWave <= 6) {
        difficulty = WaveDifficulty.Medium;
    }
    if (currentWave > 6) {
        difficulty = WaveDifficulty.Hard;
    }
    enemies.entities = createWave(difficulty).enemies;
    enemies.deadCount = 0;
    awardMoney(enemies.player, 1);

    onProgressChanged(((currentWave - 2) / 8) * 50);
    if (currentWave == bossWave) {
        playBossMusic();
    }
}

export function reset(enemies: Enemies): void {
    currentWave = 1;
    nextWave(enemies);
}

export function die(enemy: Enemy, enemies: Enemies) {
    enemy.dead = true;
    enemies.deadCount++;
}

export function getAllEnemiesBullet(enemies: Enemies): Bullet[] {
    let bulletList: Bullet[] = [];
    for (let enemy of getActiveEnemies(enemies)) {
        bulletList.push.apply(bulletList, getActiveBullets(enemy.bullets));
    }
    return bulletList;
}
