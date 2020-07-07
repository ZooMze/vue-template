/**
 * 在此配置的getter将被mapGetters映射到, 以便于直接在页面中使用
 */

const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  user: state => state.user // 你可以映射任意层级的数据, 这里的冗余内容仅是演示, 在NavBar.vue中调用
}
export default getters
