const NODE_API = 'https://web-dev-node-ayush-2.herokuapp.com';
const TWEET_API = NODE_API + '/api/tweets';

export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            })
        );

export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));

export const likeTweet = (dispatch, tweet, liked) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT'
    }).then(response =>
            dispatch({
                type: 'like-tweet',
                tweet, liked
            }));
