import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[] | null;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly cartproducts?: (CartProductProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[] | null;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly cartproducts: AsyncCollection<CartProductProduct>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly product?: (CartProductProduct | null)[] | null;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly product: AsyncCollection<CartProductProduct>;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartProduct = LazyLoading extends LazyLoadingDisabled ? EagerCartProduct : LazyCartProduct

export declare const CartProduct: (new (init: ModelInit<CartProduct>) => CartProduct) & {
  copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct>) => MutableModel<CartProduct> | void): CartProduct;
}

type EagerCartProductProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProductProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId?: string | null;
  readonly cartProductId?: string | null;
  readonly product: Product;
  readonly cartProduct: CartProduct;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartProductProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProductProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId?: string | null;
  readonly cartProductId?: string | null;
  readonly product: AsyncItem<Product>;
  readonly cartProduct: AsyncItem<CartProduct>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartProductProduct = LazyLoading extends LazyLoadingDisabled ? EagerCartProductProduct : LazyCartProductProduct

export declare const CartProductProduct: (new (init: ModelInit<CartProductProduct>) => CartProductProduct) & {
  copyOf(source: CartProductProduct, mutator: (draft: MutableModel<CartProductProduct>) => MutableModel<CartProductProduct> | void): CartProductProduct;
}