/**
 * @format
 * @flow
 */

import Contacts from "react-native-contacts";
import { PermissionsAndroid, Platform } from 'react-native';

const readPhoneContactsiOS = () =>
{
    Contacts.getAll((err, contacts) =>
    {
        if (err)
        {
            throw err;
        }
        console.log("Contacts", contacts);
    });
}

const readPhoneContactsAndroid = () =>
{
    PermissionsAndroid
        .request(
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
                }
                else
                {
                    console.log("Contacts", contacts);
                }
            });
        });
}

export function readPhoneContacts()
{
    return dispatch => 
    {
        if (Platform.OS === "ios")
        {
            readPhoneContactsiOS();
        }
        else
        {
            readPhoneContactsAndroid();
        }
    }
}