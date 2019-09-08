import { TOGGLE, SET_USER_ONBOARDING_STATE, GET_USER_ONBOARDING_STATE } from './actions/UserOnboarding';

const userOnboardingState = {
    isLoading: true,
    isOnboarded: false
}

const userOnboardingReducer = (state = userOnboardingState, action) => 
{
    switch (action.type)
    {
        case SET_USER_ONBOARDING_STATE:
            return {
                ...state,
                isLoading: false,
                isOnboarded: action.payload.isOnboarded
            };
        case GET_USER_ONBOARDING_STATE:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
}

export default userOnboardingReducer;