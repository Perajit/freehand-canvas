suite('freehand-canvas lineWidth', function() {
  var el;
  var context;
  var defaultLineWidth;
  var selLineWidth;

  setup(function () {
    el = fixture('basic');
    context = el.$$('canvas').getContext('2d');
    defaultLineWidth = 5;
    selLineWidth = el.$$('[data-model="lineWidth"]');
  });

  test('the element has correct default line width', function (done) {
    flush(function () {
      assert.equal(el.lineWidth, defaultLineWidth, 'Defaullt line width is correct');
      done();
    });
  });

  test('support setting matched line width', function(done) {
    var testCases = [1, 5, 10, 20, 40];

    flush(function () {
      testCases.forEach(function (testCase, i) {
        el.lineWidth = testCase;
        assert.equal(selLineWidth.value, testCase, 'Line width option is selected');
      });
      done();
    });
  });

  test('ignore setting unmatched line width', function(done) {
    var testCases = [-1, 3, 50];

    flush(function () {
      testCases.forEach(function (testCase, i) {
        el.lineWidth = 1; // Force to matched value
        el.lineWidth = testCase;
        assert.equal(selLineWidth.value, defaultLineWidth, 'Line width option is not changed');
      });
      done();
    });
  });

});
