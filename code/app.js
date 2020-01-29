// app.js
import getLocalTime from './utils/getLocalTime.js'

const App = () => {
 return (
   <div>
     <header>The time is {getLocalTime()}</header>
     ...
   </div>
 );
}