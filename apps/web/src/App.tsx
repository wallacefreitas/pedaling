import Login from "./pages/login";

export default function App() {
  async function handleLogin() {
    const data = {
      username: "admin",
      password: "admin",
    }

    const token = await fetch('http://localhost:3001/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => data.token)

    console.log(token);
  }

  return (
    <div className="App">
      <div className="flex items-center h-screen bg-[#ADA2FF]">
        <Login />
      </div>
      {/* <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <button onClick={handleLogin}>
        Login
      </button> */}
    </div>
  )
}