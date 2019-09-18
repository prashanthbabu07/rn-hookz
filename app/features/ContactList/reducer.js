import { AX_CONTACTS_FETCHED, AX_CONTACT_ADD, AX_CONTACTS_FETCHING } from "./constants";

/**
 * @format
 * @flow
 */



type Contact = {
    recordID: string,
    company: string,
    givenName: string,
    lastReceivedMessage: number
}

let contactListById = {};
let contactListedIds = [];

const contactReducer = (state, action) =>
{
    switch (action.type)
    {
        case AX_CONTACT_ADD:
            return {
                ...state,
                lastReceivedMessage: new Date().getTime()
            }
            return;
    }
}

const contactListByIdReducer = (state = contactListById, action, { listedIds }) =>
{
    switch (action.type)
    {
        case AX_CONTACTS_FETCHED:
            let contacts = action.payload;
            let fetchedContacts = {};
            Array.from(action.payload).forEach(c =>
            {
                fetchedContacts[`c-${c.recordID}`] = contactReducer(c, { type: AX_CONTACT_ADD })
            });
            return {
                ...state,
                ...fetchedContacts
            };
        default:
            return state;

    }
}

const contactListedIdsReducer = (state = contactListedIds, action, { byId }) =>
{
    switch (action.type)
    {
        case AX_CONTACTS_FETCHED:
            let contacts = action.payload;
            let ids = contacts.map(c => c.recordID);
            return [...state, ...ids];
        default:
            return state;
    }
}

const initialState = {
    byId: contactListById,
    listedIds: contactListedIds,
    fetching: true
};
const constactListReducer = (state = initialState, action) =>
{
    console.log("actions--->", action.type);
    switch (action.type)
    {
        case AX_CONTACTS_FETCHING:
            return {
                ...state,
                fetching: true
            };
        case AX_CONTACTS_FETCHED:
            return {
                byId: contactListByIdReducer(state.byId, action, state),
                listedIds: contactListedIdsReducer(state.listedIds, action, state),
                // ...state,
                fetching: false
            }
        default:
            return state;
        // return {
        //     byId: contactListByIdReducer(state.byId, action, state),
        //     listedIds: contactListedIdsReducer(state.listedIds, action, state),
        //     fetching: true
        // };
    }

}

export default constactListReducer;