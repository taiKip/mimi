export type addressType = {
  id: number;
  streetAddress: string;
  city: string;
  zipCode: string;
  country: string;
  unitNumber: string;
};

export type unitType = {
  id: number;
  unitNumber: string;
  isTaken: boolean;
};

export type userType = {
  id: number;
  firstName: string;
  lastName: string;
};

export type propertyType = {
  id: number;
  name: string;
    units: unitType[];
    address: addressType;
};
