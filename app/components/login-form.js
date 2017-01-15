import Ember from 'ember';

export default Ember.Component.extend({
  username: null,

  actions: {
    login () {
      $.ajax({
        url: 'http://localhost:7070/login',
        data: {
          username: this.get('username')
        },
        xhrFields: {
          withCredentials: true
       }
      })
      .then(() => {
        console.log('oy')
      })
      .fail((err) => {
        console.log(err)
      })
    }
  }
});
