const registro = async () => {
  // USER SIGNUP
  const { data, error } = await supabase.auth.signUp({
    email: 'garciamanjonjoel@fpllefia.com',
    password: '123456'
  })
}
const login = async () => {
  // USER LOGIN
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'garciamanjonjoel@fpllefia.com',
    password: '123456'
  })
// registro()
}

const verUsuarioLogueado = async () => {
  // GET USER
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

const logout = async () => {
  // USER LOGOUT
  const { error } = await supabase.auth.signOut()
}

// 1. miramos usuario logueado
console.log('Detalle usuario logueado: ', await verUsuarioLogueado())

// 2. Loguin
await login()

// 3 miramos usuarios logueado
console.log('Detalle usuario logueado: ', await verUsuarioLogueado)
console.log(await verUsuarioLogueado())
