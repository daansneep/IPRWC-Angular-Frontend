export class User {
  email: string;
  token: string;
  isAdmin: boolean;
  postalCode: string | undefined;
  streetName: string | undefined;
  houseNumber: number | undefined;
  addition: string | undefined;
  city: string | undefined;

  constructor(email: string, token: string, isAdmin: boolean) {
    this.email = email;
    this.token = token;
    this.isAdmin = isAdmin;
  }
}
