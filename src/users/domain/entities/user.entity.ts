export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(public readonly porps: UserProps) {
    this.porps.createdAt = this.porps.createdAt ?? new Date();
  }
}
