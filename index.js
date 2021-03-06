const data = {
  "version": 8,
  "name": "Citizen App Dark 3D",
  "metadata": {"maputnik:renderer": "mbgljs"},
  "sources": {
    "openmaptiles": {
      "url": "https://maps.sp0n.io/data/v3.json",
      "type": "vector"
    }
  },
  "glyphs": "https://maps.sp0n.io/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {"background-color": "rgba(26, 26, 26, 1)"}
    },
    {
      "id": "landcover_grass",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "class", "grass"],
      "layout": {"visibility": "visible"},
      "paint": {"fill-color": "rgba(15, 21, 21, 1)"}
    },
    {
      "id": "waterway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "stream", "river", "canal"]
      ],
      "paint": {
        "line-color": "rgba(34, 38, 42, 1)",
        "line-width": {"base": 1.4, "stops": [[8, 0.5], [20, 15]]}
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "paint": {
        "fill-color": "rgba(34, 38, 42, 1)",
        "fill-outline-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "paint": {
        "fill-color": "rgba(38, 38, 38, 1)",
        "fill-outline-color": "rgba(8, 8, 8, 1)"
      }
    },
    {
      "id": "road_medium case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 11,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["in", "class", "minor"]]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(38, 38, 38, 1)",
        "line-width": {"base": 1.5, "stops": [[13, 0.25], [20, 12]]},
        "line-gap-width": {"base": 1.55, "stops": [[13, 1], [20, 12]]}
      }
    },
    {
      "id": "road_large_ramps case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["in", "class", "motorway", "trunk"], ["==", "ramp", 1]]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(38, 38, 38, 1)",
        "line-width": {"base": 1.5, "stops": [[12, 0.5], [20, 16]]},
        "line-gap-width": {"base": 1.55, "stops": [[11, 1], [20, 12]]}
      }
    },
    {
      "id": "road_large case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["in", "class", "primary", "secondary", "tertiary"]]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(38, 38, 38, 1)",
        "line-width": {"base": 1.5, "stops": [[12, 0.5], [20, 16]]},
        "line-gap-width": {"base": 1.55, "stops": [[11, 1], [20, 12]]}
      }
    },
    {
      "id": "road_xlarge case",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 11,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["in", "class", "motorway", "trunk"], ["!=", "ramp", 1]]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "miter",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(38, 38, 38, 1)",
        "line-width": {"base": 1.5, "stops": [[6, 1], [20, 20]]},
        "line-gap-width": {"stops": [[11, 1], [20, 5]]}
      }
    },
    {
      "id": "road_small",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["in", "class", "service", "track", "path"]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": {"base": 1.5, "stops": [[6, 0.25], [20, 12]]},
        "line-dasharray": [0.25, 2]
      }
    },
    {
      "id": "road_medium",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["in", "class", "minor"]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": {"base": 1.5, "stops": [[6, 0.25], [20, 24]]}
      }
    },
    {
      "id": "road_large_ramps",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 8,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["in", "class", "motorway", "trunk"], ["==", "ramp", 1]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": {"base": 1.5, "stops": [[6, 0.5], [20, 32]]}
      }
    },
    {
      "id": "road_large",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "minzoom": 8,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["in", "class", "primary", "secondary", "tertiary"]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": {"base": 1.5, "stops": [[6, 0.5], [20, 32]]}
      }
    },
    {
      "id": "road_xlarge",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["in", "class", "motorway", "trunk"], ["!=", "ramp", 1]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(0, 0, 0, 1)",
        "line-width": {"base": 1.5, "stops": [[6, 2], [20, 40]]}
      }
    },
    {
      "id": "road_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 8,
      "maxzoom": 24,
      "filter": ["all", ["==", "$type", "LineString"]],
      "layout": {
        "text-font": ["Open Sans Bold"],
        "text-size": {"base": 1.4, "stops": [[10, 8], [20, 15]]},
        "text-field": "{name}",
        "visibility": "visible",
        "text-anchor": "center",
        "text-justify": "center",
        "text-transform": "uppercase",
        "symbol-placement": "line",
        "text-keep-upright": true,
        "text-letter-spacing": 0.1,
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-color": "#fff",
        "text-halo-color": "#000",
        "text-halo-width": 4
      }
    },
    {
      "id": "building-3d",
      "type": "fill-extrusion",
      "source": "openmaptiles",
      "source-layer": "building",
      "minzoom": 0,
      "filter": ["all"],
      "paint": {
        "fill-extrusion-base": {"type": "identity", "property": "min_height"},
        "fill-extrusion-height": {
          "type": "identity",
          "property": "render_height"
        },
        "fill-extrusion-color": [
          "match",
          ["feature-state", "highlight"],
          "true",
          "#FF2640",
          "rgba(64, 64, 64, 1)"
        ],
        "fill-extrusion-translate-anchor": "map",
        "fill-extrusion-vertical-gradient": true,
        "fill-extrusion-translate": [0, 0]
      }
    },
    {
      "id": "admin_country",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["<=", "admin_level", 2], ["==", "maritime", 0]]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "rgba(51, 51, 51, 1)",
        "line-width": {"base": 1.3, "stops": [[3, 0.5], [22, 15]]}
      }
    },
    {
      "id": "poi_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["==", "rank", 1],
        ["!in", "class", "railway"],
        ["!in", "subclass", "subway", "bus_stop", "station", "attraction"]
      ],
      "layout": {
        "text-font": ["Open Sans Bold"],
        "text-size": {"base": 1.4, "stops": [[10, 8], [20, 15]]},
        "text-field": "{name_en}",
        "text-anchor": "top",
        "text-offset": [0, 0.5],
        "text-max-width": 8,
        "text-letter-spacing": 0
      },
      "paint": {
        "text-color": "rgba(179, 179, 179, 1)",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 4
      }
    },
    {
      "id": "place_label_neighborhood",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["in", "class", "neighbourhood", "isolated_dwelling"]
      ],
      "layout": {
        "text-font": ["Open Sans Bold"],
        "text-size": {"stops": [[6, 6], [12, 12]]},
        "text-field": "{name_en}",
        "text-max-width": 6,
        "text-transform": "uppercase",
        "text-letter-spacing": 0.1
      },
      "paint": {
        "text-color": "rgba(179, 179, 179, 1)",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 2
      }
    },
    {
      "id": "place_label_town",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 8,
      "maxzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["in", "class", "town", "village", "suburb"]
      ],
      "layout": {
        "text-font": ["Open Sans Bold"],
        "text-size": {"stops": [[6, 6], [12, 12]]},
        "text-field": "{name_en}",
        "text-max-width": 6,
        "text-transform": "uppercase",
        "text-letter-spacing": 0.1
      },
      "paint": {
        "text-color": "rgba(179, 179, 179, 1)",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 2
      }
    },
    {
      "id": "place_label_city",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 24,
      "filter": ["all", ["==", "$type", "Point"], ["==", "class", "city"]],
      "layout": {
        "text-font": ["Open Sans Bold"],
        "text-size": {"stops": [[3, 8], [8, 14]]},
        "text-field": "{name_en}",
        "text-max-width": 10
      },
      "paint": {
        "text-color": {
          "stops": [
            [11, "rgba(140, 140, 140, 1)"],
            [13, "rgba(255, 255, 255, 1)"]
          ]
        },
        "text-halo-blur": 1,
        "text-halo-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 2
      }
    },
    {
      "id": "country_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 12,
      "filter": ["all", ["==", "$type", "Point"], ["==", "type", "country"]],
      "layout": {
        "text-font": ["Open Sans Regular"],
        "text-size": {"stops": [[3, 14], [8, 22]]},
        "text-field": "{name_en}",
        "text-max-width": 10
      },
      "paint": {
        "text-color": "rgba(140, 140, 140, 1)",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 1
      }
    }
  ],
  "id": "dcw4s3azo"
}