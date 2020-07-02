const sqlite3 =  require('sqlite3');
const  sqlite  =  require('sqlite'); 
 
// this is a top-level await 
(async () => {
    // open the database
    const db = await sqlite.open({
      filename: './mydb.sqlite',
      driver: sqlite3.Database
    });
    //await db.migrate({force: "last"})

    await db.exec('CREATE TABLE IF NOT EXISTS Person (id INTEGER PRIMARY KEY,name TEXT,email TEXT)');
    await db.exec('CREATE TABLE IF NOT EXISTS Vehicle (id INTEGER PRIMARY KEY,brand TEXT,model TEXT, ownerId INTEGER REFERENCES Person(id))');


    await db.exec('INSERT INTO Person(name,email) values ("francis","f@f.com")');
    await db.exec('INSERT INTO Person(name,email) values ("leena","l@f.com")');
    await db.exec('INSERT INTO Person(name,email) values ("jayden","j@f.com")');
    await db.exec('INSERT INTO Person(name,email) values ("ethan","e@f.com")');
    
    await db.exec('INSERT INTO Vehicle(brand,model,ownerId) values ("audi","rx1",1)');
    await db.exec('INSERT INTO Vehicle(brand,model,ownerId) values ("audi","rx2",2)');
    await db.exec('INSERT INTO Vehicle(brand,model,ownerId) values ("audi","rx3",3)');
    await db.exec('INSERT INTO Vehicle(brand,model,ownerId) values ("audi","rx4",4)');
    

    const people = await db.all('SELECT * FROM Person')
    console.log('ALL PEOPLE', people);

})()