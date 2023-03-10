import React, { FC } from "react";
import "./table.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Label from "../../atoms/label/label";
import Button from "../../atoms/button/button";

interface TableType {
  nombre: string;
  imagen: string;
  ataque: number;
  defensa: number;
}

interface TableProps {
  elements: TableType[];
}

const Table: FC<TableProps> = ({ elements }) => {
  return (
    <div>
        <h1>HOOLA</h1>
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
          <tr>
            <td>Ivasaur</td>
            <td>Inserte imagen</td>
            <td>65</td>
            <td>38</td>
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
        </table>
      </div>
    </div>
  );
};

export default Table;
