import React, { useState, useEffect } from "react";

// Define types for the API response
interface Definition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface WordData {
  word: string;
  phonetic?: string;
  meanings: Meaning[];
  phonetics?: { audio?: string }[]; // phonetics can be an array, and audio is optional
}

const WordSearch = ({ word }: { word: string }) => {
  const [result, setResult] = useState<WordData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!word) return; // Don't fetch if word is empty

    const fetchWord = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        if (!response.ok) throw new Error("Word not found.");
        const data = await response.json();
        setResult(data[0]); // Assuming the first result in the array
        setError("");
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message); // Safely access the error message
        } else {
          setError("An unknown error occurred.");
        }
        setResult(null);
      }
    };

    fetchWord();
  }, [word]);

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  // Type Guard to check if phonetics is defined and has audio
  const hasPhoneticAudio = (phonetics?: { audio?: string }[]): boolean => {
    if (!phonetics) return false;
    return phonetics && phonetics.length > 0 && !!phonetics[0].audio;
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div>
          <h2>{result.word}</h2>
          {result.phonetic && (
            <p>
              <strong>Phonetic:</strong> {result.phonetic}
            </p>
          )}

          {/* Check if phonetic audio exists using the type guard */}
          {hasPhoneticAudio(result.phonetics) && (
            <div>
              <button onClick={() => playAudio(result.phonetics![0].audio!)}>
                Play Audio
              </button>
            </div>
          )}

          {result.meanings.map((meaning, index) => (
            <div key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.map((def, i) => (
                  <li key={i}>{def.definition}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordSearch;
