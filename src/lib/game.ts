export type Cactus = {
  x: number;
  width: number;
  height: number;
};

export class Game {
  private dinoX = 110;
  private dinoY = -40;
  private cactus: Cactus[] = [];
  private isGameOver = false;

  constructor(private readonly mapWidth: number) {
    this.startGame();
  }

  private async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async startGame() {
    const MINIMUM_TIME_BETWEEN_CACTUS = 500;
    const MAXIMUM_TIME_BETWEEN_CACTUS = 2000;
    let timeSinceLastCactus = 0;

    while (!this.isGameOver) {
      if (timeSinceLastCactus > MINIMUM_TIME_BETWEEN_CACTUS) {
        const probalityToCreateCactus = (MAXIMUM_TIME_BETWEEN_CACTUS  - timeSinceLastCactus) / (MAXIMUM_TIME_BETWEEN_CACTUS - MINIMUM_TIME_BETWEEN_CACTUS);
        const shouldCreateCactus = Math.random() > probalityToCreateCactus;

        if (shouldCreateCactus) {
          this.addCactus();
          timeSinceLastCactus = 0;
        }
      }
      this.updateCactus();
      this.removeCactus();
      this.checkCollision();
      await this.sleep(10);
      timeSinceLastCactus += 10;
    }
  }

  private addCactus() {
    const initialPosition = this.mapWidth - 50;
    this.cactus.push({ x: initialPosition, width: 50, height: 50 });
  }

  private updateCactus() {
    for (let i = 0; i < this.cactus.length; i++) {
      this.cactus[i].x -= 10;
    }
  }

  private removeCactus() {
    this.cactus = this.cactus.filter((c) => c.x + c.width + 500 > 0);
  }

  private checkCollision() {
    this.cactus.forEach((c) => {
      if (
        c.x < this.dinoX &&
        c.height > this.dinoY &&
        c.x + c.width > this.dinoX
      ) {
        this.isGameOver = true;
      }
    });
  }

  public getIsGameOver() {
    return this.isGameOver;
  }

  public jump() {
    this.dinoY = 70;
    setTimeout(() => {
      this.dinoY = -40;
    }, 300);
  }

  public getDinoX() {
    return this.dinoX;
  }

  public getDinoY() {
    return this.dinoY;
  }

  public getCactus() {
    return this.cactus;
  }

  public restartGame() {
    this.isGameOver = false;
    this.dinoY = -40;
    this.cactus = [];
    this.startGame();
  }
}
