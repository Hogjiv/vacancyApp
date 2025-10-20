"use server"; // очень важно! отмечает, что это серверная функция

export async function action(data: { value: string; tag: string;}) {
  console.log("Server received all: ", data); 
  return "done";
}
