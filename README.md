# backend
Backend repo for the Chef Portfolio Build Week project


USER ENDPOINTS

POST req for registering a user - /api/auth/register - It requires a username and password, an email is also accepted but not required, and it sends a token once registered

POST req for logging in a user - /api/auth/login - It requires a username and password, an email is also accepted but not required, and it sends a token once log in is verified

GET req to - api/auth/logout - logs out user

GET req to retrieve each users posts - /api/post/:username


POST ENDPOINTS

GET req to see all posts by users (on feed) - /api/post - allows any user to browse all posts

POST req to add a new item to the feed - /api/post/create - requires a title, category,& description. We also accept an imgURL, location, and username as optional inputs

DELETE req to delete a post - api/post/delete/:id - use id of post to delete it

PUT req to update a post - /api/post/update/:id - requires a title, category,& link and if seen & public are true or false to be able to update. We also accept an imgURL, location, and username as optional inputs