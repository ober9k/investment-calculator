import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { UserInputData } from "./user-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output()
  public submitData = new EventEmitter<UserInputData>();

  protected enteredInitialInvestment: string = '0';
  protected enteredAnnualInvestment: string = '0';
  protected enteredExpectedReturn: string = '5';
  protected enteredDuration: string = '10';

  public onSubmit() {
    this.submitData.emit({
      initialInvestment: parseInt(this.enteredInitialInvestment),
      annualInvestment: parseInt(this.enteredAnnualInvestment),
      expectedReturn: parseInt(this.enteredExpectedReturn),
      duration: parseInt(this.enteredDuration),
    } as UserInputData);
  }

}
