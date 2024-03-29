/**
 * UserTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {LikeResponse} from "./LikeResponse";
import {SingleTweet} from "./SingleTweet";
import {TweetCollectionResponse} from "./TweetCollectionResponse";

export class UserTag extends TagAbstract {
    /**
     * @returns {Promise<TweetCollectionResponse>}
     * @throws {ClientException}
     */
    public async getTimeline(userId: string, startTime?: string, endTime?: string, sinceId?: string, untilId?: string, exclude?: string, expansions?: string, maxResults?: number, paginationToken?: string, mediaFields?: string, placeFields?: string, pollFields?: string, tweetFields?: string, userFields?: string): Promise<TweetCollectionResponse> {
        const url = this.parser.url('/2/users/:user_id/timelines/reverse_chronological', {
            'user_id': userId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'start_time': startTime,
                'end_time': endTime,
                'since_id': sinceId,
                'until_id': untilId,
                'exclude': exclude,
                'expansions': expansions,
                'max_results': maxResults,
                'pagination_token': paginationToken,
                'media.fields': mediaFields,
                'place.fields': placeFields,
                'poll.fields': pollFields,
                'tweet.fields': tweetFields,
                'user.fields': userFields,
            }),
        };

        try {
            const response = await this.httpClient.request<TweetCollectionResponse>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Tweets liked by a user
     *
     * @returns {Promise<TweetCollectionResponse>}
     * @throws {ClientException}
     */
    public async getLikedTweets(userId: string, expansions?: string, maxResults?: number, paginationToken?: string, mediaFields?: string, placeFields?: string, pollFields?: string, tweetFields?: string, userFields?: string): Promise<TweetCollectionResponse> {
        const url = this.parser.url('/2/users/:user_id/liked_tweets', {
            'user_id': userId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'expansions': expansions,
                'max_results': maxResults,
                'pagination_token': paginationToken,
                'media.fields': mediaFields,
                'place.fields': placeFields,
                'poll.fields': pollFields,
                'tweet.fields': tweetFields,
                'user.fields': userFields,
            }),
        };

        try {
            const response = await this.httpClient.request<TweetCollectionResponse>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<LikeResponse>}
     * @throws {ClientException}
     */
    public async removeLike(userId: string, tweetId: string): Promise<LikeResponse> {
        const url = this.parser.url('/2/users/:user_id/likes/:tweet_id', {
            'user_id': userId,
            'tweet_id': tweetId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<LikeResponse>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<LikeResponse>}
     * @throws {ClientException}
     */
    public async createLike(userId: string, payload: SingleTweet): Promise<LikeResponse> {
        const url = this.parser.url('/2/users/:user_id/likes', {
            'user_id': userId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }),
            data: payload
        };

        try {
            const response = await this.httpClient.request<LikeResponse>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
