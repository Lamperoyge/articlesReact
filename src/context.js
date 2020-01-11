import React from "react";
const ArticlesStateContext = React.createContext();
const ArticlesDispatchContext = React.createContext();
const favoritesLimit = 10;

const articlesReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      if (state.favorites.length < favoritesLimit) {
        const mergedState = state.favorites.concat(action.payload);
        const filteredArray = mergedState.filter(
          (item, index, self) => index === self.findIndex(i => i.id === item.id)
        );
        const newState = {
          favorites: filteredArray
        };

        localStorage.setItem("favorites", JSON.stringify(newState.favorites));
        return newState;
      } else return state;
    }
    case "delete": {
      const newState = {
        favorites: state.favorites.filter(el => el.id !== action.payload.id)
      };
      localStorage.setItem("favorites", JSON.stringify(newState.favorites));
      return newState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(articlesReducer, {
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
  });
  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
};

const useArticleState = () => {
  const context = React.useContext(ArticlesStateContext);
  return context;
};

const useArticleDispatch = () => {
  const context = React.useContext(ArticlesDispatchContext);
  return context;
};

export { ArticlesProvider, useArticleState, useArticleDispatch };
