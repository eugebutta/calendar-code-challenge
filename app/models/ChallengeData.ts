export interface ChallengeData {
  id: string;
  calendar: Calendar[];
  created: string;
  customer: Customer;
  deleted: boolean;
  status: string;
}

export interface Calendar {
  actions: Action[];
  month: number;
  year: number;
}

export interface Action {
  id: string;
  arrivalEndWindow?: string;
  arrivalStartWindow?: string;
  name: string;
  price: number;
  scheduledDate?: string;
  status: string;
  vendor?: Vendor;
}

export interface Vendor {
  id: string;
  city?: string | null;
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state?: string | null;
  streetAddress?: string | null;
  vendorName: string;
  zip?: string | null;
}

export interface Customer {
  id: string;
  city: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
  street: string;
  zip: string;
}
