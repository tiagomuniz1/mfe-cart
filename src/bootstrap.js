import Vue from 'vue';

const mount = (element) => {
  new Vue({
    el: `#${element.id}`,
    template: '<App />',
    components: {
      App: () => import('./components/App/App.vue'),
    },
  })
};

if (process.env.NODE_ENV === 'development') {
  const isolationEnvElement = document.querySelector('#dev-cart');

  if (isolationEnvElement) {
    mount(isolationEnvElement);
  }
}

export { mount };