export default async (id: string) => {
  const config = useRuntimeConfig();
  const result = await $fetch(`/api/articleDetail/${id}`, {
    baseURL: config.public.baseURL,
  });
  return result;
};
