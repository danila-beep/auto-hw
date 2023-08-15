const initState = {
  themeId: 1,
};

export const themeReducer = (
  state: ThemeStateType = initState,
  action: ActionsType
): any => {
  // fix any

  switch (action.type) {
    case "SET_THEME_ID": {
        return {...state, themeId: action.id}
    }
    default:
      return state;
  }
};

export const changeThemeId = (id: number): ChangeThemeIdACType => ({
  type: "SET_THEME_ID",
  id,
}); // fix any

export type ThemeStateType = {
  themeId: number;
};

export type ChangeThemeIdACType = {
  type: "SET_THEME_ID";
  id: number;
};

export type ActionsType = ChangeThemeIdACType;
