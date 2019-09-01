import { TOGGLE } from '../components/CounterActions';

const visibleReducer = (state = false, action) => 
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