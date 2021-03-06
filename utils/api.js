import {AsyncStorage} from 'react-native'
import {CALENDAR_STORAGE_KEY,formatCalendarResults} from './_calendar'

export function fetchCalendarResults(){
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}

function submitEntry ({entry,key}){
  return AsyncStorage.mergeItem (CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]:entry,
  }))
}

export function removeEntry (key){
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
        .then((result)=>{
          const data = JSON.stringify(result)
          data[key] = undefined
          delete data[key]
          AsyncStorage.setItem(CALENDAR_STORAGE_KEY,data)
        })
}
