import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>(); //angle brackets are generic type? typescript?
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
