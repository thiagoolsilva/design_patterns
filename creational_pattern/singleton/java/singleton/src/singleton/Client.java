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

package singleton;

public class Client {

	public static void main(String[] args) {
		DatabaseConnection connection1 = DatabaseConnection.getInstance();
		String fakeConn = connection1.getConnection();
		
		DatabaseConnection connection2 = DatabaseConnection.getInstance();
		String fakeConn2 = connection2.getConnection();
		
		boolean isSameConn = fakeConn == fakeConn2;
		
		System.out.println("Connection 1: "+fakeConn);
		System.out.println("Connection 2: "+fakeConn2);
		System.out.println("Is same connection hash code "+isSameConn);
	}
}
