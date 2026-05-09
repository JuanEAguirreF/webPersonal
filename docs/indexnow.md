# IndexNow submission

After deploying the latest build, verify the key file is public:

```powershell
Invoke-WebRequest "https://juan.webmasterpersonal.com/b6f59c9d2a4e4c1f9a8b7d6e5f4032ab.txt" -UseBasicParsing
```

Then submit the canonical homepage:

```powershell
Invoke-WebRequest "https://api.indexnow.org/indexnow?url=https%3A%2F%2Fjuan.webmasterpersonal.com%2F&key=b6f59c9d2a4e4c1f9a8b7d6e5f4032ab" -UseBasicParsing
```

Expected successful responses are `200 OK` or `202 Accepted`.
