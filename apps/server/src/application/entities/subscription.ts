import { z, ZodError } from 'zod';

export interface SubscriptionProps {
  rideId: string
  userId: string
  subscriptionDate: Date
}

export class Subscription {
  private props: SubscriptionProps

  constructor(props: SubscriptionProps) {
    const subscriptionSchema = z.object({
      rideId: z.string().nonempty(),
      userId: z.string().nonempty(),
      subscriptionDate: z.date()
    })

    try {
      const subscription = subscriptionSchema.parse(props)
      this.props = subscription;

    } catch(err) {

      if (err instanceof ZodError) {
        err.errors.map(error => { throw new Error(error.message) } )
      }

      throw new Error("Unknown error")
    }
  }

  get rideId() {
    return this.props.rideId
  }

  set rideId(rideId: string) {
    this.props.rideId = rideId
  }

  get userId() {
    return this.props.userId
  }

  set name(userId: string) {
    this.props.userId = userId
  }

  get subscriptionDate() {
    return this.props.subscriptionDate
  }

  set subscriptionDate(subscriptionDate: Date) {
    this.props.subscriptionDate = subscriptionDate
  }
}