export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let friend_id = action.id
      let filteredFriends = state.friends.filter(friend => friend.id !== friend_id)
      return {friends: filteredFriends}
    default:
      return state
  }
}

let state = { friends: [{name: 'Avi', hometown: 'NYC', id: 100}] }