import React from 'react';

class NewsItem extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        let {title,description,imgurl,url,author,date,source} = this.props;
        return <div>
            <div className="card my-3">
                <img src={imgurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title} 
                        
                        <span className="badge bg-danger m-2">{source}</span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text  text-muted ">By {author?author:'Unknown'} at {new Date(date).toGMTString()}</p>
                        <a rel='noreferrer' href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
            </div>
        </div>;
    }
}

export default NewsItem;