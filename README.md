
Forward http request.

## When it's useful?

- CROS limit of browser.
- Network limit from source site.

## Deploy

Allow all source in nginx.

## Usage

Post request data as `axios` format, and then `POST` to server. e.g.,

```
  {
    url,
    method,
    params,
    data,
    secret,
  }
```js

NOTE: `secret` is to avoid abusage.
