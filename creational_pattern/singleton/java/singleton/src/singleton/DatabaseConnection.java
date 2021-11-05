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

public class DatabaseConnection {

	private static DatabaseConnection instance;
	private String connection = String.valueOf(hashCode());
	
	/**
	 * Create an instance of DatabaseConnection
	 */
	private DatabaseConnection() {}
	
	/**
	 * Get a singleton connection
	 * @return singleton connection
	 */
	public static synchronized DatabaseConnection getInstance() {
		if(instance == null) {
			instance = new DatabaseConnection();
		}
		return instance;
	}
	
	/**
	 * Return a connection
	 * @return fake connection
	 */
	public String getConnection() {
		return connection;
	}	
}

