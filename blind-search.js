/**
 * Blind Search
 * 
 * @param {Function} Action Method of the actions
 * @param {String} InitialState Initial state
 * @param {Object} EndStateSet End state set
 * @returns {Array} Path traveled
 */
function BlindSearch(Action, InitialState, EndStateSet, searchType='wide') {
  let SetOfPastStates = [];
  let FollowingStateSet = [Object.keys(InitialState).shift()];

  while(FollowingStateSet.length > 0) {
    let CurrentState = FollowingStateSet.shift();

    if (EndStateSet[CurrentState]) {
      SetOfPastStates.push(CurrentState);
      return SetOfPastStates;
    }

    SetOfPastStates.push(CurrentState);

    FollowingStateSet = searchType === 'deep' ? [
      ...Action(CurrentState).filter((state) => !FollowingStateSet.includes(state)),
      ...FollowingStateSet
    ] : [
      ...FollowingStateSet,
      ...Action(CurrentState).filter((state) => !FollowingStateSet.includes(state))
    ] ;
  }
}
