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
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>

                        {pages.map(i=>(
                            <li class="page-item"><Link to={`/${i}`} className="page-link"> {i} </Link></li>
                        ))}
                        
                        
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}
