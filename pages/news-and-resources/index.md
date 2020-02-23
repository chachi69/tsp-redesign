---
layout: page
title: News and resources
sidenav: news-and-resources
styles:
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/bootstrap.min.js
  - /assets/js/copy-to-clipboard.js
#  - /assets/js/share-modal.js
  - /assets/js/ajaxFetch.js
  - /assets/js/calculator/calculator.js
  - /assets/js/calculator/javascriptTaxTable.js
  - /assets/js/news-and-resources.js
permalink: /news-and-resources/
document-ready:
  - setTaxData();
  - // getLoanRate();
  - // getAnnuityRate();
  - getLoanAndAnnuityRate();
---

# News and resources

{% include next-outage.html %}

<section class="key-rates">
  <div class="usa-grid">
  <div class="usa-width-one-third">
    <div id="contribution-limit">Unavailable</div>
    <div id="tax-year" class="hide">Unavailable</div>
    <ul class="usa-accordion">
    <li>
      <button class="usa-accordion-button"
        aria-expanded="false"
        aria-controls="a1">
        Annual Elective Deferral
      </button>
      <div id="a1" class="usa-accordion-content">
        <p><span id="catchup-limit">Unavailable</span> Catch-up contribution</p>
        <p class="hide"><span id="withholding-allowance">Unavailable</span> Withholding Allowance</p>
        <p><span id="annual-addition">Unavailable</span> Annual addition</p>
      </div>
    </li>
    </ul>
  </div>

  <div class="usa-width-one-third"><div id="loan-rate">--%</div>Loan rate</div>
  <div class="usa-width-one-third"><div id="annuity-rate">--%</div>Annuity rate</div>
  </div>
</section>

<section class="latest-news">
  <div class="flex header-line" markdown="1">
## Latest news and announcements
  <span class="see-all">[See all]({{ site.baseurl }}/news-and-resources/plan-news/)</span>
  </div>
<div class="usa-grid">
<div class="usa-width-one-whole" markdown="1">

{% include components/get_plan_news_list %}
{% assign itemlist = topitems | concat: archive %}
{% for item in itemlist %}
{% assign latest = item.latest | downcase | default: 'no' %}
{% if latest == 'y' %}{% assign latest = 'yes' %}{% endif %}
{% if latest == true %}{% assign latest = 'yes' %}{% endif %}
{% if latest == 'yes' or latest == true %}
  {% include plan-news-item.html entry=item showHeader=0 %}
{% endif %}
{% endfor %}

</div>
</div>

</section>

<section class="popular-videos" markdown="1">
  <div class="flex header-line" markdown="1">
## Popular videos and resources
  <span class="see-all">[See all]({{ site.baseurl }}/videos-and-resources/)</span>
  </div>
  <!-- YouTube iFrame -->
  <div class="usa-grid">
  <div class="usa-width-one-whole">
    <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/r6rRMcgBNCc?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div></div>

  <div class="usa-grid video-description">
  <div class="usa-width-one-whole" markdown="1">
### Your TSP Investment Options: The Lifecycle Funds

In this video, we'll talk about the professionally designed Lifecycle Funds, also known as the L Funds.
  </div>
  </div>


</section>

<section class="popular-forms-calculators">
<div class="usa-grid">
<div class="usa-width-one-half" markdown="1">

Popular forms

- **TSP-1/TSP-U-1**, [Election Form]({{ site.baseurl }}/forms/tsp-1.pdf)
- **TSP-60**, [Request for a transfer into the TSP]({{ site.baseurl }}/forms/tsp-60.pdf)
- **TSP-26**, [Loan payment coupon]({{ site.baseurl }}/forms/tsp-26/)
{:.forms-list}

</div>

<div class="usa-width-one-half" markdown="1">

Popular calculators

- [How much should I save?]({{ site.baseurl }}/calculators/)
- [How much will my savings grow?]({{ site.baseurl }}/calculators/how-much-will-my-savings-grow/)
- [Retirement income calculator]({{ site.baseurl }}/calculators/retirement-income-calculator/)
{:.calculators-list}

  </div>
</div>
</section>


<section class="top-5-faq" markdown="1">

## Top 5 FAQs

{% include faq-list.html maxFAQs=5 %}
</section>
