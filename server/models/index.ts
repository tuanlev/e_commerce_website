interface ParamsListI {
   accout_id?: string;
   collection_id?: string;
   category_id?: string;
   product_id?: string;
   color_id?: string;
   size_id?: string;
}
interface queryListI {
    sort?: string|undefined;
    
}
const paramsQuery = {
    
}
export default {
    AccounModel: require('./account').default,
    ProductLineModel: require('./productline').default,
    CollectionModel: require('./collection').default,
    ColorModel: require('./color').default,
    ProductModel: require('./product').default,
    OrderModel: require('./order').default,
    CartModel: require('./cart').default,
    ReviewModel: require('./review').default,
    AddressModel: require('./address').default,
    CategoryModel: require('./category').default,
    UserModel: require('./user').default,
}