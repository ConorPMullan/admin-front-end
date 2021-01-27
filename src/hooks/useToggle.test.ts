import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from './useToggle';

describe('useToggle Hook Tests', () => {
  it('should toggle the state', () => {
    const { result } = renderHook(() => useToggle());
    let [state, toggle] = result.current;

    expect(state).toEqual(false);

    act(() => toggle());

    [state, toggle] = result.current;

    expect(state).toEqual(true);
  });
});
