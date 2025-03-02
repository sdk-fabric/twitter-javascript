/**
 * UsageTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Errors} from "./Errors";
import {ErrorsException} from "./ErrorsException";
import {TweetUsageResponse} from "./TweetUsageResponse";

export class UsageTag extends TagAbstract {
    /**
     * The Usage API in the Twitter API v2 allows developers to programmatically retrieve their project usage. Using thie endpoint, developers can keep a track and monitor of the number of Tweets they have pulled for a given billing cycle.
     *
     * @returns {Promise<TweetUsageResponse>}
     * @throws {ErrorsException}
     * @throws {ClientException}
     */
    public async getTweets(): Promise<TweetUsageResponse> {
        const url = this.parser.url('/2/usage/tweets', {
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as TweetUsageResponse;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new ErrorsException(await response.json() as Errors);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
