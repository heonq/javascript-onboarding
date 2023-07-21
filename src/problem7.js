function problem7(user, friends, visitors) {}

const getFriendOfUser = (user, friends) => {
  let friendOfUser = [];
  friends.forEach((relationship) => {
    if (relationship.includes(user)) {
      mutualFriend.push(relationship[1 - relationship.indexOf(user)]);
    }
  });
  return friendOfUser;
};

const getMutualFriends = (friends, friendOfUser) => {
  let mutualFriend = [];
  friends.forEach(([A, B]) => {
    if (friendOfUser.includes(A) && friendOfUser.includes(B)) return;
    if (friendOfUser.includes(A)) return mutualFriend.push(B);
    if (friendOfUser.includes(B)) return mutualFriend.push(A);
  });
  return mutualFriend;
};

const getVisitorsNotFriend = (visitors, friendOfUser) => {
  return visitors.filter((visitor) => !friendOfUser.includes(visitor));
};

const calScore = (user, friendOfUser, visitorsNotFriend) => {
  const scoreMap = new Map();
  friendOfUser.forEach((friend) => {
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
