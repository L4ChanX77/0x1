// ============================================
// PAYLOADS DATA (existing)
// ============================================
export const PAYLOADS_DATA = [
  {
    id: 1,
    title: "HTTP",
    method: "WS FNF Tunnel BD",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: video.pscp.tv[crlf]Expect: 100-continue[crlf][crlf][split]CF-RAY / HTTP/1.1[crlf]Host: [cf][crlf]Upgrade: Websocket[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "partner-stream.twitter.com:8880",
    stars: 5,
  },
  {
    id: 2,
    title: "HTTP",
    method: "WebSocket Split",
    payload: "GET / HTTP/1.1 [lf]Host: [host][crlf]User-Agent: [crlf]Connection: upgrade[lf]Upgrade: Websocket[lf][lf][split]",
    proxy: "dev-guest-cf.pscp.tv:8880",
    sni: "googleapis.com",
    stars: 4,
  },
  {
    id: 3,
    title: "HTTP",
    method: "Dual GET",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [host][crlf][crlf]GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade:websocket:[host_port][crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:8880",
    sni: "v9x6qb-launches.appsflyersdk.com",
    stars: 5,
  },
  {
    id: 4,
    title: "HTTP",
    method: "POST",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: web.googel.com[crlf][crlf]POST / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade:websocket:cloudflare.com [crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:8080",
    sni: "content-autofill.googleapis.com",
    stars: 5,
  },
  {
    id: 5,
    title: "HTTP",
    method: "PATCH",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: web.googel.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade:websocket:www.snapchat.com [crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:8880",
    sni: "googleapis.com",
    stars: 5,
  },
  {
    id: 6,
    title: "HTTP",
    method: "ACL",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: web.googel.com[crlf][crlf]ACL / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade:websocket:www.facebook.com [crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:8880",
    sni: "v9x6qb-launches.appsflyersdk.com",
    stars: 5,
  },
  {
    id: 7,
    title: "HTTP",
    method: "CONNECT",
    payload: "CONNECT / HTTP/1.1[crlf]Host: [host][crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf]x-firewallfalcon-mode: true[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:8880",
    sni: "content-autofill.googleapis.com",
    stars: 5,
  },
  {
    id: 8,
    title: "HTTP",
    method: "Split + PATCH",
    payload: "PATCH / [split]HTTP/1.1 [lf]Host: [host][crlf]Connection:[lf]Upgrade: Websocket[lf][lf]",
    proxy: "dev-guest-cf.pscp.tv:8880",
    sni: "googleapis.com",
    stars: 4,
  },
  {
    id: 9,
    title: "HTTP",
    method: "Split + PATCH",
    payload: "PATCH / HTTP/1.1[split][crlf]Host: [host][crlf]Connection:[lf]Upgrade: Websocket[lf][lf]",
    proxy: "dev-guest-cf.pscp.tv:8880",
    sni: "v9x6qb-launches.appsflyersdk.com",
    stars: 4,
  },
  {
    id: 10,
    title: "HTTP",
    method: "SSH",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:22",
    sni: "content-autofill.googleapis.com",
    stars: 4,
  },
  {
    id: 11,
    title: "HTTP",
    method: "Slowed DNS",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:22",
    sni: "googleapis.com",
    stars: 4,
  },
  {
    id: 12,
    title: "HTTP",
    method: "ACL Split",
    payload: "ACL / [split]HTTP/1.1 [lf]Host: [rlb][lf]Upgrade: Websocket[lf][lf]",
    proxy: "dev-guest-cf.pscp.tv:8880",
    sni: "v9x6qb-launches.appsflyersdk.com",
    stars: 5,
  },
  {
    id: 13,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: googleapis.com[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "googleapis.com",
    stars: 5,
  },
  {
    id: 14,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: v9x6qb-launches.appsflyersdk.com[crlf][crlf]GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade:websocket:v9x6qb-launches.appsflyersdk.com [crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "v9x6qb-launches.appsflyersdk.com",
    stars: 5,
  },
  {
    id: 15,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: content-autofill.googleapis.com[crlf]Upgrade: websocket[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "content-autofill.googleapis.com",
    stars: 5,
  },
  {
    id: 16,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "googleapis.com",
    stars: 5,
  },
  {
    id: 17,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [host][crlf][crlf]GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade:websocket:[host][crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "v9x6qb-launches.appsflyersdk.com",
    stars: 5,
  },
  {
    id: 18,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: web.facebook.com[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "web.facebook.com",
    stars: 5,
  },
  {
    id: 19,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: web.facebook.com[crlf][crlf]GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade:websocket:web.facebook.com [crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "help.facebook.com",
    stars: 5,
  },
  {
    id: 20,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "m.facebook.com",
    stars: 5,
  },
  {
    id: 21,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: web.whatsapp.com[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "web.whatsapp.com",
    stars: 5,
  },
  {
    id: 22,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "m.whatsapp.com",
    stars: 5,
  },
  {
    id: 23,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: web.telegram.org[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "web.telegram.org",
    stars: 5,
  },
  {
    id: 24,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "m.telegram.org",
    stars: 5,
  },
  {
    id: 25,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: www.tiktok.com[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "www.tiktok.com",
    stars: 5,
  },
  {
    id: 26,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "m.tiktok.com",
    stars: 5,
  },
  {
    id: 27,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: assets.twitch.tv[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "assets.twitch.tv",
    stars: 5,
  },
  {
    id: 28,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: cdn.discordapp.com[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "cdn.discordapp.com",
    stars: 5,
  },
  {
    id: 29,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "api.discordapp.com",
    stars: 5,
  },
  {
    id: 30,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: web.cloudflare.com[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "web.cloudflare.com",
    stars: 5,
  },
  {
    id: 31,
    title: "HTTPS SSL TLS",
    method: "SSL TLS",
    payload: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf][crlf]",
    proxy: "dev-guest-cf.pscp.tv:443",
    sni: "help.cloudflare.com",
    stars: 5,
  },
];

// ============================================
// NEW PAYLOADS DATA (from user)
// ============================================
export const NEW_PAYLOADS_DATA = [
  {
    id: 1001,
    title: "HTTP",
    method: "PATCH + CONNECT",
    payload: "PATCH / HTTP/3.0[crlf]:scheme: https[crlf]:path: /web-analytics/events[crlf]Host: gcp.api.snapchat.com[crlf]User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15[crlf]Alt-Svc: h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400[crlf]X-Forwarded-Host: [host][crlf]X-Forwarded-Proto: h3[crlf]X-Real-IP: 2001:db8::1[crlf]Cache-Control: no-store[crlf][crlf]CONNECT [host]:443 HTTP/3.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf]Sec-WebSocket-Key: x3qT7RwP2LmN9QvF5HjK8YbA==[crlf][crlf]",
    stars: 5,
  },
  {
    id: 1002,
    title: "HTTP",
    method: "CONNECT + GET",
    payload: "CONNECT / graph.googleapis.com: HTTP/1.1[crlf]Host: [host][crlf]User-Agent: Java/17.0.2[crlf]Proxy-Connection: Keep-Alive[crlf]X-Forwarded-Host: [host][crlf]X-Forwarded-For: ::1[crlf]Authorization: Basic dXNlcjpwYXNz[crlf][crlf]GET / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf]",
    stars: 5,
  },
  {
    id: 1003,
    title: "HTTP",
    method: "HEAD + CONNECT",
    payload: "HEAD /exchange?cmd=ping HTTP/3.1[crlf]Host: outlook.office365.com[crlf]User-Agent: Microsoft-Outlook/16.0 (Windows NT 10.0)[crlf]Pragma: no-cache[crlf]Max-Forwards: 0[crlf]X-Forwarded-Host: [host][crlf]X-Forwarded-Proto: https[crlf][crlf]CONNECT [host]:443 HTTP/3.1[crlf]Host: [host][crlf]User-Agent: Microsoft-Outlook/16.0[crlf][crlf]",
    stars: 4,
  },
  {
    id: 1004,
    title: "HTTP",
    method: "POST Multipart",
    payload: "POST /api/v3/collect?sid=3456789 HTTP/1.1[crlf]Host: ingress.facebook.com[crlf]User-Agent: FacebookAndroid/456.0.0.34 (Android 13)[crlf]Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gWqXjKlMnBvCxZzLkPqRtYwHfGdSaQlWmNoP[crlf]Content-Length: 1024[crlf]X-Forwarded-Host: [host][crlf]Upgrade: websocket[crlf]Connection: Keep-Alive, Upgrade[crlf][crlf]----WebKitFormBoundary7MA4YWxkTrZu0gWqXjKlMnBvCxZzLkPqRtYwHfGdSaQlWmNoP[crlf]Content-Disposition: form-data; name=\"payload\"[crlf][crlf]UHCGFDZFFDRRUGCJVFJLMNNB[crlf]----WebKitFormBoundary7MA4YWxkTrZu0gWqXjKlMnBvCxZzLkPqRtYwHfGdSaQlWmNoP--[crlf][crlf]GET /[host]:80 HTTP/1.1[crlf]Host: [host][crlf][crlf]",
    stars: 5,
  },
  {
    id: 1005,
    title: "HTTP",
    method: "GET + CONNECT",
    payload: "GET /__utm.gif?utm_source=cdn&utm_medium=web HTTP/1.1[crlf]Host: www.google-analytics.com[crlf]User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36[crlf]Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8[crlf]Accept-Encoding: gzip, deflate, br[crlf]Cache-Control: max-age=0[crlf]Transfer-Encoding: chunked[crlf]Content-Length: 0[crlf]X-Forwarded-Host: [host][crlf]X-Forwarded-For: 127.0.0.1[crlf][crlf]0[crlf][crlf]CONNECT [host]:443 HTTP/1.1[crlf]Host: [host][crlf]User-Agent: Mozilla/5.0[crlf][crlf]",
    stars: 4,
  },
  {
    id: 1006,
    title: "HTTP",
    method: "POST + GET",
    payload: "POST * HTTP/3.0[crlf][crlf]GET /web-analytics/web/events?cd=1&v=1&fmt=json&_nc_cat=1 HTTP/1.1[crlf]Host: us-central1-gcp.api.snapchat.com[crlf]User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36[crlf]Accept: */*[crlf]Accept-Language: en-US,en;q=0.9[crlf]Accept-Encoding: gzip, deflate, br[crlf]Cache-Control: no-cache[crlf]Pragma: no-cache[crlf]Sec-WebSocket-Version: 13[crlf]Sec-WebSocket-Key: wDq3tG6LnP4RkS9vHmZx2A==[crlf]Origin: https://www.snapchat.com[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf]Alt-Svc: h3=\":443\"; ma=2592000; persist=1[crlf]X-Forwarded-Host: [host][crlf]X-Forwarded-Proto: https[crlf]X-Real-IP: 192.168.1.100[crlf]X-Forwarded-For: 10.0.0.1, 172.16.0.1[crlf][crlf]GET /[host]:443 HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf]Sec-WebSocket-Key: wDq3tG6LnP4RkS9vHmZx2A==[crlf][crlf]",
    stars: 5,
  },
  {
    id: 1007,
    title: "HTTP",
    method: "GET + CONNECT",
    payload: "GET /web-analytics/web/events?cd=1 HTTP/3.0[crlf]Host: graph.bing.com[crlf]User-Agent: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.1; Trident/6.0; IEMobile/12.0)[crlf]Connection: Upgrade[crlf]Upgrade: websocket[crlf]X-Forwarded-Host: [host][crlf]X-Forwarded-Proto: http[crlf][crlf]CONNECT [host]:443 HTTP/3.0[crlf]Host: [host][crlf][crlf]",
    stars: 4,
  },
  {
    id: 1008,
    title: "HTTP",
    method: "GET + POST",
    payload: "GET /graph-gcp/HTTP/3.0 /web-analytics/web/events?client=SSH HTTP/1.1[crlf]Host: us-central1-gcp.api.snapchat.com[crlf]User-Agent: Mozilla/5.0[crlf]Accept: */*[crlf]Connection: Keep-Alive, Upgrade[crlf]Upgrade: websocket[crlf]X-Forwarded-Host: [host][crlf]X-Forwarded-Proto: https[crlf]X-Real-IP: 127.0.0.1[crlf]X-Host: [host][crlf]X-Forwarded-For: 1.2.3.4[crlf]Sec-WebSocket-Version: 13[crlf]Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==[crlf][crlf]POST / [host] HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf]",
    stars: 5,
  },
];

// ============================================
// PROXIES DATA
// ============================================
export const PROXIES_DATA = [
  // video-cf.twimg.com
  { host: "video-cf.twimg.com", port: 8080, type: "HTTP", online: true, provider: "Twitter/CDN" },
  { host: "video-cf.twimg.com", port: 8880, type: "HTTP", online: true, provider: "Twitter/CDN" },
  { host: "video-cf.twimg.com", port: 2086, type: "HTTP", online: true, provider: "Twitter/CDN" },
  { host: "video-cf.twimg.com", port: 443, type: "SSL", online: true, provider: "Twitter/CDN" },
  { host: "video-cf.twimg.com", port: 80, type: "HTTP", online: true, provider: "Twitter/CDN" },
  // crazygames.ro
  { host: "crazygames.ro", port: 8080, type: "HTTP", online: true, provider: "CrazyGames" },
  { host: "crazygames.ro", port: 8880, type: "HTTP", online: true, provider: "CrazyGames" },
  { host: "crazygames.ro", port: 2086, type: "HTTP", online: true, provider: "CrazyGames" },
  { host: "crazygames.ro", port: 443, type: "SSL", online: true, provider: "CrazyGames" },
  { host: "crazygames.ro", port: 80, type: "HTTP", online: true, provider: "CrazyGames" },
  // partner-stream.twitter.com
  { host: "partner-stream.twitter.com", port: 8080, type: "HTTP", online: true, provider: "Twitter/CDN" },
  { host: "partner-stream.twitter.com", port: 8880, type: "HTTP", online: true, provider: "Twitter/CDN" },
  { host: "partner-stream.twitter.com", port: 2086, type: "HTTP", online: true, provider: "Twitter/CDN" },
  { host: "partner-stream.twitter.com", port: 443, type: "SSL", online: true, provider: "Twitter/CDN" },
  { host: "partner-stream.twitter.com", port: 80, type: "HTTP", online: true, provider: "Twitter/CDN" },
  // guest-cf.pscp.tv
  { host: "guest-cf.pscp.tv", port: 8080, type: "HTTP", online: true, provider: "Periscope/Twitter" },
  { host: "guest-cf.pscp.tv", port: 8880, type: "HTTP", online: true, provider: "Periscope/Twitter" },
  { host: "guest-cf.pscp.tv", port: 2086, type: "HTTP", online: true, provider: "Periscope/Twitter" },
  { host: "guest-cf.pscp.tv", port: 443, type: "SSL", online: true, provider: "Periscope/Twitter" },
  { host: "guest-cf.pscp.tv", port: 80, type: "HTTP", online: true, provider: "Periscope/Twitter" },
  // dev-guest-cf.pscp.tv
  { host: "dev-guest-cf.pscp.tv", port: 8080, type: "HTTP", online: true, provider: "Periscope/Twitter" },
  { host: "dev-guest-cf.pscp.tv", port: 8880, type: "HTTP", online: true, provider: "Periscope/Twitter" },
  { host: "dev-guest-cf.pscp.tv", port: 2086, type: "HTTP", online: true, provider: "Periscope/Twitter" },
  { host: "dev-guest-cf.pscp.tv", port: 443, type: "SSL", online: true, provider: "Periscope/Twitter" },
  { host: "dev-guest-cf.pscp.tv", port: 80, type: "HTTP", online: true, provider: "Periscope/Twitter" },
  // 162.159.140.229
  { host: "162.159.140.229", port: 8080, type: "HTTP", online: true, provider: "Cloudflare Anycast" },
  { host: "162.159.140.229", port: 8880, type: "HTTP", online: true, provider: "Cloudflare Anycast" },
  { host: "162.159.140.229", port: 2086, type: "HTTP", online: true, provider: "Cloudflare Anycast" },
  { host: "162.159.140.229", port: 443, type: "SSL", online: true, provider: "Cloudflare Anycast" },
  { host: "162.159.140.229", port: 80, type: "HTTP", online: true, provider: "Cloudflare Anycast" },
  // cf.twimg.com
  { host: "cf.twimg.com", port: 8080, type: "HTTP", online: true, provider: "Twitter/CDN" },
  { host: "cf.twimg.com", port: 8880, type: "HTTP", online: true, provider: "Twitter/CDN" },
  { host: "cf.twimg.com", port: 2086, type: "HTTP", online: true, provider: "Twitter/CDN" },
  { host: "cf.twimg.com", port: 443, type: "SSL", online: true, provider: "Twitter/CDN" },
  { host: "cf.twimg.com", port: 80, type: "HTTP", online: true, provider: "Twitter/CDN" },
  // help.twitter.com
  { host: "help.twitter.com", port: 8080, type: "HTTP", online: true, provider: "Twitter" },
  { host: "help.twitter.com", port: 8880, type: "HTTP", online: true, provider: "Twitter" },
  { host: "help.twitter.com", port: 2086, type: "HTTP", online: true, provider: "Twitter" },
  { host: "help.twitter.com", port: 443, type: "SSL", online: true, provider: "Twitter" },
  { host: "help.twitter.com", port: 80, type: "HTTP", online: true, provider: "Twitter" },
  // 172.66.0.227
  { host: "172.66.0.227", port: 8080, type: "HTTP", online: true, provider: "Cloudflare Anycast" },
  { host: "172.66.0.227", port: 8880, type: "HTTP", online: true, provider: "Cloudflare Anycast" },
  { host: "172.66.0.227", port: 2086, type: "HTTP", online: true, provider: "Cloudflare Anycast" },
  { host: "172.66.0.227", port: 443, type: "SSL", online: true, provider: "Cloudflare Anycast" },
  { host: "172.66.0.227", port: 80, type: "HTTP", online: true, provider: "Cloudflare Anycast" },
  // Multi-domain
  { host: "help.twitter.com;tweetdeck.twitter.com;www.twitter.com;analytics.twitter.com;support.twitter.com;video-cf.twimg.com", port: 8080, type: "HTTP", online: true, provider: "Twitter Multi-Domain" },
  { host: "help.twitter.com;tweetdeck.twitter.com;www.twitter.com;analytics.twitter.com;support.twitter.com;video-cf.twimg.com", port: 8880, type: "HTTP", online: true, provider: "Twitter Multi-Domain" },
  { host: "help.twitter.com;tweetdeck.twitter.com;www.twitter.com;analytics.twitter.com;support.twitter.com;video-cf.twimg.com", port: 2086, type: "HTTP", online: true, provider: "Twitter Multi-Domain" },
  { host: "help.twitter.com;tweetdeck.twitter.com;www.twitter.com;analytics.twitter.com;support.twitter.com;video-cf.twimg.com", port: 443, type: "SSL", online: true, provider: "Twitter Multi-Domain" },
  { host: "help.twitter.com;tweetdeck.twitter.com;www.twitter.com;analytics.twitter.com;support.twitter.com;video-cf.twimg.com", port: 80, type: "HTTP", online: true, provider: "Twitter Multi-Domain" },
  // m.jakarie.io
  { host: "m.jakarie.io", port: 8080, type: "HTTP", online: true, provider: "Jakarie" },
  { host: "m.jakarie.io", port: 8880, type: "HTTP", online: true, provider: "Jakarie" },
  { host: "m.jakarie.io", port: 2086, type: "HTTP", online: true, provider: "Jakarie" },
  { host: "m.jakarie.io", port: 443, type: "SSL", online: true, provider: "Jakarie" },
  { host: "m.jakarie.io", port: 80, type: "HTTP", online: true, provider: "Jakarie" },
  // test.cftls.t.co
  { host: "test.cftls.t.co", port: 8080, type: "HTTP", online: true, provider: "Twitter/Cloudflare" },
  { host: "test.cftls.t.co", port: 8880, type: "HTTP", online: true, provider: "Twitter/Cloudflare" },
  { host: "test.cftls.t.co", port: 2086, type: "HTTP", online: true, provider: "Twitter/Cloudflare" },
  { host: "test.cftls.t.co", port: 443, type: "SSL", online: true, provider: "Twitter/Cloudflare" },
  { host: "test.cftls.t.co", port: 80, type: "HTTP", online: true, provider: "Twitter/Cloudflare" },
  // cloudapi.snap.com
  { host: "cloudapi.snap.com", port: 8080, type: "HTTP", online: true, provider: "Snap/Cloudflare" },
  { host: "cloudapi.snap.com", port: 8880, type: "HTTP", online: true, provider: "Snap/Cloudflare" },
  { host: "cloudapi.snap.com", port: 2086, type: "HTTP", online: true, provider: "Snap/Cloudflare" },
  { host: "cloudapi.snap.com", port: 443, type: "SSL", online: true, provider: "Snap/Cloudflare" },
  { host: "cloudapi.snap.com", port: 80, type: "HTTP", online: true, provider: "Snap/Cloudflare" },
  // test.cftls.t.co (duplicate)
  { host: "test.cftls.t.co", port: 8080, type: "HTTP", online: true, provider: "Twitter/Cloudflare" },
  { host: "test.cftls.t.co", port: 8880, type: "HTTP", online: true, provider: "Twitter/Cloudflare" },
  { host: "test.cftls.t.co", port: 2086, type: "HTTP", online: true, provider: "Twitter/Cloudflare" },
  { host: "test.cftls.t.co", port: 443, type: "SSL", online: true, provider: "Twitter/Cloudflare" },
  { host: "test.cftls.t.co", port: 80, type: "HTTP", online: true, provider: "Twitter/Cloudflare" },
];

// ============================================
// SNI DATA
// ============================================
export const SNI_DATA = [
  { hostname: "googleapis.com" },
  { hostname: "v9x6qb-launches.appsflyersdk.com" },
  { hostname: "content-autofill.googleapis.com" },
  { hostname: "web.instagram.com" },
  { hostname: "help.instagram.com" },
  { hostname: "m.instagram.com" },
  { hostname: "www.instagram.com" },
  { hostname: "api.instagram.com" },
  { hostname: "cdn.instagram.com" },
  { hostname: "static.instagram.com" },
  { hostname: "web.snapchat.com" },
  { hostname: "help.snapchat.com" },
  { hostname: "m.snapchat.com" },
  { hostname: "www.snapchat.com" },
  { hostname: "api.snapchat.com" },
  { hostname: "cdn.snapchat.com" },
  { hostname: "web.facebook.com" },
  { hostname: "help.facebook.com" },
  { hostname: "m.facebook.com" },
  { hostname: "www.facebook.com" },
  { hostname: "api.facebook.com" },
  { hostname: "cdn.facebook.com" },
  { hostname: "static.facebook.com" },
  { hostname: "web.whatsapp.com" },
  { hostname: "m.whatsapp.com" },
  { hostname: "www.whatsapp.com" },
  { hostname: "api.whatsapp.com" },
  { hostname: "cdn.whatsapp.com" },
  { hostname: "web.telegram.org" },
  { hostname: "m.telegram.org" },
  { hostname: "www.telegram.org" },
  { hostname: "api.telegram.org" },
  { hostname: "cdn.telegram.org" },
  { hostname: "www.tiktok.com" },
  { hostname: "m.tiktok.com" },
  { hostname: "api.tiktok.com" },
  { hostname: "cdn.tiktok.com" },
  { hostname: "assets.twitch.tv" },
  { hostname: "www.twitch.tv" },
  { hostname: "m.twitch.tv" },
  { hostname: "api.twitch.tv" },
  { hostname: "cdn.twitch.tv" },
  { hostname: "cdn.discordapp.com" },
  { hostname: "api.discordapp.com" },
  { hostname: "www.discordapp.com" },
  { hostname: "www.twitter.com" },
  { hostname: "api.twitter.com" },
  { hostname: "cdn.twitter.com" },
  { hostname: "web.cloudflare.com" },
  { hostname: "help.cloudflare.com" },
  { hostname: "api.cloudflare.com" },
  { hostname: "cdn.cloudflare.com" },
  { hostname: "googel.com" },
  { hostname: "instagram.com" },
  { hostname: "video.pscp.tv" },
  { hostname: "m.jakarie.io" },
  { hostname: "microsoft.com" },
  { hostname: "web.poe.garena.com" },
  { hostname: "video-cf.twimg.com" },
  { hostname: "ff.garena.com" },
  { hostname: "h.facebook.com" },
  { hostname: "crazygames.ro" },
  { hostname: "abs-cloudflare.twimg.com" },
];

// ============================================
// BUG HOSTS
// ============================================
export const BUG_HOSTS = [
  { bug: "web.poe.garena.com", note: "Garena CDN" },
  { bug: "video-cf.twimg.com", note: "Twitter Video CDN" },
  { bug: "ff.garena.com", note: "Garena Free Fire" },
  { bug: "h.facebook.com", note: "Facebook Mobile" },
  { bug: "crazygames.ro", note: "CrazyGames Romania" },
  { bug: "abs-cloudflare.twimg.com", note: "Twitter Cloudflare CDN" },
  { bug: "104.18.37.127", note: "Cloudflare IP (direct)" },
  { bug: "googleapis.com", note: "Google APIs" },
  { bug: "v9x6qb-launches.appsflyersdk.com", note: "AppsFlyer SDK" },
  { bug: "content-autofill.googleapis.com", note: "Google Autofill" },
  { bug: "web.instagram.com", note: "Instagram CDN" },
  { bug: "help.instagram.com", note: "Instagram Help" },
  { bug: "m.instagram.com", note: "Instagram Mobile" },
  { bug: "www.instagram.com", note: "Instagram Main" },
  { bug: "api.instagram.com", note: "Instagram API" },
  { bug: "cdn.instagram.com", note: "Instagram CDN" },
  { bug: "static.instagram.com", note: "Instagram Static" },
  { bug: "web.snapchat.com", note: "Snapchat CDN" },
  { bug: "help.snapchat.com", note: "Snapchat Help" },
  { bug: "m.snapchat.com", note: "Snapchat Mobile" },
  { bug: "www.snapchat.com", note: "Snapchat Main" },
  { bug: "api.snapchat.com", note: "Snapchat API" },
  { bug: "web.facebook.com", note: "Facebook CDN" },
  { bug: "help.facebook.com", note: "Facebook Help" },
  { bug: "m.facebook.com", note: "Facebook Mobile" },
  { bug: "www.facebook.com", note: "Facebook Main" },
  { bug: "api.facebook.com", note: "Facebook API" },
  { bug: "web.whatsapp.com", note: "WhatsApp Web" },
  { bug: "m.whatsapp.com", note: "WhatsApp Mobile" },
  { bug: "www.whatsapp.com", note: "WhatsApp Main" },
  { bug: "api.whatsapp.com", note: "WhatsApp API" },
  { bug: "web.telegram.org", note: "Telegram Web" },
  { bug: "m.telegram.org", note: "Telegram Mobile" },
  { bug: "www.telegram.org", note: "Telegram Main" },
  { bug: "api.telegram.org", note: "Telegram API" },
  { bug: "www.tiktok.com", note: "TikTok Main" },
  { bug: "m.tiktok.com", note: "TikTok Mobile" },
  { bug: "api.tiktok.com", note: "TikTok API" },
  { bug: "assets.twitch.tv", note: "Twitch Assets" },
  { bug: "www.twitch.tv", note: "Twitch Main" },
  { bug: "m.twitch.tv", note: "Twitch Mobile" },
  { bug: "cdn.discordapp.com", note: "Discord CDN" },
  { bug: "api.discordapp.com", note: "Discord API" },
  { bug: "web.cloudflare.com", note: "Cloudflare Web" },
  { bug: "help.cloudflare.com", note: "Cloudflare Help" },
  { bug: "api.cloudflare.com", note: "Cloudflare API" },
];

// ============================================
// PROVIDERS DATA
// ============================================
export const PROVIDERS_DATA = [
  { name: "SSH Ocean", url: "https://sshocean.com", type: "SSH/SSL/WebSocket/V2Ray" },
  { name: "SSH Max", url: "https://sshmax.net", type: "SSH/SSL/WebSocket/DNS" },
  { name: "Hide SSH", url: "https://hidessh.com", type: "SSH/V2Ray/OpenVPN" },
  { name: "VPN Jantit", url: "https://www.vpnjantit.com", type: "SSH/SSL/OpenVPN" },
  { name: "Premium SSH", url: "https://www.premiumssh.com", type: "SSH/SSL" },
  { name: "Fast SSH", url: "https://www.fastssh.com", type: "SSH/SSL/Stunnel" },
  { name: "SSH Kit", url: "https://sshkit.com", type: "SSH/SSL" },
  { name: "SSH 8", url: "https://sshs8.com", type: "SSH/OpenVPN/V2Ray" },
  { name: "NETQ.ME", url: "https://netq.me", type: "V2Ray/VMess/Trojan/VLess/SSH/Wireguard" },
  { name: "NeoSSH", url: "https://neossh.com", type: "SSH/SSL/WebSocket/OpenVPN/V2Ray/WireGuard" },
  { name: "MangoHost", url: "https://mangohost.net/vps/personal-vpn", type: "VPS/VPN/SSH/V2Ray/Xray/Wireguard" },
  { name: "SSH Servers", url: "https://sshservers.com", type: "SSH/TCP/UDP" },
  { name: "OpenTunnel", url: "https://opentunnel.net", type: "V2Ray/Trojan/OpenVPN/WireGuard" },
  { name: "MonthlySSH", url: "https://monthlyssh.net", type: "SSH/WebSocket/OpenVPN/XRay/Wireguard" },
  { name: "CyberSSH", url: "https://cyberssh.com", type: "SSH/SSL/VPN" },
  { name: "SSH Stores", url: "https://www.sshstores.net", type: "SSH/SSL/WebSocket/Xray/OpenVPN/Wireguard" },
  { name: "AkunSSH", url: "https://akunssh.net", type: "SSH/UDP/WebSocket/OpenVPN/V2Ray/Wireguard" },
  { name: "StarSSH", url: "https://starssh.com", type: "SSH/OpenVPN" },
  { name: "RACEVPN", url: "https://www.racevpn.com", type: "VPN/SSH" },
  { name: "NetworkSSH", url: "https://networkssh.com", type: "SSH/VPN" },
  { name: "Fast-SSH", url: "https://fast-ssh.com", type: "SSH/V2Ray/Xray/Trojan/Wireguard/OpenVPN" },
];

// ============================================
// APPS (VPN, DEV, EXTRA)
// ============================================
export const APPS_VPN = [
  { name: "TLS Tunnel Pro", version: "8.4.0", description: "Advanced TLS tunneling client with enhanced security and performance.", url: "https://www.mediafire.com/file/gmq1nbsf23ebbj0/TLS+Tunnel_8.4.0[MOD]Patch[506]All_Device.apk/file" },
  { name: "HTTP Custom", version: "7.9.28", description: "Powerful HTTP injector and customizer for VPN and proxy configurations.", url: "https://www.mediafire.com/file/246pklaafzsca4d/HTTP_CUSTOM_7.9.28-Patch_1[MOD].apk/file" },
  { name: "OrNET TOR-GHOST", version: "1.0", description: "Dark web browser with integrated TOR and Ghost protocol support.", url: "https://www.mediafire.com/file/3pg0qan0u3557mi/OrNET_TOR-GHOST_DARKWEB_BROWSER[MOD].apk/file" },
  { name: "SKYN11XLAB", version: "1.0", description: "Comprehensive network toolkit with advanced scanning and tunneling features.", url: "https://www.mediafire.com/file/plajhgxwmnxokuf/SKYN11XLAB.apk/file" },
  { name: "Npv Tunnel", version: "123.1", description: "Lightweight and fast VPN tunnel with multiple protocol support.", url: "https://www.mediafire.com/file/bg6ownm9q3euswg/Npv+Tunnel_123.1-OLd_Version[MOD].apk/file" },
  { name: "Bee Plus V2ray", version: "85.0", description: "V2Ray client with advanced routing and proxy capabilities.", url: "https://www.mediafire.com/file/imhzs1n07slr7qe/Bee+Plus+V2ray_85[up].apk/file" },
  { name: "Guruz Tunnel", version: "14.4", description: "Versatile tunneling app supporting SSH, SSL, and WebSocket protocols.", url: "https://www.mediafire.com/file/pg1wmqezlrhcwiv/Guruz+Tunnel_14.4[MOD].apk/file" },
];

export const APPS_DEV = [
  { name: "KernelSU Next", version: "1.0.2", description: "Next-generation kernel-based root solution for Android devices.", url: "https://www.mediafire.com/file/64pxf1r6p44c4d7/KernelSU+Next_v1.0.2-R13-53-g1a98d657.apk/file" },
  { name: "Spck NodeJS", version: "10.8.0", description: "Complete NodeJS development environment for mobile devices.", url: "https://www.mediafire.com/file/ahuw4trkqnaqmfz/Spck+NodeJS_10.8.0.0.apks/file" },
  { name: "Canta", version: "3.2.2", description: "Advanced package manager and debloater for Android.", url: "https://www.mediafire.com/file/ptsk718tsa7p9ps/Canta_3.2.2.apks/file" },
  { name: "Shizuku", version: "13.6.0", description: "System-level tool for running ADB commands with elevated privileges.", url: "https://www.mediafire.com/file/u52hn9oytueeqj0/Shizuku_13.6.0.r1086.2650830c.apk/file" },
  { name: "Current Activity", version: "2.2.0", description: "Identify and view current foreground activity on Android.", url: "https://www.mediafire.com/file/h6iubmg6mdjiopn/Current+Activity_2.2.0.apk/file" },
  { name: "AntiSplit M", version: "2.2.1", description: "Tool to remove split APKs (APKS) and convert to single APK format.", url: "https://www.mediafire.com/file/ijwlov1gnbz4wy5/AntiSplit+M_2.2.1.apk/file" },
  { name: "Better DeepSeek", version: "0.1.12", description: "Enhanced client for DeepSeek AI with advanced features.", url: "https://www.mediafire.com/file/gpkxgpmclydsnuo/Better+DeepSeek_0.1.12.apk/file" },
  { name: "CODE-X101", version: "1.0.1", description: "All-in-one coding IDE with support for multiple languages.", url: "https://www.mediafire.com/file/pkylr3z0woqz4er/CODE-X101_1.0.1.apk/file" },
  { name: "NPatch", version: "1.0.5", description: "Patch manager for modifying Android applications.", url: "https://www.mediafire.com/file/3e9pp1g2a0pl9zb/NPatch_1.0.5.apk/file" },
  { name: "PCAPdroid", version: "1.9.1", description: "Network traffic capture and analysis tool for Android.", url: "https://www.mediafire.com/file/79828s6zk9pg7tl/PCAPdroid_1.9.1.apk/file" },
  { name: "Apktool M", version: "2.4.0", description: "APK decompiler and manipulator for reverse engineering.", url: "https://www.mediafire.com/file/uj6zj0agznk3yb9/Apktool+M_2.4.0-260519.apk/file" },
  { name: "JsHook", version: "1.3.1", description: "JavaScript hooking and debugging framework for Android.", url: "https://www.mediafire.com/file/743udjhfpwt0yt9/JsHook_1.3.1.apk/file" },
  { name: "HttpCanary", version: "3.3.6", description: "HTTP/HTTPS traffic sniffer and analyzer.", url: "https://www.mediafire.com/file/hkhr67c44srcv03/HttpCanary_3.3.6.apk/file" },
  { name: "Termius Pro", version: "5.9.0", description: "Premium SSH client and terminal emulator with cloud sync.", url: "https://www.mediafire.com/file/act7qgppnm7m4al/Termius_5.9.0.apk/file" },
  { name: "Game Guardian X77", version: "101.1", description: "Memory editing and game hacking tool.", url: "https://www.mediafire.com/file/5j9av1iumwdzumh/Game+Guardian+X77_101.1.apk/file" },
  { name: "Reqable", version: "3.2.5", description: "API development and testing platform with proxy support.", url: "https://www.mediafire.com/file/ujrhavswgyzje70/Reqable_3.2.5.apks/file" },
  { name: "1DM", version: "18.2", description: "High-speed download manager with multithreading support.", url: "https://www.mediafire.com/file/utddzoreupqfn3n/1DM_18.2.apks/file" },
  { name: "Monokai Toolkit", version: "18.0.4", description: "Collection of developer tools and utilities.", url: "https://www.mediafire.com/file/u701cl028xeu3cj/MonokaiToolkit_18.0.4.apks/file" },
  { name: "Kiwi Browser", version: "137.0.7337.0", description: "Chromium-based browser with extensions support.", url: "https://www.mediafire.com/file/u52hn9oytueeqj0/Kiwi+Browser_137.0.7337.0.apk/file" },
  { name: "Il2cppDumper", version: "6.1.0", description: "Tool for dumping and analyzing Il2cpp game data.", url: "https://www.mediafire.com/file/kl7r6ztsgy6xaf1/Il2cppDumper_6.1.0.apk/file" },
  { name: "Rodroid Il2cppDumper", version: "6.0", description: "Alternative Il2cpp dumper with additional features.", url: "https://www.mediafire.com/file/zpse4d8bluxqad4/Rodroid+Il2cppDumper_6.0.apk/file" },
];

export const APPS_EXTRA = [
  { name: "MicroG RE", version: "6.1.4", description: "Open-source reimplementation of Google Play Services.", url: "https://www.mediafire.com/file/9ezac5ho3d0yt86/MicroG+RE_6.1.4.apk/file" },
  { name: "YouTube ReVanced", version: "20.14.43", description: "Patched YouTube client with ad-blocking and advanced features.", url: "https://www.mediafire.com/file/ejuoz243u7ye9tm/YouTube+ReVanced_20.14.43.apk/file" },
];

// ============================================
// ARTICLES DATA
// ============================================
export const ARTICLES_DATA = [
  {
    id: 1,
    title: "Understanding HTTP vs HTTPS: Ports 80 and 443 Explained",
    category: "Technical",
    date: "2026-07-23",
    content: `
### What is HTTP?
HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web.
It operates on port 80 by default and is unencrypted, making it vulnerable to interception.
HTTPS (HTTP Secure) uses TLS/SSL encryption on port 443, ensuring data integrity and confidentiality.
### Why It Matters for Tunneling
Tunneling often relies on mimicking HTTPS traffic to bypass ISP filtering, as encrypted traffic is harder to inspect.
Many payloads in this library are designed to work over port 443 to appear as legitimate secure traffic.
`,
  },
  {
    id: 2,
    title: "Payload Types: HTTP vs HTTPS and Their Differences",
    category: "Technical",
    date: "2026-07-23",
    content: `
### What Are Payloads?
In tunneling, a payload is a crafted HTTP/HTTPS request that includes special headers and methods to manipulate the connection.
HTTP payloads are plaintext and easier to detect, while HTTPS payloads are wrapped in TLS encryption.
### Choosing the Right Payload
For best results, use HTTPS payloads with valid SNI (Server Name Indication) to bypass Deep Packet Inspection (DPI).
This repository includes both types, with clear labeling to help you choose the appropriate one for your network.
`,
  },
  {
    id: 3,
    title: "Why ISPs Cannot Fully Stop Tunneling: A Technical Analysis",
    category: "Security",
    date: "2026-07-23",
    content: `
### The ISP Challenge
ISPs face significant hurdles when blocking tunneling:
- **Encryption**: TLS/SSL hides the actual content, making deep inspection difficult.
- **Domain Fronting**: Using CDN domains (e.g., Cloudflare) to mask the true destination.
- **Protocol Obfuscation**: Techniques like WebSocket upgrades and chunked encoding confuse DPI systems.
### The Cat-and-Mouse Game
While ISPs continuously update their filtering methods, the tunneling community adapts with new payloads and techniques.
This repository provides up-to-date methods to stay ahead of such restrictions.
`,
  },
  {
    id: 4,
    title: "How to Set Up a Temporary Test VPS (For Educational Purposes Only)",
    category: "Tutorial",
    date: "2026-07-23",
    content: `
### ⚠️ IMPORTANT LEGAL & PLATFORM WARNING
**GitHub Codespaces is NOT a VPS.** Using it for VPN/proxy/tunneling hosting violates GitHub's Terms of Service.
Instead, consider using a dedicated VPS provider like DigitalOcean, Vultr, or AWS for legitimate testing.
### Step-by-Step Guide
1. Choose a provider and deploy a minimal Ubuntu/Debian instance.
2. Secure it with SSH keys and a firewall.
3. Install necessary tools (e.g., OpenVPN, WireGuard, or Xray) for your tunneling tests.
4. Always use the VPS ethically and within your local laws.
`,
  },
];

// ============================================
// CLOUDFLARE IP RANGES
// ============================================
export const CLOUDFLARE_IPS = {
  ipv4: [
    "173.245.48.0/20",
    "103.21.244.0/22",
    "103.22.200.0/22",
    "103.31.4.0/22",
    "141.101.64.0/18",
    "108.162.192.0/18",
    "190.93.240.0/20",
    "188.114.96.0/20",
    "197.234.240.0/22",
    "198.41.128.0/17",
    "162.158.0.0/15",
    "104.16.0.0/13",
    "104.24.0.0/14",
    "172.64.0.0/13",
    "131.0.72.0/22"
  ],
  ipv6: [
    "2400:cb00::/32",
    "2606:4700::/32",
    "2803:f800::/32",
    "2405:b500::/32",
    "2405:8100::/32",
    "2a06:98c0::/29",
    "2c0f:f248::/32"
  ]
};

// ============================================
// SOCIAL LINKS
// ============================================
export const SOCIAL = {
  telegram: "https://t.me/l4chanx",
  github: "https://github.com/XitSahmX77",
  youtube: "https://youtube.com/@xitsahmx77",
  whatsapp: "https://whatsapp.com/channel/0029VbCI0nX1t90cKSM4342C",
  discord: "https://discord.gg/Wdj496pMT",
  instagram: "https://www.instagram.com/xitsahmx77",
};
