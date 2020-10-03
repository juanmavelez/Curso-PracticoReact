/**
 * describes what we are going to do with our favourites
 * @param {*} payload info that we are going to transfer to the reducer
 */
export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export default setFavorite;
