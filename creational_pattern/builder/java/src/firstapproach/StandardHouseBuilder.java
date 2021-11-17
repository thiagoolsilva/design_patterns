
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
package firstapproach;

public class StandardHouseBuilder implements IHouseBuilder {

	  private int bathroom;

	  private int kitchen;

	  private int livingRoom;

	  private int room;

	  private int balcony;
	  
	@Override
	public void setBathroom() {
		this.bathroom = 10;

	}

	@Override
	public void setKitchen() {
		this.kitchen = 5;
	}

	@Override
	public void setLivingRoom() {
		this.livingRoom = 2;
	}

	@Override
	public void setRoom() {
		this.room = 2;
	}

	@Override
	public void setBalcony() {
		this.balcony = 1;
	}

	@Override
	public HouseProduct build() {
		HouseProduct house = new HouseProduct();
		house.balcony = this.balcony;
		house.bathroom = this.bathroom;
		house.kitchen = this.kitchen;
		house.livingRoom = this.livingRoom;
		house.room = this.room;	
		
		return house;
	}

}
