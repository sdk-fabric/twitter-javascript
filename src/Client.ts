/**
 * Client automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {ClientAbstract, TokenStoreInterface} from "sdkgen-client"
import {HttpBearer} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {TweetTag} from "./TweetTag";

export class Client extends ClientAbstract {
    public tweet(): TweetTag
    {
        return new TweetTag(
            this.httpClient,
            this.parser
        );
    }



    public static build(token: string): Client
    {
        return new Client('https://api.twitter.com', new HttpBearer(token));
    }
}
