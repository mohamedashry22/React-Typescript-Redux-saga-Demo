import React from 'react';
import { IPrice } from '../../interfaces/IProduct';
import PriceItem from './PriceItem';

interface IProps {
    price :IPrice[]
}
 const Price:React.FunctionComponent<IProps> = ({price}) => {

    return (
      <div>
          {price.map((item, index) => {
           return <PriceItem
                key = {index}
                priceItem = {item}
                isFirst={index === 0}   
            />
      })}
      </div>
    );
}



export default Price;

