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

module.exports = problem7;
