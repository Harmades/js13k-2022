import { cos, PI, sin } from "./alias";
import {
    Bullets,
    create as createBullets,
    fire as fireBullets,
    Pattern as BulletsPattern,
    render as renderBullets,
    update as updateBullets,
} from "./bullets";
import { Direction } from "./direction";
import { rand } from "./random";
import { AtlasSprite, drawSprite, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";
import { Sprite } from "./sprite";
import { add as addVector, create as createVector } from "./vector";
import { playEnemyShoot } from "./sound"

export enum Pattern {
    Straight,
    Triangular,
    Circular,
    Rectangular,
}

export type Enemy = Sprite &
    Speed & {
        dead: boolean;
        elapsedTime: number;
        shootElapsedTime: number;
        direction: Direction;
        distance: number;
        pattern: Pattern;
        sy: number;
        time: number;
        color: string;
        // Circular
        amplitude: number;
        frequency: number;
        // Rectangular
        rx: number;
        ry: number;
        bullets: Bullets;
        bulletsPattern: BulletsPattern;
        sprite: AtlasSprite;
    };

export function create(
    sy: number,
    pattern: Pattern,
    color: string,
    time: number,
    amplitude: number,
    frequency: number,
    rx: number,
    ry: number,
    bulletsPattern: BulletsPattern = BulletsPattern.Single,
    sprite: AtlasSprite
): Enemy {
    return {
        x: Settings.worldWidth,
        y: sy,
        sy,
        dx: 0,
        dy: 0,
        w: Settings.enemyWidth,
        h: Settings.enemyHeight,
        pattern,
        time,
        color,
        dead: false,
        amplitude,
        frequency,
        rx,
        ry,
        elapsedTime: 0,
        shootElapsedTime: 0,
        distance: 0,
        direction: Direction.Left,
        bullets: createBullets(
            Settings.enemyBulletsPoolSize,
            Settings.enemyBulletSpeedX,
            Settings.enemyBulletSpeedY,
            Settings.enemySprayOpen,
            Settings.bulletWidth,
            Settings.bulletHeight,
            undefined,
            false
        ),
        bulletsPattern: bulletsPattern,
        sprite,
        ox: Settings.enemyOx,
        oy: Settings.enemyOy,
    };
}

export function update(enemy: Enemy): void {
    updateBullets(enemy.bullets);
    if (enemy.dead) return;
    const frequency = enemy.frequency as number;
    const amplitude = enemy.amplitude as number;
    const speedX = (Settings.worldWidth + Settings.enemyWidth) / enemy.time;
    enemy.elapsedTime += Settings.delta;
    enemy.shootElapsedTime += Settings.delta;
    if (enemy.pattern == Pattern.Circular) {
        enemy.dx =
            2 * PI * frequency * amplitude * cos(2 * PI * frequency * enemy.elapsedTime) - speedX;
        enemy.dy = 2 * PI * frequency * amplitude * sin(2 * PI * frequency * enemy.elapsedTime);
    }
    if (enemy.pattern == Pattern.Rectangular) {
        if (enemy.direction == null) {
            enemy.direction = Direction.Left;
        }
        if (enemy.direction == Direction.Left) {
            if (enemy.distance >= enemy.rx) {
                if (enemy.y + enemy.ry > Settings.worldHeight - 1.5 * Settings.tileSize) {
                    enemy.direction = Direction.Up;
                } else if (enemy.y - enemy.ry < 0.5 * Settings.tileSize) {
                    enemy.direction = Direction.Down;
                } else {
                    enemy.direction = rand(Direction.Up, Direction.Down);
                }
                enemy.distance = 0;
            }
            enemy.dx = -speedX;
            enemy.dy = 0;
            enemy.distance += -enemy.dx * Settings.delta;
        }
        if (enemy.direction == Direction.Right) {
        }
        if (enemy.direction == Direction.Up) {
            if (enemy.distance >= enemy.ry) {
                enemy.direction = Direction.Left;
                enemy.distance = 0;
            }
            enemy.dy = -speedX / 2;
            enemy.dx = 0;
            enemy.distance += -enemy.dy * Settings.delta;
        }
        if (enemy.direction == Direction.Down) {
            if (enemy.distance >= enemy.ry) {
                enemy.direction = Direction.Left;
                enemy.distance = 0;
            }
            enemy.dy = speedX / 2;
            enemy.dx = 0;
            enemy.distance += enemy.dy * Settings.delta;
        }
    }
    if (enemy.pattern == Pattern.Triangular) {
        if (enemy.y >= enemy.sy + amplitude) {
            enemy.dy = -4 * amplitude * frequency;
        }
        if (enemy.dy == 0 || enemy.y <= enemy.sy - amplitude) {
            enemy.dy = 4 * amplitude * frequency;
        }
        enemy.dx = -speedX;
    }
    if (enemy.pattern == Pattern.Straight) {
        enemy.dx = -speedX;
    }

    enemy.x += enemy.dx * Settings.delta;
    enemy.y += enemy.dy * Settings.delta;

    if (enemy.shootElapsedTime >= 1 / Settings.enemyShootFrequency) {
        enemy.shootElapsedTime = 0;
        playEnemyShoot();
        fireBullets(
            enemy.bullets,
            -speedX - Settings.enemyBulletSpeedX,
            addVector(enemy, createVector(0, Settings.enemyHeight / 2)),
            enemy.bulletsPattern
        );
    }
}

export function render(renderer: Renderer, enemy: Enemy) {
    renderBullets(renderer, enemy.bullets);

    if (enemy.dead) return;
    drawSprite(renderer, enemy);
}
