export interface Draft {
    accountNumber: string;
    type: string;
    data: {amount: number, interest?: number, payments?: number}
}
