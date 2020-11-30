import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {
  test('should return efault state if there is no action type [assed into the reducer', ()=> {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
});