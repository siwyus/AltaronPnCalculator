import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PnAmountService {
  readonly alchemyPnAmount: number[] = [0, 2];
  readonly agilityPnAmount: number[] = [0, 2];

  readonly magicWizardPnAmount: number[] = [0, 2];
  readonly magicWarriorPnAmount: number[] = [0, 2];
  readonly magicScoutPnAmount: number[] = [0, 2];

  readonly strengthWizardPnAmount: number[] = [0, 2];
  readonly strengthWarriorPnAmount: number[] = [0, 2];
  readonly strengthScoutPnAmount: number[] = [0, 2];

  readonly oneHandedWizardPnAmount: number[] = [0, 2];
  readonly oneHandedWarriorPnAmount: number[] = [0, 2];
  readonly oneHandedScoutPnAmount: number[] = [0, 2];

  readonly twoHandedWizardPnAmount: number[] = [0, 2];
  readonly twoHandedWarriorPnAmount: number[] = [0, 2];
  readonly twoHandedScoutPnAmount: number[] = [0, 2];

  readonly distanceWizardPnAmount: number[] = [0, 2];
  readonly distanceWarriorPnAmount: number[] = [0, 2];
  readonly distanceScoutPnAmount: number[] = [0, 2];

  readonly shieldingWizardPnAmount: number[] = [0, 2];
  readonly shieldingWarriorPnAmount: number[] = [0, 2];
  readonly shieldingScoutPnAmount: number[] = [0, 2];

  constructor() {
    this.initAgilityPnAmount();
    this.initAlchemyPnAmount();

    this.initWizardMagicLvlPnAmount();
    this.initWarriorMagicLvlPnAmount();
    this.initScoutMagicLvlPnAmount();

    this.initWizardStrengthLvlPnAmount();
    this.initWarriorStrengthLvlPnAmount();
    this.initScoutStrengthLvlPnAmount();
  }


  private addPnAmountForSkillRange(array: number[], from: number, to: number, pnAmount: number): void {
    for (let i = from; i <= to; i++) {
      array.push(pnAmount);
    }
  }

  private initAgilityPnAmount(): void {
    this.addPnAmountForSkillRange(this.agilityPnAmount, 3, 70, 2);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 71, 71, 3);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 83, 92, 4);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 93, 100, 5);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 101, 107, 6);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 108, 113, 7);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 114, 117, 8);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 118, 121, 9);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 122, 125, 10);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 126, 139, 11);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 130, 132, 12);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 133, 134, 13);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 136, 138, 14);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 139, 140, 15);
    this.addPnAmountForSkillRange(this.agilityPnAmount, 141, 143, 16);
    //todo check if can add more than 200lvl - 98pn
    this.agilityPnAmount.push(17, 17, 18, 18, 18, 19, 19, 20, 20, 21, 21, 21, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35,
      36, 38, 39, 41, 42, 44, 45, 47, 49, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 71, 73, 75, 78, 80, 82, 85, 88, 90, 93, 95, 98);
  }

  private initAlchemyPnAmount(): void {
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 3, 65, 2);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 66, 76, 3);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 77, 85, 4);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 86, 93, 5);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 94, 100, 6);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 101, 105, 7);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 106, 109, 8);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 110, 113, 9);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 114, 116, 10);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 117, 119, 11);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 120, 122, 12);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 123, 125, 13);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 126, 128, 14);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 129, 130, 15);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 131, 133, 16);
    this.addPnAmountForSkillRange(this.alchemyPnAmount, 134, 135, 17);
    this.alchemyPnAmount.push(18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 24, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 40, 42,
      43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 68, 70, 73, 75, 78, 80, 83, 86, 88, 91, 94, 97, 100);
  }

  private initWizardMagicLvlPnAmount(): void {
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 3, 70, 2);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 71, 82, 3);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 83, 92, 4);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 93, 100, 5);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 101, 107, 6);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 108, 113, 7);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 114, 117, 8);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 118, 121, 9);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 122, 125, 10);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 126, 129, 11);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 130, 132, 12);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 133, 135, 13);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 136, 138, 14);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 139, 140, 15);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 141, 143, 16);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 144, 145, 17);
    this.addPnAmountForSkillRange(this.magicWizardPnAmount, 146, 148, 18);
    //todo check if can add more than 200lvl - 98pn
    this.magicWizardPnAmount.push(19, 19, 20, 20, 21, 21, 21, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 38, 39, 41, 42, 44, 45, 47, 49, 50, 52, 54,
      56, 58, 60, 62, 64, 66, 68, 71, 73, 75, 78, 80, 82, 85, 88, 90, 93, 95, 98);
  }

  private initWarriorMagicLvlPnAmount(): void {
    this.addPnAmountForSkillRange(this.magicWarriorPnAmount, 3, 12, 2);
    this.addPnAmountForSkillRange(this.magicWarriorPnAmount, 13, 14, 3);
    //todo check if can add more than 30lvl - 65pn
    this.magicWarriorPnAmount.push(4, 5, 5, 6, 7, 9, 10, 12, 14, 17, 19, 22, 27, 33, 42, 53, 65, 79, 95);
  }

  private initScoutMagicLvlPnAmount(): void {
    this.addPnAmountForSkillRange(this.magicScoutPnAmount, 3, 17, 2);
    this.addPnAmountForSkillRange(this.magicScoutPnAmount, 18, 20, 3);
    this.addPnAmountForSkillRange(this.magicScoutPnAmount, 21, 23, 4);
    this.addPnAmountForSkillRange(this.magicScoutPnAmount, 24, 25, 5);
    this.addPnAmountForSkillRange(this.magicScoutPnAmount, 26, 27, 6);
    this.magicScoutPnAmount.push(7, 8, 9, 10, 11, 12, 14, 15, 17, 19, 20, 22, 25, 29, 34, 39, 46, 53, 61, 70, 79, 90);
  }

  private initWizardStrengthLvlPnAmount(): void {
    this.addPnAmountForSkillRange(this.strengthWizardPnAmount, 3, 21, 2);
    this.addPnAmountForSkillRange(this.strengthWizardPnAmount, 22, 24, 3);
    this.addPnAmountForSkillRange(this.strengthWizardPnAmount, 25, 27, 4);
    this.addPnAmountForSkillRange(this.strengthWizardPnAmount, 28, 30, 5);
    this.addPnAmountForSkillRange(this.strengthWizardPnAmount, 31, 32, 6);
    //todo check if can add more than 30lvl - 65pn
    this.strengthWizardPnAmount.push(7, 8, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21, 23, 26, 29, 33, 37, 43, 53, 48, 54, 61, 68, 76, 58, 93);
  }

  private initScoutStrengthLvlPnAmount(): void {
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 3, 4, 2);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 42, 48, 3);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 49, 54, 4);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 55, 59, 5);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 60, 63, 6);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 64, 66, 7);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 67, 69, 8);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 70, 71, 9);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 72, 73, 10);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 74, 75, 11);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 76, 77, 12);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 78, 79, 13);
    this.addPnAmountForSkillRange(this.strengthScoutPnAmount, 80, 81, 14);
    //todo check if can add more than 118lvl - 98pn
    this.strengthScoutPnAmount.push(15, 16, 1, 17, 18, 18, 19, 20, 21, 21, 22, 23, 25, 26, 27, 29, 31, 33, 35, 37, 40, 43, 45, 48, 51, 54, 58, 61, 65, 68, 72, 76, 80, 84, 89, 93, 98);
  }

  private initWarriorStrengthLvlPnAmount(): void {

  }
}
