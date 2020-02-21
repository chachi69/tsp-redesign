---
permalink: /funds-individual/f-fund/
layout: fund-details
title: F fund
sidenav: fund-options
Fund_type: Index
Fund_name: F Fund
Fund_order: 2
Fund_subtitle: Fixed Income Index Investment Fund
Fund_objective: The F Fund's investment objective is to match the performance of the Bloomberg Barclays U.S. Aggregate Bond Index, a broad index representing the U.S. bond market.
Fund_objective_short: Match the performance of the Bloomberg Barclays U.S. Aggregate Bond Index.
questions:
  - question: Why should I invest in the F Fund?
    answer: F Fund investors are rewarded with the opportunity to earn higher rates of return over the long term than they would from investments in short-term securities such as the G Fund. The overall risk is relatively low in comparison to certain other fixed income investments in the market because the F Fund includes only investment-grade securities.
  - question: Am I ok with market and inflation risk?
    answer: F Fund returns move up and down with the returns in the bond market (<span data-term="Market Risk" class="js-glossary-toggle term term-end">market risk</span>). F Fund investors are also exposed to the possibility that principal and interest payments on the bonds that comprise the index will not be paid (credit default risk) or if F Fund investments do not grow enough to offset the reduction in purchasing power (<span data-term="Inflation Risk" class="js-glossary-toggle term term-end">inflation risk</span>). Your F Fund investment is also exposed to prepayment risk, which is the probability that if interest rates fall, bonds that are represented in the index will be paid back early thus forcing lenders to reinvest at lower rates.
  - question: How can I use the F Fund in my TSP?
    answer: In periods of falling interest rates, the F Fund will experience gains from the resulting rise in bond prices. So in the long run, you may expect F Fund returns to exceed those of the G Fund; however, you should also expect greater price volatility (up and down movements). A retirement portfolio that contains stock funds, like the C, S, and I Funds, along with the F Fund, will tend to be less volatile than one that contains stock funds alone.
avg_annual_returns:
    ytd: "-"
    one_yr: "-"
    three_yr: "-"
    five_yr: "-"
    ten_yr: "-"
    lifetime: "-"
summary_update: 12/31/2019
summary_details:
    assets: $33.5 billion
    as_of_year: 2019
    gross_expense:  .052
    net_expense:    .042
    other_expense:  .004
    benchmark_index: Dow Jones U.S. Completion TSM Index | www.djindexes.com
    asset_manager: BlackRock Institutional Trust Company, N.A
composition_update: December 31, 2018
composition:
  - [Government/Government-Related, 41.5]
  - [Asset-Backed Securities, 29.6]
  - [Credit, 29.0]
top_ten_update:
top_ten_holdings:
  - namex: ignored because of top_ten_text
    abbrx: XXXX
top_ten_text: |
  The F Fund tracks the Bloomberg Barclays U.S. Aggregate Bond Index,
  a broadly diversified index of the U.S. bond market.

  On December 31, 2018, the index included 10,252 notes and bonds.

  Because the U.S. Aggregate contains such a large number of securities,
  it is not feasible for the F Fund to invest in each security in the index.
additional_info: |
  By law, the F Fund must be invested in fixed-income securities. The Federal Retirement Thrift Investment Board has chosen to invest the F Fund in an index fund that tracks the Bloomberg Barclays U.S. Aggregate Bond Index, a broadly diversified index of the U.S. bond market.

  The U.S. Aggregate Index consists of high-quality fixed-income securities with maturities of more than one year. Because the U.S. Aggregate Index contains such a large number of securities, it is not feasible for the F Fund to invest in each security in the index.

  The F Fund is invested in a separate account that is managed by BlackRock Institutional Trust Company, N.A. BlackRock selects a large representative sample of the various types of asset-backed, U.S. government, corporate, and foreign government securities included in the overall index. The performance of the F Fund is evaluated on the basis of how closely its returns match those of the U.S. Aggregate Index.
risks: |
  Your investment in the C Fund is subject to [market risk](#) because the prices of the stocks in the S&P 500 Index rise and fall.

  By investing in the C Fund, you are also exposed to [inflation risk](#), meaning your C Fund investment may not grow enough to offset inflation.
risk_level: low-medium
rewards: |
  While investment in the C Fund carries risk, it also offers the opportunity to experience gains from equity ownership of large and mid-sized U.S. company stocks.
scripts:
bottom-scripts: /assets/js/ajaxFetch.js
document-ready:
  - singleFundData('F');
  - getFundIndexAverageAnnualReturns('F');
  - getGrowthLifetime('F');
  - doCompositionPies();
  - $('.sortableColumn').click(function(e) { toggleSort(this); });
---
