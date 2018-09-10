/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from "immutable";
import {} from "./constants";

const initialState = fromJS({
  topics: [
    {
      name: "libraries",
      description: "Links to useful open source libraries"
    },
    {
      name: "apps",
      description: "Links to new and exciting apps"
    },
    {
      name: "news",
      description: "links to programming related news articles"
    }
  ]
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default navigationContainerReducer;
