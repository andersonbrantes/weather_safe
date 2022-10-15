const dbConfig = require('../config/database');

exports.getNotifications = async function() {
  const db = await dbConfig.sqlite.open(dbConfig.dbConfig);
  const rows = await db.all('select * from notifications');
  db.close();
  return rows;
}

exports.saveNotification = async function(notification) {
  const db = await dbConfig.sqlite.open(dbConfig.dbConfig);
  let newNotification = await db.run('insert into notifications (content, kind) values (?, ?)', [notification.content, notification.kind]);
  db.close();
  return newNotification;
}

exports.deleteNotification = async function(id) {
  const db = await dbConfig.sqlite.open(dbConfig.dbConfig);
  await db.run('delete from notifications where id = ?', id);
  db.close();
}
