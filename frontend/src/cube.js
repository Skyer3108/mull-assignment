import cubejs from '@cubejs-client/core';

const API_URL = 'http://localhost:4000/#/build?query={%22dimensions%22:[%22users.name%22],%22order%22:{%22users.count%22:%22desc%22},%22measures%22:[%22users.count%22]}';
const CUBEJS_TOKEN = '99475700c85c1e6ad3d073630e9731392f235f4514db946e757b150404ea9afda757ba71627ac6065ff7dac7b64df09c3171339e591e069ec82787a3a62a0c2f'; // Replace with your actual token

const cubeApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: API_URL,
});

export default cubeApi;