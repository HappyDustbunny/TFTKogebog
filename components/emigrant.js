class Emigrant extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <button class="insertedRecipe">
     <h3>Emigrant Br&oslash;d</h3>
    </button>

    <div class="insertedIngredienser">
      <p class="antal">(3 - 4 personer)		(Start 1&frac12; time f&oslash;r)</p>
      <b>Ingredienser:</b>

      <p><label><input type="checkbox">  500 g mel</label></p>
      <p><label><input type="checkbox">  100 g sm&oslash;r (eller bagemargarine)</label></p>
      <p><label><input type="checkbox">  2 tsk salt</label></p>
      <p><label><input type="checkbox">  2 fed hvidl&oslash;g</label></p>
      <p><label><input type="checkbox">  1 tsk t&oslash;rret salvie</label></p>
      <p><label><input type="checkbox">  25 g g&aelig;r</label></p>
      <p><label><input type="checkbox">  3 dL m&aelig;lk</label></p>
    </div>

    <div class="insertedHowto"><b>Fremgangsm&aring;de:</b>

      <p><label><input type="checkbox">  Kom 500 g mel i en Margrethesk&aring;l</label></p>
      <p><label><input type="checkbox">  Tils&aelig;t 100 g sm&oslash;r (eller bagemargarine) sk&aring;ret
         i sm&aring; tern og smuldr det sammen med melet</label></p>
      <p><label><input type="checkbox">  Tils&aelig;t 1 tsk salt</label></p>
      <p><label><input type="checkbox">  Kom 1 tsk t&oslash;rret salvie morteren og knus
        det groft. Tils&aelig;t salvien til melblandingen</label></p>
      <p><label><input type="checkbox">  Kom 2 fed hvidl&oslash;g i hvidl&oslash;gspresseren
        og pres dem ned i melblandingen. R&oslash;r rundt til hvidl&oslash;g og krydderier er j&aelig;vnt fordelt</label></p>
      <p><label><input type="checkbox">  M&aring;l 3 dL m&aelig;lk op og tils&aelig;t 25 g g&aelig;r. R&oslash;r til g&aelig;ren er opl&oslash;st</label></p>
      <p><label><input type="checkbox">  Kom m&aelig;lk og g&aelig;r i melblandingen og &aelig;lt godt</label></p>
      <p><label><input type="checkbox">  Del dejen i 16 stykker og form dem til sm&aring; aflange br&oslash;d</label></p>
      <p><label><input type="checkbox">  Lad br&oslash;ddene h&aelig;ve p&aring; bagepladen i ca. 30 minutter</label></p>
      <p><label><input type="checkbox">  T&aelig;nd ovnen p&aring; 200&deg; (husk at tage pladerne ud)</label></p>
      <p><label><input type="checkbox">  N&aring;r ovnen er varm bages br&oslash;dene 12-16 minutter</label></p>
      <p><label><input type="checkbox">  Br&oslash;denen tages ud og k&oslash;les af p&aring; en rist</label></p>
      <br>
      <p>Tip: Emigrant Br&oslash;d er gode til suppe eller som tilbeh&oslash;r til gr&oslash;ntsagsretter</p>
      <p>Tip: Br&oslash;dene er velegnede til frysning, s&aring; man kan overveje at bage dobbelt portion og
        fryse halvdelen. N&aring;r man skal bruge dem tager man dem op af fryseren et par timer f&oslash;r de
        skal bruges og lader dem t&oslash; op p&aring; en rist. Det er godt at varme dem 5 minutter i ovnen
        eller p&aring; br&oslash;dristeren f&oslash;r de serveres</p>

      <button class="slut">(Slut)</button>

    </div>
    `;
  }
}

customElements.define('emigrant-recipe', Emigrant);
