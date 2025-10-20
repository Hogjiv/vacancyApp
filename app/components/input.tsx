"use client";

type InputProps = {
  value: String;
  onChange: (newValue: string) => void;
};

export function Input({ value, onChange }: InputProps): JSX.Element {
  return (
    <div className="text-white text-center ">
      <textarea
        placeholder="privet"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=" bg-amber-300    text-black" 
      ></textarea>
    </div>
  );
}
