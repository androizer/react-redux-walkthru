import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
    allPosts: [],
    newPost: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                allPosts: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                newPost: action.payload
            }
        default:
            return state;
    }
}