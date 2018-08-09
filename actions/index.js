import {
  RECEIVE_ENTRY,
  ADD_ENTRY
}from './Types'

export function receiveEntries (entries){
  return {
    type: RECEIVE_ENTRY,
    entries
  }
}

export function addEntry(entry){
  return {
    type: ADD_ENTRY,
    entry,
  }
}
