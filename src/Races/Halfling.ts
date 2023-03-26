import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingRacesInstances = 0;

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingRacesInstances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._halflingRacesInstances;
  }
}