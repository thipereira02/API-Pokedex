import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import PokemonUser from "./PokemonUser";

@Entity("pokemon")
export default class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column()
  image: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  baseExp: number;

  @Column()
  description: string;

  @OneToMany(() => PokemonUser, pokemonUser => pokemonUser.pokemon)
  pokemonUsers: PokemonUser[]
}