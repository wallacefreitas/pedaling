import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { useUserStore } from "../../store/useUserStore";
import image from "../../assets/images/cover.avif"

interface LoginData {
  username: string;
  password: string
}

export default function Login() {
  const [data, setData] = useState({} as LoginData);
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const login = useFetch('http://localhost:3001/auth', {
    method: "POST",
    body: data
  })

  async function handleSignIn(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if( data.username !== "" && data.password !== "" ) {
      const response = await login();

      if(response?.token) {
        setUser({
          username: "admin",
          admin: true,
          token: response?.token
        });
        
        return navigate("/")
      }
    }
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;

    setData({...data, [name]: value})
  }

  return (
    <div className="flex items-center h-screen bg-[#ADA2FF]">
      <div className="flex flex-row mx-auto container h-[55%] w-[65%] shadow-lg rounded-2xl">
        <div className="flex items-center w-full bg-[#ECC9EE] rounded-l-2xl">
          <img src={image} className="mx-auto" />
        </div>
        <div className="bg-[#F5F6FB] w-[80%] text-[#353536] px-14 rounded-r-2xl">
          <div className="flex flex-col items-center h-full">
            <div className="flex flex-col items-center justify-end w-full h-[25%] space-y-2">
              <h2 className="text-2xl font-extrabold">Sign In</h2>
              <h3 className="text-xs font-bold">
                Don't have an account? 
                <span className="px-1 underline cursor-pointer">Sign up</span>
              </h3>
            </div>
            
            <form className="flex flex-col w-full py-6 space-y-5" onSubmit={(evt) => handleSignIn(evt) }>
              <div className="flex flex-col">
                <label className="text-xs font-bold mb-1" htmlFor="">
                  Username
                </label>
                <input 
                  id="username"
                  name="username"
                  type="text" 
                  className="border border-[#E5E6E8] h-10 rounded bg-transparent outline-none" 
                  onChange={(evt) => handleChange(evt) }
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-xs font-bold mb-1" htmlFor="">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password" 
                  className="border border-[#E5E6E8] h-10 rounded bg-transparent outline-none" 
                  onChange={(evt) => handleChange(evt) }
                />
              </div>

              <span className="text-xs font-bold underline cursor-pointer w-max">
                Forget your password
              </span>

              <button
                className="font-bold text-white bg-[#9384D1] py-3 rounded hover:border-pink-400 hover:transition-opacity"
              >
                Sign In
              </button>
            </form>
            <div className="flex w-full gap-2">
              <button className="flex-1 border-2 p-4 rounded-lg">
                Google
              </button>
              <button className="flex-1 border-2 p-4 rounded-lg">
                Google
              </button>
              <button className="flex-1 border-2 p-4 rounded-lg">
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}