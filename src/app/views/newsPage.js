import React from 'react';
import { render } from 'react-dom';
import { Carousel, Button, Row, Col, Thumbnail } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import $ from 'jquery';

const urlToFetch = username =>
  `http://localhost:8000/TextSum_Master_war_exploded/helloworld`;

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
      image:
        'http://www.savvymom.ca/wp-content/uploads/fly-images/90221/rainy-day-690x435-c.jpg'
      // news: [
      //   {
      //     title: 'Alarm Sense Integrating Optical Smoke Detector',
      //     description:
      //       'She claims Hutchison started sexually abusing her when she was 16.Hutchison, who was an assistant coach on the 2008 U.S.Hutchison is currently listed as the CEO of King Aquatics. Investigators have searched the Seattle home of a former U.S.Olympic Team swimming coach amid allegations that he sexually abused and took explicit photos of an Olympic swimmer when she was underage. Hutchison is alleged to have taken nude photos of Ariana Kukors when she was 17.Homeland Security launched an investigation on Jan. following a report from Kukors, according to the court documents.Kukors, now 28, said in a statement Wednesday that she went to police to report that Hutchison sexually assaulted her on trips and while training at Seattle area pools.',
      //     image: {
      //       url:
      //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdULOTwEOd1oKMLlw668s0cxqW1akruwEPK6AFuRIUMjIDP2AJ'
      //     }
      //   }
      // ]
    };
    {
      this.fetchNews();
    }
  }

  renderHeader = type => {
    return <h2>{type}</h2>;
  };

  renderArticle() {
    return (
      <span>
        <div className="articleHeader">
          {' '}
          JC Penney CEO Marvin Ellison quits for top job at Lowe's and tells
          staff it was a once in a lifetime opportunity{' '}
        </div>
        <img className="responsive" src="/assets/News/donuld.jpg" alt="" />
        <div className="articleBody">
          Six Flags Entertainment Corporation announced Tuesday that it has
          agreed to acquire the lease rights to operate five parks, including
          Frontier City and White Water Bay in Oklahoma City.\nThe theme park
          group has entered into a purchase agreement with affiliates of Premier
          Parks LLC, and the five parks are owned by EPR Properties.\nSix Flags
          is the largest regional theme park operator in the world.\nThe other
          three include Wet n^ Wild Splashtown in Houston, Wet n^ Wild Phoenix
          and Darien Lake near Buffalo, New York.\n“Today’s announcement
          represents another milestone in our strategic North American growth
          initiative to seek out park acquisitions that expand our addressable
          market,” Jim Reid-Anderson, Six Flags chairman, CEO and president,
          said in a news release.\n“These are all fantastic properties that
          complement our existing portfolio and provide tremendous added value
          and cross-visitation opportunities for our extensive Membership and
          Season Pass base.”\nThe purchase of Premier Parks, LLC would make Six
          Flags the largest waterpark operator in North America, according to a
          news release.\n“We are thrilled to welcome these outstanding
          properties and employees into our family of parks and look forward to
          sharing the thrill of Six Flags with guests of all ages in these key
          markets,” Reid-Anderson said.\nThe transactions are expected to close
          in June and are subject to customary closing conditions, officials
          said.\nMore information about the transaction can be found
          here.\nHearst Television participates in various affiliate marketing
          programs, which means we may get paid commissions on purchases made
          through our links to retailer sites.\n"
        </div>
      </span>
    );
  }

  // renderItem(newsArticle){
  //   var news = [];
  //   for (var i = 0; i < this.state.newsObject.news[0]; i++) {
  //     news.push(
  //       <div>
  //             {this.state && this.state.val &&
  //                 <div>
  //                   {
  //                     this.state.newsObject.news[0].title
  //                   }
  //                 </div>
  //               }
  //       </div>
  //     );
  //   }
  // return news;
  // }

  renderItem(newsArticle) {
    return (
      <div>
        <div class="col-lg-12 newsContainer">
          <img className="responsive" src="/assets/News/donuld.jpg" alt="" />

          {this.state &&
            this.state.val && (
              <div>
                {/* {this.state.newsObject.map((item, index) => (
                  <span className="indent" key={index} />
                ))} */}

                <h6>{this.state.newsObject.news[1].title}</h6>
                <br />
                {this.state.newsObject.news[1].summary}
                {/* {this.state.text} */}
                <h1>{this.state.newsObject.news[1].author}</h1>
                <h1>{this.state.newsObject.news[1].source}</h1>
              </div>
            )}

          {/* <h1> CNCB . Phill Lebau</h1> */}
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
    fetch('http://localhost:8000/TextSum_Master_war_exploded/getSummarizedNews')
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

  // fetchJSON() {
  //   return (
  //     <div>
  //       <h6>Data block</h6>
  //       {this.state.data.newsObject.map(function(newsArticle, i) {
  //         return <h6 key={'newsArticle-' + i}>{newsArticle.title}</h6>;
  //       })}
  //     </div>
  //   );
  // }

  render() {
    // if (!this.state.githubData) return <p>Loading .... </p>;

    return (
      <div>
        <div className="container boxborder">
          <h6>Today's Highlights for your preference</h6>
          {this.renderHeader('General')}
          {this.renderItem()}
          {/* {this.fetchJSON()} */}
          <h6>Trending topics</h6>
          <div className="graph">{this.renderGraph()}</div>
        </div>
      </div>
    );
  }
}

export default News;
