import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSelectedType} from "../redux/slices/deviceSlice";

const TypeBar = () => {
  const dispatch = useDispatch()
  const {types,selectedType} = useSelector(state => state.device)

  return (
    <ul className="list-group">
      {types.map((type) =>

        <li
          key={type.id}
          className={`list-group-item${type.id === selectedType?.id ? ' active' : ''}`}
          style={{cursor: 'pointer'}}
          onClick={() => dispatch(setSelectedType(type))}
        >{type.name}</li>
      )}

    </ul>
  );
};

export default TypeBar;