import React, { useState } from "react";
import TagInput from "./components/TagInput";

const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Tag Input Component</h1>
      <TagInput
        tags={tags}
        inputValue={inputValue}
        onChangeTags={setTags}
        onInputChange={setInputValue}
        separator="," 
        maxTags={10} 
      />
    </div>
  );
};

export default App;
