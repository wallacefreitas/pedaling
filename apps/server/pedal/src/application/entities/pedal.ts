import { randomUUID } from 'node:crypto';
import { z, ZodError } from 'zod';

export interface PedalProps {
  id?: string
  name: string
  startDate: Date
  startDateRegistration: Date
  endDateRegistration: Date
  additionalInformation?: string | null
  startPlace: string
  participantsLimit?: number | null
}

export class Pedal {
  private props: PedalProps

  constructor(props: PedalProps) {
    const pedalSchema = z.object({
      id: z.string().uuid(),
      name: z.string().min(1),
      startDate: z.date(),
      startDateRegistration: z.date(),
      endDateRegistration: z.date(),
      additionalInformation: z.nullable(z.string()),
      startPlace: z.string(),
      participantsLimit: z.nullable(z.number())
    })

    if (!props.id) {
      props.id = randomUUID()
    }

    try {
      const pedal = pedalSchema.parse(props)
      this.props = pedal;

    } catch(err) {

      if (err instanceof ZodError) {
        err.errors.map(error => { throw new Error(error.message) } )
      }

      throw new Error("Unknown error")
    }
  }

  get id() {
    return this.props.id
  }

  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
  }

  get startDate() {
    return this.props.startDate
  }

  set startDate(startDate: Date) {
    this.props.startDate = startDate
  }

  get startDateRegistration() {
    return this.props.name
  }

  set startDateRegistration(name: string) {
    this.props.name = name
  }

  get endDateRegistration() {
    return this.props.name
  }

  set endDateRegistration(name: string) {
    this.props.name = name
  }

  get additionalInformation() {
    return this.props.additionalInformation || ''
  }

  set additionalInformation(additionalInformation: string) {
    this.props.additionalInformation = additionalInformation
  }

  get startPlace() {
    return this.props.startPlace
  }

  set startPlace(startPlace: string) {
    this.props.startPlace = startPlace
  }

  get participantsLimit() {
    return this.props.participantsLimit || 0
  }

  set participantsLimit(participantsLimit: number) {
    this.props.participantsLimit = participantsLimit
  }
}