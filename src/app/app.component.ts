import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { UserInputData } from "./user-input/user-input.model";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    InvestmentResultsComponent,
    UserInputComponent,
    HeaderComponent,
  ]
})
export class AppComponent {

  protected investmentResultsShown = signal<boolean>(false);

  protected userInputData = signal<UserInputData>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10,
  });

  public onSubmitData(userInputData: UserInputData) {
    console.log('x1', userInputData);
    this.userInputData.set(userInputData);
    console.log('x2', this.userInputData());
    this.investmentResultsShown.set(userInputData.duration > 0);
  }

}
