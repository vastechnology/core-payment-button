export interface TransactionI {
    id?: number;
    commerce?: string;
    order?: number;
    reference?: string;
    amount?: number;
    date?: Date;
    payment_method?: string;
}