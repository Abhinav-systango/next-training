export type userLoginData = {
  email: string;
  password: string;
};

export type userRegisterData = {
  email: string;
  password: string;
  displayName: string;
};

export type registerInputFieldForm = {
  email: string;
  password: string;
  displayName: string;
};

export type loginInputFieldForm = {
  email: string;
  password: string;
};


export type CheckoutAddressT = {
  firstName: string
  lastName: string,
  address_line_1: string,
  address_line_2: string,
  city: string,
  state: string,
  phone: string
  pincode: string
}
