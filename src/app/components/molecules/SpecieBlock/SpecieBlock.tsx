import { FC } from "react";

export const SpecieBlock: FC<TProps> = ({ header, content }) => {
  return (
    <div className="flex flex-col">
      <h2>{header}</h2>
      <p>{content}</p>
    </div>
  );
};
