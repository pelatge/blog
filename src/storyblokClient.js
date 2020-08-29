import StoryblokClient from "storyblok-js-client";

const token = process.env.SAPPER_APP_STORYBLOK_TOKEN;

const client = new StoryblokClient({
  accessToken: token,
});

export const defaultRequestConfig = {
  version: "draft",
};

export default client;
