import store from 'store';

export default interface RootState extends ReturnType<typeof store.getState> {}
