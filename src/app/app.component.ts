import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Profession } from './enums/profession.enum';
import { Skill } from './enums/skill.enum';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  profession: Profession;
  skill: Skill;
  basicSkillLvl: number;
  wantedSkillLvl: number;
  pnAmount: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  // protected readonly Profession: typeof Profession = Profession;
  protected neededPnAmount: number = 0;
  protected skillLvlYouCanReach: number = 0;
  protected ownedPnAmount: number = 0;

  protected readonly FormFields: typeof FormFields = FormFields;
  protected readonly professions: string[] = Object.values(Profession);
  protected readonly skills: string[] = Object.values(Skill);
  protected readonly form: FormGroup;

  private readonly skillsForAll: Skill[] = [Skill.AGILITY, Skill.ALCHEMY];


  constructor(private readonly fb: FormBuilder, private readonly pnAmountService: PnAmountService) {
    this.form = this.initForm();
    this.form.get(FormFields.SKILL)?.valueChanges.pipe().subscribe(
      (value: Skill) =>
        value && !this.skillsForAll.includes(value)
          ? this.form.addControl(FormFields.PROFESSION, this.fb.nonNullable.control('', Validators.required))
          : this.form.removeControl(FormFields.PROFESSION)
    );
  }

  protected changeSlider($event: MatSliderChange) {
    const wantedSkillLvlControl: AbstractControl = this.form.get(FormFields.WANTED_SKILL_LVL)!;
    const basicSkillLvlControl: AbstractControl = this.form.get(FormFields.BASIC_SKILL_LVL)!;

    if ($event.value! >= wantedSkillLvlControl.value) {
      // todo change 200 to maxSkillLvl
      wantedSkillLvlControl.setValue(basicSkillLvlControl.value + 1 > 200 ? 200 : basicSkillLvlControl.value + 1);
    }
    this.resetResult();
  }

  protected changeSlider2($event: MatSliderChange) {
    const basicSkillLvlControl: AbstractControl = this.form.get(FormFields.BASIC_SKILL_LVL)!;

    if ($event.value! <= basicSkillLvlControl.value) {
      this.form.get(FormFields.WANTED_SKILL_LVL)?.setValue(basicSkillLvlControl.value + 1);
    }
    this.resetResult();
  }

  protected submit(): void {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }

    const formValues: FormValues = this.form.getRawValue();
    this.resetResult();
    this.ownedPnAmount = +formValues.pnAmount;

    let pnAmount: number = 0;

    this.pnAmountService.getProperPnAmountArray(formValues.skill, formValues.profession)
      .forEach((value: number, index: number): void => {
        if (index + 1 > formValues.basicSkillLvl) {
          pnAmount += value;
        }

        if (index + 1 <= formValues.wantedSkillLvl) {
          this.neededPnAmount = pnAmount;
        }

        if (+formValues.pnAmount >= pnAmount) {
          this.skillLvlYouCanReach = index + 1;
        }
      });

    console.log(this.skillLvlYouCanReach);
  }

  private initForm(): FormGroup {
    return this.fb.nonNullable.group({
      [FormFields.SKILL]: ['', Validators.required],
      [FormFields.BASIC_SKILL_LVL]: 1,
      [FormFields.WANTED_SKILL_LVL]: 2,
      [FormFields.PN_AMOUNT]: 0,
    });
  }

  private resetResult(): void {
    this.neededPnAmount = 0;
    this.skillLvlYouCanReach = 0;
    this.ownedPnAmount = 0;
  }
}
