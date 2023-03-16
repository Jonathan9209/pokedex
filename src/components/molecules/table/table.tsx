import React, { FC } from "react";
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
  rows: Pokemon[];
}

const Table: FC<TableProps> = ({ rows }) => {
  return (
      <div className="table">
        <table>
          <tr>
            <th>
              <Label name={"Nombre"}></Label>
            </th>
            <th>
              <Label name={"Imagen"}></Label>
            </th>
            <th>
              <Label name={"Ataque"}></Label>
            </th>
            <th>
              <Label name={"Defensa"}></Label>
            </th>
            <th>
              <Label name={"Acciones"}></Label>
            </th>
          </tr>
          {rows?.map((pokemon)=>(
          <tr key={pokemon.id}>
            <td key={pokemon.name}>{pokemon.name}</td>
            <td key={pokemon.image}><img src={pokemon.image} alt="item pokemon"/></td>
            <td key={pokemon.attack}>{`${pokemon.attack}`}</td>
            <td key={pokemon.defense}>{`${pokemon.defense}`}</td>
            <td>
              <section className="table table--actions">
                <div className="table__icon">
                  <Button
                    isIcon
                    ornamentLeft={<BorderColorIcon />}
                    onClick={() => {}}
                  ></Button>
                </div>
                <div className="table__icon">
                  <Button
                    isIcon
                    ornamentLeft={<DeleteForeverIcon />}
                    onClick={() => {}}
                  ></Button>
                </div>
              </section>
            </td>
          </tr>
         ))} 
        </table>
      </div>
  );
};

export default Table;
