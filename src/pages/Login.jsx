import { useState } from "react"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameInput = (event) => {
    const value = event.target.value

    setUsername(value)
  }

  const handlePasswordInput = (event) => {
    const value = event.target.value

    setPassword(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // console.log('Estoy listo para enviar la información')

    const URL = 'https://dummyjson.com/auth/login'
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    }
   const response = await fetch (URL, options)
   const data = await response.json()

   console.log(data);
  }
  
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-emerald-500">Superheroes</h2>

      <p className='text-gray-500 font-light text-center'>Ingresa un nombre de usuario y elige a tus super favoritos.</p>

      {/*
        {username}
        {password}
      */}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          name="username"
          required
          className="w-full appearance-none rounded border border-gray-300 px-4 py-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
          placeholder="Username"
          onChange={handleUsernameInput}
        />
        <input
          autoFocus
          type="password"
          name="password"
          required
          className="w-full appearance-none rounded border border-gray-300 px-4 py-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
          placeholder="Password"
          onChange={handlePasswordInput}
        />

        <button className="w-full rounded-md border border-transparent bg-indigo-600 py-4 px-4 font-medium text-white hover:bg-indigo-700 focus:outline-none">
          Ingresar
        </button>
      </form>
    </>
  )
}

export default Login