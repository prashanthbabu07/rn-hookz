import SQLite from 'react-native-sqlite-storage';
import SQLiteDatabase from './SQLiteServices';

const UserDefault = () =>
{
    const insert = (key, value) =>
    {
        return SQLiteDatabase
            .then(db =>
            {
                return db.executeSql('INSERT INTO user_default(key, value) VALUES (?, ?);', [key, value])
            });
    }

    const update = (key, value) => 
    {
        return SQLiteDatabase
            .then(db =>
            {
                return db.executeSql('UPDATE user_default SET value = ? WHERE key = ?;', [value, key])
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

    const set = async (key, value) => 
    {
        const existingValue = await get(key);
        return existingValue == undefined ? insert(key, value).then(result => result) : update(key, value).then(result => result);
    }

    const get = async key => 
    {
        return select(key).then(value => value);
    }

    return {
        set,
        get
    }
}

const userDefault = UserDefault();
export default userDefault;