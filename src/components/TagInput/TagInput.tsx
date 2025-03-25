import React from "react";
import "./TagInput.css";

interface TagInputProps {
  tags: string[];
  inputValue: string;
  onChangeTags: (newTags: string[]) => void;
  onInputChange: (value: string) => void;
  separator?: string;
  maxTags?: number;
}

const TagInput: React.FC<TagInputProps> = ({
  tags,
  inputValue,
  onChangeTags,
  onInputChange,
  separator = ",",
  maxTags
}) => {
  const addTag = (input: string) => {
    const newTags = input
      .split(separator) 
      .map(tag => tag.trim()) 
      .filter(tag => tag && !tags.includes(tag));

    if (newTags.length > 0) {
      const updatedTags = [...tags, ...newTags].slice(0, maxTags); 
      onChangeTags(updatedTags);
      onInputChange(""); 
    }
  };

  const removeTag = (index: number) => {
    onChangeTags(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTag(inputValue);
    }
  };

  const handleBlur = () => {
    if (inputValue.trim()) addTag(inputValue);
  };

  return (
    <div className="tag-input-container">
      <div className="tags-wrapper">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
            <button className="remove-tag" onClick={() => removeTag(index)}>x</button>
          </span>
        ))}
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder="Add tags"
        />
      </div>
    </div>
  );
};

export default TagInput;
