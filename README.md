
# Pokemon App Description

This project was developed in response to the proposed challenge. It is an application made in React JS, with help of external API (https://pokeapi.com). 
The project is based on an application consisting of 3 screens:
 
1) All Pokemons
2) Favorite Pokemons
3) Pokemon Details

React-redux was used to have state control throughout the application.
For navigation between screens react-router-dom was used.
All requests are made in axios, and are all controlled by react-redux's Sagas.
In terms of pagination react-responsive-pagination was used for ease of implementation.

In more practical terms the application is based on 3 screens, in which we can visualize the different pokemons and add them as favorites, this functionality works based on the state of react-redux, where the storage of the information is done.In the project was not done much styling, using as base and help react-bootstrap, and for more detailed styling was then used styled-components where we can use pure CSS.
In most applications we always filter only the necessary elements using utils.js files available in all screen folders.

Translated with www.DeepL.com/Translator (free version)

## Paginate

Two types of paging are used. 

The paging in the pokeAPI part, I used the input parameters "offset" and "limit", to fetch 18 elements at a time, making the application respond faster to the user. This way the application will have a faster response to the user, so it won't fetch all the elements at once, since sometimes the user doesn't need all the elements and we would be wasting resources.

The pagination present in the favorite pokemons is an internal pagination that calculates the positions in which it needs to slice the original array.

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) to install packages.

```bash
yarn install
```

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) to start app.

```bash
yarn start
```

## Notes
As I talked to the person responsible for giving me the challenge, I didn't have much time because I currently work in parallel for a startup and this weekend (October 22/23), we had to go into production, which took a lot of my time.
That was one of the reasons why I couldn't add more features or do the component testing (which I only did once so I don't have much knowledge in testing). 
This is not an excuse, but it was more to give a context to the work done.

Thanks, João Jorge. 

## Contact
If you have any questions, feel free to contact by email: joaojorge.prog@gmail.com or by phone: +35914588596 