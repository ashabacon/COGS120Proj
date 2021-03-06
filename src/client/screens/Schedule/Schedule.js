import React, { Component } from 'react';
//import { Route, Link} from 'react-router-dom';
import data from "../../data.json"; // <-------------------temp data!!!!!
import BackButton from "../../components/BackButton/BackButton.js";
import { render } from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactGA from 'react-ga';


export default class Schedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    console.log(data.form.chronotype);
    console.log(data.form.drug);

    if (data.form.chronotype == "Bear" || data.form.chronotype === "Wolf") {
      if (data.form.drug === "Caffeine") {
        this.setState({index: 0});
      } else if (data.form.drug === "Melatonin" || data.form.drug === "Marijuana") {
        this.setState({index: 1});
      } else if (data.form.drug === "None") {
        this.setState({index: 2});
      }
    }
    else if (data.form.chronotype == "Lion" || data.form.chronotype === "Dolphin") {
      if (data.form.drug === "Caffeine") {
        this.setState({index: 3});
      } else if (data.form.drug === "Melatonin" || data.form.drug === "Marijuana") {
        this.setState({index: 4});
        console.log("TIHS is dolphin marihuana");
      } else if (data.form.drug === "None") {
        this.setState({index: 5});
      }
    }
  }

  routeBack = () => {
    this.props.history.goBack();
  }
    routeHome = () => {
    this.props.history.push('/home');
    ReactGA.event({
      category: 'button in original',
      action: 'click on create'
    });
    // alert("send")
  }

  showInfo(event) {
    event.preventDefault();
      ReactGA.event({
      category: 'tab in original',
      action: 'how many times people tab on each activity'
    });
    // alert("tab")
  }


  render() {
    const displayPosts = (
      <Tabs>
        <TabList>
          <Tab>Morning</Tab>
          <Tab>Night</Tab>
        </TabList>

        <TabPanel onClick={this.showInfo}>
          {
            data.day_schedules[this.state.index].map( (schedule) =>
              <div key={schedule.Time}>
                <h1>{schedule.activity}</h1>
                <p className="time">{schedule.Time}</p>
                <p>{schedule.description}</p>
              </div>
            )
          }
        </TabPanel>

        <TabPanel>
          {
            data.night_schedules[this.state.index].map( (schedule) =>
              <div key={schedule.Time}>
                <h1>{schedule.activity}</h1>
                <p className="time">{schedule.Time}</p>
                <p>{schedule.description}</p>
              </div>
            )
          }
        </TabPanel>
           <button onClick={this.routeHome}>Ready for a new trip?</button>
      </Tabs>
    );
    return (
      <div className="schedule">
        <BackButton handleClick={this.routeBack}/>

        <h4 align="lefts"> Here are some tips based on your chronotype {data.form.chronotype} and drug usage</h4>
        {displayPosts}

      </div>


    );
  }
}
