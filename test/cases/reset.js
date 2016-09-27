suite('freehand-canvas reset', function() {
  var el;
  var canvas;
  var context;
  var control;

  setup(function () {
    el = fixture('basic');
    canvas = el.canvas;
    context = el.context;
    control = el.$$('button[value="reset"]');
  });

  test('support canvas reset', function () {
    // Draw a line first
    testUtils.drawLine(context, {
      lineWidth: 5,
      strokeStyle: 'black',
      coordinates: [[0,0],[200,200]]
    });

    el.reset();
    assert.isTrue(testUtils.isBlankCanvas(canvas), 'Canvas is empty');
  });

  test('reset canvas when click reset button', function () {
    var spy = sinon.spy(el, 'reset');
    MockInteractions.tap(control);
    assert.isTrue(spy.called, 'Method reset() is called');
  });

});
