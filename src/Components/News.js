import React from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const defaultProps = {
    country: "in",
    pageSize: 6,
    title: 'Top Indian Headlines',
    category: 'general',
};
class News extends React.Component {
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            articles: [],
            page: 1,
            totalresults: 0
        };

        document.title = `${this.capitalizeFirstLetter(this.props.category === 'general' ? 'Akhbaar - News and Current Affairs' : this.props.title)}`;

    }
   componentDidMount= async ()=>{
       let url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=011faaca62e445a991ead696311aef05';
       let data = await fetch(url); 
       let parsedData = await data.json();  
       this.setState({
           articles:parsedData.articles
       })


   }

    render() {
        return <div className='container my-3'>
            <h2 className='m-4 text-center'>{this.props.title}</h2>

            {this.state.loading && <Spinner/>}



            <div className="container">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem key={element.url} title={element.title} description={element.description} imgurl={element.urlToImage ? element.urlToImage : 'https://www.businessinsider.in/photo/91145254/skywatching-on-april-30-venus-and-jupiter-will-look-like-they-are-about-to-collide.jpg?imgsize=17006'} url={element.url} author={element.author} date={element.publishedAt}
                                source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>

            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>

        </div>;
    }
}

News.defaultProps = defaultProps;
// #endregion

export default News;