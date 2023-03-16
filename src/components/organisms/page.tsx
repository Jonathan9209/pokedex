import { FC, useState } from "react";

import "./page.scss";
import Label from "../atoms/label/label";
import AddIcon from "@mui/icons-material/Add";
import Button from "../atoms/button/button";
import Table from "../molecules/table/table";
import Slider from "../atoms/slider/slider";
import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../atoms/input/input";

interface PokemonType {
  id: number;
  name: string;
  image: string;
  attack: number;
  defense: number;
}
interface PageProps {
  pokemons: PokemonType[];
  handleChangePokemons: (newPokemons: PokemonType[]) => void;
}

const Page: FC<PageProps> = ({ pokemons, handleChangePokemons }) => {
  const [id, setId] = useState<number>(0);
  const [name, setNombre] = useState<string>("");
  const [image, setImagen] = useState<string>("");
  const [attack, setAtaque] = useState<number>(0);
  const [defense, setDefensa] = useState<number>(0);

  function handleSubmit() {
    if (name === "" || image === "") alert("los campos deben ser completados");

    const newPokemon = {
      id,
      name,
      image,
      attack,
      defense,
    };

    handleChangePokemons([...pokemons, newPokemon]);
    alert(`Pokemon ${newPokemon.name} agregado!`);
  }

  function handleCancel() {}

  function handleCreate(): void {}

  return (
    <div className="page">
      <div className="page--header">
        <Label name="Listado Pokemon"></Label>
        <div className="page--search">
          <Input placeholder="Buscar" iconLeft={<SearchIcon />}></Input>
          <Button
            ornamentLeft={<AddIcon />}
            type="primary"
            onClick={handleCreate}
          >
            Nuevo
          </Button>
        </div>
        <div className="page--table">
          <Table rows={pokemons}/>
        </div>
      </div>
      <div className="page--header">
        <Label name="Nuevo Pokemon"></Label>
        <div className="page--searchnew">
            <div className="page--body">
            <div className="page--name">
              <Label name="Nombre:"></Label>
            </div>
            <Input
              placeholder="Nombre"
              value={name}
              onChange={(e) => setNombre(e)}
            />
          </div>
          <Slider
            min={0}
            max={100}
            value={attack}
            onChange={(e) => setAtaque(e)}
            name={"Ataque"}
          />
        </div>
        <div className="page--searchnew">
          <div className="page--body">
            <div className="page--name">
              <Label name="Imagen:"></Label>
            </div>
            <Input
              placeholder="URL"
              value={image}
              onChange={(e) => setImagen(e)}
            />
          </div>
          <Slider
            min={0} 
            max={100}
            value={defense}
            name="Defensa"
            onChange={(e) => setDefensa(e)}
          />
        </div>
        <div className="page--searchnew">
          <Button
            ornamentLeft={<SaveIcon />}
            type="secondary"
            onClick={handleSubmit}
          >
            Guardar
          </Button>
          <Button
            ornamentLeft={<ClearIcon />}
            type="secondary"
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
