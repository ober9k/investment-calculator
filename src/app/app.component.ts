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

  protected userInputData = signal<UserInputData | undefined>(undefined);

  public onSubmitData(userInputData: UserInputData) {
    this.userInputData.set(userInputData);
  }

}
