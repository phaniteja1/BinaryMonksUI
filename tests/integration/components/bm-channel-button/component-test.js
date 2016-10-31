import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bm-channel-button', 'Integration | Component | bm channel button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bm-channel-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bm-channel-button}}
      template block text
    {{/bm-channel-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
