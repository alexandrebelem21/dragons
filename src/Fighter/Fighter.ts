import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void;
  receiveDamage(attackPoints: number): number;
}