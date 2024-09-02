import { speciesArray } from "@/app/components/molecules/SpecieBlock/constants";
import { SpecieBlock } from "@/app/components/molecules/SpecieBlock/SpecieBlock";

const Species = () => {
  return (
    <div>
      {speciesArray.map((specie) => (
        <SpecieBlock
          key={specie.id}
          header={specie.header}
          content={specie.content}
        />
      ))}
    </div>
  );
};

export default Species;
