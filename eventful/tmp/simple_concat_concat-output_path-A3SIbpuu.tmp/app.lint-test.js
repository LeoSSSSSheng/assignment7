QUnit.module('ESLint | app');

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('components/reddit-post.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/reddit-post.js should pass ESLint\n\n6:11 - \'post\' is assigned a value but never used. (no-unused-vars)');
});

QUnit.test('components/unread-email.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/unread-email.js should pass ESLint\n\n6:7 - Unexpected console statement. (no-console)');
});

QUnit.test('components/vote-control.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/vote-control.js should pass ESLint\n\n');
});

QUnit.test('controllers/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
});

QUnit.test('controllers/search.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/search.js should pass ESLint\n\n');
});

QUnit.test('helpers/relative-time.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'helpers/relative-time.js should pass ESLint\n\n7:3 - Unreachable code. (no-unreachable)');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/error.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/error.js should pass ESLint\n\n');
});

QUnit.test('routes/loading.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/loading.js should pass ESLint\n\n');
});

QUnit.test('routes/search.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/search.js should pass ESLint\n\n2:8 - \'$\' is defined but never used. (no-unused-vars)\n20:4 - Unexpected console statement. (no-console)');
});

QUnit.test('services/reddit.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'services/reddit.js should pass ESLint\n\n');
});

