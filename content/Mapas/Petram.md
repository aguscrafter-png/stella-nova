
Mapa interactivo de todo el mundo de Petram.

```zoommap
image: Publico/Imagenes/Mapas/Petram.jpg
# markers is optional; defaults to <image>.markers.json
# markers: Assets/Map.jpg.markers.json

# Map view limits
minZoom: 0.3
maxZoom: 1.1

# Size & interactivity
height: 850px
width: 100%
resizable: true
resizeHandle: native     # left | right | both | native
render: canvas           # or: dom

# Image interpolation: auto | pixelated | crisp-edges
imageRendering: pixelated

# Responsive display (fit into width, no wheel/pinch/dblclick pan/zoom)
responsive: false        # true → always fit; disables pan/zoom gestures

# Storage (optional)
# storage: note          # default is json; use "note" to store markers inline
# id: map-1              # optional stable id for inline storage (per code block)

# Alignment / wrapping (optional)
align: right             # left | center | right
wrap: true               # wrap text; useful with left/right alignment
```
