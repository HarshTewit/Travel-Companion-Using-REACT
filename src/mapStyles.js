export default [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      { hue: '#ff8800' }, // Orange hue
      { saturation: -20 }, // Decrease saturation
      { lightness: 20 }, // Increase lightness
      { visibility: 'on' },
      { weight: 1.2 },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels',
    stylers: [
      { visibility: 'on' }, // Make administrative labels visible
      { color: '#ffffff' }, // White color for labels
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }, // Hide landscape labels
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'all',
    stylers: [
      { saturation: -80 }, // Decrease saturation for man-made landscape
      { lightness: 10 }, // Increase lightness
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }, // Hide POI labels
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }, // Hide road labels
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }, // Hide transit labels
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      { hue: '#0044ff' }, // Blue hue for water
      { saturation: 100 }, // Maximum saturation
      { lightness: -20 }, // Decrease lightness
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }, // Hide water labels
    ],
  },
];
