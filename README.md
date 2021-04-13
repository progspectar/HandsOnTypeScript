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

