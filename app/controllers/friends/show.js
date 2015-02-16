import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        friendsList: function () {
            return this.transitionToRoute('friends');
        },
        edit: function () {
            return this.transitionToRoute('friends.edit', this.get('model'));
        },
        delete: function(friend) {
            var _this = this;
            friend.destroyRecord().then(function() {
                _this.transitionTo('friends.index');
            });
        }
    }
});