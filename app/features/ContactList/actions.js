/**
 * @format
 * @flow
 */

import Contacts from "react-native-contacts";
import { PermissionsAndroid, Platform } from 'react-native';
import { AX_CONTACTS_FETCHED, AX_CONTACTS_FETCHING } from "./constants";

const readPhoneContactsiOS = callback =>
{
    Contacts.getAll((err, contacts) =>
    {
        if (err)
        {
            console.log("error--->", err);
            // throw err;
        }
        console.log("Contacts", contacts);
        callback(contacts);
    });
}

const readPhoneContactsAndroid = callback =>
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
                    console.log("error--->", err);
                }
                else
                {
                    console.log("Contacts", contacts);
                    callback(contacts);
                }
            });
        });
}

export function readPhoneContacts()
{
    console.log("readPhoneContacts-->")
    return dispatch => 
    {
        // dispatch({
        //     type: AX_CONTACTS_FETCHING
        // });

        const cb = contacts => 
        {
            dispatch({
                type: AX_CONTACTS_FETCHED,
                payload: contacts
            })
        }

        if (Platform.OS === "ios")
        {
            readPhoneContactsiOS(cb);
        }
        else
        {
            readPhoneContactsAndroid(cb);
        }
    }
}