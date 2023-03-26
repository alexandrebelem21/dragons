import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfRacesInstances = 0;

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._dwarfRacesInstances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._dwarfRacesInstances;
  }
}