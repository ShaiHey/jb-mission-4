import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { Draft } from '../../../models/ops/draft.model';

@Component({
  selector: 'app-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(
    public accountService: AccountService,
    public router: Router
  ) {}

  newForm = new FormGroup({
    accountNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    type: new FormControl('', [
      Validators.required,
    ]),
    amount: new FormControl(0, [
      Validators.required,
      Validators.min(1)
    ]),
    interest: new FormControl(0, [
      Validators.required
    ]),
    payments: new FormControl(0, [
      Validators.required
    ]),
  })

  async addOps() {
    if (this.newForm.invalid) return;
  
    const { type, accountNumber, amount, interest, payments } = this.newForm.value;
  
    const payload = {
      type,
      accountNumber,
      data: {
        amount,
        ...(type === 'loan' && { interest, payments })
      }
    };
  
    try {
      await this.accountService.create(payload as Draft);
      this.router.navigate(['/']);
    } catch (error) {
      alert(error);
    }
  }
}
