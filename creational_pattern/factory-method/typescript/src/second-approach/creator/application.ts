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

import { DocumentInterface } from '../product/document.interface';

export abstract class Application {
  private document: DocumentInterface;

  abstract createDocument(): DocumentInterface;

  public newDocument(): void {
    this.document = this.createDocument();
    this.document.open();
  }

  public saveDocument(): void {
    if (this.document) {
      this.document.save();
    }
  }

  public revertDocument(): void {
    if (this.document) {
      this.document.revert();
    }
  }
}
