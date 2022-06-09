---
layout: page
title: Automatic Spawn Offset
permalink: /1/keyediting/spawnoffset
---

<textarea placeholder="Paste your key here" class="center textarea" id="input-textarea">
</textarea>

<button class="center btn" id="btn1">Paste from clipboard</button>

## Set the offset coordinates
* x: <input type="number" min="-1000000" max="1000000" value="0" id="x">
* y: <input type="number" min="-1000000" max="1000000" value="0" id="y">
* rotation: <input type="number" min="0" max="355" value="0" id="r"> <i id="rotation-indicator" class="fa-solid fa-arrow-up"></i>

<button class="center btn" id="btn2">Generate and copy to clipboard</button>

<textarea readonly placeholder="Output" class="center textarea" id="output-textarea">
</textarea>

<script type="module" src="{{ site.baseurl }}/assets/1/keyediting/spawnOffset.mjs"></script>
