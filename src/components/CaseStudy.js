import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CaseStudy extends Component {

  componentWillMount = () => {
    this.props.changeFullPage(false);
  }

  componentWillUnmount = () => {
    this.props.changeFullPage(true);
  }

  render() {
    return (
      <section className={`case-study--${this.props.project.title}`}>
      </section>
    )
  }
}

CaseStudy.propTypes = {
  project: PropTypes.object.isRequired,
  changeFullPage: PropTypes.func.isRequired
}

export default CaseStudy;