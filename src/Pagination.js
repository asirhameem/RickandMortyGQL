import React, { Component } from 'react'
import { Link } from 'react-router-dom';





export default class Pagination extends Component {

    constructor(props){
        super(props);
        this.state = {
            pageNum: 0
        }
    }



    render() {
        var pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];
        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        

                        {pages.map(i=>(
                            <li className="page-item"><Link to={`/page/${i}`} className="page-link"> {i} </Link></li>
                        ))}
                        
                        
                    </ul>
                </nav>
                
            </div>
        )
    }
}
