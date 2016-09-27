suite('freehand-canvas lineColor', function() {
  var el;
  var context;
  var lineColorOptions = ['black', 'red', 'green', 'blue'];
  var defaultLineColor;
  var control;

  setup(function () {
    el = fixture('basic');
    context = el.context;
    defaultLineColor = 'black';
    control = el.$$('[data-model="lineColor"]');
  });

  test('the element has correct default line color', function (done) {
    flush(function () {
      assert.equal(el.lineColor, defaultLineColor, 'Defaullt line color is correct');
      done();
    });
  });

  test('support setting matched line color', function(done) {
    var testCases = lineColorOptions;

    flush(function () {
      testCases.forEach(function (testCase, i) {
        el.lineColor = testCase;
        assert.equal(control.value, testCase, 'Line color option is selected');
      });
      done();
    });
  });

  test('ignore setting unmatched / invalid line color', function(done) {
    var testCases = ['orange', 'aaa', 0];

    flush(function () {
      testCases.forEach(function (testCase, i) {
        var expectedLineColor = 1;
        el.lineColor = 'red'; // Force to matched value
        el.lineColor = testCase;
        assert.equal(control.value, defaultLineColor, 'Line color option is not changed');
      });
      done();
    });
  });

});
