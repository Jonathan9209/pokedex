import React, { useState } from "react";
import logo from "./logo.svg";
import "./app.scss";
import AddIcon from "@mui/icons-material/Add";
import Button from "./components/atoms/button/button";
import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Input from "./components/atoms/input/input";
import Slider from "./components/atoms/slider/slider";
import SearchIcon from '@mui/icons-material/Search';
import Label from "./components/atoms/label/label";
import Table from "./components/molecules/table/table";
import Page from "./components/organisms/page";


interface PokemonType{
  id: number;
  name: string;
  image: string;
  attack: number;
  defense: number;
}

function App() {
  
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  return (
    <div>
      <Button ornamentLeft={<AddIcon />} type="primary" onClick={() => {}}>
        Nuevo
      </Button>
      <Button ornamentLeft={<ClearIcon />} type="secondary" onClick={() => {}}>
        Cancelar
      </Button>
      <Button ornamentLeft={<SaveIcon />} type="secondary" onClick={() => {}}>
        Guardar
      </Button>
      <Button
        isIcon
        ornamentLeft={<DeleteForeverIcon />}
        onClick={() => {}}
      ></Button>
      <Button
        isIcon
        ornamentLeft={<BorderColorIcon />}
        onClick={() => {}}
      ></Button>
      <Button
        ornamentLeft={<SaveIcon />}
        disabled
        type="secondary"
        onClick={() => {}}
      >
        Guardar
      </Button>
      <div>
         <Input placeholder={"url"}></Input>
      </div>
      <div>
        <Slider name={"Ataque"} min={0} max={100}></Slider>
        <Slider name={"Defensa"} min={0} max={100}></Slider>
      </div>
      <div>
        <Input placeholder="Buscar" iconLeft={<SearchIcon />}></Input>
      </div>
      <div>
        <p><Label name={"Nombre"}></Label></p>
      </div>
      <hr />
      <hr /> 
      <Table rows={[]}></Table>
      
    <hr />
    <hr />

    <div>

      <Page pokemons={pokemons} handleChangePokemons={setPokemons}></Page>
    </div>

    </div>
  );
}

export default App;
