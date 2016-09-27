suite('freehand-canvas reset', function() {
  var el;
  var canvas;
  var context;
  var defaultLineWidth;
  var btnReset;

  setup(function () {
    el = fixture('basic');
    canvas = el.$$('canvas');
    context = canvas.getContext('2d');
    defaultLineWidth = 5;
    btnReset = el.$$('button[value="reset"]');
  });

  test('support canvas reset', function () {
    // Draw a line first
    el.addLine({
      lineWidth: 5,
      strokeStyle: 'black',
      coordinates: [[0,0],[200,200]]
    });

    el.reset();

    // Create a blank canvas to compare
    var blankCanvas = document.createElement('canvas');
    blankCanvas.width = canvas.width;
    blankCanvas.height = canvas.height;

    assert.equal(canvas.toDataURL(), blankCanvas.toDataURL(), 'Canvas is empty');
  });

  test('reset canvas when click reset button', function () {
    var spy = sinon.spy(el, 'reset');

    MockInteractions.tap(btnReset);

    assert.isTrue(spy.called, 'Method reset() is called');
  });

});
