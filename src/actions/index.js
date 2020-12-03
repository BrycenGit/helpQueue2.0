import * as a from '../actions/ActionTypes'

export const deleteTicket = (id) => ({
  type: a.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: a.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = ticket;
  return {
    type: a.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id,
    formattedWaitTime,
    timeOpen: timeOpen
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: a.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});