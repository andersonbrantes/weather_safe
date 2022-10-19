const dbConfig = require('../config/database');

exports.getEvents = async function() {
  const db = await dbConfig.sqlite.open(dbConfig.dbConfig);
  const rows = await db.all('select * from events');
  db.close();
  return rows;
}

exports.saveEvent = async function(event) {
  const db = await dbConfig.sqlite.open(dbConfig.dbConfig);
  let newEvent = await db.run('insert into events \
  (description, type, level, latitude, longitude) \
  values (?, ?, ?, ?, ?)', [event.description, parseInt(event.type), event.level, event.latitude, event.longitude]);
  db.close();
  return newEvent;
}

exports.deleteEvent = async function(id) {
  const db = await dbConfig.sqlite.open(dbConfig.dbConfig);
  await db.run('delete from events where id = ?', id);
  db.close();
}