import React from 'react';

interface IProps {
  name :string
}
 const Category:React.FunctionComponent<IProps> = ({name}) => {
    return (
      <div className="productsCategory">
          {name}
      </div>
    );
}



export default Category;

