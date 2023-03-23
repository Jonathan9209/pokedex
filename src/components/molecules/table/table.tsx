import { FC } from "react";
import "./table.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Label from "../../atoms/label/label";
import Button from "../../atoms/button/button";

interface Pokemon {
  name: string;
  image: string;
  attack: number;
  defense: number;
  id: number;
}

interface TableProps {
  data: Pokemon[];
}

const Table: FC<TableProps> = ({ data: pokemons }) => {
  return (
    <div className="table">
      <table className="table__element">
        <tr className="table__row">
          <th className="table__colum-header">
            <Label name={"Nombre"}></Label>
          </th>
          <th className="table__colum-header">
            <Label name={"Imagen"}></Label>
          </th>
          <th className="table__colum-header">
            <Label name={"Ataque"}></Label>
          </th>
          <th className="table__colum-header">
            <Label name={"Defensa"}></Label>
          </th>
          <th className="table__colum-header">
            <Label name={"Acciones"}></Label>
          </th>
        </tr>
        {pokemons?.map((pokemon) => (
          <tr key={pokemon.id} className="table__row">
            <td key={pokemon.name} className="table__colum">
              {pokemon.name}
            </td>
            <td key={pokemon.image} className="table__colum">
              <img src={pokemon.image} alt="item pokemon" width={"120px"} />
            </td>
            <td
              key={pokemon.attack}
              className="table__colum"
            >{`${pokemon.attack}`}</td>
            <td
              key={pokemon.defense}
              className="table__colum"
            >{`${pokemon.defense}`}</td>
            <td className="table__colum">
              <div className="table__actions">
                <Button
                  isIcon
                  ornamentLeft={<BorderColorIcon/>}
                  onClick={() => {}}
                ></Button>
                <Button
                  isIcon
                  ornamentLeft={<DeleteForeverIcon />}
                  onClick={() => {}}
                ></Button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
