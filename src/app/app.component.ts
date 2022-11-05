import { Component } from '@angular/core';
import { Profession } from './enums/profession.enum';
import { Skill } from './enums/skill.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PnAmountService } from './services/pn-amount.service';
import { MatSliderChange } from '@angular/material/slider';

enum FormFields {
  PROFESSION       = 'profession',
  SKILL            = 'skill',
  BASIC_SKILL_LVL  = 'basicSkillLvl',
  WANTED_SKILL_LVL = 'wantedSkillLvl',
  PN_AMOUNT        = 'pnAmount'
}

interface FormValues {
  profession: string;
  skill: string;
  basicSkillLvl: number;
  wantedSkillLvl: number;
  pnAmount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // protected readonly Profession: typeof Profession = Profession;
  protected neededPnAmount: number = 0;
  protected skillLvlYouCanReach: number = 0;

  protected readonly FormFields: typeof FormFields = FormFields;
  protected readonly professions: string[] = Object.values(Profession);
  protected readonly skills: string[] = Object.values(Skill);
  protected readonly form: FormGroup;


  constructor(private readonly fb: FormBuilder, private readonly pnAmountService: PnAmountService) {
    this.form = this.initForm();
  }

  changeSlider($event: MatSliderChange) {
    if ($event.value! >= this.form.get(FormFields.WANTED_SKILL_LVL)?.value) {
      this.form.get(FormFields.WANTED_SKILL_LVL)?.setValue(this.form.get(FormFields.BASIC_SKILL_LVL)?.value + 1);
    }
  }

  changeSlider2($event: MatSliderChange) {
    if ($event.value! <= this.form.get(FormFields.BASIC_SKILL_LVL)?.value) {
      this.form.get(FormFields.WANTED_SKILL_LVL)?.setValue(this.form.get(FormFields.BASIC_SKILL_LVL)?.value + 1);
    }
  }

  protected submit(): void {
    const formValues: FormValues = this.form.getRawValue();
    this.neededPnAmount = 0;

    this.pnAmountService.magicWizardPnAmount
      .forEach((value: number, index: number): void => {
        if (index + 1 > formValues.basicSkillLvl && index + 1 <= formValues.wantedSkillLvl) {
          this.neededPnAmount += value;
        }
        if (this.form.get(FormFields.PN_AMOUNT)?.value >= this.neededPnAmount) {
          this.skillLvlYouCanReach = index + 1;
        }
      });

    console.log(this.neededPnAmount);
  }

  private initForm(): FormGroup {
    return this.fb.nonNullable.group({
      [FormFields.PROFESSION]: ['', Validators.required],
      [FormFields.SKILL]: ['', Validators.required],
      [FormFields.BASIC_SKILL_LVL]: 1,
      [FormFields.WANTED_SKILL_LVL]: 1,
      [FormFields.PN_AMOUNT]: 1,
    });
  }
}
