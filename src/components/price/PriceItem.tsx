import React from 'react';
import { IPrice } from '../../interfaces/IProduct';

interface IProps {
    priceItem :IPrice,
    isFirst:boolean
}
 const PriceItem:React.FunctionComponent<IProps> = ({priceItem,isFirst}) => {
   
    const result = (priceItem.periodStart && priceItem.periodStart > 1) ?
    `From ${priceItem.periodStart} ${priceItem.billingFrequency}  ${priceItem.amount} € / ${priceItem.billingFrequency}` : 
     `${priceItem.amount} € / ${priceItem.billingFrequency}`
   
    return (
        <div>
            {isFirst ? <h2> {result} </h2>
             : <h5>  {result} </h5> 
             }
             
        </div>
    );
}



export default PriceItem;

