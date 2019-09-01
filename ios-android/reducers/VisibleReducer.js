import { TOGGLE } from './actions/Signed';

const visibleReducer = (state = true, action) => 
{
    switch (action.type)
    {
        case TOGGLE:
            return !state;
        default:
            return state;
    }
}

export default visibleReducer;