export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dex: number) {
    this._name = name;
    this._dexterity = dex;
    Race._createdRacesInstances += 1;
  }

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}