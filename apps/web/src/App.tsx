import Layout from "./layout";
import Home from "./pages/home";
import Login from "./pages/login";
import { useUserStore } from "./store/useUserStore";

export default function App() {
  const { user } = useUserStore();
  
  function HomePage() {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }

  return (
    <div className="App">
      { !user.token ? <Login /> : <HomePage /> }
    </div>
  )
}