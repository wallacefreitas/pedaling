import Card from "../../components/Card";
import { useUserStore } from "../../store/useUserStore";

export default function Home() {
  const { user } = useUserStore();

  return (
    <div className="flex w-full border-2 border-green-500">
      <section className="flex gap-6 w-full">
        <Card active />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  )
}