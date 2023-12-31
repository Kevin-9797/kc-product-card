import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as PropsTitle } from "../components/ProductTitle";
import { Props as PropsImage} from "../components/ProductImage";
import { Props as PropsButtons } from "../components/ProductButtons";


export interface Product {
    id: string;
    title?: string;
    img?: string;
     
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number) => void;
    product: Product;
    maxCount?: number;
    isMaxReached?: () => boolean ;
}

export interface ProductButtonsProps {
    increaseBy: ( value: number ) => void,
    value: number;

}
export interface ProductCardHocProps {
    ({ children, product }: ProductCardProps ): JSX.Element,
    Title: ( Props: PropsTitle) => JSX.Element,
    Img: ( Props: PropsImage) => JSX.Element,
    Buttons: ( Props: PropsButtons ) => JSX.Element
}

export interface onChangeArgs{
    product: Product;
    count: number;
}

export interface ProductInCart extends Product{
    count: number;
  }

export interface InitialValuesProps{
    count: number;
    maxCount?: number;
} 

export interface ProductCardHandlers{
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: ( value:number ) => void;
    reset: () => void;
}