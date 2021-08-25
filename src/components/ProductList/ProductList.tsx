import React from 'react';
import { IProduct, IProductCategory } from '../../interfaces/IProduct';
import Category from '../Category/Category';
import Price from '../price/Price';
import './Product.css'

interface IProps {
  products:IProduct[],
  selectProduct:Function,
  deSelectProduct:Function,
  selectedProducts:IProductCategory[]
}
export const ProductList:React.FunctionComponent<IProps> = ({products,selectProduct,deSelectProduct,selectedProducts}) => {
   
  debugger;
  const onClickHandler = (product:any,catIndex:number,event:any) => {
    if(event.target.checked){
      selectProduct(product,catIndex);
    }else{
      deSelectProduct(product,catIndex);
    }
  };

  return (
  
      <div className="productsContainer">
  
            {products.map((cat,catIndex) =>
               <div>
                 <Category name={cat.name} />
                 <div className="containerView">
                   
                 {cat.products.map((p,index)=> 

                    <div className="grid-wrapper grid-col-2">
                      <div className="selection-wrapper">
                          <label htmlFor={catIndex.toString() + index.toString()}
                          className="selected-label">
                            	<input type="checkbox" checked={selectedProducts && selectedProducts.map(s=>s.name).includes(p.name)} onChange={(e) => onClickHandler(p,catIndex,e)} name="selected-item" id={catIndex.toString() + index.toString()} ></input>
                              <span className="icon"></span>
                              <div className="selected-content">
                                  <img src="https://image.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg" alt="" />
                                  <h4>{p.name}</h4>
					                        <h5>{p.description}</h5>
                                  <Price price={p.price} />
                              </div>

                          </label>
                      </div>
                    </div>
                  
                  
                  
                  )}
                  </div>
               </div>)}
      </div>
    );
}

export default ProductList;

