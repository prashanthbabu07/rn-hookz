import userDefault from "../../services/sqlite/defaults/UserDefault";
import { USER_ONBOARDED } from "../../services/sqlite/defaults/keys";

export const GET_USER_ONBOARDING_STATE = "GET_USER_ONBOARDING_STATE";
export const SET_USER_ONBOARDING_STATE = "SET_USER_ONBOARDING_STATE"

export function setUserOnboardedState(value)
{
    return {
        type: SET_USER_ONBOARDING_STATE,
        payload: {
            isOnboarded: value
        }
    };
}

export function getUserOnboardingState()
{
    return dispatch => 
    {
        userDefault.get(USER_ONBOARDED)
            .then(value =>
            {
                let onboardedState = value == undefined ? false : value == "true";
                dispatch(setUserOnboardedState(onboardedState));
            });
    }
}