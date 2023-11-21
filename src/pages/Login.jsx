const Login = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-emerald-500">Superheroes</h2>

      <p className='text-gray-500 font-light text-center'>Ingresa un nombre de usuario y elige a tus super favoritos.</p>

      <form className="mt-6 space-y-4" >
        <input
          autoFocus
          type="text"
          name="username"
          required
          className="w-full appearance-none rounded border border-gray-300 px-4 py-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
          placeholder="Username"
        />
        <input
          autoFocus
          type="password"
          name="password"
          required
          className="w-full appearance-none rounded border border-gray-300 px-4 py-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
          placeholder="Password"
        />

        <button className="w-full rounded-md border border-transparent bg-indigo-600 py-4 px-4 font-medium text-white hover:bg-indigo-700 focus:outline-none">
          Ingresar
        </button>
      </form>

    </>
  )
}

export default Login