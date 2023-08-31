import React from 'react'
import './Main.css'
import {useNavigate} from 'react-router-dom'

import {AiOutlineShoppingCart} from 'react-icons/ai'

import pork from '../../assets/pork3.jpeg'
import chicken from '../../assets/chicken5.png'
import liver from '../../assets/LIVER.jpg'
import gizzards from '../../assets/gizzards3.jpeg'
// import skin from '#'
import necks from '../../assets/necks4.jpg'
import  hearts from '../../assets/hearts.webp'
// import feet from '#'
// import heads from '#'

const Main = () => {

  const Navigate = useNavigate();
  const Recipe = useNavigate();

  return (
    <section className="main">
        <div className="productsContainer">
          <div className="prodDescription">
            <h3>WHO WE ARE:</h3>
            <p className="description">
                Popular Meating Junction is both a white and red meat butchery. We major in the sell of chicken and pork meat.
                In addition, we sell chicken parts such as:
                Liver, gizzards, chicken necks, chicken hearts, and even chicken feet.
                Anything you want, we've got! 
            </p>   
            <p className='description'>So make sure to pass on by and buy meat according to your preference at an affordable price</p> 
          </div>

          <div className="allProducts">
           <h2 className="ourProducts">PMJ CHICKEN & PORK OFFERS:</h2>
            <ul className='productList'>
              <li>

                <div className="title">
                  <h3>Pork</h3>
                  <img src={pork} alt="pork meat" />
                </div>

                <p>Pork is the best and is acquired from one of the best vichinjios in dumbo that is stamped by health</p>
                
                <div className="tagsContainer">
                <div className="priceTag">
                      <div className="price">
                        <h4>PRICE PER KG :</h4>
                        <h3>Ksh 520</h3>
                      </div>

                      <button onClick={() => Navigate('/buy-nyama')} > 
                        <AiOutlineShoppingCart className=' icon'/> ADD TO CART
                      </button>

                    </div>

                  <div className="recipe">
                      <button onClick={() => Recipe('/quick-recipes')} >QUICK RECIPE</button>
                  </div>   
                    
                  </div>
                

              </li>

              <li>

                <div className="title">
                  <h3>Chicken</h3>
                  <img src={chicken} alt="chicken meat" />
                </div>
                
                <p>We raise our own chicken in the Gitingu farm who happens to be the owner of the butchery. We ensure the best health is maintaind which is important to healthy living to our customers</p>
                
                <div className="tagsContainer">
                <div className="priceTag">
                      <div className="price">
                          <h4>PRICE PER KG :</h4>
                          <h3>Ksh 520</h3>
                      </div>

                      <button onClick={() => Navigate('/buy-nyama')} > 
                        <AiOutlineShoppingCart className=' icon'/> ADD TO CART
                      </button>

                    </div>

                  <div className="recipe">
                      <button onClick={() => Recipe('/quick-recipes')} >QUICK RECIPE</button>
                  </div>             
                  </div>

              </li>

              <li>
                
                <div className="title">
                  <h3>Liver</h3>
                  <img src={liver} alt="liver" />
                </div>

                <p>Liver is the most nutrious organ in the chicken and delicious as well. It is also the best selling product at PMJ so grab your liver as well as low as Ksh. 50</p>

                <div className="tagsContainer">
                    <div className="priceTag">
                      <div className="price">
                          <h4>PRICE PER KG :</h4>
                          <h3>Ksh 520</h3>
                      </div>

                      <button onClick={() => Navigate('/buy-nyama')} > 
                        <AiOutlineShoppingCart className=' icon'/> ADD TO CART
                      </button>

                    </div>
                  <div className="recipe">
                      <button onClick={() => Recipe('/quick-recipes')} >QUICK RECIPE</button>
                  </div>     
                  </div>

              </li>

              <li>
                
                <div className="title">
                  <h3>Gizzards</h3>
                  <img src={gizzards} alt="Gizzards" />
                </div>

                <p>I don't know about you, but Gizzards happen to be my favourite part in chicken. It busses in your mouth and it's crunchiness is out of this world. As low as Ksh. 100 you can get your Gizzards</p>

                <div className="tagsContainer">
                  <div className="priceTag">
                      <div className="price">
                          <h4>PRICE PER KG :</h4>
                          <h3>Ksh 520</h3>
                      </div>

                      <button onClick={() => Navigate('/buy-nyama')} > 
                        <AiOutlineShoppingCart className=' icon'/> ADD TO CART
                      </button>

                    </div>
                  <div className="recipe">
                      <button onClick={() => Recipe('/quick-recipes')} >QUICK RECIPE</button>
                  </div>  
                    
                  </div>

              </li>

              <li>
                
                <div className="title">
                  <h3>Kitchen Skin</h3>
                </div>

                <p>Yes, you've heard it, we have chicken skin as well. Chicken skill is known to make food tastier and times evenextract oil for cooking when looking for a certain flavour in your food. It is amaing when added in your skuma wiki (kales)</p>

                <div className="tagsContainer">
                    <div className="priceTag">
                      <div className="price">
                          <h4>PRICE PER KG :</h4>
                          <h3>Ksh 520</h3>
                      </div>

                      <button onClick={() => Navigate('/buy-nyama')} > 
                        <AiOutlineShoppingCart className=' icon'/> ADD TO CART
                      </button>

                    </div>
                  <div className="recipe">
                      <button onClick={() => Recipe('/quick-recipes')} >QUICK RECIPE</button>
                  </div>  
                  </div>
                
              </li>

              <li>
                
                <div className="title">
                  <h3>Necks</h3>
                  <img src={necks} alt="necks" />
                </div>

                <p>Necks are the best side plate to add to your ugali and skuma meal and is at a very affordable fee of ksh. 280 and starts as low as ksh. 50</p>

                <div className="tagsContainer">
                    <div className="priceTag">
                      <div className="price">
                          <h4>PRICE PER KG :</h4>
                          <h3>Ksh 520</h3>
                      </div>

                      <button onClick={() => Navigate('/buy-nyama')} > 
                        <AiOutlineShoppingCart className=' icon'/> ADD TO CART
                      </button>

                    </div>
                    <div className="recipe">
                        <button onClick={() => Recipe('/quick-recipes')} >QUICK RECIPE</button>
                    </div>   
                    
                  </div>
                

              </li>

              <li>
                
                <div className="title">
                  <h3>Chicken hearts</h3>
                  <img src={hearts} alt="chicken hearts" />
                </div>

                <p>If none so far excite you above, then this will, Chicken hearts are an amaing delicacy that can be eaten with anything you want. </p>

                <div className="tagsContainer">
                    <div className="priceTag">
                      <div className="price">
                          <h4>PRICE PER KG :</h4>
                          <h3>Ksh 520</h3>
                      </div>

                      <button onClick={() => Navigate('/buy-nyama')} > 
                        <AiOutlineShoppingCart className=' icon'/> ADD TO CART
                      </button>

                    </div>
                  <div className="recipe">
                      <button onClick={() => Recipe('/quick-recipes')} >QUICK RECIPE</button>
                  </div>   
   
                  </div>
                
              </li>

              <li>

                <div className="title">
                  <h3>Chicken Feet & Heads</h3>
                </div>
                
                <p>Have a dog or a cat? If so, then you should consider buying them chicken feet or chicken head. They have a love for these and to make it even better, even humans can eat these. Not along with the dogs of course. So pass by and get offers as low Ksh. 100</p>

                <div className="tagsContainer">
                    <div className="priceTag">
                      <div className="price">
                          <h4>PRICE PER KG :</h4>
                          <h3>Ksh 520</h3>
                      </div>

                      <button onClick={() => Navigate('/buy-nyama')} > 
                        <AiOutlineShoppingCart className=' icon'/> ADD TO CART
                      </button>

                    </div>
                  <div className="recipe">
                      <button onClick={() => Recipe('/quick-recipes')} >QUICK RECIPE</button>
                  </div>   

                  </div>

              </li>
            </ul>
          </div>

          <div className="aboutUs">
            <h3>About Us</h3>
            <p>Popular Meating Junction was established in 2010 and since then we have been establishing ourselves to imporove the quality of meat in whish we serve our customers. </p>

          </div>
        </div>
    </section>
  )
}

export default Main;
