
# twitter-javascript

This [SDK](https://github.com/sdk-fabric/twitter-javascript) is managed by the [SDK Fabric](https://sdk-fabric.org/) project, a global infrastructure to
automatically generate SDKs for every API.

You can find more information about this SDK at [TypeHub](https://typehub.cloud/):
https://app.typehub.cloud/d/sdkfabric/twitter

## Usage

```typescript
const client = Client::build('[access_token]');

// Returns a variety of information about the Tweet specified by the requested ID or list of IDs.
const response = await client.tweet().getAll("ids", "expansions", null);

// Returns a variety of information about a single Tweet specified by the requested ID.
const response = await client.tweet().get("tweet_id", "expansions", null);

// Creates a Tweet on behalf of an authenticated user.
const response = await client.tweet().create(new Tweet());

// Allows a user or authenticated user ID to delete a Tweet.
const response = await client.tweet().delete("tweet_id");

// Hides or unhides a reply to a Tweet.
const response = await client.tweet().hideReply("tweet_id", new HideReply());

// Allows you to get information about a Tweet’s liking users.
const response = await client.tweet().getLikingUsers("tweet_id", "expansions", 1, "pagination_token");

// The Usage API in the Twitter API v2 allows developers to programmatically retrieve their project usage.
const response = await client.usage().getTweets();

// Returns a variety of information about one or more users specified by the requested IDs.
const response = await client.user().getAll("ids", "expansions", null);

// Returns a variety of information about a single user specified by the requested ID.
const response = await client.user().get("user_id", "expansions", null);

// Allows you to retrieve a collection of the most recent Tweets and Retweets posted by you and users you follow.
const response = await client.user().getTimeline("user_id", "exclude", "expansions", null, null);

// Tweets liked by a user.
const response = await client.user().getLikedTweets("user_id", "expansions", 1, "pagination_token", null);

// Allows a user or authenticated user ID to unlike a Tweet.
const response = await client.user().removeLike("user_id", "tweet_id");

// Causes the user ID identified in the path parameter to Like the target Tweet.
const response = await client.user().createLike("user_id", new Single_Tweet());

// Returns a variety of information about one or more users specified by their usernames.
const response = await client.user().findByName("usernames", "expansions", null);

// Returns information about an authorized user.
const response = await client.user().getMe("expansions", "fields");

// Allows you to get an authenticated user's 800 most recent bookmarked Tweets.
const response = await client.bookmark().getAll("user_id", "expansions", "pagination_token", null);

const response = await client.bookmark().create("user_id", new Single_Tweet());

const response = await client.bookmark().delete("user_id", "tweet_id");

const response = await client.search().getRecent("query", "sort_order", "expansions", null, null);

// Returns Quote Tweets for a Tweet specified by the requested Tweet ID.
const response = await client.quote().getAll("tweet_id", "exclude", "expansions", 1, "pagination_token", null);

// The Trends lookup endpoint allow developers to get the Trends for a location, specified using the where-on-earth id (WOEID).
const response = await client.trends().getByWoeid("woeid");

// Returns the Retweets for a given Tweet ID.
const response = await client.retweet().getAll("tweet_id", "expansions", 1, null);
```
