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

export class StandardHouseBuilder implements HouseBuilderInterface {
  private bathroom: number;

  private kitchen: number;

  private livingRoom: number;

  private room: number;

  private balcony: number;

  setBathroom(): void {
    this.bathroom = 2;
  }

  setKitchen(): void {
    this.kitchen = 1;
  }

  setLivingRoom(): void {
    this.livingRoom = 3;
  }

  setRoom(): void {
    this.room = 4;
  }

  setBalcony(): void {
    this.balcony = 2;
  }

  build(): House {
    const house = new House();
    house.bathroom = this.bathroom;
    house.kitchen = this.kitchen;
    house.livingRoom = this.livingRoom;
    house.room = this.room;
    house.balcony = this.balcony;

    return house;
  }
}
