suite('freehand-canvas dimension', function() {
  var el;
  var canvas;
  var defaultWidth;
  var defaultHeight;

  setup(function () {
    el = fixture('basic');
    canvas = el.canvas;
    defaultWidth = el.getBoundingClientRect().width;
    defaultHeight = 400;
  });

  test('the element has correct default height',  function () {
    assert.equal(canvas.height, defaultHeight, 'Default canvas height is correct');
  });

  test('support setting canvas dimension', function() {
    var testCases = [
      { width: 400, expectedWidth: 400, expectedHeight: defaultHeight },
      { height: 200, expectedWidth: defaultWidth, expectedHeight: 200 },
      { width: 400, height: 200, expectedWidth: 400, expectedHeight: 200 }
    ];

    testCases.forEach(function (testCase) {
      el.canvasWidth = testCase.width;
      el.canvasHeight = testCase.height;

      assert.isBelow(Math.abs(canvas.width - testCase.expectedWidth), 1, 'Canvas\'s width is correct');
      assert.isBelow(Math.abs(canvas.height - testCase.expectedHeight), 1, 'Canvas\'s height is correct');
    });
  });

});
