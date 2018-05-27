import React from 'react';
import { render } from 'react-dom';
import { Button, Row, Col, Thumbnail } from 'react-bootstrap';
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
  { quarter: 4, earnings: 7 * 100 },
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
    return 
    <h6>{type}</h6>;
  };



  renderItem(item) {
    const { rating } = this.state;
    return (

      <div>
        <Row>
          <Col md={6}>
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
                        <CardTitle>{JSON.parse(this.state.newsObject.news[item].date)}</CardTitle>
                        <h3>Provide your feedback to improve expirience 
                       
                   </h3>
                      
                        <StarRatingComponent
                          name="rate1"
                          starCount={5}
                          value={rating}
                          onStarClick={this.onStarClick.bind(this)}
                        />
                        <br/>
                        <a href={JSON.parse(this.state.newsObject.news[item].url)}>View the original article from here</a>
                       
                      </CardBody>
                    </Card>
                  </div>
                  <br /><br />
                </div>
              )}
          </Col>
          {/* next article */}
          <Col md={6}>
            {this.state &&
              this.state.val && (
                <div>
                  <div>
                    <Card>
                      <br />
                      <CardHeader>{JSON.parse(this.state.newsObject.news[item+1].title)}</CardHeader>
                      <br />
                      <CardImg top width="100%" src={JSON.parse(this.state.newsObject.news[item+1].image)} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>{JSON.parse(this.state.newsObject.news[item+1].author)}</CardTitle>
                        <CardTitle>{JSON.parse(this.state.newsObject.news[item+1].source)}</CardTitle>
                        <CardText>{JSON.parse(this.state.newsObject.news[item+1].summary)}</CardText>
                        <CardTitle>{JSON.parse(this.state.newsObject.news[item+1].date)}</CardTitle>
                       <h3>Provide your feedback to improve expirience 
                       
                   </h3>
                       <StarRatingComponent
                          name="rate1"
                          starCount={5}
                        
                  
                        />
                          <br/>
                        <a href={JSON.parse(this.state.newsObject.news[item+1].url)}>View the original article from here</a>
                      
                      </CardBody>
                    </Card>
                  </div>
                  <br /><br />
                </div>
              )}
          </Col>
        </Row>

      </div>
    );
  }
  renderAbstractiveSummary() {
    return (
      <Card>
      <div className="abstractive">
      <br/>
      <CardText>Extractive summary - {this.state.newsObject.OriginalText}</CardText>
      <CardText>Abstractive summary - {this.state.newsObject.AbstractiveText}</CardText>
      </div>
      </Card>
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
        <VictoryAxis dependentAxis tickFormat={x => `${x / 10}%`} />
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
          <h2>Today's Highlights for your preference</h2>
          {this.renderHeader('General')}
          {this.renderItem(0)}
          {this.renderItem(2)}
          {this.renderItem(4)}
          {this.renderItem(6)}
          {this.renderItem(8)}     

          <h6>Abstractive Summary sample</h6><br/>
          {this.renderAbstractiveSummary()}
          <h6>Trending topics</h6>
          <div className="graph">{this.renderGraph()}</div>
        </div>
      </div>
    );
  }
}

export default News;
