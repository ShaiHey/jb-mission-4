import { Component, computed, OnInit, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AccountService } from '../../../services/account.service';
import { Ops } from '../../../models/ops/ops.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [ FormsModule, CardComponent ],
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  list = signal<Ops[]>([])
  accountSearch = signal<string>('')

  constructor(
    public accountService: AccountService
  ) {}

  async searchOps() {
    try {
      const ops = await this.accountService.getOpsPerAccount(this.accountSearch())
      this.list.set(ops)
    } catch (error) {
      alert(error)
    }
  }
}
