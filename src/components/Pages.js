import React from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../redux/slices/deviceSlice";

const Pages = () => {
  const dispatch = useDispatch()
  const {totalCount, limit, page} = useSelector(state => state.device)
  const pageCount = Math.ceil(totalCount / limit)
  const pages = []

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }
  console.log(totalCount);
  return (
    <Pagination className={'mt-5'}>
      {pages.map(item =>
        <Pagination.Item
          key={item}
          active={page === item}
          onClick={() => dispatch(setPage(item))}
        >
          {item}</Pagination.Item>
      )}
    </Pagination>
  );
};

export default Pages;