## Personal website

- **Dev**: `cd web && npm install && npm run dev`
- **Build static**: `cd web && npm run build` (outputs to `web/out`)
- **Preview static**: `cd web && npx serve out`
- **Deploy to Firebase**: `cd web && npm run deploy`

Prereqs: Node 18+, `npx` available. Deploy requires a Firebase project (set in `.firebaserc`). Login once with `npx firebase-tools login`.


