import React, { useEffect, useMemo } from 'react';
import { useLeafletContext } from '@react-leaflet/core';
import L from 'leaflet';

const CustomTileLayer = ({ url }) => {
  const context = useLeafletContext();

  const tileCache = new Map();

  const CustomTileLayerClass = useMemo(() => L.TileLayer.extend({
    createTile: function (coords, done) {
      const tile = L.DomUtil.create('img', 'leaflet-tile');
      const tileUrl = this.getTileUrl(coords);
  
      if (tileCache.has(tileUrl)) {
        tile.src = tileCache.get(tileUrl);
        done(null, tile);
        return tile;
      }
  
      tile.onload = () => {
        tileCache.set(tileUrl, tile.src);
        done(null, tile);
      };
      tile.onerror = () => {
        done(new Error('Tile loading failed'));
      };

      fetch(tileUrl, {
        method: 'GET',
        // headers: { 'service_name': 'track' },
      })
      .then(response => response.blob())
      .then(blob => {
        tile.src = URL.createObjectURL(blob);
      })
      .catch(error => console.error('Fetch error:', error)); // Error handling for fetch

      return tile;
    }
  }), []);

  useEffect(() => {
    const layer = new CustomTileLayerClass(url);
    const container = context.layerContainer || context.map;
    container.addLayer(layer);

    return () => {
      container.removeLayer(layer);
    };
  }, [url, context, CustomTileLayerClass]);

  return null;
};

export default CustomTileLayer;
