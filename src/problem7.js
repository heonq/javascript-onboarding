function problem7(user, friends, visitors) {
  const friendsOfUser = getFriendsOfUser(user, friends);
  const mutualFriends = getMutualFriends(friends, friendsOfUser);
  const visitorsNotFriend = getVisitorsNotFriend(visitors, friendsOfUser);
  return calScore(user, mutualFriends, visitorsNotFriend);
}

const getFriendsOfUser = (user, friends) => {
  let friendsOfUser = [];
  friends.forEach((relationship) => {
    if (relationship.includes(user)) {
      friendsOfUser.push(relationship[1 - relationship.indexOf(user)]);
    }
  });
  return friendsOfUser;
};

const getMutualFriends = (friends, friendsOfUser) => {
  let mutualFriends = [];
  friends.forEach(([A, B]) => {
    if (friendsOfUser.includes(A) && friendsOfUser.includes(B)) return;
    if (friendsOfUser.includes(A)) return mutualFriends.push(B);
    if (friendsOfUser.includes(B)) return mutualFriends.push(A);
  });
  return mutualFriends;
};

const getVisitorsNotFriend = (visitors, friendsOfUser) => {
  return visitors.filter((visitor) => !friendsOfUser.includes(visitor));
};

const calScore = (user, mutualFriends, visitorsNotFriend) => {
  const scoreMap = new Map();
  mutualFriends.forEach((friend) => {
    if (scoreMap.has(friend))
      return scoreMap.set(friend, scoreMap.get(friend) + 10);
    scoreMap.set(friend, 10);
  });
  visitorsNotFriend.forEach((visitor) => {
    if (scoreMap.has(visitor))
      return scoreMap.set(visitor, scoreMap.get(visitor) + 1);
    scoreMap.set(visitor, 1);
  });
  scoreMap.delete(user);
  return [...scoreMap]
    .sort()
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0])
    .slice(0, 5);
};

module.exports = problem7;
