# Introduction

The app follows the code structure below:

```
./                              # root
├── src/
│   ├── _config/                # General application config options.
│   ├── _types/                 # Common types definitions
│   ├── assets/                 # App's assets
│   ├── components/             # Stateless UI components
│   ├── containers/             #
│   │   ├── App/                # Wraps page content and passes
│   │   └── DataProvider/       # App state provider
│   ├── utils/                  # Utillity code
│   ├── index.ts                # Main app file
│   └── index.html
├── .env                        # Env vars config file
├── tsconfig.json               # Typescript config file
└── package.json                # Project info, scrips, deps, etc...
```

# Development

Notice that it's required `npm version >= 5.2.0` to run this app, otherwise We recommend you to remove all `npx` entries from the script property on `package.json` and install Parcel as a global dependency (`npm i -g parcel-bundler`).

It's necessary to set up the value of `GITHUB_TOKEN` in `.env`. You can also change the value of any other environment varible inside that file.

Run the steps bellow in the project root directory.

1. `npm install`
2. `npm run build:dev`

The app will be up and running on [http://localhost:3000]("http://localhost:3000")

You can rebuild the page to any other organization on Github, you'll only need to change the `GITHUB_ORGANIZATION_LOGIN` value and run `rm -rf dist .cache`.

# Deployment

## Netlify

You can deploy this app on [Netlify](https://www.netlify.com/) following the steps below:

1. Log in with your Github/Gitlab account (Considering that you had forked this repository).
2. Click on **New site from git** button.
3. You will have to autheticate your account to give Netlify access to this repo on your account
4. Select the project
5. Fill up **Build Command** input field with `npm run build:prod` and **Public directory** with `dist`
6. Click on **Deploy site**
