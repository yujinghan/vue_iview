import Vue from "vue"
export default {
    namespaced: true, //变为公有
    state: {
        testContent: []
    },
    getters: {
        subjectCount(state) {
            return state.testContent.length
        }

    },
    mutations: {
        addTest(state, subject) {
            if (state.testContent.some(function(item) {
                    return item.id === subject.id
                }))
                return false
            state.testContent.push(subject)
        },
        up(state, i) {
            let temp = state.testContent[i];
            Vue.set(state.testContent, i, state.testContent[i - 1]);
            Vue.set(state.testContent, i - 1, temp)
        },
        down(state, i) {
            let temp = state.testContent[i];
            Vue.set(state.testContent, i, state.testContent[i + 1]);
            Vue.set(state.testContent, i + 1, temp)
        },
        remove(state, i) {
            state.testContent.splice(i, 1)
        }
    }
}