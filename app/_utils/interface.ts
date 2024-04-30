export interface productInterface {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export interface IUser {
    name: string | null;
    email: string | null;
    uid: string | null;
  }
  
  export interface IAuthState {
    isLoggedIn: boolean;
    user: IUser | null;
  }

  export interface ICartState {
    cart: productInterface[];
    qty: { [id: string]: number };
    loading: boolean;
    error: string;
  }
  
  export interface ICategoryState {
    categories: string[];
    products: productInterface[];
    categoryLoading: boolean;
    productLoading: boolean;
    error: string | undefined;
  }

export interface IProductState {
    products: productInterface[];
    product: productInterface;
    productsLoading: boolean;
    productLoading: boolean
    error: string | undefined;
  }
  