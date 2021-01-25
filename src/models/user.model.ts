export class User {
  email: string;
  token: string;
  isAdmin: boolean;
  postalCode: string;
  streetName: string;
  houseNumber: number;
  addition: string;
  city: string;

  constructor(email: string, token: string, isAdmin: boolean, postalCode?: string, streetName?: string, houseNumber?: number,
              addition?: string, city?: string) {
    this.email = email;
    this.token = token;
    this.isAdmin = isAdmin;
    this.postalCode = postalCode || '';
    this.streetName = streetName || '';
    this.houseNumber = houseNumber || -1;
    this.addition = addition || '';
    this.city = city || '';
  }
}
