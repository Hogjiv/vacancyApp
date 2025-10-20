"use client";
export function Tags({ value, onChange }) {
  const word = value.split(",");
  console.log(word);

  return (
    <div className="flex gap-2">
      <textarea
        className="bg-amber-300 text-black"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
{/* 
      {word.map((word, i) => (
        <span key={i}> {word} </span>
      ))} */}
    </div>
  );
}
 