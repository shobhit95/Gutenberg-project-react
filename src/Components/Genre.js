import React, { Component } from 'react';
import axios from 'axios';

class Genre extends Component {
    state = [];

    async componentDidMount() {
        console.log("called")
        let genre = this.props.match.params.genre;
        var bookArr = [];
        let search = true;
        if (genre) {
            axios.get(`http://skunkworks.ignitesol.com:8000/books/?mime_type=image`)
                .then(res => {
                    if (res.status == 200) {
                        res.data.results.map((books) =>
                            books.subjects.map((subj) => {
                                if (subj.toLowerCase().indexOf(genre) != -1) {
                                    bookArr.push(books);
                                }
                            })
                        )
                    }
                    const uniqueBooks = Array.from(new Set(bookArr));//will give unique values 
                    this.setState(uniqueBooks);
                })
        }
    }

    searchBook = (e) => {
        let search = e.target.value;
        var bookArrSearch = [];
        if (search === '') {
            console.log("state", this.state);
            this.componentDidMount();
        } else {
            this.state = [];
            let url = encodeURI('http://skunkworks.ignitesol.com:8000/books?search=' + search);
            console.log(url)
            axios.get(`http://skunkworks.ignitesol.com:8000/books/?mime_type=image`)
                .then(res => {
                    if (res.status == 200) {
                        console.log(res)
                        res.data.results.map((books) =>
                            bookArrSearch.push(books)
                        )
                    }
                    const uniqueBooks = Array.from(new Set(bookArrSearch));//will give unique values 
                    this.setState(uniqueBooks);
                })
        }

    }

    render() {
        return (
            <div className="container">
                <span style={{ display: 'flex', padding: '8px', alignItems: "center" }}>
                    <a href="/" style={{ color: "white" }}>
                        <img src={'../../Assets/Back.svg'} className="imgSrc"></img>
                    </a>&nbsp;&nbsp;
                    <h1 style={{ textTransform: "capitalize" }}><b>{this.props.match.params.genre}</b></h1>
                </span>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.searchBook} aria-label="Search"></input>
                <div className="row" style={{ marginTop: "40px" }}>
                    {Object.entries(this.state).map(([key, book]) =>
                        <div className="col-md-2">
                            <img className="card-img-top cardCustom" src={book.formats["image/jpeg"]} alt="No image found!"></img>
                            <div style={{ textTransform: "uppercase" }}><label><small >{book.title}</small></label></div>
                            <div style={{ textTransform: "uppercase" }} className="card-text"><small className="text-muted">{book.authors[0].name}</small></div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Genre;