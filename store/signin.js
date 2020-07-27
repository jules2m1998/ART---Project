export const state = () => ({
  dialog: false
})

export const mutations = {
  setDialog (state, value) {
    state.dialog = value
  }
}
