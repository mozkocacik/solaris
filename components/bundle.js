/* Solaris helpers. Plain script, no dependencies. It assigns window.Solaris. */
(function () {
  "use strict";
  var ICONS = {"house":"<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />","inbox":"<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\" /><path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\" />","square-check-big":"<path d=\"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5\" /><path d=\"m9 11 3 3L22 4\" />","circle-check-big":"<path d=\"M21.801 10A10 10 0 1 1 17 3.335\" /><path d=\"m9 11 3 3L22 4\" />","search":"<circle cx=\"11\" cy=\"11\" r=\"8\" /><path d=\"m21 21-4.3-4.3\" />","folder":"<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\" />","folder-plus":"<path d=\"M12 10v6\" /><path d=\"M9 13h6\" /><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\" />","file":"<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" />","file-text":"<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /><path d=\"M10 9H8\" /><path d=\"M16 13H8\" /><path d=\"M16 17H8\" />","table":"<path d=\"M12 3v18\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M3 9h18\" /><path d=\"M3 15h18\" />","workflow":"<rect width=\"8\" height=\"8\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M7 11v4a2 2 0 0 0 2 2h4\" /><rect width=\"8\" height=\"8\" x=\"13\" y=\"13\" rx=\"2\" />","layout-grid":"<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\" /><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\" /><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\" /><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\" />","list":"<path d=\"M3 12h.01\" /><path d=\"M3 18h.01\" /><path d=\"M3 6h.01\" /><path d=\"M8 12h13\" /><path d=\"M8 18h13\" /><path d=\"M8 6h13\" />","star":"<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />","trash-2":"<path d=\"M3 6h18\" /><path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\" /><path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\" /><line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\" /><line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\" />","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><polyline points=\"12 6 12 12 16 14\" />","users":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /><circle cx=\"9\" cy=\"7\" r=\"4\" /><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" />","user":"<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /><circle cx=\"12\" cy=\"7\" r=\"4\" />","settings":"<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />","chevron-down":"<path d=\"m6 9 6 6 6-6\" />","chevron-right":"<path d=\"m9 18 6-6-6-6\" />","chevron-left":"<path d=\"m15 18-6-6 6-6\" />","chevron-up":"<path d=\"m18 15-6-6-6 6\" />","chevrons-up-down":"<path d=\"m7 15 5 5 5-5\" /><path d=\"m7 9 5-5 5 5\" />","panel-left":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M9 3v18\" />","plus":"<path d=\"M5 12h14\" /><path d=\"M12 5v14\" />","x":"<path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" />","check":"<path d=\"M20 6 9 17l-5-5\" />","arrow-left":"<path d=\"m12 19-7-7 7-7\" /><path d=\"M19 12H5\" />","arrow-right":"<path d=\"M5 12h14\" /><path d=\"m12 5 7 7-7 7\" />","arrow-up-right":"<path d=\"M7 7h10v10\" /><path d=\"M7 17 17 7\" />","external-link":"<path d=\"M15 3h6v6\" /><path d=\"M10 14 21 3\" /><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />","share":"<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\" /><polyline points=\"16 6 12 2 8 6\" /><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"15\" />","upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /><polyline points=\"17 8 12 3 7 8\" /><line x1=\"12\" x2=\"12\" y1=\"3\" y2=\"15\" />","download":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /><polyline points=\"7 10 12 15 17 10\" /><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />","ellipsis":"<circle cx=\"12\" cy=\"12\" r=\"1\" /><circle cx=\"19\" cy=\"12\" r=\"1\" /><circle cx=\"5\" cy=\"12\" r=\"1\" />","ellipsis-vertical":"<circle cx=\"12\" cy=\"12\" r=\"1\" /><circle cx=\"12\" cy=\"5\" r=\"1\" /><circle cx=\"12\" cy=\"19\" r=\"1\" />","list-filter":"<path d=\"M3 6h18\" /><path d=\"M7 12h10\" /><path d=\"M10 18h4\" />","arrow-up-down":"<path d=\"m21 16-4 4-4-4\" /><path d=\"M17 20V4\" /><path d=\"m3 8 4-4 4 4\" /><path d=\"M7 4v16\" />","arrow-down":"<path d=\"M12 5v14\" /><path d=\"m19 12-7 7-7-7\" />","arrow-up":"<path d=\"m5 12 7-7 7 7\" /><path d=\"M12 19V5\" />","sun":"<circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 2v2\" /><path d=\"M12 20v2\" /><path d=\"m4.93 4.93 1.41 1.41\" /><path d=\"m17.66 17.66 1.41 1.41\" /><path d=\"M2 12h2\" /><path d=\"M20 12h2\" /><path d=\"m6.34 17.66-1.41 1.41\" /><path d=\"m19.07 4.93-1.41 1.41\" />","sunset":"<path d=\"M12 10V2\" /><path d=\"m4.93 10.93 1.41 1.41\" /><path d=\"M2 18h2\" /><path d=\"M20 18h2\" /><path d=\"m19.07 10.93-1.41 1.41\" /><path d=\"M22 22H2\" /><path d=\"m16 6-4 4-4-4\" /><path d=\"M16 18a4 4 0 0 0-8 0\" />","moon":"<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\" />","bell":"<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\" /><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\" />","message-circle":"<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\" />","at-sign":"<circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8\" />","paperclip":"<path d=\"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48\" />","send":"<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /><path d=\"m21.854 2.147-10.94 10.939\" />","tag":"<path d=\"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z\" /><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" />","info":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 16v-4\" /><path d=\"M12 8h.01\" />","calendar":"<path d=\"M8 2v4\" /><path d=\"M16 2v4\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /><path d=\"M3 10h18\" />","hard-drive":"<line x1=\"22\" x2=\"2\" y1=\"12\" y2=\"12\" /><path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\" /><line x1=\"6\" x2=\"6.01\" y1=\"16\" y2=\"16\" /><line x1=\"10\" x2=\"10.01\" y1=\"16\" y2=\"16\" />","lock":"<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /><path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\" /><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\" />","copy":"<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />","history":"<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /><path d=\"M3 3v5h5\" /><path d=\"M12 7v5l4 2\" />","activity":"<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\" />","circle-alert":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />","triangle-alert":"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /><path d=\"M12 9v4\" /><path d=\"M12 17h.01\" />","circle-check":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"m9 12 2 2 4-4\" />","loader-circle":"<path d=\"M21 12a9 9 0 1 1-6.219-8.56\" />","eye":"<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />","pencil":"<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\" /><path d=\"m15 5 4 4\" />","folder-input":"<path d=\"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1\" /><path d=\"M2 13h10\" /><path d=\"m9 16 3-3-3-3\" />","refresh-cw":"<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /><path d=\"M21 3v5h-5\" /><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /><path d=\"M8 16H3v5\" />","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\" /><polyline points=\"16 17 21 12 16 7\" /><line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\" />","command":"<path d=\"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3\" />","building-2":"<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\" /><path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\" /><path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\" /><path d=\"M10 6h4\" /><path d=\"M10 10h4\" /><path d=\"M10 14h4\" /><path d=\"M10 18h4\" />","layers":"<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\" /><path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\" /><path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\" />","hash":"<line x1=\"4\" x2=\"20\" y1=\"9\" y2=\"9\" /><line x1=\"4\" x2=\"20\" y1=\"15\" y2=\"15\" /><line x1=\"10\" x2=\"8\" y1=\"3\" y2=\"21\" /><line x1=\"16\" x2=\"14\" y1=\"3\" y2=\"21\" />","chart-column":"<path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /><path d=\"M18 17V9\" /><path d=\"M13 17V5\" /><path d=\"M8 17v-3\" />","rotate-ccw":"<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /><path d=\"M3 3v5h5\" />","archive":"<rect width=\"20\" height=\"5\" x=\"2\" y=\"3\" rx=\"1\" /><path d=\"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8\" /><path d=\"M10 12h4\" />","mail":"<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />","grip-vertical":"<circle cx=\"9\" cy=\"12\" r=\"1\" /><circle cx=\"9\" cy=\"5\" r=\"1\" /><circle cx=\"9\" cy=\"19\" r=\"1\" /><circle cx=\"15\" cy=\"12\" r=\"1\" /><circle cx=\"15\" cy=\"5\" r=\"1\" /><circle cx=\"15\" cy=\"19\" r=\"1\" />","sliders-horizontal":"<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\" /><line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\" /><line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\" /><line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\" /><line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\" /><line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\" /><line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\" /><line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\" /><line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\" />","circle-help":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /><path d=\"M12 17h.01\" />","box":"<path d=\"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z\" /><path d=\"m3.3 7 8.7 5 8.7-5\" /><path d=\"M12 22V12\" />","boxes":"<path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z\" /><path d=\"m7 16.5-4.74-2.85\" /><path d=\"m7 16.5 5-3\" /><path d=\"M7 16.5v5.17\" /><path d=\"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z\" /><path d=\"m17 16.5-5-3\" /><path d=\"m17 16.5 4.74-2.85\" /><path d=\"M17 16.5v5.17\" /><path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z\" /><path d=\"M12 8 7.26 5.15\" /><path d=\"m12 8 4.74-2.85\" /><path d=\"M12 13.5V8\" />","clipboard-list":"<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" /><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\" /><path d=\"M12 11h4\" /><path d=\"M12 16h4\" /><path d=\"M8 11h.01\" /><path d=\"M8 16h.01\" />","file-chart-column":"<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /><path d=\"M8 18v-1\" /><path d=\"M12 18v-6\" /><path d=\"M16 18v-3\" />","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /><circle cx=\"9\" cy=\"7\" r=\"4\" /><line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\" /><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\" />","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /><path d=\"M2 12h20\" />","circle-dashed":"<path d=\"M10.1 2.182a10 10 0 0 1 3.8 0\" /><path d=\"M13.9 21.818a10 10 0 0 1-3.8 0\" /><path d=\"M17.609 3.721a10 10 0 0 1 2.69 2.7\" /><path d=\"M2.182 13.9a10 10 0 0 1 0-3.8\" /><path d=\"M20.279 17.609a10 10 0 0 1-2.7 2.69\" /><path d=\"M21.818 10.1a10 10 0 0 1 0 3.8\" /><path d=\"M3.721 6.391a10 10 0 0 1 2.7-2.69\" /><path d=\"M6.391 20.279a10 10 0 0 1-2.69-2.7\" />","circle-x":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"m15 9-6 6\" /><path d=\"m9 9 6 6\" />","minus":"<path d=\"M5 12h14\" />","square-pen":"<path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\" /><path d=\"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z\" />","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\" /><path d=\"M3 5V19A9 3 0 0 0 21 19V5\" /><path d=\"M3 12A9 3 0 0 0 21 12\" />","kanban":"<path d=\"M6 5v11\" /><path d=\"M12 5v6\" /><path d=\"M18 5v14\" />","shield-check":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /><path d=\"m9 12 2 2 4-4\" />","chart-line":"<path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /><path d=\"m19 9-5 5-4-4-3 3\" />"};
  var THEMES = [
    { id: "light", label: "Light", icon: "sun" },
    { id: "night", label: "Night light", icon: "sunset" },
    { id: "dark", label: "Dark", icon: "moon" }
  ];
  var S = window.Solaris || {};
  window.Solaris = S;
  S.version = "1.0.0";
  S.iconNames = Object.keys(ICONS);
  S.themes = THEMES;

  /* Icons: one SVG sprite, then <svg><use href="#sl-i-NAME"></use></svg>. */
  S.sprite = function () {
    if (document.getElementById("sl-sprite")) return;
    var parts = [];
    for (var k in ICONS) parts.push('<symbol id="sl-i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + "</symbol>");
    var holder = document.createElement("div");
    holder.innerHTML = '<svg id="sl-sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">' + parts.join("") + "</svg>";
    (document.body || document.documentElement).appendChild(holder.firstChild);
  };
  S.icon = function (name, cls) {
    return '<svg class="sl-icon' + (cls ? " " + cls : "") + '" aria-hidden="true" focusable="false"><use href="#sl-i-' + name + '"></use></svg>';
  };
  /* Replace <i data-icon="name" class="..."></i> with the sprite markup. */
  S.hydrate = function (root) {
    S.sprite();
    var list = (root || document).querySelectorAll("i[data-icon]");
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      var tmp = document.createElement("div");
      tmp.innerHTML = S.icon(el.getAttribute("data-icon"), el.className);
      el.parentNode.replaceChild(tmp.firstChild, el);
    }
  };

  /* Theme: set data-theme on a root and animate colours for one transition. */
  S.setTheme = function (root, theme) {
    root = root || document.documentElement;
    root.classList.add("sl-theming");
    root.setAttribute("data-theme", theme);
    clearTimeout(root._slT);
    root._slT = setTimeout(function () { root.classList.remove("sl-theming"); }, 320);
    var sw = root.querySelectorAll("[data-sl-theme-switch] [role=radio]");
    for (var i = 0; i < sw.length; i++) sw[i].setAttribute("aria-checked", String(sw[i].getAttribute("data-value") === theme));
  };
  S.themeSwitch = function () {
    return '<div class="sl-seg" role="radiogroup" aria-label="Theme" data-sl-theme-switch>' + THEMES.map(function (t) {
      return '<button type="button" class="sl-seg__item" role="radio" aria-checked="false" data-value="' + t.id + '" aria-label="' + t.label + ' theme" title="' + t.label + '">' + S.icon(t.icon, "sl-icon--sm") + "</button>";
    }).join("") + "</div>";
  };

  function closestAttr(el, attr) {
    while (el && el.nodeType === 1) { if (el.hasAttribute(attr)) return el; el = el.parentElement; }
    return null;
  }
  function scopeOf(el) { return el.closest("[data-theme]") || document; }
  function byId(scope, id) { return scope.querySelector('[id="' + id + '"]') || document.getElementById(id); }
  var FOCUSABLE = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

  /* ---------- Behaviours (event delegation, set up once) ---------- */
  var lastOpener = null;
  function openDialog(back, opener) {
    if (!back) return;
    back.hidden = false;
    lastOpener = opener || document.activeElement;
    var f = back.querySelectorAll(FOCUSABLE);
    if (f.length) setTimeout(function () { (back.querySelector("[autofocus]") || f[0]).focus(); }, 10);
  }
  function closeDialog(back) {
    if (!back) return;
    back.hidden = true;
    if (lastOpener && lastOpener.focus) lastOpener.focus();
  }
  function closeMenus(except) {
    var open = document.querySelectorAll("[data-sl-menu][aria-expanded=true]");
    for (var i = 0; i < open.length; i++) {
      if (open[i] === except) continue;
      open[i].setAttribute("aria-expanded", "false");
      var m = byId(scopeOf(open[i]), open[i].getAttribute("data-sl-menu"));
      if (m) m.hidden = true;
    }
  }
  function updateSelection(scope) {
    var boxes = scope.querySelectorAll("[data-sl-select]");
    var n = 0;
    for (var i = 0; i < boxes.length; i++) {
      var row = boxes[i].closest("tr, .sl-card, .sl-li");
      if (row) row.classList.toggle("is-checked", boxes[i].checked);
      if (boxes[i].checked) n++;
    }
    var all = scope.querySelector("[data-sl-select-all]");
    if (all) { all.checked = n > 0 && n === boxes.length; all.indeterminate = n > 0 && n < boxes.length; }
    var bars = scope.querySelectorAll("[data-sl-bulk]");
    for (var j = 0; j < bars.length; j++) {
      bars[j].hidden = n === 0;
      var c = bars[j].querySelector("[data-sl-bulk-count]");
      if (c) c.textContent = n + " selected";
    }
  }
  S.updateSelection = updateSelection;

  function onClick(e) {
    var t = e.target;
    var el;
    if ((el = t.closest("[data-sl-theme-switch] [role=radio]"))) {
      var root = el.closest("[data-sl-theme-root]") || el.closest("[data-theme]") || document.documentElement;
      S.setTheme(root, el.getAttribute("data-value"));
      return;
    }
    if ((el = t.closest("[role=tab]"))) {
      var list = el.closest("[role=tablist]");
      if (list) {
        var tabs = list.querySelectorAll("[role=tab]");
        for (var i = 0; i < tabs.length; i++) {
          var on = tabs[i] === el;
          tabs[i].setAttribute("aria-selected", String(on));
          tabs[i].tabIndex = on ? 0 : -1;
          var pid = tabs[i].getAttribute("aria-controls");
          if (pid) { var p = byId(scopeOf(el), pid); if (p) p.hidden = !on; }
        }
      }
    }
    if ((el = t.closest("[role=radiogroup] [role=radio]")) && !el.closest("[data-sl-theme-switch]")) {
      var g = el.closest("[role=radiogroup]").querySelectorAll("[role=radio]");
      for (var r = 0; r < g.length; r++) { g[r].setAttribute("aria-checked", String(g[r] === el)); g[r].tabIndex = g[r] === el ? 0 : -1; }
      var target = el.getAttribute("data-sl-show");
      if (target) {
        var sc = scopeOf(el);
        for (var q = 0; q < g.length; q++) { var id = g[q].getAttribute("data-sl-show"); var pnl = id && byId(sc, id); if (pnl) pnl.hidden = g[q] !== el; }
      }
    }
    if ((el = t.closest("[data-sl-toggle]"))) {
      var exp = el.getAttribute("aria-expanded") === "true";
      el.setAttribute("aria-expanded", String(!exp));
      var tg = byId(scopeOf(el), el.getAttribute("data-sl-toggle"));
      if (tg) tg.hidden = exp;
    }
    if ((el = t.closest("[data-sl-star]"))) {
      el.setAttribute("aria-pressed", String(el.getAttribute("aria-pressed") !== "true"));
    }
    if ((el = t.closest("[data-sl-menu]"))) {
      var m = byId(scopeOf(el), el.getAttribute("data-sl-menu"));
      var open = el.getAttribute("aria-expanded") === "true";
      closeMenus(el);
      el.setAttribute("aria-expanded", String(!open));
      if (m) { m.hidden = open; if (!open) { var first = m.querySelector(FOCUSABLE); if (first && e.detail === 0) first.focus(); } }
      e.stopPropagation();
      return;
    }
    if (!t.closest(".sl-menu, .sl-popover")) closeMenus();
    if (t.closest(".sl-menu__item") && !t.closest("[data-sl-keep]")) closeMenus();
    if ((el = t.closest("[data-sl-open]"))) {
      openDialog(byId(scopeOf(el), el.getAttribute("data-sl-open")), el);
    }
    if ((el = t.closest("[data-sl-close]"))) {
      closeDialog(el.closest(".sl-backdrop") || byId(scopeOf(el), el.getAttribute("data-sl-close")));
    }
    if (t.classList && t.classList.contains("sl-backdrop") && t.hasAttribute("data-sl-dismiss")) closeDialog(t);
    if ((el = t.closest("[data-sl-copy]"))) {
      var label = el.querySelector("[data-sl-copy-label]");
      var ic = el.querySelector("use");
      if (label) label.textContent = "Link copied";
      if (ic) ic.setAttribute("href", "#sl-i-check");
      try { navigator.clipboard && navigator.clipboard.writeText(el.getAttribute("data-sl-copy")).catch(function () {}); } catch (x) {}
      clearTimeout(el._slT);
      el._slT = setTimeout(function () { if (label) label.textContent = "Copy link"; if (ic) ic.setAttribute("href", "#sl-i-link"); }, 2000);
    }
    if ((el = t.closest("[data-sl-peek]"))) {
      var host = el.closest("[data-sl-list]") || scopeOf(el);
      var row = el.closest("tr, .sl-card");
      var was = row && row.classList.contains("is-open");
      var rows = host.querySelectorAll("tr.is-open, .sl-card.is-open");
      for (var k = 0; k < rows.length; k++) rows[k].classList.remove("is-open");
      if (row && !was) row.classList.add("is-open");
      var panel = byId(scopeOf(el), el.getAttribute("data-sl-peek"));
      if (panel) {
        panel.hidden = !!was;
        var nm = panel.querySelector("[data-sl-peek-name]");
        var nmSrc = row && row.querySelector(".sl-namebtn, .sl-card__name");
        if (nm && nmSrc) nm.textContent = nmSrc.textContent;
        var bd = panel.querySelector("[data-sl-peek-badge]");
        var bdSrc = row && row.querySelector(".sl-typebadge");
        if (bd && bdSrc) { bd.className = bdSrc.className.replace(/sl-typebadge--(sm|md)/, "") + " sl-typebadge--lg"; bd.textContent = bdSrc.textContent; }
      }
    }
    if ((el = t.closest("[data-sl-clear]"))) {
      var sc2 = el.closest("[data-sl-list]") || scopeOf(el);
      var bx = sc2.querySelectorAll("[data-sl-select]");
      for (var b = 0; b < bx.length; b++) bx[b].checked = false;
      updateSelection(sc2);
    }
    if ((el = t.closest(".sl-navitem[data-sl-nav]"))) {
      var nav = el.closest(".sl-sidebar") || scopeOf(el);
      var cur = nav.querySelectorAll(".sl-navitem[aria-current]");
      for (var c = 0; c < cur.length; c++) cur[c].removeAttribute("aria-current");
      el.setAttribute("aria-current", "page");
    }
    if ((el = t.closest("[data-sl-go]"))) {
      var scr = byId(scopeOf(el), el.getAttribute("data-sl-go"));
      if (scr) {
        var sib = scr.parentElement.querySelectorAll(":scope > [data-sl-screen]");
        for (var s = 0; s < sib.length; s++) sib[s].hidden = sib[s] !== scr;
        var crumb = scr.getAttribute("data-sl-crumb");
        var cl = scopeOf(el).querySelector("[data-sl-crumbs]");
        if (cl && crumb) cl.innerHTML = crumb;
      }
    }
    if ((el = t.closest("[data-sl-reveal]"))) {
      var rv = byId(scopeOf(el), el.getAttribute("data-sl-reveal"));
      if (rv) rv.hidden = false;
    }
    if ((el = t.closest("[data-sl-dismiss-el]"))) {
      var d = el.closest(el.getAttribute("data-sl-dismiss-el"));
      if (d) d.hidden = true;
    }
  }
  function onChange(e) {
    var t = e.target;
    if (t.hasAttribute("data-sl-select-all")) {
      var sc = t.closest("[data-sl-list]") || scopeOf(t);
      var bx = sc.querySelectorAll("[data-sl-select]");
      for (var i = 0; i < bx.length; i++) bx[i].checked = t.checked;
      updateSelection(sc);
    } else if (t.hasAttribute("data-sl-select")) {
      updateSelection(t.closest("[data-sl-list]") || scopeOf(t));
    }
  }
  function onKey(e) {
    var t = e.target;
    if (e.key === "Escape") {
      closeMenus();
      var openBack = document.querySelectorAll(".sl-backdrop:not([hidden])[data-sl-modal]");
      if (openBack.length) closeDialog(openBack[openBack.length - 1]);
      return;
    }
    if (e.key === "Tab") {
      var back = t.closest && t.closest(".sl-backdrop[data-sl-modal]");
      if (back) {
        var f = back.querySelectorAll(FOCUSABLE);
        if (!f.length) return;
        if (e.shiftKey && t === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && t === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
      return;
    }
    var keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (!(e.key in keys)) return;
    var role = t.getAttribute && t.getAttribute("role");
    var group = role === "tab" ? t.closest("[role=tablist]") : role === "radio" ? t.closest("[role=radiogroup]") : null;
    if (group) {
      var items = Array.prototype.slice.call(group.querySelectorAll("[role=" + role + "]"));
      var n = items[(items.indexOf(t) + keys[e.key] + items.length) % items.length];
      e.preventDefault(); n.focus(); n.click();
      return;
    }
    var menu = t.closest && t.closest(".sl-menu");
    if (menu) {
      var mi = Array.prototype.slice.call(menu.querySelectorAll(".sl-menu__item:not(:disabled)"));
      var nx = mi[(mi.indexOf(t) + keys[e.key] + mi.length) % mi.length];
      if (nx) { e.preventDefault(); nx.focus(); }
    }
  }
  S.init = function () {
    if (S._init) return;
    S._init = true;
    document.addEventListener("click", onClick);
    document.addEventListener("change", onChange);
    document.addEventListener("keydown", onKey);
  };

  /* ---------- Docs preview harness ----------
     Solaris.preview({ mode: "all" | "single", title, layout: "cols" | "rows", flush, bg })
     "all" shows the content once per theme. "single" shows it once, with a theme switch. */
  function suffixIds(html, sfx) {
    return html.replace(/\b(id|for|aria-labelledby|aria-describedby|aria-controls|data-sl-toggle|data-sl-open|data-sl-close|data-sl-menu|data-sl-peek|data-sl-show|data-sl-go|data-sl-reveal|list)="([^"]+)"/g, function (m, a, v) {
      return a + '="' + v.split(" ").map(function (x) { return x + sfx; }).join(" ") + '"';
    }).replace(/href="#(?!sl-i-)([^"]+)"/g, 'href="#$1' + sfx + '"');
  }
  S.preview = function (opts) {
    opts = opts || {};
    S.sprite();
    S.init();
    var root = document.getElementById("root") || document.body.firstElementChild;
    var html = root.innerHTML;
    var mode = opts.mode || "all";
    var pageTheme = document.documentElement.getAttribute("data-theme") || "light";
    if (THEMES.map(function (t) { return t.id; }).indexOf(pageTheme) < 0) pageTheme = "light";
    document.body.classList.add("sl-pv", "sl");
    var stageCls = "sl sl-stage" + (opts.flush ? " sl-stage--flush" : "") + (opts.bg ? " sl-stage--bg" : "");
    function stage(t, i, label) {
      return '<section class="' + stageCls + '" data-theme="' + t + '" data-sl-theme-root aria-label="' + label + ' theme">' +
        (mode === "all" ? '<span class="sl-pv-label">' + label + "</span>" : "") + (i ? suffixIds(html, "-" + t) : html) + "</section>";
    }
    var bar = '<div class="sl-pv-bar"><span class="sl-pv-bar__title">' + (opts.title || "") + "</span>" +
      '<div class="sl-seg" role="radiogroup" aria-label="Preview themes">' +
      '<button type="button" class="sl-seg__item" role="radio" data-pv="all" aria-checked="' + (mode === "all") + '">All themes</button>' +
      THEMES.map(function (t) { return '<button type="button" class="sl-seg__item" role="radio" data-pv="' + t.id + '" aria-checked="false">' + S.icon(t.icon, "sl-icon--sm") + t.label + "</button>"; }).join("") +
      "</div></div>";
    function render(which) {
      var body;
      if (which === "all") {
        body = '<div class="sl-pv-grid' + (opts.layout === "rows" ? " sl-pv-grid--rows" : "") + '">' + THEMES.map(function (t, i) { return stage(t.id, i, t.label); }).join("") + "</div>";
      } else {
        var lbl = THEMES.filter(function (t) { return t.id === which; })[0].label;
        body = '<div class="sl-pv-grid sl-pv-grid--rows">' + stage(which, 0, lbl) + "</div>";
      }
      root.innerHTML = bar + body;
      var b = root.querySelectorAll("[data-pv]");
      for (var i = 0; i < b.length; i++) b[i].setAttribute("aria-checked", String(b[i].getAttribute("data-pv") === which));
      S.hydrate(root);
      var stages = root.querySelectorAll(".sl-stage");
      for (var s = 0; s < stages.length; s++) {
        var th = stages[s].getAttribute("data-theme");
        var sw = stages[s].querySelectorAll("[data-sl-theme-switch] [role=radio]");
        for (var w = 0; w < sw.length; w++) sw[w].setAttribute("aria-checked", String(sw[w].getAttribute("data-value") === th));
        updateSelection(stages[s]);
      }
      if (opts.after) opts.after(root);
      current = which;
      chosen = which;
    }
    var current = mode === "all" ? "all" : pageTheme, chosen = null, picked = false;
    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-pv]");
      if (b && root.contains(b)) { picked = true; render(b.getAttribute("data-pv")); }
    });
    render(current);
    picked = false;
    if (window.MutationObserver) {
      new MutationObserver(function () {
        var t = document.documentElement.getAttribute("data-theme");
        if (!picked && current !== "all" && t && t !== current && THEMES.some(function (x) { return x.id === t; })) render(t);
      }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { S.sprite(); S.init(); });
  else { S.sprite(); S.init(); }
})();
