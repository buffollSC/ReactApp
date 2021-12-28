import React from "react";
import { getPagesArray } from "../../../utils/GetPageCount";
import classes from "./Pagination.module.css";

const Pagination = ({page, totalPages, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    
    return(
        <div className = {classes.page_wrapper}>
            {pagesArray.map(pag => 
            <span 
                className = {page === pag ? classes.page_current : classes.page}
                key = {pag}
                onClick = {() => changePage(pag)}
            >
                {pag}
            </span> 
            )}
      </div>
    )
}

export default Pagination;