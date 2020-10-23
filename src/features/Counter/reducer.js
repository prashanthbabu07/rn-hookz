import { AX_INCREMENT_COUNTER, AX_DECREMENT_COUNTER } from './constants';


const initialState = {
	counter: 0
}

const counterReducer = (state = initialState, action) =>
{
	switch (action.type)
	{
		case AX_INCREMENT_COUNTER:
			return {
				counter: state.counter + 1
			}
		case AX_DECREMENT_COUNTER:
			return {
				counter: state.counter - 1
			}
		default:
			return state;
	}
}

export default counterReducer;