import appReducer, {updateAuthorization} from "./appReducer";


it('authorized status should change', () => {
    let state = {
        authorized: false
    }
    let action = updateAuthorization(true)

    let newState = appReducer(state, action)

    expect(newState.authorized).toBe(true)
});
