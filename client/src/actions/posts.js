// now have to make use of the index.js file in api
import * as api from '../api' // import everything from actions as api

// Action creators
export const getPost = () => async (dispatch) => {
   try {
      const { data } = await api.fetchPosts()   // getting repsonse from api, in repsonse we always have data object we return from backjend. Then we get data, data represetns the post.
      dispatch({ type: 'FETCH_ALL', payload: data });   // type is the property, payload is the data where we store all of our posts
   } catch (error) {
      console.log(error.message)
   }
}
