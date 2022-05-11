class Groensalat extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <button class="insertedRecipe">
     <h3>Gr&oslash;n salat</h3>
    </button>

    <div class="insertedIngredienser">
      <p class="antal">(4 personer) (Start &frac14; time f&oslash;r)</p>
      <b>Ingredienser:</b>

      <p><label><input type="checkbox"> 1-2 salatblade pr. person</label></p>
      <p><label><input type="checkbox"> 2-3 tomater</label></p>
      <p><label><input type="checkbox"> (Feta i tern/oliven/hakkede
        cashewn&oslash;dder/t&oslash;rrede tomater/&hellip;)</label></p>
      <p><label><input type="checkbox"> (2 spsk olivenolie, 1 tsk eddike og et drys salt)</label></p>

    </div>

    <div class="insertedHowto"><b>Fremgangsm&aring;de:</b>
      <p><label><input type="checkbox"> (Tag 2-3
      blade af et salathoved</label></p>
      <p><label><input type="checkbox"> Kasser slatne
      blade, og tag nye</label></p>
      <p><label><input type="checkbox"> Sk&aelig;r
      eller riv salatbladene i stykker (ca. 1,5 x 3 cm)</label></p>
      <p><label><input type="checkbox"> Sk&aelig;r
      2-3 tomater i terninger</label></p>
      <p><label><input type="checkbox"> Bland salat
      og tomat i en salatsk&aring;l med en gaffel og en ske</label></p>
      <p><label><input type="checkbox"> Lad gaflen og
      skeen blive i salaten, s&aring; man kan tage med dem</label></p>
      <p><label><input type="checkbox"> (Drys feta i
      tern/oliven/hakkede cashewn&oslash;dder/t&oslash;rrede tomater/&hellip;
      over salaten )</label></p>
      <p><label><input type="checkbox"> R&oslash;r
      evt. en dressing af 2 spsk olivenolie, 1 tsk eddike og et drys
      salt</label></p>
      <p><label><input type="checkbox"> Server	salaten</label></p>

      <button class="slut">(Slut)</button>

    </div>
    `;
  }
}

customElements.define('groensalat-recipe', Groensalat);
