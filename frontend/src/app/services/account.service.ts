import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Ops } from '../models/ops/ops.model';
import { Draft } from '../models/ops/draft.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getOpsPerAccount(accountNumber: string): Promise<Ops[]> {
    const observable = this.httpClient.get<Ops[]>(`${environment.restServerUrl}/${accountNumber}`)
    const ops = firstValueFrom(observable)
    return ops
  }

  async create(draft: Draft): Promise<Ops> {
    const observable = this.httpClient.post<Ops>(`${environment.restServerUrl}`, draft)
    const newOps = firstValueFrom(observable)
    return newOps
  }
}
