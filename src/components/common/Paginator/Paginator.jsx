import React, { useState } from 'react';
import s from './Paginator.module.scss'




const Paginator = (props) => {
   let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   };

   let portionSize = props.pageSize;
   let portionCount = Math.ceil(props.totalUserCount / portionSize);
   let [portionNumber, setPortionNumber] = useState(1);
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
   let rightPortionPageNumber = portionNumber * portionSize;


   let pagination = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
      return <li onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p && s.selected}>{p}</li>
   });

   return (
      <div className={s.paginator}>
         {portionNumber > 1 &&
            <button className={s.pagBtn} onClick={() => (setPortionNumber(portionNumber - 1))}>prev</button>}
         <ul className={s.list}>{pagination}</ul>
         {portionCount > portionNumber &&
            <button className={s.pagBtn} onClick={() => (setPortionNumber(portionNumber + 1))}>next</button>}
      </div>
   );
}

export default Paginator;

