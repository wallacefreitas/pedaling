import { Server, ServerCredentials, loadPackageDefinition } from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { listAllUsers } from './controller/list-all-users'
import { createUser } from './controller/create-user'

const PROTO_PATH = './proto/pedaling.proto'

function main() {
  const packageDefinition = protoLoader.loadSync(
    PROTO_PATH, 
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
  )

  const pedalingProto = loadPackageDefinition(packageDefinition);
  const server = new Server()

  server.addService(pedalingProto.PedalingService.service, {
    listAllUsers,
    createUser,
  })

  server.bindAsync(
    "0.0.0.0:50051",
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) throw error;
      
      console.log("Server running at http://localhost:" + port);
      server.start();
    }
  );
}

main();