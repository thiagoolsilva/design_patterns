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

import { DatabaseConnection as Singleton } from './database-connection';

export class Client {
  main(): void {
    const databaseConnection1 = Singleton.getInstance();
    const connectionStr1 = databaseConnection1.getConnection();
    console.log(`connectionStr1-->${connectionStr1}<--`);

    const databaseConnection2 = Singleton.getInstance();
    const connectionStr2 = databaseConnection2.getConnection();
    console.log(`connectionStr2 -->${connectionStr2}<--`);

    const compareConn = connectionStr1 === connectionStr2;
    console.log(`Checking connection hash: ${compareConn}`);
  }
}

new Client().main();
