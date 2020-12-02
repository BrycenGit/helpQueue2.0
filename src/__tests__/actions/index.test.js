import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: 'DELETE_TICKET',
      id: 1
    });
  });

  it('toggleform should create TOGGLE_FORM action', ()=> {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({
      names: 'jo and jasmin',
      location: '3E',
      issue: 'redux not working!',
      id: 1
    })).toEqual({
      type: 'ADD_TICKET',
      names: 'jo and jasmin',
      location: '3E',
      issue: 'redux not working!',
      id: 1
    });
  });
});