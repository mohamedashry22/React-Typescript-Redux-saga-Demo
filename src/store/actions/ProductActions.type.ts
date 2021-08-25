import { IGetProductsAction ,IGetStartProductsAction,ISetProductsAction,IUnSetProductsAction} from '../../interfaces/IGetProductActions'

type ProductActions = IGetProductsAction | IGetStartProductsAction | ISetProductsAction | IUnSetProductsAction;

export default ProductActions;