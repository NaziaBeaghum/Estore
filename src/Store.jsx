import { configureStore } from '@reduxjs/toolkit'
import Productreducer from './Features/ProductSlice'

export const store=configureStore({reducer:{productitems:Productreducer}})