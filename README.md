
Forward http request.

## When it's useful?

- CROS limit of browser.
- Network limit from source site.

## Deploy

Set `cors`, e.g., in nginx.

```
server
  {
    add_header Access-Control-Allow-Origin *;
  }
```

Copy `/config_demo.js` to `/config.js`, update to parameter as you like.

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
