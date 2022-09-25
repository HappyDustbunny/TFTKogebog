class Emigrant extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <button class="insertedRecipe">
    	<h3>Sage and garlic rolls</h3>
    </button>

    <div class="insertedIngredienser">
    	<p class="antal">(3 - 4 people) (Start 1&frac12; hours before)</p>

    	<b>Ingredienser:</b>
    	<p><label><input type="checkbox">Ingredients:</label></p>
    	<p><label><input type="checkbox">500 g flour</label></p>
    	<p><label><input type="checkbox">100 g butter (or baking margarine)</label></p>
    	<p><label><input type="checkbox">2 teaspoons of salt</label></p>
    	<p><label><input type="checkbox">2 cloves of garlic</label></p>
    	<p><label><input type="checkbox">1 teaspoon dried sage</label></p>
    	<p><label><input type="checkbox">25 g of yeast</label></p>
    	<p><label><input type="checkbox">3 dL milk</label></p>
    </div>

    <div class="insertedHowto"> <b> Method: </b>
    	<p><label><input type="checkbox">Put 500 g of flour in a Margrethe bowl</label></p>
    	<p><label><input type="checkbox">Add 100 g butter (or baking margarine) cut into small cubes and crumble it together with the flour</label></p>
    	<p><label><input type="checkbox">Add 1 teaspoon of salt</label></p>
    	<p><label><input type="checkbox">Add 1 teaspoon of dried sage to the mortar and crush it roughly. Add the sage to the flour mixture</label></p>
    	<p><label><input type="checkbox">Put 2 cloves of garlic in the garlic press and press them into the flour mixture. Stir until the garlic and spices are evenly distributed</label></p>
    	<p><label><input type="checkbox">Measure out 3 dL of milk and add 25 g of yeast. Stir until the yeast is dissolved</label></p>
    	<p><label><input type="checkbox">Add milk and yeast to the flour mixture and knead well</label></p>
    	<p><label><input type="checkbox">Divide the dough into 16 pieces and form them into small oblong loaves</label></p>
    	<p><label><input type="checkbox">Let the loaves rise on the baking sheet for approx. 30 minutes</label></p>
    	<p><label><input type="checkbox">Turn on the oven at 200° (remember to remove the plates)</label></p>
    	<p><label><input type="checkbox">When the oven is hot, bake the loaves for 12-16 minutes</label></p>
    	<p><label><input type="checkbox">Take the bread out and cool on a wire rack</label></p>
    	<p><label><input type="checkbox">Tip: Emigrant Bread is good for soup or as a side dish for vegetable dishes</label></p>
    	<p><label><input type="checkbox">Tip: The breads are suitable for freezing, so you can consider baking a double portion and freezing half. When you need to use them, you take them out of the freezer a few hours before they are to be used and let them thaw on a wire rack. It is good to heat them for 5 minutes in the oven or on the toaster before serving</label></p>

    	<button class="slut">(End)</button>
    </div>
    `;
  }
}

customElements.define('emigrant-recipe', Emigrant);
