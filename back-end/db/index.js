const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function main() {
  console.log("Running SQL seed...")
  try {
    const db = await sqlite.open({ filename: './weathersafe.sqlite', driver: sqlite3.Database });

    await db.run('drop table if exists notifications');
    await db.run('drop table if exists events');

    await db.run('create table if not exists notifications ( \
      id integer primary key, \
      content text not null, \
      kind integer \
    )');

    await db.run('create table if not exists events ( \
      id integer primary key, \
      description text not null, \
      kind integer, \
      level integer, \
      latitude real, \
      longitude real \
    )');    

    await db.run('delete from notifications');

    await db.run('insert into notifications (content, kind) values (?, ?)', ['Tempestade severa durante as próximas 2 horas.', 1]);
    await db.run('insert into notifications (content, kind) values (?, ?)', ['Risco de deslizamentos', 3]);
    await db.run('insert into notifications (content, kind) values (?, ?)', ['120ml de chuva acumulada nas últimas 24 horas', 2]);
    await db.run('insert into notifications (content, kind) values (?, ?)', ['Áreas de alagamentos nas proximidades', 4]);
    await db.run('insert into notifications (content, kind) values (?, ?)', ['100ml de chuva acumulada nas últimas 20 horas', 2]);

    await db.close();
  } catch (error) {
    console.log(error);
    return { error: error };
  }
  console.log("SQL seed is complete!");
}

main();
