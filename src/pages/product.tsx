import React, { useEffect } from 'react';
import {connect}from 'react-redux';
import IAppState from '../interfaces/IAppState'
import {IProduct, IProductCategory} from '../interfaces/IProduct'
import {Dispatch} from "redux";
import  {getProductsStartCreator,setProductActionCreator,unsetProductActionCreator} from '../store/actions/ProductActionsCreator'
import  { ProductList } from '../components/ProductList/ProductList';
import { Link } from 'react-router-dom';
import { getProducts, getSelectedProducts } from '../store/selectors';


interface IProps {
    getProducts:Function,
    products:IProduct[],
    selectProduct:Function
    deSelectProduct:Function,
    selectedProducts:IProductCategory[]
}

export const ProductPage:React.FunctionComponent<IProps> = ({
    getProducts,products,selectProduct,deSelectProduct,selectedProducts
}) => {
    useEffect(() => {
        getProducts();
    },[getProducts]);

    return (<div>
          <div >
           {
            products && products.length 
            ? 
            <div>
                <ProductList products={products} selectProduct={selectProduct} deSelectProduct={deSelectProduct} selectedProducts={selectedProducts} />
                <Link to="/basket" className="app__start-button fixedBasket">Basket</Link>
            </div>
            : <div>No products Found</div> 
           }   
          </div>
    </div>);
}


const mapStateToProps = (store: IAppState) => {
    return {
        products : getProducts(store) ,
        selectedProducts :getSelectedProducts(store)
    }
}

const mapDispatchToProps = (dispatch :Dispatch) => {
    return {
        getProducts : () => dispatch(getProductsStartCreator()),
        selectProduct : (product :any,categoryIndex :number) => dispatch(setProductActionCreator(product,categoryIndex)),
        deSelectProduct:(product :any) => dispatch(unsetProductActionCreator(product))
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);

