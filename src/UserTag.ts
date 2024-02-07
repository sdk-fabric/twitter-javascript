/**
 * UserTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {TweetCollectionResponse} from "./TweetCollectionResponse";

export class UserTag extends TagAbstract {
    /**
     * @returns {Promise<TweetCollectionResponse>}
     * @throws {ClientException}
     */
    public async getTimeline(userId: string, expansions?: string, tweetFields?: string, userFields?: string, maxResults?: number): Promise<TweetCollectionResponse> {
        const url = this.parser.url('/2/users/:user_id/timelines/reverse_chronological', {
            'user_id': userId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'expansions': expansions,
                'tweet.fields': tweetFields,
                'user.fields': userFields,
                'max_results': maxResults,
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
