import React from 'react';
import IAppState from '../interfaces/IAppState';
import { connect } from 'react-redux';
import { IProductCategory } from '../interfaces/IProduct';
import Price from '../components/price/Price';
import { getSelectedProducts } from '../store/selectors';
import { Link } from 'react-router-dom';

interface IProps {
  selectedProducts: IProductCategory[]
}


export const BasketPage:React.FunctionComponent<IProps> = ({
  selectedProducts
}) => {

  return (<div className="basketDiv">
        <div>
         {
          selectedProducts && selectedProducts.length 
          ? 
          <div className="BasketContainer">
            {selectedProducts.map((c) => 
                <div className="BasketContainer_inline">
                  <div className="inline">{c.name}</div>
                  <div className="inline floatRight"> <Price price={c.price} /></div>
                  <hr />
                </div>
               
            )}
          </div>
          : <div>No products Found</div> 
        }   
        <Link to="/" className="app__start-button orderBTN">Order</Link>
        </div>
  </div>);
}


const mapStateToProps = (store: IAppState) => {
  return {
    selectedProducts : getSelectedProducts(store) 
  }
}

export default connect(mapStateToProps)(BasketPage);
