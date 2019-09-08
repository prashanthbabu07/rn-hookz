import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);


// const SQLiteDatabase = async () => 
// {
//     let db = await SQLite.SQLite.openDatabase({
//         name: 'hookz.sqlite3',
//         location: 'default',
//         createFromLocation: 1, //'~www/hookz.db',
//     });
// }

const SQLiteDatabase = SQLite.openDatabase({
    name: 'hookz.sqlite3',
    location: 'default',
    createFromLocation: 1, //'~www/hookz.db',
})
    .then(database => database)

export default SQLiteDatabase;