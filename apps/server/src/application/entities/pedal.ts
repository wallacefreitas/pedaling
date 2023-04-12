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
  participantsLimit?: number
}

export class Pedal {
  private props: PedalProps

  constructor(props: PedalProps) {
    const pedalSchema = z.object({
      id: z.string().uuid(),
      name: z.string().min(1),
      startDate: z.coerce.date(),
      startDateRegistration: z.coerce.date(),
      endDateRegistration: z.coerce.date(),
      additionalInformation: z.nullable(z.string()),
      startPlace: z.string(),
      participantsLimit: z.number().default(999)
    })

    if (!props.id) {
      props.id = randomUUID()
    }

    try {
      const pedal = pedalSchema.parse(props)
      
      this.validDataPedaling(props);
      this.props = pedal;

    } catch(err) {

      if (err instanceof ZodError) {
        err.errors.map(error => { throw new Error(error.message) } )
      }

      if (err instanceof Error) {
        throw new Error(err.message)
      }

      throw new Error("Unknown error")
    }
  }

  private validDataPedaling(props: PedalProps) {
    const { startDate, startDateRegistration, endDateRegistration } = props;

    if ( startDate <= startDateRegistration || startDate <= endDateRegistration ) {
      throw new Error('Invalid start date of the pedaling')
    }

    if ( startDateRegistration <= new Date() ) {
      throw new Error('Invalid start date registration')
    }

    if ( endDateRegistration < startDateRegistration ) {
      throw new Error('Invalid end date registration')
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
    return this.props.startDateRegistration
  }

  set startDateRegistration(startDateRegistration: Date) {
    this.props.startDateRegistration = startDateRegistration
  }

  get endDateRegistration() {
    return this.props.endDateRegistration
  }

  set endDateRegistration(endDateRegistration: Date) {
    this.props.endDateRegistration = endDateRegistration
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