export default {
    //mutation相当于methods，但仅支持同步操作
    addAge(state, payLoad) {
        state.age += payLoad.num
    },
    setCityName(state, name) {

        state.cityName = name
    },
}