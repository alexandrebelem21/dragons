import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _rangerArchetypeInstances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._rangerArchetypeInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._rangerArchetypeInstances;
  }
}