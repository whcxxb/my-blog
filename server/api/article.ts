export default async () => {
  const config = useRuntimeConfig();
  // Access public variables
  const result = await $fetch(`/api/articleList`, {
    baseURL: config.public.baseURL,
    // headers: {
    //   // Access a private variable (only available on the server)
    //   Authorization: `Bearer ${config.apiSecret}`,
    // },
  });
  return result;
};
