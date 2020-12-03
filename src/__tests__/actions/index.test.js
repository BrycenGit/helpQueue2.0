import * as actions from '../../actions/index';
import * as a from '../../actions/ActionTypes';

describe('help queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: a.DELETE_TICKET,
      id: 1
    });
  });

  it('toggleform should create TOGGLE_FORM action', ()=> {
    expect(actions.toggleForm()).toEqual({
      type: a.TOGGLE_FORM
    });
  });

  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({
      names: 'jo and jasmin',
      location: '3E',
      issue: 'redux not working!',
      id: 1
    })).toEqual({
      type: a.ADD_TICKET,
      names: 'jo and jasmin',
      location: '3E',
      issue: 'redux not working!',
      id: 1
    });
  });

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, "A few seconds")).toEqual({
      type: a.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "A few seconds"
    });
  });


  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({names: 'Jo and Jasmine', location: '3E', issue: 'Redux not working!', timeOpen: 0,
    formattedWaitTime: "A few seconds", id: 1})).toEqual({
      type: a.ADD_TICKET,
      names: 'Jo and Jasmine',
      location: '3E',
      issue: 'Redux not working!',
      timeOpen: 0,
      formattedWaitTime: "A few seconds",
      id: 1
    });
  });
});