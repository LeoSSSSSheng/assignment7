'use strict';

define('eventful/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/reddit-post.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/reddit-post.js should pass ESLint\n\n6:11 - \'post\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('components/unread-email.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/unread-email.js should pass ESLint\n\n6:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/vote-control.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/vote-control.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/search.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/relative-time.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/relative-time.js should pass ESLint\n\n7:3 - Unreachable code. (no-unreachable)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/error.js should pass ESLint\n\n');
  });

  QUnit.test('routes/loading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/loading.js should pass ESLint\n\n');
  });

  QUnit.test('routes/search.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/search.js should pass ESLint\n\n2:8 - \'$\' is defined but never used. (no-unused-vars)\n20:4 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/reddit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/reddit.js should pass ESLint\n\n');
  });
});
define('eventful/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('eventful/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'eventful/tests/helpers/start-app', 'eventful/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('eventful/tests/helpers/resolver', ['exports', 'eventful/resolver', 'eventful/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('eventful/tests/helpers/start-app', ['exports', 'eventful/app', 'eventful/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('eventful/tests/integration/components/reddit-post-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('reddit-post', 'Integration | Component | reddit post', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "yO0Nc4bZ",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"reddit-post\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "mtoRldVO",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"reddit-post\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('eventful/tests/integration/components/unread-email-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('unread-email', 'Integration | Component | unread email', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "7Cu+UQDd",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"unread-email\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "YOahOGxr",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"unread-email\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('eventful/tests/integration/components/vote-control-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('vote-control', 'Integration | Component | vote control', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "CJOD1RjW",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"vote-control\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "mo9y8fQK",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"vote-control\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('eventful/tests/integration/helpers/relative-time-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('relative-time', 'helper:relative-time', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "uO6dQ7fK",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"relative-time\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('eventful/tests/test-helper', ['eventful/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('eventful/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/reddit-post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/reddit-post-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/unread-email-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/unread-email-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/vote-control-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/vote-control-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/relative-time-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/relative-time-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/search-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/error-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/error-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/loading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/loading-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/reddit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/reddit-test.js should pass ESLint\n\n');
  });
});
define('eventful/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('eventful/tests/unit/controllers/search-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:search', 'Unit | Controller | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('eventful/tests/unit/routes/error-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:error', 'Unit | Route | error', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eventful/tests/unit/routes/loading-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:loading', 'Unit | Route | loading', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eventful/tests/unit/routes/search-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:search', 'Unit | Route | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eventful/tests/unit/services/reddit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:reddit', 'Unit | Service | reddit', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('eventful/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
