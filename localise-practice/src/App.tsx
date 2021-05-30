import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Trans, useTranslation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation()

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className="App">
      <select>
      <option value="en" onClick={() => {changeLanguage("en")}}>EN</option>
      <option value="jp" onClick={() => {changeLanguage("jp")}}>JP</option>
      </select>
      <button onClick={() => {changeLanguage("en")}}>EN</button>
      <button onClick={() => {changeLanguage("jp")}}>JP</button>
      <hr />
       <Trans i18nKey="description.part1">
         test 1
         </Trans>
         <div>{t("description.part2")}</div>
    </div>
  );
}

export default App;
