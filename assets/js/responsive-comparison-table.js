// Responsive comparison table JS

// account-basics/administrative-and-investment-expenses/
$( "ul.funds-individual" ).on( "click", "li", function() {
  var pos = $(this).index()+1;
  $("table.i tr").find('td').hide();
  $('table.i td:nth-child('+pos+')').css('display','table-cell');
  $("table.i tr").find('th:not(:eq(0))').hide();
  $('ul.funds-individual li').removeClass('active');
  $(this).addClass('active');
});

$( "ul.funds-lifecycle" ).on( "click", "li", function() {
  var pos = $(this).index()+1;
  $("table.l tr").find('td').hide();
  $('table.l td:nth-child('+pos+')').css('display','table-cell');
  $("table.l tr").find('th:not(:eq(0))').hide();
  $('ul.funds-lifecycle li').removeClass('active');
  $(this).addClass('active');
});

// calculators/contribution-comparison-calculator/
// calculators/paycheck-estimator/
$( "ul.table-header-buttons" ).on( "click", "li", function() {
  var pos = $(this).index()+2;
  $("tr").find('td').hide();
  $('td:nth-child('+pos+')').css('display','table-cell');
  $("tr").find('th:not(:eq(0))').hide();
  $('li').removeClass('active');
  $(this).addClass('active');
});

// Initialize the media query
  var mediaQuery = window.matchMedia('(min-width: 640px)');


  // Add a listen event for comparing SIX items
  mediaQuery.addListener(fundComparison);

  // Function to do react to the media query
  function fundComparison(mediaQuery) {
    if (mediaQuery.matches) {
      $('.sep-individual').attr('colspan',5);
    } else {
      $('.sep-individual').attr('colspan',1);
    }

    if (mediaQuery.matches) {
      $('.sep').attr('colspan',10);
    } else {
      $('.sep').attr('colspan',1);
    }
  }

  // On load
  fundComparison(mediaQuery);


  // Add a listen event for comparing TWO items
  mediaQuery.addListener(compareTwo);

  // Function to do react to the media query
  function compareTwo(mediaQuery) {
    if (mediaQuery.matches) {
      $('.compare-two').attr('colspan',3);
    } else {
      $('.compare-two').attr('colspan',2);
    }
  }

  // On load
  compareTwo(mediaQuery);
