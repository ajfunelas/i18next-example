import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Trans, useTranslation } from 'react-i18next';

function App() {
	const { t, i18n } = useTranslation()

	const changeLanguage = (language: any) => {
		i18n.changeLanguage(language)
	}

	const [value, setValue] = useState("")

	const options = [
		{ value: "en", text: "English" },
		{ value: "vi", text: "Vietnamese" },
		{ value: "tg", text: "Tagalog" },
	]

  return (
    <div className="App">
      
      <button onClick={() => {changeLanguage("en")}}>EN</button>
      <button onClick={() => {changeLanguage("jp")}}>JP</button>
      <hr />
       {/* <Trans i18nKey="description.part1">
         test 1
         </Trans>
         <div>{t("description.part2")}</div> */}
         <div>{t('this is a sentence')}</div>
         <div>{t('how are you?')}</div>
    </div>
  );
}

export default App;
