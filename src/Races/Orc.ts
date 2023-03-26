import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcRacesInstances = 0;

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._orcRacesInstances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._orcRacesInstances;
  }
}