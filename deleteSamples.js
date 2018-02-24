/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */
const sampleDeleteUrl = 'https://refocus.internal.salesforce.com/v1/samples';
const rp = require('request-promise');
const promiseArr = [];
const token = process.env.TOKEN;
for (let i = 101; i<=150; i++) {
  const options = {
    method: 'DELETE',
    uri: sampleDeleteUrl + `/Salesforce.MarketingCloud.Stack1.${i}|WS-1`,
    resolveWithFullResponse: false,
    headers: {
      Authorization: token,
    },
  };
  promiseArr.push(rp(options));
}
Promise.all(promiseArr)
.then((results) => {
  results.forEach((result) => {
    console.log('DELETE performed with status code', result.status);
  });
})
.catch((err) => {
  console.log('error happened', err.error);
});
