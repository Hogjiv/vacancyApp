"use client";

import { action, link } from "./_actions/action";
import { Input } from "@/app/components/input";
import { useState } from "react";
import { Tags } from "@/app/components/tags";
import { Button } from "@/app/components/button"; 
import { getH1 } from "./_actions/pupeteer";

export default function Home(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  //const [header, setHeader] = useState("");
  const [h1, setH1] = useState("");
  const [isPup, setIsPup] = useState(false);

  async function handlePup() {
    setIsPup(true);
    const result = await getH1();
    setH1(result.h1);
    setIsPup(false);
  }
 

  //LINK:
  function handleChange(newValue: string): void {
    setValue(newValue);
  } 
  //TAGS
  const [tag, setTag] = useState("");
  function handleTag(newTag: string) {
    setTag(newTag);
    console.log("new tag set");
  }

  async function handleClick() {
    // tag
    if (tag) {
      try {
        const tagResult = await action({ tag });
        console.log("Tag:", tag);
      } catch (err) {
        console.error("Error sending tag:", err);
      }
    } else {
      console.log("Tag is empty");
    }

    // link
    if (value) {
      try {
        const linkResult = await link({ value });
        console.log("Value:", value);
      } catch (err) {
        console.error("Error sending link:", err);
      }
    } else {
      console.log("Link is empty");
    }
  }

  return (
    <div className=" flex justify-center items-center flex-col    text-white">
      <div className=" items-center justify-center flex flex-col w-full">
        <h2 className="">Tags:</h2>
        <Tags value={tag} onChange={handleTag} />
      </div>

      <div className="bg-red-900 items-center justify-center w-full flex flex-col">
        <h2> Links: </h2>
        <Input value={value} onChange={handleChange} />

        <Button className="bg-green-900" onClick={handleClick}>
          Send to back
        </Button>
      </div> 

      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <button
          onClick={handlePup}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isLoading ? "Loading..." : "Get H1"}
        </button>

        {h1 && (
          <div className="text-black">
            <p>H1: {h1}</p>
          </div>
        )}
      </div>
    </div>
  );
}
