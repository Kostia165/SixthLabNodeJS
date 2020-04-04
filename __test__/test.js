require('mysql2/node_modules/iconv-lite').encodingExists('foo');
const serv = require('../proxy/services/db_service');
const fct = require('../proxy/factory-girl');

//first test
test('check on method on adding to db', async() => {
    await serv.toClearDatabase();
    await serv.toCreateRecord(['2010-03-5', '/uniq', 'HTTP 200 OK']);
    var s1 = await serv.toGetRecords(1);
    expect(s1[0]['id']).toBe(1);
});



test('to check factory: add 6 records', async() => {
    await serv.toClearDatabase();
    await fct.createRecords(3);
    var s1 = await serv.toGetRecords(10);
    fct.closeFactory();
    expect(s1.length).toBe(3);
});
