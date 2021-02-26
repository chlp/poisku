import React from 'react';
import { NameForm } from './Form';
export const App: React.FC<{}> = () => (
  <div>
    <h1>Hello React</h1>
    <form>
      <label>
        Имя:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Отправить" />
    </form>
    <NameForm msg="asd"></NameForm>
  </div>
);
