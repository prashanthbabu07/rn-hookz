/**
 * @format
 * @flow
 */

import Contacts from "react-native-contacts";
import { PermissionsAndroid, Platform } from 'react-native';

const iosContacts = () =>
{
    Contacts.getAll((err, contacts) =>
    {
        if (err)
        {
            throw err;
        }
        console.log("Contacts", contacts.length);
    });
}

const androidContacts = () =>
{
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Contacts",
        message: "This app would like to view your contacts."
    })
        .then(() =>
        {
            Contacts.getAll((err, contacts) =>
            {
                if (err === 'denied')
                {
                    // error
                } else
                {
                    console.log("Contacts", contacts.length);
                }
            });
        });
}

export function readPhoneContacts()
{
    if (Platform.OS === "ios")
    {
        iosContacts();
    }
    else
    {
        androidContacts();
    }
}