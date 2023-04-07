import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function user() {
  await prisma.user.deleteMany()
  await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@email.com",
      createdAt: new Date('2022-12-31T03:00:00.000')
    }
  })
}

async function pedal() {
  await prisma.pedal.deleteMany()
  await prisma.pedal.create({
    data: {
      name: "Pedaling Test",
      startDate: new Date('2023-05-30T03:00:00.000'),
      startDateRegistration: new Date('2023-05-20T03:00:00.000'),
      endDateRegistration: new Date('2023-05-25T03:00:00.000'),
      additionalInformation: '',
      startPlace: 'Roma',
      participantsLimit: 10
    }
  })
}

async function main() {
  Promise.all([
    user(),
    pedal(),
  ])
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })