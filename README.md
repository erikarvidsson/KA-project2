This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


____________________________________________________________________________________________________________________________

### Code Review by Isac Larsson

- The .env file isn't properly written to your .gitignore which makes all the private keys and client_ids reachable for everyone
- Some imports are unused
- Audio file is 29 MB big, try to find another way to play it 
- Remember to make comments on functions, different components and so on
- There are a lot of Route components in app which generates the pages, try re-using pages with different components or content. For example you have one page for login and one page for signup, these could be made in to one page
- Explain what your getData.js function does with soundcloud and youtube
- Even though you're using styled-components you could've put the styling in a seperate file for easier reading and not make the text so long
- Be consistent with varaibles naming, for example when you use useState: playButton, setPlaybutton. Button in the second word should be uppercase aswell
- For better responsive design do not use pixels, use % or other alternatives instead. (I understand the usage of pixels because of the amount of time though)
- Look over the naming of components, there is one named Category and another one name Category 2, this could be easy for you to understand but not for someone who just go through your code
- Remove unused pages and components like test page and Test component
- If you are naming your variables in English make it consistent and don't use both Swedish and English
- Make components that you can re-use, for example in your Form and SignupForm components you could've made components for input, button and label instead of writing all the code and text in those two components. 
- Use "alt" attribute for all images for better understanding if the image by some reason couldn't load
- In your notification page you have an useState named "friends" which is never set to something else than the initial value. Why are you using useState?
- Even though it wouldn't be an useState in notification page it is still a pretty large array, could it be written in a seperate json file instead to make the code cleaner?
- Your fonts are in the public/assets/fonts folder but also in the src/assets/fonts folder, do you need to have them in both?
- Update the README file with your own text and gif to make it more personal and fun, so it doesn't look like just another React App
- Remove unnecessary files such as index.css and app.css which comes with the Create React App package
- Add the right Title and icon to index.html
- Update the manifest.json with the right icons. 
### Code Review by Mikael Ravantti

[App.js](https://github.com/erikarvidsson/KA-project2/blob/master/src/App.js#13) - Remember to use english names. e.g. "Account".
[KontoPage](https://github.com/erikarvidsson/KA-project2/blob/master/src/components/KontoPage/index.js) - Same goes here with naming, would be better to have something like AccountPage.
[Category](https://github.com/erikarvidsson/KA-project2/blob/master/src/components/Category/index.js), [Category2](https://github.com/erikarvidsson/KA-project2/blob/master/src/components/Category2/index.js) - Both components seems to share alot of the styling used. Could be named something else? Looks like duplicates at first glance.
[Line](https://github.com/erikarvidsson/KA-project2/blob/master/src/components/Line/index.js), [Line2](https://github.com/erikarvidsson/KA-project2/blob/master/src/components/Line2/index.js) - Both are identical, except for the width. Could be reuse the same element and change the size depending on where you use it.
[ProfileIcon](https://github.com/erikarvidsson/KA-project2/blob/master/src/components/ProfileIcon/index.js), [ProfileIcon2](https://github.com/erikarvidsson/KA-project2/blob/master/src/components/ProfileIcon2/index.js) - Same thing here as Line and Line2, identical except for the margin-top.
[test.js](https://github.com/erikarvidsson/KA-project2/blob/master/src/view/test.js) - Remove test page.
