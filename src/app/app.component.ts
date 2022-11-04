import { Component } from '@angular/core';
import { Profession } from './enums/profession.enum';
import { Skill } from './enums/skill.enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PnAmountService } from './services/pn-amount.service';

enum FormFields {
  PROFESSION       = 'profession',
  SKILL            = 'skill',
  BASIC_SKILL_LVL  = 'basicSkillLvl',
  WANTED_SKILL_LVL = 'wantedSkillLvl',
  PN_AMOUNT        = 'pnAmount'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // protected readonly Profession: typeof Profession = Profession;
  protected neededPnAmount: number = 0;
  protected readonly FormFields: typeof FormFields = FormFields;
  protected readonly professions: string[] = Object.values(Profession);
  protected readonly skills: string[] = Object.values(Skill);
  protected readonly form: FormGroup;
  private readonly alchemyPnArray: number[];

  constructor(private readonly fb: FormBuilder, private readonly pnAmountService: PnAmountService) {
    this.form = this.initForm();
    this.alchemyPnArray = this.pnAmountService.alchemyPnAmount;
  }

  protected submit(): void {
    this.neededPnAmount = 0;
    this.alchemyPnArray.slice(+this.form.get(FormFields.BASIC_SKILL_LVL)?.value + 1, +this.form.get(FormFields.WANTED_SKILL_LVL)?.value + 1)
      .forEach((value: number): number => this.neededPnAmount += value);
  }

  private initForm(): FormGroup {
    return this.fb.group({
      [FormFields.PROFESSION]: [''],
      [FormFields.SKILL]: [''],
      [FormFields.BASIC_SKILL_LVL]: [''],
      [FormFields.WANTED_SKILL_LVL]: [''],
      [FormFields.PN_AMOUNT]: [''],
    });
  }
}
