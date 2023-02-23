import { Server, ServerCredentials, loadPackageDefinition } from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import http from 'node:http'
import { listAllUsers } from './controllers/list-all-users'

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
    // listAllUsers: async (_: any, callback: Function) => {
    //   http.get('http://localhost:3001/users', (res) => {
    //     res.setEncoding('utf8');
    //     let rawData = '';
    //     res.on('data', (chunk) => { rawData += chunk; });
    //     res.on('end', () => {
    //       try {
    //         const parsedData = JSON.parse(rawData);
    //         callback(null, { users: parsedData })
    //       } catch (e) {
    //         console.error('error');
    //       }
    //     });
    //   })
    // }
    listAllUsers
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