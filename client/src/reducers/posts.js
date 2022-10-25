// import { CardActionArea } from "@material-ui/core"

// reducer is a function that accepts the state and action, based on the action type then we want to do some logic


export default (posts = [], action) => { // state/posts cannot be empty
  switch (action.type) {
    case 'FETCH_ALL': // fetching all the posts
      return action.payload;
    case 'CREATE':
      return posts;
      default:
        return posts;
  }

}