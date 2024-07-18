$(function() {
  if (!window.location.hash) {
    $('.opskrifter').hide();
    $('.ingredienser').hide();
    $('.howto').hide();
    // Repeted recipes are treated differently: they do not unfold until explicitly clicked
    $('.insertedIngredienser').hide();
    $('.insertedHowto').hide();
    // The a link is shown and the about button is hidden if no javascript is present
    $('#fallBackLink').hide();
    $('#about').show();
    $('#about').on('click', function() {
      window.location = 'aboutTrinForTrin.html'
    });
    $(window).scrollTop(0)  // Helps resetting page so the top becomes the top
  }


  $('#foldOutFoldIn').on('click', function() {
    if ($(this)[0].value == 'unfold') {
      showIndex();
    } else if ($(this)[0].value == 'unfoldAll') {
      showAll();
    }
    else {
      hideAll();
    }
  });


  let direction = 1;
  let originalFontSize = parseInt($('body').css("font-size"));
  let fontSize = originalFontSize;
  let step = 5;
  $('#textSize').on('click', function() {  // Cycle between fontsizes normal-big-biggest-big-normal-big-...
    fontSize += direction * step;
    if (fontSize == originalFontSize + 2 * step) {
      direction = -1;
    } else if (fontSize == originalFontSize) {
      direction = 1;
    }
    $('body').css("font-size", fontSize);
    $('.controlButton').css("font-size", fontSize);
  })


  $('p').on('click', function() {
    if ($(this).children()[0]) {
      $(this).children()[0].checked = !$(this).children()[0].checked;
    }
  });


  $('.slut')[0].value = 'noSideDish'; // Initialise variable used for tracking if sidedishes are open


  function hideAll() {
    $('.opskrifter').hide(500);
    $('.ingredienser').hide(500);
    $('.howto').hide(500);
    $('.insertedIngredienser').hide(500);
    $('.insertedHowto').hide(500);

    $('#foldOutFoldIn')[0].value = 'unfold';
    $('#foldOutFoldIn')[0].textContent = 'Fold index ud';
    $(window).scrollTop(0);  // Helps resetting page so the top becomes the top
  }


  function showIndex() {
    $('.opskrifter').show();
    $('#foldOutFoldIn')[0].value = 'unfoldAll';
    $('#foldOutFoldIn')[0].textContent = 'Fold alt ud (for at kunne s\u00f8ge)';
  }


  function showAll() {
    $('.opskrifter').show();
    $('.ingredienser').show();
    $('.howto').show();

    $('#foldOutFoldIn')[0].value = 'fold';
    $('#foldOutFoldIn')[0].textContent = 'Fold alt ind';
  }

  // Fold everything
  $('.slut').on('click', function() {
    if ( $('.slut')[0].value != 'noSideDish') { // If a sidedish is open it needs to be closed before toggling everything shut
      $('#sideDish').remove();
      $('.slut')[0].value = 'noSideDish';
    }
    $('input').prop("checked", false);
    hideAll();
    window.location.hash = '';  //Used for linking to reciepes
  });


  $('.oversigt').on('click', '.kategori', function(event) {
    event.preventDefault();
    $(this).next('.opskrifter').not('animated').slideToggle();
  });


  $('.opskrifter').on('click', '.recipe', function(event) {
    event.preventDefault();
    $('#sideDish').remove(); // Close open side dishes
    $('.insertedRecipe').css({'border-style': 'outset'}); // Fix side dish buttons
    // $('.ingredienser').hide(500); // Hide open recipes if any is open
    // $('.howto').hide(500);
    $(this).next('.ingredienser').not('animated').show();  // Open current recipe
    $(this).next('.ingredienser').next('.howto').not('animated').show();
    $(this).next('div').children().not('animated').show();  // Open current recipe if used as side dish
  });


    let sideDishes = {
                      showBakedPotatoes: '#bakedPotatoes',
                      showBakedSesamePotatoes: '#bakedSesamePotatoes',
                      showButterCabbage: '#butterCabbage',
                      showBurgerBuns: '#burgerBuns',
                      showCarrotSalad: '#carrotSalad',
                      showChappaties: '#chappaties',
                      showGreenSalad: '#greenSalad',
                      showHasselbachs: '#hasselbachs',
                      showHazelCabbage: '#hazelCabbage',
                      showHomemadePasta: '#homemadePasta',
                      showMashedPotatoes: '#mashedPotatoes',
                      showPasta: '#pasta',
                      showPita: '#pita',
                      showRice: '#rice',
                      showRootVegs: '#rootVegs',
                      showSageRolls: '#sageRolls',
                      showTrimitri: '#trimitri',
                      showTortilla: '#tortilla'
                    };


  for (let sDish in sideDishes) {  // Puts eventlisteners on all side dish buttons
    $('.' + sDish).on('click', function(event) {
      $('#sideDish').remove();
      $('.insertedRecipe').css({'border-style': 'outset'});
      if ( $('.slut')[0].value == 'noSideDish' || !$(this).attr('class').includes($('.slut')[0].value)) {
        let insertedRecipeHTML = $(sideDishes[sDish]).html().replace(/style="display: none;"/g, '');
        insertedRecipeHTML = insertedRecipeHTML.replace('<button class="slut">(Slut)</button>', '');  // Remove buttons as there is no eventlistners attached and as they are more confusing than helping here
        insertedRecipeHTML = insertedRecipeHTML.replace('<button class="share">Del</button>', '');
        insertedRecipeHTML = '<div id="sideDish">' + insertedRecipeHTML + '</div>';
        $(this).css({'border-style': 'inset'});
        $(this).after(insertedRecipeHTML);
        $('.slut')[0].value = sDish;
        $('#sideDish').hide();
        $('#sideDish').slideDown();
      } else {
        $('.slut')[0].value = 'noSideDish';
      }
    });
  };
})
