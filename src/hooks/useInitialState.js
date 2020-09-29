import { useState, useEffect } from 'react';

/*
 * Uses the inistialState from the localserver mountet
 */
const useInitialState = (API) => {
  /*    ReactHook that we use create a local Variable to a fetch to the API    */
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [], state: false });
  /*    ReackHook  that we use to fetch info from the api once the component is rendered    */
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos({ ...videos, ...data, state: true }));
  }, []);
  return videos;
};

export default useInitialState;
