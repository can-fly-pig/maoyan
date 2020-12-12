export default {
  getChoise(state,payload) {
    localStorage.setItem("city",JSON.stringify(payload)),
    state.city = payload
  }
}
