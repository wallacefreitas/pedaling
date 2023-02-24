import http from 'node:http'
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'

export async function listAllUsers(_: ServerUnaryCall<any, any>, callback: sendUnaryData<any>): Promise<void> {
  http.get('http://localhost:3001/users', async (res) => {
    let data = '';

    res.setEncoding('utf8');
    res.on('data', (chunk) => { data += chunk });
    res.on('end', () => {
      try {
        callback(null, { users: JSON.parse(data) })
      } catch (e) {
        console.error('error');
      }
    });
  })
}