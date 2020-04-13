---
layout: page
title: Build Video YML
styles:
scripts:
  - /assets/js/jquery.min.js
  - /assets/js/flatpickr/flatpickr.js
  - /assets/js/ajaxFetch.js
  - /assets/js/ajax-usa-search-gov.js
  - /assets/js/calculator/calculator.js
  - /assets/js/search.js
  - /assets/js/videos-and-resources.js
  - /assets/js/copy-to-clipboard.js
permalink: /videos-and-resources/index-yml.html
document-ready:
  - initVideoList();
# Set this to 'true' in order to receive latest data from YouTube, COPY data, and then set back to 'false'
published: true
---

# Build Video YML
<div class="usa-grid">
<div class="usa-width-one-whole">
<label for="API-KEY">API Key</label>
<input id="API-KEY" size="45" value="AIzaSyDLozGtZFvP49NZxV1SodEiUdqDJvaG0M8"><button id="API-button" onClick="buildYML('API-KEY', 'yml-file');">Build YML</button>

<div class="hide">
{% for video in site.data.videos_master %}<span class="vid-name" id="{{video.video_id}}"></span>
{% if video.video_categories %}<span id="{{video.video_id}}-categories">{{video.video_categories | join: ',' }}</span>{% endif %}
{% if video.video_download %}<span id="{{video.video_id}}-download">{{video.video_download}}</span>{% endif %}
{% if video.video_transcript %}<span id="{{video.video_id}}-transcript">{{video.video_transcript}}</span>{% endif %}
{% endfor %}
</div>

<button id="yml-file-button" onClick="copyDivToClipboard('yml-file');">Copy YML</button>
<div id='yml-file' class='copy-yml'>Enter API key and click button</div>  

</div>
</div>
