interface CardProps {
  active?: boolean
}

export default function Card(props: CardProps) {
  return (
    <div className={`flex border-2 ${props.active ? "border-dashed": ""} dark:bg-[#22222E] border-orange-500 w-52 h-52 rounded-2xl`}>
      asasasas
    </div>
  )
}