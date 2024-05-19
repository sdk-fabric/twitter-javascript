/**
 * TweetTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Fields} from "./Fields";
import {HideReply} from "./HideReply";
import {HideReplyResponse} from "./HideReplyResponse";
import {Tweet} from "./Tweet";
import {TweetCollection} from "./TweetCollection";
import {TweetCreateResponse} from "./TweetCreateResponse";
import {TweetDeleteResponse} from "./TweetDeleteResponse";
import {TweetEntity} from "./TweetEntity";
import {UserCollection} from "./UserCollection";

export class TweetTag extends TagAbstract {
    /**
     * Returns a variety of information about the Tweet specified by the requested ID or list of IDs.
     *
     * @returns {Promise<TweetCollection>}
     * @throws {ClientException}
     */
    public async getAll(ids?: string, expansions?: string, fields?: Fields): Promise<TweetCollection> {
        const url = this.parser.url('/2/tweets', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'ids': ids,
                'expansions': expansions,
                'fields': fields,
            }, [
                'fields',
            ]),
        };

        try {
            const response = await this.httpClient.request<TweetCollection>(params);
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
     * Returns a variety of information about a single Tweet specified by the requested ID.
     *
     * @returns {Promise<TweetEntity>}
     * @throws {ClientException}
     */
    public async get(tweetId: string, expansions?: string, fields?: Fields): Promise<TweetEntity> {
        const url = this.parser.url('/2/tweets/:tweet_id', {
            'tweet_id': tweetId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'expansions': expansions,
                'fields': fields,
            }, [
                'fields',
            ]),
        };

        try {
            const response = await this.httpClient.request<TweetEntity>(params);
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
     * Creates a Tweet on behalf of an authenticated user.
     *
     * @returns {Promise<TweetCreateResponse>}
     * @throws {ClientException}
     */
    public async create(payload: Tweet): Promise<TweetCreateResponse> {
        const url = this.parser.url('/2/tweets', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<TweetCreateResponse>(params);
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
     * Allows a user or authenticated user ID to delete a Tweet.
     *
     * @returns {Promise<TweetDeleteResponse>}
     * @throws {ClientException}
     */
    public async delete(tweetId: string): Promise<TweetDeleteResponse> {
        const url = this.parser.url('/2/tweets/:tweet_id', {
            'tweet_id': tweetId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<TweetDeleteResponse>(params);
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
     * Hides or unhides a reply to a Tweet.
     *
     * @returns {Promise<HideReplyResponse>}
     * @throws {ClientException}
     */
    public async hideReply(tweetId: string, payload: HideReply): Promise<HideReplyResponse> {
        const url = this.parser.url('/2/tweets/:tweet_id/hidden', {
            'tweet_id': tweetId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<HideReplyResponse>(params);
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
     * Allows you to get information about a Tweet’s liking users.
     *
     * @returns {Promise<UserCollection>}
     * @throws {ClientException}
     */
    public async getLikingUsers(tweetId: string, expansions?: string, maxResults?: number, paginationToken?: string): Promise<UserCollection> {
        const url = this.parser.url('/2/tweets/:tweet_id/liking_users', {
            'tweet_id': tweetId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'expansions': expansions,
                'max_results': maxResults,
                'pagination_token': paginationToken,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<UserCollection>(params);
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
