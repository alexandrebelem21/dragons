import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._lifePoints;
    if (this._lifePoints === 0) {
      this._lifePoints = -1;

      return this._lifePoints;
    }  
    this._lifePoints -= damage;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.receiveDamage(this._strength));
  }
}