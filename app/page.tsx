"use client";

import { action } from "./_actions/action";
import { Input } from "@/app/components/input";
import { useState } from "react";
import { Tags } from "@/app/components/tags";
import { Button } from "@/app/components/button";

export default function Home(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [tag, setTag] = useState("");

  function handleChange(newValue: string): void {
    setValue(newValue);
  }
  function handleTag(newTag: string) {
    setTag(newTag);
  }

  async function handleClick() {
    console.log(value, tag);
    await action({value, tag});
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
    </div>
  );
}
