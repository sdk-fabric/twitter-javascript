/**
 * TweetTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Tweet} from "./Tweet";
import {TweetCollectionResponse} from "./TweetCollectionResponse";
import {TweetCreateResponse} from "./TweetCreateResponse";
import {TweetDeleteResponse} from "./TweetDeleteResponse";
import {TweetEntityResponse} from "./TweetEntityResponse";

export class TweetTag extends TagAbstract {
    /**
     * Returns a variety of information about the Tweet specified by the requested ID or list of IDs.
     *
     * @returns {Promise<TweetCollectionResponse>}
     * @throws {ClientException}
     */
    public async getAll(ids?: string, expansions?: string, mediaFields?: string, placeFields?: string, pollFields?: string, tweetFields?: string, userFields?: string): Promise<TweetCollectionResponse> {
        const url = this.parser.url('/2/tweets', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'ids': ids,
                'expansions': expansions,
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
     * Returns a variety of information about a single Tweet specified by the requested ID.
     *
     * @returns {Promise<TweetEntityResponse>}
     * @throws {ClientException}
     */
    public async get(id: string, expansions?: string, mediaFields?: string, placeFields?: string, pollFields?: string, tweetFields?: string, userFields?: string): Promise<TweetEntityResponse> {
        const url = this.parser.url('/2/tweets/:id', {
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'expansions': expansions,
                'media.fields': mediaFields,
                'place.fields': placeFields,
                'poll.fields': pollFields,
                'tweet.fields': tweetFields,
                'user.fields': userFields,
            }),
        };

        try {
            const response = await this.httpClient.request<TweetEntityResponse>(params);
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
            }),
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
    public async delete(id: string): Promise<TweetDeleteResponse> {
        const url = this.parser.url('/2/tweets/:id', {
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }),
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


}