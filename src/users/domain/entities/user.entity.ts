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

  get name() {
    return this.porps.name;
  }

  get email() {
    return this.porps.email;
  }

  get password() {
    return this.porps.password;
  }

  get createdAt() {
    return this.porps.createdAt;
  }
}
