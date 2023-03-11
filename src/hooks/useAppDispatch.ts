import { useDispatch } from 'react-redux';

import AppDispatch from 'types/AppDispatch';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
