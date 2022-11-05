import React from 'react'
import {connect} from 'react-redux'

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div className={`alert-container alert-container-${alert.alertType}`}>
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        <p class='alert-icon'>
          {alert.alertType === 'danger' ? (
            <i class='fas fa-exclamation-circle fa-2x'></i>
          ) : (
            <i class='fas fa-check fa-2x'></i>
          )}
        </p>
        <p className='alert-msg'>{alert.msg}</p>
      </div>
    </div>
  ));

const mapStateToProps = state =>({
    alerts: state.alert
})
export default connect(mapStateToProps)(Alert);
