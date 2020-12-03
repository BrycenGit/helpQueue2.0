import * as a from '../actions'

export const deleteTicket = id => ({
  type: a.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: a.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: a.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}