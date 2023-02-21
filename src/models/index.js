// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartProduct, CartProductProduct } = initSchema(schema);

export {
  Product,
  CartProduct,
  CartProductProduct
};