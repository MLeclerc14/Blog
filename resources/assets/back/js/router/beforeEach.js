import Vue from 'vue';

const beforeEach = ((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content');

    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    next();
  });
});

export default beforeEach
