import { promises as fs } from "fs";

export async function getPosts() {
  let data = await fs.readFile("demo-data.json", "utf-8");
  return JSON.parse(data);
}

export async function getPost(id: string) {
  let data = await fs.readFile("demo-data.json", "utf-8");
  let posts = JSON.parse(data);
  let post  = posts.find((post: any) => post.id == id);
  return post;
}

export async function getTagPosts(tag: string) {
  let data = await fs.readFile("demo-data.json", "utf-8");
  let posts = JSON.parse(data);
  return posts.filter((post: any) => post.tags.includes(tag));
}