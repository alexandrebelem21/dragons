import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }
    
  public get player1(): Fighter {
    return this._player1;
  }

  public get player2(): Fighter {
    return this._player2;
  }
    
  fight(): number {
    while (this.player1.lifePoints > -1 || this.player2.lifePoints > -1) {
      this.player2.attack(this.player1);
      this.player1.attack(this.player2);
    }
    
    return super.fight();
  }
}