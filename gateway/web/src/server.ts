import { Server, ServerCredentials, loadPackageDefinition } from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import http from 'node:http'

const PROTO_PATH = 'users.proto'

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

  const userProto = loadPackageDefinition(packageDefinition);
  const server = new Server()
  const users = [
    { id: '1', name: 'User 1', email: 'user1@email.com' }
  ]

  server.addService(userProto.UserService.service, {
    listAllUsers: async (call: any, callback: any) => {
      http.get('http://localhost:3001/users', (res) => {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            callback(null, { users: parsedData })
            console.log(parsedData);
          } catch (e) {
            console.error('error');
          }
        });
      })

      
    }
  })

  server.bindAsync(
    "0.0.0.0:50051",
    ServerCredentials.createInsecure(),
    (error, port) => {
      console.log("Server running at http://localhost:50051");
      server.start();
    }
  );
}

main();