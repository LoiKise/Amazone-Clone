import {StackNavigationProp} from '@react-navigation/stack';

// khai báo khi naviga cần param đây là tham số thứ 2
export type AppParams = {
  HomeTabs: undefined;
  ProductDetail: {
    id: string;
  };
};

export enum AppScreens {
  HOME = 'HomeScreen',
  PRODUCT_DETAIL = 'ProductDetail',
  SHOPPING_CART = 'Cart',
  ADDRESS = 'Address',
  USER = 'User',
  MENU = 'Menu',
}

export enum AppTabs {
  SHOPPING_CART = 'shoppingCart',
  HOME = 'Home',
  USER = 'User',
  MENU = 'Menu',
}

export type NavigationProps = StackNavigationProp<AppParams>;
