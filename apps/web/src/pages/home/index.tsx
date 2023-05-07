import { useUserStore } from "../../store/useUserStore";

export default function Home() {
  const { user } = useUserStore();

  return (
    <div className="w-full border-2 border-green-500">
      {user.username}
    </div>
  )
}