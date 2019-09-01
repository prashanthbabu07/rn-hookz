import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions/Counter';

const counterReducer = (state = 0, action) =>
{
    switch (action.type)
    {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;