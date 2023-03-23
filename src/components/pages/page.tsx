import React, { FC, useState } from "react";

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
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [attack, setAttack] = useState<number>(0);
  const [defense, setDefense] = useState<number>(0);
  const [form, setForm] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

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

  function handleCancel() {
    setName("");
    setImage("");
    setAttack(0);
    setDefense(0);
  }

  function handleCreate(): void {
    setForm(!form);
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value);
  }

  const filteredPokemons = pokemons.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="page">
      <div className="page--header">
        <Label name="Listado Pokemon"></Label>
        <div className="page--search">
          <Input
            placeholder="Buscar"
            onChange={handleSearch}
            iconLeft={<SearchIcon />}
          ></Input>
          <Button
            ornamentLeft={<AddIcon />}
            type="primary"
            onClick={handleCreate}
          >
            Nuevo
          </Button>
        </div>
        <div className="page--table">
          <Table data={filteredPokemons} />
        </div>
      </div>
      {form && (
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="page--body">
              <Label name="Ataque:"></Label>
              <Slider
                min={0}
                max={100}
                value={attack}
                onChange={(e) => setAttack(e)}
              />
            </div>
          </div>
          <div className="page--searchnew">
            <div className="page--body">
              <div className="page--name">
                <Label name="Imagen:"></Label>
              </div>
              <Input
                placeholder="URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="page--body">
              <Label name="Defensa:"></Label>
              <Slider
                min={0}
                max={100}
                value={defense}
                onChange={(e) => setDefense(e)}
              />
            </div>
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
      )}
      ;
    </div>
  );
};

export default Page;
