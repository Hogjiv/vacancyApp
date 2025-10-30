"use server";

export async function action(data: { tag: string }) {
  console.log("Server received tag:", data.tag);
  return "tag done";
}

export async function link(data: { value: string }) {
  console.log("Server received link:", data.value);
  return "link done";
}
