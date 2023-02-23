import http from 'node:http'

export async function listAllUsers(_: any, callback: Function): Promise<void> {
  http.get('http://localhost:3001/users', async (res) => {
    let data = '';

    res.setEncoding('utf8');
    res.on('data', (chunk) => { data += chunk });
    res.on('end', () => {
      try {
        callback(null, { 
          users: JSON.parse(data) 
        })
      } catch (e) {
        console.error('error');
      }
    });
  })
}