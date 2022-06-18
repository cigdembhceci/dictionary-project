import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="defination">
        {props.meaning.definitions[0].definition} <br />
        <em> {props.meaning.definitions[0].example}</em>
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
