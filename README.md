# KC-Product-Card

## Example


```


    <ProductCard key={ products[0].id }
                          product={products[0]} 
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



```