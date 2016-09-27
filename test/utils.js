(function () {
  'use strict';

  function drawLine (context, line) {
    context.strokeStyle = line.strokeStyle;
    context.lineWidth = line.lineWidth;
    context.lineJoin = context.lineCap = 'round';
    context.beginPath();

    var coordinates = line.coordinates;
    var coordinate;
    var startX;
    var startY;
    var endX;
    var endY;

    for (var i = 0; i < coordinates.length; ++i) {
      coordinate = coordinates[i];
      endX = coordinate[0];
      endY = coordinate[1];

      if (startX === undefined) {
        startX = endX - 1;
        startY = endY - 1;
        context.moveTo(startX, startY);
      }

      context.lineTo(endX, endY);
    }

    context.stroke();
    context.closePath();
  }

  function isBlankCanvas (canvas) {
    var blankCanvas = document.createElement('canvas');
    blankCanvas.width = canvas.width;
    blankCanvas.height = canvas.height;
    return canvas.toDataURL() === blankCanvas.toDataURL();
  }

  window.testUtils = {
    drawLine: drawLine,
    isBlankCanvas: isBlankCanvas
  };
})();