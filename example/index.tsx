import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductTitle } from '../.';


const product = {
  id: '1',
  title: 'primer cafe',
  img: './coffee-mug.png'
}

const App = () => {
  return (
    <div>
       <ProductCard key={ product.id }
                          product={product} 
                          className="bg-dark "
                          initialValues={{
                            count: 4,
                            maxCount: 10
                          }}
                          >
                            {
                              ( { reset,increaseBy,isMaxCountReached, count }) => (
                                <>
                                
                                  <ProductCard.Img className="custom-image" />
                                  <ProductCard.Title title={ 'Cafè' } className="text-white" />
                                  <ProductCard.Buttons  className="custom-buttons" />
                                  <button onClick={ () => increaseBy(-2)} >-2</button>
                                  <button  style={{
                                    display: isMaxCountReached ? 'none' : 'block'
                                  }}
                                  onClick={ () => increaseBy(2)}>+2</button>
                                  <span>{count}</span>
                                </>


                              )
                            }
              </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
