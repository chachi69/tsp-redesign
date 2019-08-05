/*
  All the ajax calls to the data source.
*/

var siteName = "https://www.tsp.gov/components/CORS/";

var singleFundData = function(fund) {

  var scriptName = 'getFundAverageAnnualReturns.html?fund=' + fund;
  var serverCall = $.get(siteName + '/' + scriptName);
    serverCall.done(
      function (data) {
          var rc = data.split("|");
          var values = rc[0].split(", ");
          // console.log('values length is ', values.length);
          if (values.length == 7) {
            $('#aar_caption').html("Average annual returns (as of December "+rc[1]+")");
            $('#aar_ytd').html(values[1]+'%');
            $('#aar_1yr').html(values[2]+'%');
            $('#aar_3yr').html(values[3]+'%');
            $('#aar_5yr').html(values[4]+'%');
            $('#aar_10yr').html(values[5]+'%');
            // $('#aar_incep').html(values[6]);
          }
          // console.log(name + ': ' + data);
      }
    );
    serverCall.fail(
      function (jqXHR, textStatus, errorThrown) {
          var errMsg = textStatus + ': ' + errorThrown;
          // $('#aar_caption').html("Average annual returns (as of December "+values[7]+")");
          $('#aar_ytd').html('unavailable');
          $('#aar_1yr').html('unavailable');
          $('#aar_3yr').html('unavailable');
          $('#aar_5yr').html('unavailable');
          $('#aar_10yr').html('unavailable');
          // $('#aar_incep').html(values[6]);
      }
    );
//    serverCall.always(
//      function (jqXHR, textStatus) {
//      }
//    );
}

// translate server fund names to names used on fund comparison page
function mapFundName (fund) {
  if (fund == 'Linc') { return 'l-income'; }
  if (fund.substring(0,1) == 'L') { return 'l-' + fund.substring(1,5); }
  return fund.toLowerCase() + '-fund';
}

function getMonthYearName (val) {
  var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
  var theDate = new Date(val);
  return monthNames[theDate.getMonth()] + ' ' + theDate.getFullYear();
}

function tooltipDiv (divClass, block) {
  return '<div class="' + divClass + '">'
    + block + '</div>';
}
function tooltipHeader(val) {
  return '<div class="tooltip-title"><strong>'+ val +'</strong>' + "</div>\n";
}
function tooltipRowGroup(group) {
  return  '<div class="tooltip-row-group">' + group + "</div>\n";
}
function tooltipLegendRow(legendColor, lClass, left, rClass, right) {
  return  '<div class="tooltip-row">'
        + '<div class="tooltip-bar '+legendColor+'"></div>'
        + tooltipLeftRight(lClass, left, rClass, right)
        + "</div>\n";
}
function tooltipRow(lClass, left, rClass, right) {
  return  '<div class="tooltip-row">'
        + tooltipLeftRight(lClass, left, rClass, right)
        + "</div>\n";
}
function tooltipLeftRight(lClass, left, rClass, right) {
  return  '<div class="'+lClass+' tooltip-left">'  + left  + '</div>'
        + '<div class="'+rClass+' tooltip-right">' + right + '</div>';
}

var groupFundAnnualReturns = function(setName) {
  // fund comparison data
  var scriptName = '';
  if (setName == 'Index') { scriptName = 'getIndexAverageAnnualReturns.html'; }
  if (setName == 'Lfunds') { scriptName = 'getLfundsAverageAnnualReturns.html'; }
  if (scriptName == '') { return; }

  var serverCall = $.get(siteName + '/' + scriptName);
    serverCall.done(
      function (data) {
          var rc = data.split("|"); // strip trailing Year
          var lines = rc[0].split("\n"); // break into rows
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim() == '') { continue; }
            var values = lines[i].split(', ');
            var fundName = mapFundName(values[0]);
            console.log(i, fundName, lines[i]);
            $('#ret-YTD-'+fundName).html(values[1]+'%');
            $('#ret-1YR-'+fundName).html(values[2]+'%');
            $('#ret-3YR-'+fundName).html(values[3]+'%');
            $('#ret-5YR-'+fundName).html(values[4]+'%');
            $('#ret-10YR-'+fundName).html(values[5]+'%');
            $('#ret-Life-'+fundName).html(values[6]+'%');
          }
          console.log(rc[1], setName);
          if (setName == 'Index') { $('#index-as-of').html(' as of ' + rc[2]); }
          if (setName == 'Lfunds') { $('#l-fund-as-of').html(' as of ' + rc[2]); }
          // console.log(name + ': ' + data);
      }
    );
    serverCall.fail(
      function (jqXHR, textStatus, errorThrown) {
          var errMsg = textStatus + ': ' + errorThrown;
          // $('#aar_caption').html("Average annual returns (as of December "+values[7]+")");
          $('#aar_ytd').html('unavailable');
          $('#aar_1yr').html('unavailable');
          $('#aar_3yr').html('unavailable');
          $('#aar_5yr').html('unavailable');
          $('#aar_10yr').html('unavailable');
          // $('#aar_incep').html(values[6]);
      }
    );
}

function growth100Tooltip(me) {
  // console.log(me);
  var rc = tooltipHeader(getMonthYearName(me.x+1000000000));
  rc = '';
  var points = me.points;
  for (var i = 0; i < points.length; i++) {
    var lColor = mapServerFundClassName(points[i].series.colorIndex);
    var name = points[i].series.name.split("$");
    var lName = mapServerFundName(name[0],0);
    rc += tooltipLegendRow(lColor, lColor, lName, '', '$' + points[i].y.toFixed(2));
  }
  rc = tooltipRowGroup(rc);
  rc = tooltipHeader(getMonthYearName(me.x+1000000000))+rc;
  rc = tooltipDiv('growth-100-tooltip', rc);
  // console.log(rc);
  return rc;
}
function getGrowthLifetime(fund) {
  var colorIndexFund = 'lf';
  var colorIndexInfl = 'gray';
  var colorIndexValues = 'white';

  if (fund == 'G') { colorIndexFund = 'g'; colorIndexInfl = 'gray'; }
  if (fund == 'F') { colorIndexFund = 'f'; colorIndexInfl = 'gray'; }
  if (fund == 'C') { colorIndexFund = 'c'; colorIndexInfl = 'gray'; }
  if (fund == 'S') { colorIndexFund = 's'; colorIndexInfl = 'gray'; }
  if (fund == 'I') { colorIndexFund = 'i'; colorIndexInfl = 'gray'; }

  Highcharts.chart('growthLifetime', {
    credits: { enabled: false },
    chart: {
      type: 'line',
      styledMode: true
    },
    title: {
      align: 'left',
      text: 'Growth of $100 since Inception'
    },
    data: {
      csvURL: 'https://www.tsp.gov/components/CORS/getFundGrowthInflation2.html?fund='+fund
    },
    // series: [{ colorIndex: colorIndexFund }, { colorIndex: colorIndexValues }, { colorIndex: colorIndexInfl }, { colorIndex: colorIndexValues }],
    series: [{ colorIndex: colorIndexFund }, { colorIndex: colorIndexInfl }],
    yAxis: {
      labels: {
        formatter: function() {
          return '$' + this.value;
        }
      },
      title: { text: '' }
    },
    tooltip: {
      formatter: function () {
        return growth100Tooltip(this);
      },
      shared: true,
      useHTML: true
    }
  });
}

var barChart;
function barChartTooltip(me) {
  // console.log(me);
  returnsTableActive(me.x+1);
  var rc = '';
  var points = me.points;
  for (var i = 0; i < points.length; i++) {
    var lColor = mapServerFundClassName(points[i].series.colorIndex);
    var lName = mapServerFundName(points[i].series.name,0);
    // rc += tooltipLegendRow(lColor, lColor, lName, '', points[i].y.toFixed(2)+'%');
    rc += tooltipLegendRow(lColor, '', lName, '', points[i].y.toFixed(2)+'%');
  }
  rc = tooltipRowGroup(rc);
  rc = tooltipHeader(me.points[0].key) + rc;
  rc = tooltipDiv('rates-of-return-tooltip', rc);
  // console.log(rc);
  return rc;
}
function getFundIndexAverageAnnualReturns(fund) {
  var colorFund = 'lf';
  var colorIndex = 'il';

  if (fund == 'G') { colorFund = 'g'; colorIndex = 'ig'; }
  if (fund == 'F') { colorFund = 'f'; colorIndex = 'if'; }
  if (fund == 'C') { colorFund = 'c'; colorIndex = 'ic'; }
  if (fund == 'S') { colorFund = 's'; colorIndex = 'is'; }
  if (fund == 'I') { colorFund = 'i'; colorIndex = 'ii'; }

  barChart = Highcharts.chart('annualReturnsColumn', {
    credits: { enabled: false },
    chart: {
      type: 'column',
      styledMode: true
    },
    legend: { enabled: false },
    title: {
      // text: 'Average Rates of Return' + '   <span class="hc-note">(As of December ' + year + ')</span>'
      align: 'left',
      text: 'Average Rates of Return'
    },
    data: {
      switchRowsAndColumns: true,
      beforeParse: function (csv) {
        var data = csv.split('|');
        setTitle(data[1]);
        buildReturnsTable(data[0]);
        return data[0];
      },
      csvURL: 'https://www.tsp.gov/components/CORS/getFundIndexAverageAnnualReturns.html?fund='+fund
    },
    series: [{ colorIndex: colorFund }, { colorIndex: colorIndex }],
    // exporting: { showTable: true },
    xAxis: {
          crosshair: true
    },
    yAxis: {
          // min: 0,
          title: { text: undefined },
      labels: { formatter: function() { return this.value + '%'; } }
    },
    tooltip: {
//          headerFormat: '<strong>{point.key}</strong><table>',
//          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//              '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
//          footerFormat: '</table>',
          formatter: function () {
            return barChartTooltip(this);
          },
          shared: true,
          useHTML: true
    }
  });
}
function setTitle(year) {
	barChart.setTitle({text: 'Average Rates of Return' + '   <span class="hc-note">(As of December ' + year + ')</span>'});
}
function mapServerFundName (f, glossaryFlag) {
  var fund = f.trim().toUpperCase();
  if (fund == 'G') { return 'G Fund'; }
  if (fund == 'F') { return 'F Fund'; }
  if (fund == 'C') { return 'C Fund'; }
  if (fund == 'S') { return 'S Fund'; }
  if (fund == 'I') { return 'I Fund'; }

  if (fund == 'LINC') { return 'L Income'; }
  if (fund == 'L2020') { return 'L 2020'; }
  if (fund == 'L2025') { return 'L 2025'; }
  if (fund == 'L2030') { return 'L 2030'; }
  if (fund == 'L2035') { return 'L 2035'; }
  if (fund == 'L2040') { return 'L 2040'; }
  if (fund == 'L2045') { return 'L 2045'; }
  if (fund == 'L2050') { return 'L 2050'; }
  if (fund == 'L2055') { return 'L 2055'; }
  if (fund == 'L2060') { return 'L 2060'; }
  if (fund == 'L2065') { return 'L 2065'; }
  if (fund == 'INFLATION') { return 'Inflation'; } // I

  if (fund == 'TBILL') { return glossaryTermString(fund, glossaryFlag); } // F
  if (fund == 'LBA') { return glossaryTermString(fund, glossaryFlag); } // F
  if (fund == 'SP500') { return glossaryTermString(fund, glossaryFlag); } // C
  if (fund == 'W4500') { return glossaryTermString(fund, glossaryFlag); } // S
  if (fund == 'EAFE') { return glossaryTermString(fund, glossaryFlag); } // I
  return '** ' + fund + ' **';
}
function glossaryTermString(fund, glossaryFlag) {
  var term = 'undefined';
  if (fund == 'TBILL') { term = '3-Month T-Bill'; } // G
  if (fund == 'LBA') { term = 'U.S. Aggregate Index'; } // F
  if (fund == 'SP500') { term = 'S&P 500'; } // C
  if (fund == 'W4500') { term = 'Dow Jones'; } // S
  if (fund == 'EAFE') { term = 'EAFE'; } // I
  if (glossaryFlag == 0) { return term; }
  return term;  // disable this for now
  return '<span data-term="'+term+'" class="js-glossary-toggle term term-end">'
        +term+'</span>';
}
function mapServerFundClassName (f) {
  var fund = f.trim().toUpperCase();
  if (fund == 'G') { return 'g-fund'; }
  if (fund == 'F') { return 'f-fund'; }
  if (fund == 'C') { return 'c-fund'; }
  if (fund == 'S') { return 's-fund'; }
  if (fund == 'I') { return 'i-fund'; }
  if (fund == 'LF') { return 'l-fund'; }

  if (fund == 'LINC') { return 'l-income'; }
  if (fund == 'LINCX') { return 'index-l'; }
  if (fund == 'L2020') { return 'l-2020'; }
  if (fund == 'L2025') { return 'l-2025'; }
  if (fund == 'L2030') { return 'l-2030'; }
  if (fund == 'L2035') { return 'l-2035'; }
  if (fund == 'L2040') { return 'l-2040'; }
  if (fund == 'L2045') { return 'l-2045'; }
  if (fund == 'L2050') { return 'l-2050'; }
  if (fund == 'L2055') { return 'l-2055'; }
  if (fund == 'L2060') { return 'l-2060'; }
  if (fund == 'L2065') { return 'l-2065'; }

  if (fund == 'TBILL') { return 'index-g'; } // G
  if (fund == 'IG') { return 'index-g'; } // G
  if (fund == 'LBA') { return 'index-f'; } // F
  if (fund == 'IF') { return 'index-f'; } // F
  if (fund == 'SP500') { return 'index-c'; } // C
  if (fund == 'IC') { return 'index-c'; } // C
  if (fund == 'W4500') { return 'index-s'; } // S
  if (fund == 'IS') { return 'index-s'; } // S
  if (fund == 'EAFE') { return 'index-i'; } // I
  if (fund == 'II') { return 'index-i'; } // I
  if (fund == 'IL') { return 'index-l'; } // I

  if (fund == 'GRAY') { return 'inflation-color'; } // I
  return '** ' + fund + ' **';
}
function buildReturnsTable(arr) {
  var headName = { YTD: 'YTD', '1-yr': '1&nbsp;Yrs', '3-yr': '3&nbsp;Yrs', '5-yr': '5&nbsp;Yrs', '10-yr': '10&nbsp;Yrs', Lifetime: 'Lifetime'};
  var i, j;
  var table = '<table>';
  var lines = arr.split("\n");
  var cellClass = 'even';
  // header
  var col = lines[0].trim().split(',');
  table += '<tr><th></th>';
  cellClass = 'even';
  for (i = 1; i < col.length; i++) {
    table += '<th class="' + cellClass + ' col' + i + '">'+headName[col[i].trim()]+'</th>';
    if (cellClass == 'even') { cellClass = 'odd'; } else { cellClass = 'even'; }
  }
  table += "</tr>\n";
  for (j=1; j < lines.length; j++) {
    if (lines[j].trim() == '') { continue; }
    col = lines[j].split(',');
    table += '<tr>';
    cellClass = 'odd';
    var fundName = mapServerFundName(col[0].trim(),1);
    // console.log('fund is ' + col[0].trim());
    var fund = col[0].trim().toLowerCase();
    var fundColor = mapServerFundClassName(fund);
    if ((fund == 'linc') && (j > 1)) { fundColor = mapServerFundClassName('lincx'); }
    table += '<td class="' + cellClass + ' col' + '0' + '">'
        +'<span class="rate-of-return-bar '+fundColor+'"></span>'
        + fundName +'</td>';
    if (cellClass == 'even') { cellClass = 'odd'; } else { cellClass = 'even'; }
    for (i = 1; i < col.length; i++) {
      table += '<td class="' + cellClass + ' col' + i + '">'+col[i].trim()+'%</td>';
      if (cellClass == 'even') { cellClass = 'odd'; } else { cellClass = 'even'; }
    }
    table += "</tr>\n";
  }

 table += "\n</table>"
 // console.log(arr + "\n" + table);
 $('#annualReturnsTable').html(table);
//  initGlossary();
}
function returnsTableActive(idx) {
    for (var i = 0; i < 8; i++) {
      $('.col'+i).removeClass('active');
    }
    $('.col'+idx).addClass('active');
}
function columnSort(ascending, columnClassName, tableId, headLength, tailLength) {
    var tbody = document.getElementById(tableId).getElementsByTagName(
            "tbody")[0];
    var rows = tbody.getElementsByTagName("tr");

    var unsorted = true;

    while (unsorted) {
        unsorted = false;

        for (var r = 0 + headLength; r < rows.length - 1 - tailLength; r++) {
            var row = rows[r];
            var nextRow = rows[r + 1];

            var value = row.getElementsByClassName(columnClassName)[0].innerHTML;
            var nextValue = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;

            value = value.replace(',', '.'); // in case a comma is used in float number
            nextValue = nextValue.replace(',', '.');
            value = value.replace('%', ''); // in case a comma is used in float number
            nextValue = nextValue.replace('%', '');

            if (!isNaN(value)) {
                value = parseFloat(value);
                nextValue = parseFloat(nextValue);
            }

            if (ascending ? value > nextValue : value < nextValue) {
                tbody.insertBefore(nextRow, row);
                unsorted = true;
            }
            // console.log(value, nextValue, unsorted);
        }
    }
};

// make call to get shareprices
function doSharePriceDownload(startdate, enddate, format, funds) {
  var url = siteName + 'getSharePrices.html?';
  url += 'startdate='+startdate;
  url += '&enddate='+enddate;
  funds.forEach(function(fund) { url += '&'+fund+'=1'; });
  url += '&format='+format+'&download=1';
  //console.log(url);
  //window.location.href = url;
  window.open(url, '_blank');
  return false;
}
