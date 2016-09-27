suite('freehand-canvas basic', function() {
  var el;

  setup(function () {
    el = fixture('basic');
  });

  test('instantiating the element works', function() {
    assert.equal(el.is, 'freehand-canvas', 'Element is initialized');
  });

  test('the element has correct structure', function () {
    assert.equal(window.getComputedStyle(el).display, 'block', 'Display as block');

    // Canvas
    var canvas = el.$$('canvas');
    assert.isNotNull(canvas, 'Contains canvas');

    // Options
    var optionModels = [
      [
        { value: '1', label: '1' },
        { value: '5', label: '5' },
        { value: '10', label: '10' },
        { value: '20', label: '20' },
        { value: '40', label: '40' }
      ],
      [
        { value: '#000', label: 'black' },
        { value: '#f00', label: 'red' },
        { value: '#f93', label: 'orange' },
        { value: '#ff0', label: 'yellow' },
        { value: '#0f0', label: 'green' },
        { value: '#00f', label: 'blue' }
      ]
    ];

    var selects = Polymer.dom(el.root).querySelectorAll('select');
    selects.forEach(function (select, i) {
      var options = Polymer.dom(select).querySelectorAll('options');
      options.forEach(function (option, j) {
        assert.deepEqual({
          value: option.value,
          label: option.textContent
        }, optionModels[i][j], 'Option is correct');
      })
    });

    // Reset button
    var btnReset = el.$$('button');
    assert.equal(btnReset.textContent, 'reset', 'Contains rest button');
  });

});
