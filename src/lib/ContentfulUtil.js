import * as contentful from 'contentful'

const client = contentful.createClient({
  space: "dcqv2c8zlndc",
  accessToken: "PszWEzV9-KsxnHn49B29OfdEVsb7RI8UNq16V9Xbi7Q",
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