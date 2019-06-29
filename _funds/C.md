---
permalink: /funds-individual/c-fund/
layout: fund-details
title: C fund
sidenav: fund-options
Fund_type: Index
Fund_name: C Fund
Fund_order: 3
Fund_subtitle: Common Stock Index Investment Fund
Fund_objective: The C Fund's investment objective is to match the performance of the Standard and Poor's 500 (S&P 500) Index, a broad market index made up of stocks of 500 large to medium-sized U.S. companies.
questions:
  - question: Why should I invest in the C Fund?
    answer: Investment in the C Fund offers the opportunity to experience gains from equity ownership of large and mid-sized U.S. company stocks.
  - question: Am I ok with market and inflation risk?
    answer: C Fund returns move up and down with the prices of the stocks in the S&P 500 Index (market risk) or if C Fund investments do not grow enough to offset the reduction in purchasing power (inflation risk).
  - question: How can I use the C Fund in my TSP?
    answer: The C Fund can be useful in a portfolio that also contains stock funds that track other indexes such as the S Fund and the I Fund. By investing in all segments of the stock market (as opposed to just one), you reduce your exposure to market risk. The C Fund can also be useful in a portfolio that contains bonds. A retirement portfolio that contains a bond fund like the F Fund, along with other stock funds, like the S and I Funds, will tend to be less volatile than one that contains stock funds alone.
avg_annual_returns:
    ytd: "-"
    one_yr: "-"
    three_yr: "-"
    five_yr: "-"
    ten_yr: "-"
    inception: "-"
summary_update: 12/31/2018
summary_details:
    assets: $67.6 billion
    as_of_year: 2018
    gross_expense:  .052
    net_expense:    .041
    other_expense:  .001
    benchmark_index: Dow Jones U.S. Completion TSM Index | www.djindexes.com
    asset_manager: BlackRock Institutional Trust Company, N.A
composition_update: December 31, 2018
composition:
  - [Communications Services, 10.1]
  - [Consumer Discretionary, 9.9]
  - [Consumer Staples, 7.4]
  - [Energy, 5.3]
  - [Financials, 13.4]
  - [Health Care, 15.5]
  - [Industrials, 9.2]
  - [Information Technology, 20.1]
  - [Materials, 2.7]
  - [Real Estate, 3.0]
  - [Utilities, 3.3]
top_ten_update: 12/31/2018
top_ten_holdings:
  - name: Tesla Motors Inc.
    abbr: TSLA
  - name: Las Vegas Sands Corp.
    abbr: LVS
additional_info: |
  By law, the C Fund must be invested in a portfolio designed to replicate the performance of an index of stocks representing the U.S. stock markets. The Federal Retirement Thrift Investment Board has chosen as its benchmark the Standard & Poor’s 500 Stock Index, which tracks the performance of major U.S. companies and industries.

  The S&P 500 Index is an index of 500 large to medium-sized U.S. companies that are traded in the U.S. stock markets. The index was designed by Standard & Poor’s Corporation (S&P) to provide a representative measure of U.S. stock markets’ performance. The companies in the index represent 157 industries classified into the 11 major sector groups shown in the chart. The stocks in the S&P 500 Index represent approximately 82% of the market value of the U.S. stock markets.

  The C Fund is invested in a separate account that is managed by BlackRock Institutional Trust Company, N.A. The C Fund holds all the stocks included in the S&P 500 Index in virtually the same weights that they have in the index. The performance of the C Fund is evaluated on the basis of how closely its returns match those of the S&P 500 Index.
risks: |
  Your investment in the C Fund is subject to [market risk](#) because the prices of the stocks in the S&P 500 Index rise and fall.

  By investing in the C Fund, you are also exposed to [inflation risk](#), meaning your C Fund investment may not grow enough to offset inflation.
risk_level: medium
rewards: |
  While investment in the C Fund carries risk, it also offers the opportunity to experience gains from equity ownership of large and mid-sized U.S. company stocks.
scripts:
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - singleFundData('C');
  - getFundIndexAverageAnnualReturns('C');
  - getGrowthInception('C');
  - doCompositionPies();
  - $('.sortableColumn').click(function(e) { toggleSort(this); });
---
