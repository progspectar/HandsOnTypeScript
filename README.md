if !Userlogged show them login and register menus
else show them logout and UserProfile menus
the user's settings, as well as a list of posts that they have made.
==============================================
let's put this data into our
Redux store:
// create an action type called UserProfileSetType so that our
// UserProfileReducer can be distinguished from other reducers.
export const UserProfileSetType = "USER_PROFILE_SET";

// create a payload type called UserProfilePayload. This is the
// data that will be in our actions when they are dispatched later.
export interface UserProfilePayload {
id: string;
userName: string;
}

// create the UserProfileAction interface, which is of the action
// type. This is used to distinguish an action for UserProfiles from some other action type.
export interface UserProfileAction {
type: string;
payload: UserProfilePayload | null;
}

// our actual reducer, UserProfileReducer, which performs
// filtering based on our desired UserProfileSetType
export const UserProfileReducer = (
state: any = null,
action: UserProfileAction
): UserProfilePayload | null => {
switch (action.type) {
case UserProfileSetType:
return action.payload;
default:
return state;
}
};
===================================
Let's install Font Awesome
npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
