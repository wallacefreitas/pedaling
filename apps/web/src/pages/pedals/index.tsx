import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch";

interface Pedal {
  id: string;
  name: string;
  participantsLimit: number;
  startPlace: string;
  additionalInformation?: string;
  startDate: string;
  startDateRegistration: string;
  endDataRegistration: string;
}

export default function Pedals() {
  const [pedals, setPedals] = useState<Pedal[]>([])
  const response = useFetch('http://localhost:3001/pedal', {
    method: "GET"
  })

  useEffect(() => {
    if(typeof response === "object")
      setPedals(response);
  }, [response])

  return (
    <div>
      <ul>
        {
          pedals.map((pedal, index) => (
            <li key={index}>
              {pedal.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}