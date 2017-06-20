import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://beta.gouv.fr',
  namespace: 'api/v1.3',

  pathForType: function(type) {
    return this._super(type) + '.json';
  }
});
