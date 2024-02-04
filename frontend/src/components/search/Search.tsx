import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onClick, search, handleChange}: Props): JSX.Element => {

  return (
    <div>
        <input value={search} onChange={handleChange}></input>
        <button onClick={onClick}>Click me!</button>
    </div>
  )
}

export default Search