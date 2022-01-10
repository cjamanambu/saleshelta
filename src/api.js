import axios from "axios";

export const API = axios.create({
  baseURL: `https://myshelta.com/shelterbackend/public/api`,
});

export const ROUTES = {
  properties: `fetchpropertiesforsale`,
  blogs: `fetchblogsarticles`,
  property: `getpropertybypin`,
};
