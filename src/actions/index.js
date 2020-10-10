/**
 * Action used to setFavorites in CarouselItems
 * @param {*} payload info that we are going to transfer to the reducer
 */
export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

/**
 * Action used to delete from favorites in CarouselItems
 * @param {*} payload
 */
export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

/**
 * Action used to  request a Login in Login
 * @param {*} payload
 */
export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

/**
 * Action used to  request a Logout in Login
 * @param {*} payload
 */
export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

/**
 * Action used to register the user in Register
 * @param {*} payload
 */
export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

/**
 * Action used to  assing Playing to the db
 * @param {*} payload
 */
export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
