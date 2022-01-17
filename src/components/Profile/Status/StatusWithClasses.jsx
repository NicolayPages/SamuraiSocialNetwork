import React from 'react';
import s from './Status.module.scss'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { updateStatus } from './../../../redux/profile-reducer';
import { getUserStatus } from '../../../redux/profile-selectors';

class Status extends React.Component {
   state = {
      editMode: false,
      status: this.props.status,
   }
   activateEditMode = () => {
      this.setState({
         editMode: true,
      })
   };
   deactivateEditMode = () => {
      this.setState({
         editMode: false,
      })
      this.props.updateStatus(this.state.status);
   };
   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value,
      })


   }
   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         });
      }
   }
   render() {
      return (
         <div>
            {!this.state.editMode &&
               <div className={s.status}>
                  <p onDoubleClick={this.activateEditMode}>{this.props.status || '------------'}</p>
               </div>
            }
            {this.state.editMode &&
               <div className={s.input}>
                  <input
                     autoFocus={true}
                     onBlur={this.deactivateEditMode}
                     type="text"
                     value={this.state.status}
                     onChange={this.onStatusChange}
                  />
               </div>
            }


         </div>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      status: getUserStatus(state),
   }
};


export default compose(
   connect(mapStateToProps, { updateStatus }),
)(Status)