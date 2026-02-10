import { useState } from "react";
import languages from "../languages";

function Main() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <main>
      {/* BOTTONI */}
      {languages.map((language, index) => (
        <button
          key={index}
          className="btn btn-primary m-2"
          onClick={() => setSelectedLanguage(language)}
        >
          {language.title}
        </button>
      ))}

      {/* DESCRIZIONE */}
      {selectedLanguage && (
        <div className="container">
          <h2>{selectedLanguage.title}</h2>
          <p>{selectedLanguage.description}</p>
        </div>
      )}
    </main>
  );
}

export default Main;
