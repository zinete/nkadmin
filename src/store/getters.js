const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  auth: (state) => state.auth.user,
  avatar: (state) => state.auth
}
export default getters
