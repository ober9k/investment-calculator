import { CurrencyPipe } from "@angular/common";
import { Component, input } from '@angular/core';
import { calculateInvestmentResults } from "../../investment-results";
import { UserInputData } from "../user-input/user-input.model";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  public userInputData = input.required<UserInputData>();

  get investmentResults(): Array<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }> {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = this.userInputData();
    return calculateInvestmentResults(initialInvestment, annualInvestment, expectedReturn, duration);
  }

}
