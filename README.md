!navigation-menu-user-profile
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
=======
1. First, create a folder called services inside src and then create the
DataService.ts file inside it. 
2. Update our LeftMenu component so that it uses it. Create our Category type
 since we are using TypeScript. Create a new folder called model inside src. Then, create the
Category.ts file and add the source code to it.
3. Now, update the LeftMenu.tsx file. 

// create our state object called categories that contains our list of
// categories. Before we can load Category data, we need some default text, Left
// Menu.
const LeftMenu = () => {
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );
  //   Then, we have useEffect, where we make a call to our
  // getCategories function and get our Categories. Then, we use the ES6 map
  // function to convert our objects into JSX.
  useEffect(() => {
    getCategories()
      .then((categories: Array<Category>) => {
        const cats = categories.map((cat) => {
          return <li key={cat.id}>{cat.name}</li>;
        });
        setCategories(<ul className="category">{cats}</ul>);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Finally, in the returned JSX, we use the Categories state object in our UI.
  return IsMobileWidth() ? null : <div className="leftmenu">{categories}</div>;

