import React from 'react';
import { render } from 'react-dom';
import { Carousel, Button, Row, Col, Thumbnail } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

const urlToFetch = username =>
  `http://localhost:8000/TextSum_Master_war_exploded/helloworld`;

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Sasanka',
      githubData: 'sasa',
      newsObject: [],

      image:
        'http://www.savvymom.ca/wp-content/uploads/fly-images/90221/rainy-day-690x435-c.jpg',
      news: [
        {
          title: 'Alarm Sense Integrating Optical Smoke Detector',
          description:
            'She claims Hutchison started sexually abusing her when she was 16.Hutchison, who was an assistant coach on the 2008 U.S.Hutchison is currently listed as the CEO of King Aquatics. Investigators have searched the Seattle home of a former U.S.Olympic Team swimming coach amid allegations that he sexually abused and took explicit photos of an Olympic swimmer when she was underage. Hutchison is alleged to have taken nude photos of Ariana Kukors when she was 17.Homeland Security launched an investigation on Jan. following a report from Kukors, according to the court documents.Kukors, now 28, said in a statement Wednesday that she went to police to report that Hutchison sexually assaulted her on trips and while training at Seattle area pools.',
          image: {
            url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdULOTwEOd1oKMLlw668s0cxqW1akruwEPK6AFuRIUMjIDP2AJ'
          }
        }
      ]
    };
  }

  componentWillMount() {}

  renderHeader = type => {
    return <h2>{type}</h2>;
  };

  renderArticle() {
    return (
      <span>
        <div className="articleHeader">
          {' '}
          Donuld Trump is going to do the neuclear bomb.{' '}
        </div>
        <img className="responsive" src="/assets/News/donuld.jpg" alt="" />
        <div className="articleBody">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
      </span>
    );
  }
  renderItem(newsArticle) {
    return (
      <div>
        <div class="col-lg-4 newsContainer">
          <img className="responsive" src="/assets/News/donuld.jpg" alt="" />
          <h1>CNCB . Phill Lebau</h1>

          <topic>Donuld decide to do the neuclear bomb</topic>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
          <Popup trigger={<h3> Read more >>> </h3>} modal closeOnDocumentClick>
            {this.renderArticle()}
          </Popup>

          <h5>2018-08-04 13:34pm</h5>
        </div>
      </div>
    );
  }
  renderGraph() {
    return (
      <VictoryChart
        animate="500"
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis tickValues={['Trumph', 'Russia', 'Kim Jon', 'U.S.A.']} />
        <VictoryAxis dependentAxis tickFormat={x => `${x / 100}%`} />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    );
  }

  fetchNews() {
    console.log("fetch news called")
    fetch('http://localhost:8000/TextSum_Master_war_exploded/helloworld')
      .then(result => {
        // Get the result
        // If we want text, call result.text()
        console.log(result);

        return result.json();
      })
      .then(jsonResult => {
        // Do something with the result
        console.log('+++++++++++++++');
        console.log(jsonResult);
        console.log(jsonResult.title)
      });
  }
  render() {
    // if (!this.state.githubData) return <p>Loading .... </p>;

    return (
      <div>
        <div className="container boxborder">
          <h6>Today's Highlights for your preference</h6>
          <h3> Taken through API call --> {this.state.githubData}</h3>
          {this.fetchNews()}
          {this.renderHeader('Politics')}
          {this.renderItem(this.state.news)}
          <div className="graph">{this.renderGraph()}</div>
        </div>
      </div>
    );
  }
}

export default News;
