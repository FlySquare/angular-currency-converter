export class Currency {
  name?: string;
  code?: string;
  buying?: number;
  selling?: number;
  usdRate?: number;
  otherRate?: number;

  prepare(response: any){
    Object.assign(this, response);
    return this;
  }
}
