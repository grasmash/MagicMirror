$(document).ready(function() {
  document.getElementById('planefinder').contentWindow.LoadSevernaPark();
});

var pf = null;
function LoadSevernaPark() {
  pf = new pfCore({
      isDebugLocal: false,
      baseURL: pfDefaults.baseURL,
      cookieDomain: '.embed.planefinder.net',

      planePollInterval: 20,						// interval (in seconds) between server polls for bounds
      fullPlanePollInterval: 120,					// interval (in seconds) for full server poll

      flightPathEstimationInterval: [
        3, // 2
        3, // 3
        2, // 4
        2, // 5
        1, // 6
        1, // 7
        1, // 8
        0.5, // 9
        0.5, // 10
        0.5, // 11
        0.5, // 12
        0.5, // 13
        0.5 // 14
      ],
      flightPathEstimationAltitudeCutOff: 500,	// if a plane falls below a certain altitude, stop estimation extrapolation based on mtime
      flightPathEstimationSpeedCutOff: 130,		// if a plane falls below a certain altitude, stop estimation extrapolation based on mtime
      flightPathEstimationBatchLimit: 50,			// the number of planes to update in one batch pass
      flightPathEstimationBatchInterval: 50,		// then number of milliseconds to pause between batch updates

      plotFlightPathEstimation: true,				// whether to show the estimated flight path between accurate updates
      useGeodesicFlightPaths: true,				// whether or not to smooth flight path data
      selectedFlightZoomLevel: 7,					// the zoom level to set our map to if loading a particular flight

      planeColor: "red",							// plane marker color
      planeAnnotationMinZoom: 6,					// the minimum zoom level required before annotations are made visible (ignored)
      planeLargeMinZoom: 10,						// the minimum zoom level that large planes will appear at
      tooltipValue: "flight",						// data to be displayed in hover-over tooltips (opts: flight / registration)
      validSingleClickTimeout: 250,				// the number of milliseconds to wait before determining if a click was legitimate (i.e: not a double click)

      alwaysPanToSelectedMarker: false,			// if selected the map will ensure that info windows are always visible
      planeInfoInPopout: false,					// show plan info in popout window
      disableFlightEstimation: false,				// if selected, flight estimation will be turned off for live data (does not apply to playback)
      minPersistentLabelsZoomLevel: 7,

      showPersistentLabels: true,
      showScheduledData: true,					// show scheduled data (FAA flights) by default
      showCloudLayer: false,						// hide cloud layer by default
      showWeatherLayer: false,					// hide weather layer by default

      minAltitudeFilterValue: 0,
      maxAltitudeFilterValue: 55000,
      minSpeedFilterValue: 0,
      maxSpeedFilterValue: 660,

      measurement: "imperial"
    },
    {
      zoom: 12,
      minZoom: 2,
      maxZoom: 14,
      center: new google.maps.LatLng(39.09, -76.59),
      streetViewControl: false,
      backgroundColor: "#dadad8",
      panControl: false,
      zoomControl: false,
      mapTypeId: "Minimal",
      mapTypeControl: false
    });
  setTimeout(function() {
    pf.init();
  }, 500);
}
