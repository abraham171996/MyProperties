import sanityClient from "@sanity/client";
import imageurlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "dnvf24sz",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:'skSZ7EiDz6Wngo1EoJvQddH1ZYs6QSHO1wndyg7ORA7osCDlWm98gHpBnSIeWuHt62KFcR4TukAreyp0ZPNII3Rlh5PKenLjaWOpVzn4KKgpJDedJSoyCtLoY6C8Hb09JT1ppRJQg55auvNJzdTyzTckdqiSTGOsFQGiXqZhViwF3MINH0US',
  useCdn: true,
});
const builder = imageurlBuilder(client);
export const urlFor = (source:any) => {
  return builder.image(source);
};
