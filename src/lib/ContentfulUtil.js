import * as contentful from 'contentful'

const client = contentful.createClient({
  space: "",
  accessToken: "",
});

 const fetchAllBlogPosts = () =>
   client.getEntries({
     content_type: "post",
     order: "-sys.createdAt",
   });

 const fetchPostByPathName = pathName =>
   client.getEntries({
     content_type: "post",
     "fields.path[in]": pathName,
   });


export { fetchAllBlogPosts, fetchPostByPathName };
