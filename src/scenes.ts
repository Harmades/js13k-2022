import { Enemies, reset as resetEnemies } from "./enemies";
import { Player, reset as resetPlayer } from "./player";
import { toggleShop } from "./ui";

export enum Scene {
    Shop,
    Game,
    Quest,
}

export function changeScene(scene: Scene, player: Player, enemies: Enemies) {
    resetPlayer(player);
    resetEnemies(enemies);
    if (scene == Scene.Shop || scene == Scene.Game) {
        toggleShop();
    }
}