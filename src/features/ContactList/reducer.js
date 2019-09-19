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

const STORE_SIZE = 1000;
for (let i = 0; i < STORE_SIZE; i++)
{
    let nextId = 'c-' + i
    contactListedIds.push(nextId)
    contactListById[nextId] = {
        givenName: 'Item ' + i,
        recordID: nextId,
        title: "title" + i,
    };
}

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
        case AX_CONTACT_ADD:
            return {
                [`c-${action.payload.recordID}`]: contactReducer(action.payload, action),
                ...state
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
        case AX_CONTACT_ADD:
            return [...state, action.payload.recordID];
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
        case AX_CONTACT_ADD:
            let payload = {
                givenName: `Contact ${state.listedIds.length}`,
                title: "something...",
                recordID: `cid-${state.listedIds.length}`
            }
            return {
                fetching: false,
                byId: contactListByIdReducer(state.byId, { type: action.type, payload }, state),
                listedIds: contactListedIdsReducer(state.listedIds, { type: action.type, payload }, state)
            };
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