import Vue from 'vue'
import user from '@/components/user'

describe('user.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(user)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
