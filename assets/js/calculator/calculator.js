/* getQueryString was delivered in paycheckEstimator.js  */
function getQueryString(qs) {
  hu = window.location.search.substring(1);
  gy = hu.split("&");
  for (i=0;i<gy.length;i++) {
    ft = gy[i].split("=");
    if (ft[0] == qs) {
      return ft[1].replace(/%20/g, ' ');
    }
  }
}
/* CurrencyFormatted was delivered in paycheckEstimator.js */
function CurrencyFormatted(num, no_cent) {
  if(isNaN(num)) { num = "0"; }
  num = num.toString().replace(/\$|\,/g,'');
  if(isNaN(num)) { num = "0"; }
  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num*100+0.50000000001);
  cents = num%100;
  num = Math.floor(num/100).toString();
  if(cents<10) {
    cents = "0" + cents;
  }
  for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) {
    num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
  }

  if (no_cent != null && no_cent == 'no_cent') {
    return (((sign)?'':'-') + '$' + num);
  } else {
    return (((sign)?'':'-') + '$' + num + '.' + cents);
  }
}

function addCommas(element) {
  var val = $('#'+element).val();
  var newval = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  $('#'+element).val(newval);
  console.log('add commas', val, newval);
}
function removeCommas(element) {
  var val = $('#'+element).val();
  var newval = val.replace(/,/g, '');
  $('#'+element).val(newval);
  console.log('remove commas', val, newval);
}

function showError1(element, message) {
  // $('#'+element).addClass("usa-input-error"); // aria-describedby="input-error-message"
  $('#'+element+'-input-error').addClass("usa-input-error");
  $('#'+element+'-label').addClass("usa-input-error-label");
  $('#'+element+'-error-message').addClass("usa-input-error-message");
  $('#'+element+'-error-message').html(message);
  // console.log('error is '+message)
  document.getElementById(element).setAttribute("aria-describedby", element+'-error-message');
  return false;
}
function clearError1(element) {
  // $('#'+element).removeClass("usa-input-error"); // aria-describedby="input-error-message"
  $('#'+element+'-input-error').removeClass("usa-input-error");
  $('#'+element+'-label').removeClass("usa-input-error-label");
  $('#'+element+'-error-message').removeClass("usa-input-error-message");
  $('#'+element+'-error-message').html('');
  document.getElementById(element).setAttribute("aria-describedby", '');
  return true;
}

function showError(element, message) {
  $('#'+element+'-div').addClass("usa-input-error");
  $('#'+element+'-label').addClass("usa-input-error-label");
  // $('#'+element+'-error-message').addClass("usa-input-error-message");
  $('#'+element+'-error-message').html(message);
  console.log('error is '+message)
  // document.getElementById(element).setAttribute("aria-describedby", element+'-error-message');
  gotoAnchor(element+'-anchor');
  return false;
}
function clearError(element) {
  // $('#'+element).removeClass("usa-input-error"); // aria-describedby="input-error-message"
  $('#'+element+'-div').removeClass("usa-input-error");
  $('#'+element+'-label').removeClass("usa-input-error-label");
  // $('#'+element+'-error-message').removeClass("usa-input-error-message");
  $('#'+element+'-error-message').html('');
  // document.getElementById(element).setAttribute("aria-describedby", '');
  return true;
}

function gotoAnchor(anchor) { location.replace("#" + anchor); }
function getPosFloat(id, def) {
  var val = parseFloat($('#'+id).val());
  if (isNaN(val)) { val = def; }

  return val;
}

function getPosInteger(id, def) {
  var val = parseInt($('#'+id).val());
  if (isNaN(val)) { val = def; }

  return val;
}

// most calculators will hide an AYR element when they hide an input element
function hideBlock(hideFlag, block1, block2) {
  if (hideFlag) {
    $('#'+block1).addClass('hide');
    $('#'+block2).addClass('hide');
    return true;
  }
  $('#'+block1).removeClass('hide');
  $('#'+block2).removeClass('hide');
  return false;
}
