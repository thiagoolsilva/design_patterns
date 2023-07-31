
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

public class HouseProduct {

	public int bathroom;

	public int kitchen;

	public int livingRoom;

	public int room;

	public int balcony;

	@Override
	public String toString() {
		StringBuilder strBuilder = new StringBuilder();
		return strBuilder.append("Bathroom " + this.bathroom).append(" kitchen " + this.kitchen)
				.append(" livingRoom " + this.livingRoom).append(" room " + this.room)
				.append(" balcony " + this.balcony).toString();

	}
}
