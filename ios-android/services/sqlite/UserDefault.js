import SQLite from 'react-native-sqlite-storage';
import SQLiteDatabase from './SQLiteServices';

const UserDefault = () =>
{
    // var dictionary = {};
    // SQLiteDatabase
    //     .then(db =>
    //     {
    //         return db.executeSql('SELECT * FROM user_default');
    //     })
    //     .then(([results]) =>
    //     {
    //         if (results === undefined)
    //         {
    //             return;
    //         }
    //         console.log('**********RESULTS**********', results.rows.length);
    //         const count = results.rows.length;
    //         for (let i = 0; i < count; i++)
    //         {
    //             const { key, value } = results.rows.item(i);
    //             dictionary[key] = value;
    //         }
    //     });

    const insert = (key, value) =>
    {
        SQLiteDatabase
            .then(db =>
            {
                return db.executeSql('INSERT INTO user_default(key, value) VALUES (?, ?);', [key, value])
            })
            .then(([results]) =>
            {
                console.log(results.rowsAffected);
            });
    }

    const update = (key, value) => 
    {
        SQLiteDatabase
            .then(db =>
            {
                return db.executeSql('UPDATE user_default SET value = ? WHERE key = ?;', [value, key])
            })
            .then(([results]) =>
            {
                console.log(results.rowsAffected);
            });
    }

    const select = (key) => 
    {
        return SQLiteDatabase
            .then(db =>
            {
                return db.executeSql('SELECT key, value FROM user_default WHERE key = ?;', [key])
            })
            .then(([results]) =>
            {
                if (results.rows.length == 0)
                {
                    return Promise.resolve(undefined);
                }
                const { key, value } = results.rows.item(0);
                return Promise.resolve(value);
            });
    }

    const set = (key, value) => 
    {
        select(key).then(dbValue => dbValue == undefined ? insert(key, value) : update(key, value));
    }

    const get = key => 
    {
        return select(key);
    }

    return {
        set,
        get
    }
}

const userDefault = UserDefault();
export default userDefault;