import React from 'react'
import './Recipe.css';
import { useNavigate } from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'

import Pork from '../../assets/cookedPork.jpeg'
import chicken from '../../assets/cooked-chicken.jpeg'
import liver from '../../assets/COOKED-LIVER.jpeg'
import gizzards from '../../assets/Cooked-Gizzards.jpeg'
import necks from '../../assets/cooked-necks.jpeg'
import skin from '../../assets/cooked-skin.jpeg'
import hearts from '../../assets/cooked-hearts.jpeg'

const Recipe = () => {
    const NavigateBooking = useNavigate();

  return (
    <section className="recipeContainer">

        {/* <div className="searchContainer">
            <input type="text" placeholder='QUICK RECIPE SEARCH' className='input'/>
            <button> <FcSearch className='icon'/> </button>
            
        </div> */}

        <div className="intro">
            <p>We as Popular Meating Junction recognize how important a delicious meal is to you. Therefore, we have prepared a list of different recipes thar you could try out whenever you buy meat. Here are some of the easiest, time saving and cost effective recipes we have prepared for you.</p>
            <p className='closing'>Bon Appetit</p>
        </div>

        <div className="quickRecipeContainer pork">
            <div className="head">
                <h2>QUICK PORK RECIPE</h2>
                <h3>Honey Glazed Pork</h3>
                <img src={Pork} alt="how-to-cook-pork" />
            </div>

            <div className="ingredients">
                <h3>INGREDIENTS</h3>
                <ol>
                    <li>1/3 cup honey</li>
                    <li>1/4 cup soy sauce</li>
                    <li>3 garlic cloves crushed</li>
                    <li>1tbsp  sesame oil</li>
                    <li>1kg pork (or any amount of your preference)</li>
                    <li>Fresh corriander springs, to serve</li>
                    <li>Lemon wedges, to serve</li>
                    <li>Cooked rice, to serve</li>
                </ol>
            </div>

            <div className="recipe">
                <h3>How To Cook</h3>
                <h4>Cooking Instructions</h4>
                <ul>
                    <li>
                        Step 1
                       <p> Combine honey, soy sauce, garlic and 2 tablespoons water in a medium jug. Set aside. </p>
                    </li>
                    <li>
                        Step 2
                       <p> Heat oil in a large frying pan over medium-high heat. Add pork. Cook for 2 to 3 minutes each side or until browned. Add honey mixture. Cook for a further 3 minutes, turning pork halfway, or until glaze thickens and pork is cooked to your liking. </p>
                    </li>
                    <li>
                        Step 3
                        <p>Top pork with coriander. Serve with lemon and steamed rice. </p>
                    </li>
                </ul>

            </div>

            <div className="button">
                <button onClick= {() => NavigateBooking('/buy-nyama')} >BUY</button>
            </div>
        </div>

        <div className="quickRecipeContainer chicken">
            <div className="head">
                <h2>QUICK CHICKEN RECIPE</h2>
                <h3>Honey Garlic Chicken</h3>
                <img src={chicken} alt="how-to-cook-chicken" />
            </div>

            <div className="ingredients">
                <h3>INGREDIENTS</h3>
                <ol>
                    <li>6 chicken thighs, bone in or out, with or without skin*</li>
                    <li>Salt and pepper, to season</li>
                    <li>1/3 cup honey</li>
                    <li>1/4 cup water (or chicken broth)</li>
                    <li>2 tablespoons rice wine vinegar (or apple cider vinegar, or any white vinegar)</li>
                    <li>1 tablespoon soy sauce</li>
                </ol>
            </div>

            <div className="recipe">
                <h3>How To Cook</h3>
                <h4>Cooking Instructions</h4>
                <ul>
                    <li>
                        Step 1
                       <p> Season chicken with salt, pepper and garlic powder; set aside. </p>
                    </li>
                    <li>
                        Step 2
                       <p> Heat a pan or skillet over medium high heat; sear chicken thigh fillets or breast fillets on both sides until golden and cooked through. </p>
                    </li>

                    <ul>
                        <h4>FOR BONE IN THIGHS</h4>

                        <li>
                            Reduce heat after searing on both sides, cover skillet with a lid and continue cooking until the chicken is cooked through, while turning every 5 minutes until done. Alternatively, see notes for oven method.
                        </li>
                        <li>
                             Drain most of the excess oil from the pan, leaving about 2 tablespoons of pan juiced for added flavour.
                        </li>
                    </ul>

                    <ul>
                        <h4>FOR SAUCE</h4>

                        <li>
                            <p>When chicken is done and cooked through, arrange chicken skin-side up in the pan (if cooking with skin); add the garlic between the chicken and fry until fragrant (about 30 seconds). Add the honey, water, vinegar and soy sauce. Increase heat to medium-high and continue to cook until the sauce reduces down and thicken slightly (about 3-4 minutes).</p>
                        </li>
                        <li>
                            <p>Garnish with parsley and serve over vegetables, rice, pasta or with a salad.</p>
                        </li>
                    </ul>
                    
                </ul>

                <div className="summary">
                    <h3>NOTES</h3>
                    <p>*For chicken breasts: use 3 breasts, sliced horizontally in half. Sear breast fillets on each side until golden and cooked through (about 6 minutes per side, depending on the thickness of your fillets). Continue directions from the sauce, onwards.**For oven baked, bone-in thighs: Preheat oven at 400°F or 200°C. Sear chicken in an oven proof skillet or pan, skin side down first for 3 minutes. Flip and sear for a further 3 minutes until browned each side. Then bake in the oven for a further 20-25 minutes, until completely cooked through and no longer pink inside. Continue directions from the sauce, onwards.</p>
                </div>

            </div>

            <div className="button">
                <button onClick= {() => NavigateBooking('/buy-nyama')} >BUY</button>
            </div>
        </div>

        <div className="quickRecipeContainer liver">
            <div className="head">
                <h2>QUICK LIVER RECIPE</h2>
                <img src={liver} alt="how-to-cook-liver" />
            </div>

            <div className="ingredients">
                <h3>INGREDIENTS</h3>
                <ol>
                    <li>500g Chicken Livers</li>
                    <li>1 Large Onion</li>
                    <li>1 Green Pepper</li>
                    <li>2 tsp Chicken Spice</li>
                    <li>2 tsp Barbecue Spice</li>
                    <li>1 tsp Black Pepper</li>
                    <li>1 tsp Aromat</li>
                    <li>15 ml cooking oil</li>
                    <li>10ml soy sauce</li>
                </ol>
            </div>

            <div className="recipe">
                <h3>How To Cook</h3>
                <h4>Cooking Instructions</h4>
                <ul>
                    <li>
                        Step 1
                       <p> Defrost (if earlier frozen) and drain water from the livers </p>
                    </li>
                    <li>
                        Step 2
                       <p> Place the livers in a bowl and marinate with brown spices and Aromat </p>
                    </li>
                    <li>
                        Step 3
                        <p>Finely chop onion and green peppers into dices </p>
                    </li>

                    <li>
                        Step 4
                        <p>Put cooking oil in a cooking pan and add onion & green peppers, fry for 5 minutes</p>
                    </li>

                    <li>
                        Step 5
                        <p>Add chicken livers, fry for 15 minutes until slightly brown</p>
                    </li>
                    <li>
                        Step 6
                        <p>Add Soy Sauce and black pepper and simmer for 10 minutes</p>
                    </li>
                    <li>
                        Step 7
                        <p>Serve with Rice or Ugali</p>
                    </li>
                </ul>

            </div>

            <div className="button">
                <button onClick= {() => NavigateBooking('/buy-nyama')} >BUY</button>
            </div>
        </div>

        <div className="quickRecipeContainer necks">
            <div className="head">
                <h2>QUICK NECKS RECIPE</h2>
                <img src={necks} alt="how-to-cook-necks" />
            </div>

            <div className="ingredients">
                <h3>INGREDIENTS</h3>
                <ol>
                    <li>2kg Chicken Necks</li>
                    <li>1 large Onion</li>
                    <li>2tbs Salt and Black Pepper</li>
                    <li>50g Cooking Oil</li>
                    <li>2tbs Chicken Spice</li>
                    <li>2 large Tomatoes</li>
                    <li>2tbsp Curry Powder</li>
                    <li>500ml Water</li>
                </ol>
            </div>

            <div className="recipe">
                <h3>How To Cook</h3>
                <h4>Cooking Instructions</h4>
                <ul>
                    <li>
                        Step 1
                       <p> Finely chop the onion. Clean and prepare the chicken necks. Heat the oil in a pan and add the onions, Robertsons Rajah Medium Curry Powder, Robertsons Chicken Spice and the chicken necks and fry for 10 min. </p>
                    </li>
                    <li>
                        Step 2
                       <p> Add the water and Knorr Tomato Pronto and cook for 20 min. Add the frozen vegetables and cook for another 5 min. </p>
                    </li>
                    <li>
                        Step 3
                        <p>Remove from the heat and serve. </p>
                    </li>

                    <li>
                        Hint
                        <p>Save time by pre-portioning all the recipe ingredients.</p>
                    </li>

                    <li>
                        Chef's tip
                        <p>Add some potato cubes at the step where the water is added.</p>
                    </li>
                </ul>

            </div>

            <div className="button">
                <button onClick= {() => NavigateBooking('/buy-nyama')} >BUY</button>
            </div>
        </div>

        <div className="quickRecipeContainer skin">
            <div className="head">
                <h2>QUICK SKIN RECIPE</h2>
                <img src={skin} alt="how-to-cook-skin" />
            </div>

            <div className="ingredients">
                <h3>INGREDIENTS</h3>
                <ol>
                    <li>Salt</li>
                    <li>Black Pepper</li>
                    <li>Cooking Oil</li>
                    <li>Cayenne</li>
                    <li>Tomatoes</li>
                    <li>Yoghurt</li>
                </ol>
            </div>

            <div className="recipe">
                <h3>How To Cook</h3>
                <h4>Cooking Instructions</h4>
                <ul>
                    <li>
                        Step 1
                       <p> Cut pork and put in a sufuria to boil for 20 minutes since this is pork and it might have some germs. </p>
                    </li>
                    <li>
                        Step 2
                       <p> When boiled, put oil in clean sufuria, add the diced onions. Fry until soft. </p>
                    </li>
                    <li>
                        Step 3
                        <p>Then add the thinly sliced tomatoes and fry until soft. </p>
                    </li>

                    <li>
                        Step 4
                        <p>Add in salt and royco. cook for 5 more mutes and then served. You can add in afew strands of kale to make it appetizing.</p>
                    </li>

                    <li>
                        Step 5
                        <p>Serve</p>
                    </li>
                </ul>

            </div>

            <div className="button">
                <button onClick= {() => NavigateBooking('/buy-nyama')} >BUY</button>
            </div>
        </div>

        <div className="quickRecipeContainer gizzards">
            <div className="head">
                <h2>Quick GIzzards Recipe</h2>
                <h3>Sauteed Chicken Gizzards</h3>
                <img src={gizzards} alt="how-to-cook-gizzards" />
            </div>

            <div className="ingredients">
                <h3>INGREDIENTS</h3>
                <ol>
                    <li>2 tablespoons Oil</li>
                    <li>1 pack Gizzards, you may use with hearts or w/o</li>
                    <li>1/2 Onion sliced</li>
                    <li>2 Garlic cloves sliced or minced</li>
                    <li>1/2 teaspoon Bouillon powder</li>
                    <li>Salt to taste, a few pinches</li>
                </ol>
            </div>

            <div className="recipe">
                <h3>How To Cook</h3>
                <h4>Cooking Instructions</h4>
                <ul>
                    <li>
                        Step 1
                       <p> First, wash gizzards really well under cold water, cut them in half, and cut off any green or fatty parts, if any. Boil 1/2 pot of salted water, drop in the water gizzards and let them boil for 20 minutes, keep the lid halfway closed, and be close by because water will start to bubble. </p>
                    </li>
                    <li>
                        Step 2
                       <p> Boil on high for the first 5 minutes, then turn down the heat to lower temperature. It doesn't have to be simmer, just to keep boiling. </p>
                       <p>Drop gizzards in a colander and wash under cold water, let them get air dry until ready to use.</p>
                    </li>
                    <li>
                        Step 3
                        <p>Slice onion, garlic and set aside. Preheat oil and drop in the carefully chicken gizzard, turn the heat to medium and saute for a few minutes, just when they start to turn brownish, crunchy color, drop in onion and garlic. </p>
                    </li>

                    <li>
                        Step 4
                        <p>Season with Bouillon powder (You can use herbs too) or salt to taste; Since gizzards were cooking in salted water, you do not need much, maybe few pinches. Saute until onion and garlic start to get a golden color, and gizzards are brownish.</p>
                    </li>

                    <li>
                        Step 5
                        <p>Add polenta to the bowl, then put in gizzards and take a tablespoon of that oil that gizzards sauteed in and drizzle on top.</p>
                        <p>You can also serve them with rice or potatoes. Serve it over POLENTA, RICE OR ON IT'S OWN. </p>
                    </li>
                </ul>

            </div>

            <div className="button">
                <button onClick= {() => NavigateBooking('/buy-nyama')} >BUY</button>
            </div>
        </div>

        <div className="quickRecipeContainer hearts">
            <div className="head">
                <h2>QUICK CHICKEN HEARTS RECIPE</h2>
                <img src={hearts} alt="how-to-cook-chicken-hearts" />
            </div>

            <div className="ingredients">
                <h3>INGREDIENTS</h3>
                <ol>
                    <li>Raw Chicken Hearts</li>
                    <li> 2tsps Cooking Oil</li>
                    <li>1tsp Salt and Black Pepper to taste</li>
                    <li>1tsp Garlic Powder</li>
                    <li>1 large Onion or 1tsp Onion Powder</li>
                    <li>1/2 tsp Paprika</li>
                    <li>1/2 tsp Ground Cumin</li>
                    <li>2 tsps Corriander for garnishing</li>
                </ol>
            </div>

            <div className="recipe">
                <h3>How To Cook</h3>
                <h4>Cooking Instructions</h4>
                <ul>
                    <li>
                        Step 1
                       <p> Place the chicken hearts, olive oil, salt, pepper, garlic powder, onion powder, smoked paprika and cumin in a large bowl. </p>
                    </li>
                    <li>
                        Step 2
                       <p> Use a large spoon, or your hands, to mix everything together, coating the hearts with the oil and seasonings. </p>
                    </li>
                    <li>
                        Step 3
                        <p>Heat a large, heavy frypan over medium-high heat, for about 3 minutes. </p>
                    </li>

                    <li>
                        Step 4
                        <p>Add the seasoned chicken hearts. Cook, stirring often, until browned and cooked through, 5-7 minutes. If the pan becomes too hot, lower the heat to medium.</p>
                    </li>

                    <li>
                        Step 5
                        <p>Divide the hearts between four plates. Drizzle them with the pan juices, garnish with chopped parsley, and serve.</p>
                    </li>

                    <li>
                        NOTE:
                        <p>Make sure not to overcook the hearts, or they will turn out tough. When properly cooked, they're nice and tender, if a bit chewy.</p>
                    </li>
                </ul>

            </div>

            <div className="button">
                <button onClick= {() => NavigateBooking('/buy-nyama')} >BUY</button>
            </div>
        </div>

    </section>
  )
}

export default Recipe
