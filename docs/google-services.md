# Google services

Google integration is link-based. No Google account tokens, OAuth client secrets, inbox data, or Drive file contents are requested or stored by this feature.

- Open Gmail, Drive, Docs, Sheets, or Slides from the Google services dialog. It is available in the composer, drawer, settings, and an optional customizable right-sidebar widget.
- Attach up to four Google file/folder sharing links to a post, with optional display names. Only supported HTTPS file paths on the exact `drive.google.com` and `docs.google.com` hosts are accepted. Duplicate links to the same file are rejected.
- Links appear as cards, survive account-state saves/reloads, and are preserved by quote reposts. File contents are not uploaded or embedded. Google permissions remain unchanged; a recipient may need the file owner to grant access.
- The post share button opens a preview of the Gmail subject/body. The user chooses Gmail or their email app, selects recipients, reviews the email, and sends it. No email is automatically sent and no draft is saved via an API. Clipboard failure exposes a selectable post URL for manual copying.
- The email includes the post text, quoted text, attached Google links, and a `#post-ID` deep link. Posts are currently saved per account in `/api/state`, and Site access is also restricted. A different account may not be able to view the post URL. Sharing does not change either access boundary.
- Japanese, English, and Korean labels are provided. The PWA app-shell cache includes the helper script. Opening Google services/files still needs an internet connection.

Direct inbox access, Drive file picking, uploads, and automatic synchronization are not implemented. Those require a separately configured Google Cloud OAuth client, appropriate scopes, user consent, and secure server-side token handling. ChatGPT plugin credentials must not be embedded in this Site.

Run the focused unit and UI-handler tests with:

```sh
node --test scripts/google-services.test.cjs
```

The tests use isolated DOM stubs, not a live browser or Google account. Live Gmail delivery and private Google-file permissions are not exercised by these tests.
