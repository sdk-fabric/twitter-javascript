/**
 * BookmarkTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {TweetCollectionResponse} from "./TweetCollectionResponse";

export class BookmarkTag extends TagAbstract {
    /**
     * Allows you to get an authenticated user&#039;s 800 most recent bookmarked Tweets.
     *
     * @returns {Promise<TweetCollectionResponse>}
     * @throws {ClientException}
     */
    public async getAll(userId: string, expansions?: string, maxResults?: string, paginationToken?: string, mediaFields?: string, placeFields?: string, pollFields?: string, tweetFields?: string, userFields?: string): Promise<TweetCollectionResponse> {
        const url = this.parser.url('/2/users/:user_id/bookmarks', {
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


}