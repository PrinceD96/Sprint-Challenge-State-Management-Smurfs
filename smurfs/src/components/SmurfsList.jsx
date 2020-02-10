import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/action";

import Smurf from "./Smurf";

const SmurfsList = props => {
  useEffect(() => {
    props.getData()
  }, [])

  return (
    <>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
          props.smurfs.map((smurf, index) =>

            <Smurf key={index} {...smurf} />

          )
        )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  }
}


export default connect(mapStateToProps, { getData })(SmurfsList);