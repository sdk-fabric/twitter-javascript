/**
 * BookmarkTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BookmarkResponse} from "./BookmarkResponse";
import {Errors} from "./Errors";
import {ErrorsException} from "./ErrorsException";
import {Fields} from "./Fields";
import {SingleTweet} from "./SingleTweet";
import {TweetCollection} from "./TweetCollection";

export class BookmarkTag extends TagAbstract {
    /**
     * Allows you to get an authenticated user's 800 most recent bookmarked Tweets.
     *
     * @returns {Promise<TweetCollection>}
     * @throws {ErrorsException}
     * @throws {ClientException}
     */
    public async getAll(userId: string, expansions?: string, paginationToken?: string, fields?: Fields): Promise<TweetCollection> {
        const url = this.parser.url('/2/users/:user_id/bookmarks', {
            'user_id': userId,
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'expansions': expansions,
                'pagination_token': paginationToken,
                'fields': fields,
            }, [
                'fields',
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as TweetCollection;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new ErrorsException(await response.json() as Errors);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BookmarkResponse>}
     * @throws {ErrorsException}
     * @throws {ClientException}
     */
    public async create(userId: string, payload: SingleTweet): Promise<BookmarkResponse> {
        const url = this.parser.url('/2/users/:user_id/bookmarks', {
            'user_id': userId,
        });

        let request: HttpRequest = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as BookmarkResponse;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new ErrorsException(await response.json() as Errors);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BookmarkResponse>}
     * @throws {ErrorsException}
     * @throws {ClientException}
     */
    public async delete(userId: string, tweetId: string): Promise<BookmarkResponse> {
        const url = this.parser.url('/2/users/:user_id/bookmarks/:tweet_id', {
            'user_id': userId,
            'tweet_id': tweetId,
        });

        let request: HttpRequest = {
            url: url,
            method: 'DELETE',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as BookmarkResponse;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new ErrorsException(await response.json() as Errors);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
