import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PnAmountService {

  readonly alchemyPnAmount: number[] = [0, 1];
  readonly magicWizardPnAmount: number[] = [0, 1];

  constructor() {
    this.initAlchemyPnAmount();
    this.initMagicLvlPnAmount();
  }


  private addPnAmountForSkillRange(array: number[], from: number, to: number, pnAmount: number): void {
    for (let i = from; i <= to; i++) {
      array.push(pnAmount);
    }
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

  private initMagicLvlPnAmount(): void {
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
    this.magicWizardPnAmount.push(19, 19, 20, 20, 21, 21, 21, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 38, 39, 41, 42, 44, 45, 47, 49, 50, 52, 54,
      56, 58, 60, 62, 64, 66, 68, 71, 73, 75, 78, 80, 82, 85, 88, 90, 93, 95);

  }
}
