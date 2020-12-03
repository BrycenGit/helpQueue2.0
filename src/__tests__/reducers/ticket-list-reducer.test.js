import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as a from '../../actions/ActionTypes';


describe('ticketListReducer', () => {
  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: {names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }

  let action;
  const ticketData = {
    names: "Ryan & Aimen",
    location: '4b',
    issue: 'Redux action is not working correctly',
    id: 1
  };

  test('should return efault state if there is no action type [assed into the reducer', ()=> {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test("should successfu;;y add new ticket data to masterTicketList", ()=> {
    const { names, location, issue, id } = ticketData;
    
    action = {
      type: a.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      id: id
    }
    
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: a.DELETE_TICKET,
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    });
  });

});