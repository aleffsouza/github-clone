const defaultConfigOpts = {
  api: "https://api.github.com/graphql"
};

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

let organizationLogin = process.env.GITHUB_ORGANIZATION_LOGIN;
let token = GITHUB_TOKEN;

if (GITHUB_TOKEN === undefined) {
  const visitUrl =
    "https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line";
  throw new Error(
    `GITHUB_TOKEN environment variable is missing.\n Please, visit ${visitUrl}`
  );
}

export default {
  ...defaultConfigOpts,
  token,
  organizationLogin
};
