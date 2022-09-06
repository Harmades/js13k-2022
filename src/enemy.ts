import { cos, PI, sin } from "./alias";
import { repeat } from "./array";
import {
    Bullet,
    create as createBullet,
    fire as fireBullet,
    render as renderBullet,
    update as updateBullet,
} from "./bullet";
import { Direction } from "./direction";
import { rand } from "./random";
import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";
import { add as addVector, create as createVector } from "./vector";

export enum Pattern {
    Straight,
    Triangular,
    Circular,
    Rectangular,
}

export enum BulletPattern {
  Single, /* Straight line */
  Double, /* 45 deg angle */
  Triple, /* single + double */
}

export type Enemy = Rectangle &
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
        bullets: Bullet[];
	    bulletPattern: BulletPattern;
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
    bulletPattern: BulletPattern = BulletPatternSingle): Enemy {
    return {
        x: Settings.width,
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
        bullets: repeat(() => createBullet(), 50),
        direction: Direction.Left,
	    bulletPattern: bulletPattern
    };
}

export function update(enemy: Enemy): void {
    for (let bullet of enemy.bullets) {
        updateBullet(bullet);
    }
    if (enemy.dead) return;
    const frequency = enemy.frequency as number;
    const amplitude = enemy.amplitude as number;
    const speedX = (Settings.width + Settings.enemyWidth) / enemy.time;
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
                enemy.direction = rand(Direction.Up, Direction.Down);
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
		const bulletSpeedX = -speedX - Settings.enemyBulletSpeedX as number;
        let bullet = enemy.bullets.find((b) => !b.isActive);
		if (bullet == undefined) return;
		if(enemy.bulletPattern == BulletPattern.Single || enemy.bulletPattern == BulletPattern.Triple) {
			fireBullet(
				bullet,
				addVector(enemy, createVector(0, Settings.enemyHeight / 2)),
				createVector(bulletSpeedX, 0));
			bullet = enemy.bullets.find((b) => !b.isActive);
		}
		if(enemy.bulletPattern == BulletPattern.Double || enemy.bulletPattern == BulletPattern.Triple) {
			if (bullet == undefined) return;
			fireBullet(
				bullet,
				addVector(enemy, createVector(0, Settings.enemyHeight / 4)),
				createVector(bulletSpeedX, - Settings.enemyBulletSpeedY));
			bullet = enemy.bullets.find((b) => !b.isActive);
			if (bullet == undefined) return;
			fireBullet(
				bullet,
				addVector(enemy, createVector(0, Settings.enemyHeight*3/4)),
				createVector(bulletSpeedX, + Settings.enemyBulletSpeedY));
		}
    }
}

export function render(renderer: Renderer, enemy: Enemy) {
    for (let bullet of enemy.bullets) {
        renderBullet(renderer, bullet);
    }

    if (enemy.dead) return;
    drawRect(renderer, enemy, enemy.color);
}