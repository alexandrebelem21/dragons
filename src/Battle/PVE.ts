import Fighter, { SimpleFighter } from '../Fighter';
// import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _monsters: SimpleFighter[] | Fighter[];

  constructor(
    player1: Fighter, 
    monsters: SimpleFighter[] | Fighter[],
  ) {
    super(player1);
    this._player1 = player1;
    this._monsters = monsters;
  }
    
  public get player1(): Fighter {
    return this._player1;
  }

  public get monsters(): SimpleFighter[] | Fighter[] {
    return [...this._monsters];
  }
    
  fight(): number {
    while (this.player1.lifePoints > -1) {
      this.player1.attack(this.monsters[0]);
    }
    
    return super.fight();
  }
}