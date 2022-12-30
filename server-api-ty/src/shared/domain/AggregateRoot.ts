import { v4 } from "uuid";

export class AggregateRoot<T> {
    protected readonly _id: string;
  
    public readonly props: T;
  
    constructor(props: T, id?: string) {
      this._id = id || v4();
      this.props = props;
    }
  
    get id(): string {
      return this._id;
    }
}