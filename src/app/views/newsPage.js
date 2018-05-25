import React from 'react';
import { render } from 'react-dom';
import { Carousel, Button, Row, Col, Thumbnail } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import $ from 'jquery';
import {
  Card, CardImg, CardText, CardBody, CardHeader,
  CardTitle, CardSubtitle
} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';



const data = [
  { quarter: 1, earnings: 2 * 100 },
  { quarter: 2, earnings: 6 * 100 },
  { quarter: 3, earnings: 5 * 100 },
  { quarter: 4, earnings: 10 * 100 },
  { quarter: 5, earnings: 4 * 100 }
];

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Sasanka',
      githubData: 'sasa',
      newsObject: [],
      val: '',
      text: '',
      rating: 1,

    };
    {
      this.fetchNews();
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  renderHeader = type => {
    return <h2>{type}</h2>;
  };



  renderItem(item) {
    const { rating } = this.state;
    return (

      <div>
        <div className="row">
        <div class="col-6 newsContainer">
          {this.state &&
            this.state.val && (
              <div>

                <div>
                  <Card>
                    <br />
                    <CardHeader>{JSON.parse(this.state.newsObject.news[item].title)}</CardHeader>
                    <br />
                    <CardImg top width="100%" src={JSON.parse(this.state.newsObject.news[item].image)} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{JSON.parse(this.state.newsObject.news[item].author)}</CardTitle>

                      <CardTitle>{JSON.parse(this.state.newsObject.news[item].source)}</CardTitle>
                      <CardText>{JSON.parse(this.state.newsObject.news[item].summary)}</CardText>
                      <h4>Original article :{JSON.parse(this.state.newsObject.news[item].url)}</h4>
                      <CardTitle>{JSON.parse(this.state.newsObject.news[item].date)}</CardTitle>
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                      />
                    </CardBody>
                  </Card>

                </div>
                <br /><br />


              </div>


            )}
          
        </div>

        </div>

      </div>
    );
  }
  renderAbstractiveSummary() {
    return (
      <div>
        <p>Extractive summary - {this.state.newsObject.OriginalText}</p>
        <p>Abstractive summary - {this.state.newsObject.AbstractiveText}</p>
      </div>
    );
  }
  renderGraph() {
    return (
      <VictoryChart
        animate="500"
        domainPadding={10}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={['JC Penny', 'Salesforce', 'Mc Donuld', 'U.S.A.', 'NYSE']}
        />
        <VictoryAxis dependentAxis tickFormat={x => `${x / 100}%`} />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    );
  }

  fetchNews() {
    console.log('fetch news called');
    fetch('http://localhost:8080/TextSum_Master_war_exploded/getSummarizedNews')
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState(() => ({ newsObject: jsonResult }));
        this.setState(() => ({ val: 1 }));
        console.log(this.state.newsObject);
        console.log(this.state.newsObject.news[0].title);
      });
  }





  render() {


    // if (!this.state.githubData) return <p>Loading .... </p>;

    return (

      <div>
        <div className="container boxborder">
          <h6>Today's Highlights for your preference</h6>
          {this.renderHeader('General')}
          {this.renderItem(0)}
          {this.renderItem(1)}   
          {this.renderItem(2)}      

          <h6>Abstractive Summary sample'</h6>
          {this.renderAbstractiveSummary()}
          <h6>Trending topics</h6>
          <div className="graph">{this.renderGraph()}</div>
        </div>
      </div>
    );
  }
}

export default News;
