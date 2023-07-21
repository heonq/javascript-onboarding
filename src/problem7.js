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

module.exports = problem7;
