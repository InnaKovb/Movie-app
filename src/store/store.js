import { configureStore } from '@reduxjs/toolkit'
import combineRedusers from './entities'


const globalReducer = combineRedusers;
// конфигур стор конфигурирует наше хранилище, например он контролирует сам стор, 
// он дает возможность подключать туда редакс екстеншн, и показывать какие екшны 
// будут происходить в момент изменения  самого стора.

export const store = configureStore({
  reducer: globalReducer,
})

