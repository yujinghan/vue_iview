export default {
    //getters相当于computed，getters是只读的
    money_us(state) {
        return (state.money / 7).toFixed(2)
    },
    getCityName(state) {
        return state.cityName
    },
}