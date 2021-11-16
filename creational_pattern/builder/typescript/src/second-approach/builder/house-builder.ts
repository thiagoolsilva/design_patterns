/*
 * Copyright (c) 2021  Thiago Lopes da Silva
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { House } from '../product/house';
import { HouseBuilderInterface } from './house-builder.interface';

export class HouseBuilder implements HouseBuilderInterface {
  private bathroom: number;

  private kitchen: number;

  private livingRoom: number;

  private room: number;

  private balcony: number;

  setBathroom(quantity: number): HouseBuilderInterface {
    this.bathroom = quantity;
    return this;
  }

  setKitchen(quantity: number): HouseBuilderInterface {
    this.kitchen = quantity;
    return this;
  }

  setLivingRoom(quantity: number): HouseBuilderInterface {
    this.livingRoom = quantity;
    return this;
  }

  setRoom(quantity: number): HouseBuilderInterface {
    this.room = quantity;
    return this;
  }

  setBalcony(quantity: number): HouseBuilderInterface {
    this.balcony = quantity;
    return this;
  }

  build(): House {
    const house = new House();
    house.balcony = this.balcony;
    house.bathroom = this.bathroom;
    house.kitchen = this.kitchen;
    house.livingRoom = this.livingRoom;
    house.room = this.room;

    return house;
  }
}
